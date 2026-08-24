export interface ContributionItem {
  sNo: number;
  name: string;
  rollNo: string;
  branch: string;
  year: string;
  dateOfPayment: string;
  amount: number;
  receiver: string;
  rawDate?: string;
}

export interface ReceiverSummary {
  name: string;
  roleDescription: string;
  total: number;
  today: number;
  count: number;
  section: string;
  icon: string;
}

export interface CollectionSummary {
  totalAmount: number;
  goalAmount: number;
  percentage: number;
  totalStudentsContributed: number;
  totalStudents: number;
  daysLeft: number;
  receivers: Record<string, ReceiverSummary>;
  items: ContributionItem[];
  recentContributions: ContributionItem[];
  lastUpdated: string;
}

export interface TeacherProfile {
  id: string;
  name: string;
  designation: string;
  subject: string;
  quote: string;
  appreciationNote: string;
  avatarColor: string;
  initials: string;
  yearsOfTeaching: number;
  specialty: string;
}

export interface GratitudeNote {
  id: string;
  studentName: string;
  rollNo?: string;
  teacherName: string;
  message: string;
  tag: string;
  likes: number;
  timestamp: string;
}

export interface TransparencyExpense {
  category: string;
  description: string;
  estimatedCost: number;
  status: 'Allocated' | 'Pending Purchase' | 'Quotation Received' | 'Reserved';
  percentage: number;
}
