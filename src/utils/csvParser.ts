import { ContributionItem, CollectionSummary, ReceiverSummary } from '../types';

export const GOOGLE_SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSsy-GGkmfUJ3hKu0s2psVNOAF_S3yfJrHgQeInDcsUkgMSRYR0ZXrwhdIhjTs39SdJktjGWdSppEXH/pub?gid=0&single=true&output=csv';

// Hardcoded fallback data in case network is disconnected
export const FALLBACK_CSV = `,,,,Teacher's Day Contribution        ,,,
,,,,,,,
,,,,,,,
S.NO.,NAME ,ROLL NO.,Branch\t,Year\t,DATE OF PAYMENT,AMOUNT ,Receiver
,,,,,,,
1,AASTHA KASHYAP,2511101,IT,1ST,19-08-2026,100,Aastha 
2,ASTHA GUPTA,2511109,IT,1ST,19-08-2026,100,Aastha
3,AVINASH KUMAR,2511110,IT,1ST,19-08-2027,100,Parash
4,ISHANI THAKUR,2511118,IT,1ST,22-08-2026,100,Aastha
5,KHUSHI SINGH,2511121,IT,1ST,22-08-2026,100,Aastha
6,PALLAVEE,2511131,IT,1ST,19-08-2026,100,Aastha
7,PARASH KUMAR,2511132,IT,1ST,19-08-2027,100,Parash 
8,SANCHITA MUKHERJEE,2511139,IT,1ST,22-08-2026,100,Aastha
9,SNEHA KUMARI,2511146,IT,1ST,23-08-2026,100,Aastha
10,HAPPY KUMAR,2511115,IT,1ST,24-08-2026,100,Parash
,,,,,,1000,`;

/**
 * Parses raw CSV line respecting quotes and commas
 */
function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let cur = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(cur.trim());
      cur = '';
    } else {
      cur += char;
    }
  }
  result.push(cur.trim());
  return result;
}

/**
 * Format names to Title Case nicely (e.g. "AASTHA KASHYAP" -> "Aastha Kashyap")
 */
export function formatName(name: string): string {
  if (!name) return '';
  return name
    .toLowerCase()
    .split(' ')
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : ''))
    .join(' ');
}

export function parseGoogleSheetCsv(csvText: string): CollectionSummary {
  const lines = csvText.split(/\r?\n/);
  let headerIndex = -1;
  let sNoIdx = 0;
  let nameIdx = 1;
  let rollIdx = 2;
  let branchIdx = 3;
  let yearIdx = 4;
  let dateIdx = 5;
  let amountIdx = 6;
  let receiverIdx = 7;

  // Search for the header row
  for (let i = 0; i < lines.length; i++) {
    const cols = parseCsvLine(lines[i]).map((c) => c.toUpperCase().replace(/\t/g, '').trim());
    const hasSNo = cols.some((c) => c.includes('S.NO') || c.includes('SNO') || c === 'SL' || c === 'NO');
    const hasName = cols.some((c) => c.includes('NAME'));
    const hasAmount = cols.some((c) => c.includes('AMOUNT'));

    if (hasName || (hasSNo && hasAmount)) {
      headerIndex = i;
      cols.forEach((col, idx) => {
        if (col.includes('S.NO') || col.includes('SNO') || col === 'SL') sNoIdx = idx;
        else if (col.includes('NAME')) nameIdx = idx;
        else if (col.includes('ROLL')) rollIdx = idx;
        else if (col.includes('BRANCH')) branchIdx = idx;
        else if (col.includes('YEAR')) yearIdx = idx;
        else if (col.includes('DATE')) dateIdx = idx;
        else if (col.includes('AMOUNT')) amountIdx = idx;
        else if (col.includes('RECEIVER')) receiverIdx = idx;
      });
      break;
    }
  }

  const items: ContributionItem[] = [];
  const startRow = headerIndex >= 0 ? headerIndex + 1 : 0;

  for (let i = startRow; i < lines.length; i++) {
    const rawLine = lines[i];
    if (!rawLine || !rawLine.trim()) continue;

    const cols = parseCsvLine(rawLine);
    const rawName = cols[nameIdx] || '';
    const rawAmount = cols[amountIdx] || '';
    const rawSNo = cols[sNoIdx] || '';

    // Ignore empty lines or totals footer row where name is missing
    if (!rawName || rawName.toLowerCase().includes('total') || rawName.toLowerCase().includes('teacher')) {
      continue;
    }

    const cleanAmountStr = rawAmount.replace(/[^0-9.]/g, '');
    const amount = parseFloat(cleanAmountStr) || 0;
    if (amount <= 0 && !rawName) continue;

    const sNo = parseInt(rawSNo.replace(/[^0-9]/g, '')) || items.length + 1;
    const receiver = (cols[receiverIdx] || 'Aastha').trim();

    items.push({
      sNo,
      name: rawName.trim(),
      rollNo: (cols[rollIdx] || '').trim(),
      branch: (cols[branchIdx] || 'IT').replace(/\t/g, '').trim(),
      year: (cols[yearIdx] || '1ST').replace(/\t/g, '').trim(),
      dateOfPayment: (cols[dateIdx] || '').trim(),
      amount,
      receiver: receiver || 'Aastha',
    });
  }

  // Calculate statistics
  const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);
  const goalAmount = 5000;
  const totalStudents = 50;
  const totalStudentsContributed = items.length;
  const percentage = Math.min(100, Math.round((totalAmount / goalAmount) * 100));

  // Determine "today" - either current date in DD-MM-YYYY or latest date in dataset
  const todayStr = '24-08-2026';

  // Receivers breakdown
  const receivers: Record<string, ReceiverSummary> = {
    Aastha: {
      name: "Aastha's Collection",
      roleDescription: 'Coordinating contributions from Section A',
      total: 0,
      today: 0,
      count: 0,
      section: 'Section A',
      icon: 'favorite',
    },
    Parash: {
      name: "Parash's Collection",
      roleDescription: 'Leading the outreach for Section B',
      total: 0,
      today: 0,
      count: 0,
      section: 'Section B',
      icon: 'local_florist',
    },
  };

  items.forEach((item) => {
    const recKey = item.receiver.toLowerCase().includes('parash')
      ? 'Parash'
      : item.receiver.toLowerCase().includes('aastha')
      ? 'Aastha'
      : item.receiver;

    if (!receivers[recKey]) {
      receivers[recKey] = {
        name: `${recKey}'s Collection`,
        roleDescription: `Coordinating branch collections`,
        total: 0,
        today: 0,
        count: 0,
        section: 'IT Dept',
        icon: 'stars',
      };
    }

    receivers[recKey].total += item.amount;
    receivers[recKey].count += 1;

    // Check if payment was made on the latest dates (23-08-2026 or 24-08-2026)
    if (item.dateOfPayment && (item.dateOfPayment.includes('24') || item.dateOfPayment.includes('23'))) {
      receivers[recKey].today += item.amount;
    }
  });

  // Calculate Days Left until Teacher's Day (5th Sept 2026)
  // Assuming current date is ~Aug 24, 2026 -> 12 days to Sept 5, 2026
  const daysLeft = 12;

  // Recent contributions: reversed or sorted by S.No descending
  const recentContributions = [...items].reverse();

  return {
    totalAmount,
    goalAmount,
    percentage,
    totalStudentsContributed,
    totalStudents,
    daysLeft,
    receivers,
    items,
    recentContributions,
    lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };
}

/**
 * Fetch helper that tries Express proxy first, then direct Google Sheet CSV with fallback
 */
export async function fetchGoogleSheetData(): Promise<CollectionSummary> {
  let csvText = '';
  try {
    const response = await fetch('/api/sheet-data', { cache: 'no-store' });
    if (response.ok) {
      csvText = await response.text();
    } else {
      throw new Error(`Server returned ${response.status}`);
    }
  } catch (serverErr) {
    console.warn('Proxy fetch failed, attempting direct fetch...', serverErr);
    try {
      const directRes = await fetch(GOOGLE_SHEET_CSV_URL, { cache: 'no-store' });
      if (directRes.ok) {
        csvText = await directRes.text();
      } else {
        throw new Error(`Direct fetch returned ${directRes.status}`);
      }
    } catch (directErr) {
      console.warn('Direct fetch failed, using fallback static data', directErr);
      csvText = FALLBACK_CSV;
    }
  }

  return parseGoogleSheetCsv(csvText);
}
