<<<<<<< HEAD
import { TransparencyExpense } from '../types';
=======
import { TeacherProfile, GratitudeNote, TransparencyExpense } from '../types';

export const TEACHERS_LIST: TeacherProfile[] = [
  {
    id: 't1',
    name: 'Dr. Ramesh Sharma',
    designation: 'Head of Department & Professor',
    subject: 'Data Structures & Algorithms',
    quote: '"Code is poetry written with logic; never give up when a program crashes."',
    appreciationNote: 'For guiding our foundational semester with boundless wisdom and endless patience.',
    avatarColor: 'bg-[#FFB1C1]/50 text-[#782D42]',
    initials: 'RS',
    yearsOfTeaching: 18,
    specialty: 'Advanced Algorithms & Distributed Systems',
  },
  {
    id: 't2',
    name: 'Prof. Ananya Sen',
    designation: 'Associate Professor',
    subject: 'Computer Organization & Architecture',
    quote: '"Understanding hardware makes you respect every single byte of memory."',
    appreciationNote: 'For turning complicated computer architectures into fascinating daily lessons.',
    avatarColor: 'bg-[#C2D9BB]/60 text-[#334D2F]',
    initials: 'AS',
    yearsOfTeaching: 12,
    specialty: 'System Design & Microprocessors',
  },
  {
    id: 't3',
    name: 'Prof. Vikram Verma',
    designation: 'Assistant Professor & 1st Year Incharge',
    subject: 'Programming Fundamentals in C/C++',
    quote: '"Mistakes in syntax are easy to fix; cherish debugging as your greatest teacher."',
    appreciationNote: 'Always available to clear doubts after hours and encouraging freshers to code fearlessly.',
    avatarColor: 'bg-[#FFD9DF]/60 text-[#954459]',
    initials: 'VV',
    yearsOfTeaching: 8,
    specialty: 'Object Oriented Paradigms & Mentorship',
  },
  {
    id: 't4',
    name: 'Dr. Sunita Deshmukh',
    designation: 'Professor',
    subject: 'Discrete Mathematics & Logic',
    quote: '"Mathematics is the soul of computation; logic illuminates the path."',
    appreciationNote: 'For breaking down daunting mathematical proofs into elegant, intuitive concepts.',
    avatarColor: 'bg-[#CAC6BE]/50 text-[#31302A]',
    initials: 'SD',
    yearsOfTeaching: 15,
    specialty: 'Graph Theory & Cryptography',
  },
  {
    id: 't5',
    name: 'Prof. Rajesh Nair',
    designation: 'Assistant Professor & Lab Coordinator',
    subject: 'Web Technologies & ME Workshop',
    quote: '"Build tools that empower people and make the world slightly better every day."',
    appreciationNote: 'For mentoring our first hackathon ideas and inspiring real-world software creation.',
    avatarColor: 'bg-[#C9E8BF]/60 text-[#4F6A49]',
    initials: 'RN',
    yearsOfTeaching: 9,
    specialty: 'Cloud Computing & Web Architecture',
  },
];

export const INITIAL_GRATITUDE_NOTES: GratitudeNote[] = [
  {
    id: 'g1',
    studentName: 'Kaya',
    rollNo: '2511101',
    teacherName: 'All ME Department Teachers',
    message: 'Thank you for making our transition to college so welcoming and inspiring!',
    tag: 'Gratitude',
    likes: 24,
    timestamp: 'Yesterday',
  },
  {
    id: 'g2',
    studentName: 'Ankit',
    rollNo: '2511132',
    teacherName: 'Prof. Vikram Verma',
    message: 'Your C programming lectures made me fall in love with coding. Thank you sir!',
    tag: 'Inspiration',
    likes: 19,
    timestamp: '2 days ago',
  },
  {
    id: 'g3',
    studentName: 'Ishani Thakur',
    rollNo: '2511118',
    teacherName: 'Dr. Ramesh Sharma',
    message: 'Thank you for always encouraging us to ask questions no matter how simple they seem.',
    tag: 'Guidance',
    likes: 31,
    timestamp: '3 days ago',
  },
];
>>>>>>> 3868df1 (Update website and add flower favicon)

export const TRANSPARENCY_EXPENSES: TransparencyExpense[] = [
  {
    category: 'Personalized Mementos & Trophies',
<<<<<<< HEAD
    description: 'Custom engraved wooden plaques & desk nameplates for department professors & lab faculty',
    estimatedCost: 1900,
=======
    description: 'Custom engraved wooden plaques & desk nameplates for all 8 department professors & lab faculty',
    estimatedCost: 9500,
>>>>>>> 3868df1 (Update website and add flower favicon)
    status: 'Quotation Received',
    percentage: 38,
  },
  {
    category: 'Fresh Flower Bouquets & Greeting Cards',
    description: 'Handcrafted floral bouquets and custom printed gratitude stationery signed by all batch students',
<<<<<<< HEAD
    estimatedCost: 950,
=======
    estimatedCost: 4800,
>>>>>>> 3868df1 (Update website and add flower favicon)
    status: 'Allocated',
    percentage: 19,
  },
  {
    category: 'Celebration Cake & High-Tea Refreshments',
<<<<<<< HEAD
    description: 'Custom Teacher’s Day butterscotch cake & tea/snacks for faculty lounge celebration',
    estimatedCost: 1050,
=======
    description: '2.5kg custom Teacher’s Day butterscotch cake & tea/snacks for faculty lounge celebration',
    estimatedCost: 5200,
>>>>>>> 3868df1 (Update website and add flower favicon)
    status: 'Allocated',
    percentage: 21,
  },
  {
    category: 'Department Hall Stage & Decor',
    description: 'Bespoke welcome banner, backdrop drape lighting, easel stands, and floral stage arrangements',
<<<<<<< HEAD
    estimatedCost: 700,
=======
    estimatedCost: 3500,
>>>>>>> 3868df1 (Update website and add flower favicon)
    status: 'Pending Purchase',
    percentage: 14,
  },
  {
    category: 'Surplus & Contingency Reserve',
    description: 'Emergency buffer for audio/mic setup, packaging gift wraps, and student volunteer arrangements',
<<<<<<< HEAD
    estimatedCost: 400,
=======
    estimatedCost: 2000,
>>>>>>> 3868df1 (Update website and add flower favicon)
    status: 'Reserved',
    percentage: 8,
  },
];
