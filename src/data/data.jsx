// ============================================================
// src/data/data.js
// Single Source of Truth — all conference content lives here.
// Update any value here and it automatically updates site-wide.
// NOTE: Kept as .js (pure data/config, no JSX rendered here)
// ============================================================

import { committeePhotos } from '../constants/assets';

// ──────────────────────────────────────────────
// Conference Info
// ──────────────────────────────────────────────
export const conferenceInfo = {
  shortName: "IC4'27",
  edition: '3rd',
  fullName: '3rd International Conference on Computer, Communication and Control',
  abbreviation: "IC4'27",
  dates: 'March  18-20,2027',
  year: '2027',
  address: 'A.B. Road, Pigdamber, Rau Indore - (453331)',
  phones: ['+91-731-3111500', '+91-731-3111501'],
  email: 'ic4@medicaps.ac.in',
};

// ──────────────────────────────────────────────
// Hero / Navbar Content
// ──────────────────────────────────────────────
export const heroContent = {
  heading: '3rd International Conference on Computer, Communication and Control',
  shortName: "IC4'27",
  dates: 'March  18-20,2027',
};

// ──────────────────────────────────────────────
// Navigation Links  (consumed by Nav.jsx)
// ──────────────────────────────────────────────
export const navLinks = [
  { name: 'ABOUT CONFERENCE', link: '/' },
  { name: 'ABOUT UNIVERSITY', link: '/aboutMedicaps' },
  { name: 'COMMITTEES', link: '/programeComitte' },
  { name: 'PAPER GUIDELINES', link: '/acceptedPapers' },
  { name: 'VENUE', link: '/venue' },
  { name: 'CONTACT US', link: '/contactUs' },
  { name: 'TOPICS', link: '/topics' },
];

// ──────────────────────────────────────────────
// Important Dates
// ──────────────────────────────────────────────
export const importantDates = [
  { id: 'submission', label: 'Full Paper Submission', date: 'Sept 15, 2026', icon: 'fa-hourglass-end' },
  { id: 'notification', label: 'Acceptance Notification', date: 'Oct 15, 2026', icon: 'fa-bell' },
  { id: 'camera', label: 'Camera Ready Paper Submission', date: 'Nov 15, 2026', icon: 'fa-cloud-arrow-up' },
  { id: 'registration', label: 'Registration Deadline', date: 'Nov 15, 2026', icon: 'fa-id-card' },
  { id: 'conference', label: 'Conference Date', date: 'March  18-20,2027', icon: 'fa-chalkboard-user' },
];

// ──────────────────────────────────────────────
// Contact Info
// ──────────────────────────────────────────────
export const contactInfo = {
  email: 'ic4@medicaps.ac.in',
  contacts: [
    { purpose: 'For Paper Submission', name: 'Dr. Kailash Chandra Bandhu', phone: '+91 9479628030' },
    { purpose: 'For Travel and Stay', name: 'Dr. Sonu Kumar', phone: '+91 9827282120' },
    { purpose: 'For Conference Event Related', name: 'Prof. Sanket Gupta', phone: '+91 7000110427' },
  ],
};

// ──────────────────────────────────────────────
// Social Links  (Footer + data-driven)
// ──────────────────────────────────────────────
export const socialLinks = {
  facebook: 'https://www.facebook.com/share/18WMTa4GR9/?mibextid=qi2Omg',
  twitter: 'https://x.com/Medicaps_Indore?t=8hTuBIHRt4zLhSSrqYhvXw&s=08',
  instagram: 'https://www.instagram.com/medicaps_university/',
  linkedin: 'https://www.linkedin.com/school/medicaps-university-indore/',
};

// ──────────────────────────────────────────────
// Footer Content
// ──────────────────────────────────────────────
export const footerContent = {
  copyright: "IC4'27 | © 2026 IC4'27",
  socialLinks,
};

// ──────────────────────────────────────────────
// Venue Info
// ──────────────────────────────────────────────
export const venueInfo = {
  name: 'Main Auditorium, Medicaps University',
  address: 'A.B. Road, Pigdamber, Rau Indore - (453331)',
  phones: ['+91-731-3111500', '+91-731-3111501'],
  email: 'ic4@medicaps.ac.in',
  mapSrc: 'https://maps.google.com/maps?width=2048&height=600&hl=en&q=medi-caps+university&t=&z=12&ie=UTF8&iwloc=B&output=embed',
};

// ──────────────────────────────────────────────
// Committee Members  (photos from DOCX)
// ──────────────────────────────────────────────
export const committeeData = {
  chiefPatron: [
    { name: 'Shri R.C. Mittal', designation: 'Chancellor', image: committeePhotos.rcMittal },
    { name: 'Shri Gopal Agrawal', designation: 'Pro Chancellor', image: committeePhotos.gopalAgrawal },
    { name: 'Shri Palash Garg', designation: 'OSD to Chancellor', image: committeePhotos.palashGarg },
    { name: 'Ms. Saloni Garg', designation: 'Director Promotion & Branding', image: committeePhotos.saloniGarg },
  ],
  patron: [
    { name: 'Prof. D.K. Patnaik', designation: 'Vice Chancellor', image: committeePhotos.dkPatnaik },
    { name: 'Prof. Birajashis Pattnaik', designation: 'Pro Vice Chancellor', image: committeePhotos.birajashisPattnaik },
  ],
  generalChair: [
    { name: 'Dr. Ratnesh Litoriya', designation: 'Associate Dean of Engineering (Computing)', image: committeePhotos.ratneshLitoriya },
  ],
  generalCoChairs: [
    { name: 'Dr. Kailash Chandra Bandhu', designation: 'Head of Department, CSE', image: committeePhotos.kailashBandhu },
    { name: 'Dr. Prashant Panse', designation: 'Associate Dean, Digitalization', image: committeePhotos.prashantPanse },
    { name: 'Dr. Anuradha Kar', designation: 'Associate Professor, Aivancity', image: committeePhotos.anuradhaKar },
  ],
  publicationChairs: [
    { name: 'Dr. Sonu Kumar', designation: 'Publication Chair', image: committeePhotos.sonuKumar },
  ],
  financeChair: [
    { name: 'Prof. Rudresh Shah', designation: 'Finance Chair', image: committeePhotos.rudreshShah },
  ],
  publicityChair: [
    { name: 'Dr. Latika Jindal', designation: 'Publicity Chair', image: committeePhotos.latikaJindal },
  ],
  technicalProgramChair: [
    { name: 'Prof. Sanket Gupta', designation: 'Technical Program Committee Chair', image: committeePhotos.sanketGupta },
  ],
  ieeeMPSection: [
    { name: 'Prof. G S Tomar', designation: 'Chairperson, IEEE MP Section', image: committeePhotos.gsTomar_mp },
    { name: 'Prof. Manish Dixit', designation: 'Chair Elect, IEEE MP Section', image: committeePhotos.manishDixit },
    { name: 'Prof. Jinendra Agrawal', designation: 'Vice Chairperson, IEEE MP Section', image: committeePhotos.jinendraAgrawal },
    { name: 'Prof. Manmath Badapanda', designation: 'Vice Chairperson, IEEE MP Section', image: committeePhotos.manmathBadapanda },
    { name: 'Prof. M P S Chawla', designation: 'Secretary, IEEE MP Section', image: committeePhotos.mpSChawla },
    { name: 'Prof. Durgesh Kumar Mishra', designation: 'Chair, Computer Society, IEEE MP Section', image: committeePhotos.durgeshMishra },
  ],
  ieeeFranceSection: [
    { name: 'Dr. Florence Sedes', designation: 'President, IEEE France Section', image: committeePhotos.florenceSedes },
    { name: 'Dr. Marina Deng', designation: 'Vice President, Conferences, IEEE France Section', image: committeePhotos.marinaDeng },
    { name: 'Gérard-André Capolino', designation: 'President, Power Electronics, IEEE France Section', image: committeePhotos.gerardCapolino },
    { name: 'Roua Touihri', designation: 'President, Computer, IEEE France Section', image: committeePhotos.rouaTouihri },
    { name: 'Pascal Lorenz', designation: 'President, Communications, IEEE France Section', image: committeePhotos.pascalLorenz },
  ],
};

// ──────────────────────────────────────────────
// Advisory / Working Committee  (text only)
// ──────────────────────────────────────────────
export const programChair = [
  'Prof. P. Siluvainathan', 'Prof. V. Ganeshan', 'Prof. Shilpa Tripathi',
  'Prof. Ajay Kulkarni', 'Prof. D. Srinivasa Rao', 'Prof. Sarita Kansal',
  'Prof. Vidhya Samad Barfa',
];

export const workingCommittee = [
  'Dr. Manoj Kumar Rawat', 'Dr. Safdar Sardar Khan', 'Dr. Ritu Maheshwari',
  'Dr. Rohit Gupta', 'Dr. Sunil Kushwaha', 'Dr. Hareram Jha',
  'Prof. Ashish Kumar Kumawat', 'Prof. Dharmendra Mangal', 'Prof. Ajeet Singh Rajput',
  'Prof. Hemant K. Pathak', 'Prof. Kriti Joshi', 'Prof. Swati Vaidya',
  'Prof. Sourabh Dave', 'Prof. Manish Korde', 'Prof. Shubhrata Kanungo',
  'Prof. Sachin Yele', 'Prof. Shivani Patnaha', 'Prof. Vishal Sharma',
  'Prof. Priyanka Dhasal', 'Dr. Aditya Mandloi', 'Dr. Jyoti Kukade',
  'Prof. Ankita Chourasia', 'Prof. Bhavana Kumari', 'Prof. Dharmendra Gupta',
  'Prof. Mandakini Ingle', 'Prof. Nishant Shrivastava', 'Prof. Jyotsana Goyal',
  'Prof. Mohammad Mazhar', 'Prof. Yatish Jain', 'Dr. Devendra Singh Bais',
];

export const internationalAdvisoryCommittee1 = [
  'Prof. G S Tomar, Chairperson', 'Prof. Manish Dixit, Chair Elect',
  'Prof. Manmath Badapanda, Vice Chairperson', 'Prof. M P S Chawla, Secretary',
  'Prof. Vijayalaxmi, Secretary & WIE Chair', 'Prof. Durgesh Kumar Mishra, Chair Computer Society ',
  'Prof. Amit Raje, Chair PE Chapter', 'Prof. Jinendra Agrawal, TPAC Chair',
  'Prof. Amit Ojha, MANIT Bhopal', 'Prof. Somesh Kumar, Chair SAC',
  'Prof. Ashish Singhal, Vice-Chair SAC', 'Prof. Shaibal Mukherjee, IIT Indore',
  'Prof. Ayan Mondal, IIT Indore', 'Prof. Kamal Kumar Sethi, Chair Web Management',
  'Prof. Gaurav Bharti, Chair - Social Media', 'Prof. Neha Gupta, Vice Chair SIGHT',
  'Prof. Pinku Ranjan, ABV-IIITM Gwalior', 'Prof. Manish Sawle, Vice Chair, Ethics',
  'Prof. Ts. Dr Liu Li Li, TARUMT Malaysia', 'Prof. Ts. Dr Yip Mum Wai, TARUMT Malaysia',
  'Prof. Ir. Lim Joo Eng, TARUMT Malaysia', 'Prof. Anurag Srivastava, WS University USA',
  'Prof. Brij N Singh, North Dakota, USA', 'Prof. Kwang Lee, BB University USA',
  'Prof. T K Sarkar, Syracuse University NY', 'Prof. K. P. Wang, Sydney University Australia',
  'Prof. Rajesh Verma, VC RGPV', 'Prof. S.K. Singh, VC RTU Kota',
  'Prof. Bharat Charan Singh, Chairman MPPU RC', 'Prof. Istovan Erlich, DE University Germany',
  'Prof. L. Lai, City University London', 'Prof. K. N. Srivastava, ABB Sweden',
  'Prof. Ambrish Chandra, Montreal Canada', 'Prof. Jai Govind, AII Bangkok',
  'Prof. Fuishuan Wen, China', 'Prof. Maode Ma NTU, Singapore',
  'Prof. Satyendra Chauhan, NIT Jaipur', 'Prof. Prabah K. Panigrahi, IIIT Indore',
  'Prof. Jayor Singh, IIITDM Jabalpur', 'Prof. Mini S. Thomas, JMI New Delhi',
  'Prof. Sanjay Chauhan, GU Greater Noida', 'Prof. Akansay Dwivedi, IIT Roorkee',
  'Prof. Rhunush Kumar, IIT Indore', 'Prof. Govind Maheshwari, IET DAVV Indore',
  'Prof. N. P. Patidar, MANIT Bhopal', 'Prof. V. Kumar, MANIT Bhopal',
  'Prof. Shailendra Kumar Sharma, SGSITS Indore', 'Prof. H K Mahiyar, SGSITS Indore',
  'Prof. Sunil Luthra, Director, T&L Bureau, AICTE', 'Prof. Sukanta Basu, DT, Netherlands',
];

export const internationalAdvisoryCommittee2 = [
  'Prof. Ashwini Kumar Sharma, Graphic Era', 'Prof. Usha Chauhan, GU Greater Noida',
  'Prof. Ajay Shankar Singh, GU Greater Noida', 'Prof. S. C. Srivastava, IIT Kanpur',
  'Prof. J. Ram Kumar, IIT Kanpur', 'Prof. Avadhesh Kumar, PVC, GU',
  'Prof. Akhilesh Sharma, Manipal University', 'Prof. Premanand, SU, Noida',
  'Prof. Ravi Panwar, IIT BHU', 'Prof. Ranvir S. Panwar, NIMS Chandigarh',
  'Prof. Satish Sharma, MNIT Jaipur', 'Prof. Ripal Ranpura, Atmiya University',
  'Prof. Shailesh Tiwari, ABESEC Ghaziabad', 'Prof. N. P. Padhy, IIT Rorkee',
  'Prof. Vijay Kumar, University of Missouri', 'Prof. Manish Jambwal, Director, NATRAX Indore',
  'Prof. Shailesh Mishra, AVP, YASH technologies', 'Prof. Ashok Bhansali, Dean GLA University',
  'Prof. Subhakalshmi Kher, IGWA State University', 'Prof. Rajeev Tripathi, VC RGPV',
  'Prof. S.L. Maskara, Retd. Prof. IIT Kharagpur', 'Prof. O.P Vyas, IIIT Allahabad',
  'Prof. Subrat Sarangi, IIT Kharagpur', 'Prof. B.K. Saini, Vice Chairman SOA University',
  'Prof. Akhilesh Pandey, VC Vikram University', 'Prof. C.D. Patil, Professor, UEC Ujjain',
  'Prof. Aditya Trivedi, IIITM Gwalior', 'Prof. P. Tapaswi, IIITM Gwalior',
  'Prof. Anupam Shukla, IIITM Gwalior', 'Prof. R.C. Joshi, IIT Roorkee',
  'Prof. Lovi Raj Gupta, Pro Vice Chancellor, LPU', 'Prof. Nitin Upadhye, University of Modern Sciences',
  'Prof. Andrey Kuzmin, Man. Editor, BH Publishers', 'Prof. R K Pandit, Vice Chancellor, MITS Gwalior',
  'Prof. Vivek Shrivastava, NIT Uttarakhand', 'Prof. Kalyan Bandopadhyaya, IIT Kharagpur',
  'Prof. Santi Prasad Maity, Professor, IIEST', 'Prof. Akhesa Tiwary, MIT Gwalior',
  'Prof. Sanjeev Tarlekar, IET DAVV', 'Prof. Abhay Dubey, Professor, DAVV',
  'Prof. N.S. Choudhary, IIT Indore', 'Prof. P. Abdullah, CUSAT Kerala',
  'Prof. Abdul Wahid, MACU Hyderabad', 'Prof. D. Kannan, CUSAT Kerala',
  'Prof. Vargheese Paul, CUSAT Kerala', 'Prof. Bhammejit Singh, Professor NIT Kurukshetra',
  'Prof. Sukumar Mishra, IIT Delhi', 'Prof. Sanjeevkumar Padmanaban, SEU Norway',
  'Prof. Biplab Sikdar, NUS Singapore', 'Prof. Mohammad Khalid, Sunway University',
  'Prof. Dr. Ilhami Colak, Gazi University Ankara', 'Prof. Firoz Alam, RMIT University Australia',
  'Prof. Anant Dubey, Curtin University Australia', 'Prof. Ginbar Ensermu Geleta, Wollega University',
  'Prof. M. L. Kolhe, University of Agder, Norway', 'Prof. Anand Parey, IIT Indore',
  'Prof. Deepa Mitra, Qatar University', 'Prof. Asheesh Singh, MNNIT Allahabad',
  'Prof. S. K. Singh, IIIT Allahabad', 'Prof. Anil Gupta, Secretary KSI Indore',
  'Prof. Amrit Kumar Roy, NIT Hamirpur', 'Prof. Mayur Shirish Jain, IIT Indore',
  'Prof. R N Singh, DAVV Indore', 'Prof. Amit Pal, DTU Delhi',
  'Prof. Sagar Raji, DTU Delhi', 'Prof. Jatinder Kumar, NIT Kurukshetra',
  'Prof. Shweta Rathi, NIT Kurukshetra', 'Prof. RK Saksat, Professor IIT BHU',
  'Prof. (Dr.) Arun Prasad, Professor, IIT (BHU)', 'Prof. (Dr.) Ankit Gupta, Associate Professor, IIT (BHU)',
  'Prof. (Dr.) K.K. Panahi, Professor, IIT (BHU)', 'Prof. (Dr.) Sandeep Choudhary, Professor, IIT Indore',
  'Prof. (Dr.) Neelima Satyam, Professor, IIT Indore', 'Prof. (Dr.) Ravi Sharma, Professor, NIT Hamirpur',
  'Prof. (Dr.) R.B. Data, Professor, NIT Hamirpur',
  'Dr. Anurag Surana, Sr. GM Manager, PATH Mitra Indore',
  'Er. Rahul Goel, Zonal head & Vice president, Ultratech Cement Ltd',
];

// ──────────────────────────────────────────────
// Previous Conferences  (exactly 4, no IEEE prefix)
// ──────────────────────────────────────────────
export const previousConferences = [
  { id: 'iceeta25', title: "International Conference IC-EETA'25", year: '2025', link: 'https://ieeexplore.ieee.org/xpl/conhome/11547912/proceeding', image: 'pastConference3' },
  { id: 'ic4_2024', title: '2nd Conference IC4', year: '2024', link: 'https://ieeexplore.ieee.org/xpl/conhome/10486055/proceeding', image: 'pastConference4' },
  { id: 'cdan2016', title: 'CDAN Symposium', year: '2016', link: 'https://ieeexplore.ieee.org/xpl/conhome/7562831/proceeding', image: 'pastConference2' },
  { id: 'ic4_2015', title: '1st Conference IC4', year: '2015', link: 'https://ieeexplore.ieee.org/xpl/conhome/7368254/proceeding', image: 'pastConference1' },
];

// ──────────────────────────────────────────────
// Registration Fees
// ──────────────────────────────────────────────
export const registrationFees = [
  { category: 'Non-IEEE Professional', indian: 'INR 9000/-', international: 'USD 250' },
  { category: 'IEEE Professional Members', indian: 'INR 7500/-', international: 'USD 250' },
  { category: 'Non-IEEE PhD Students', indian: 'INR 7000/-', international: 'USD 250' },
  { category: 'IEEE PhD Students', indian: 'INR 6000/-', international: 'USD 250' },
  { category: 'Non-IEEE PG/UG Students', indian: 'INR 6000/-', international: 'USD 250' },
  { category: 'IEEE PG/UG Students', indian: 'INR 5000/-', international: 'USD 250' },
  { category: 'Industry Participants', indian: 'INR 10000/-', international: 'USD 250' },
];

// ──────────────────────────────────────────────
// Speakers  (to be populated when confirmed)
// ──────────────────────────────────────────────
export const speakers = [];

// ──────────────────────────────────────────────
// Gallery Images  (to be populated)
// ──────────────────────────────────────────────
export const galleryImages = [];

// ──────────────────────────────────────────────
// Paper Submission Content
// ──────────────────────────────────────────────
export const paperSubmissionInfo = {
  portalUrl: 'https://cmt3.research.microsoft.com/',
  isOpen: true,
  contactEmail: 'ic4@medicaps.ac.in',
  deadlines: [
    { label: 'Full Paper Submission', date: 'Sept 15, 2026', icon: 'fa-hourglass-end' },
    { label: 'Acceptance Notification', date: 'Oct 15, 2026', icon: 'fa-bell' },
    { label: 'Camera Ready Paper', date: 'Nov 15, 2026', icon: 'fa-cloud-arrow-up' },
    { label: 'Registration Deadline', date: 'Nov 15, 2026', icon: 'fa-id-card' }
  ]
};

export const submissionGuidelines = [
  {
    title: 'Electronic Format Only',
    description: 'Manuscripts will ONLY be accepted in electronic format (Microsoft Word format) through the CMT online submission system. Do not send hard copies of your paper.',
    icon: 'fa-file-word text-blue-500'
  },
  {
    title: 'IEEE Template Alignment',
    description: 'Submissions must strictly follow the standard IEEE conference template in double-column A4 format.',
    icon: 'fa-file-invoice text-indigo-500'
  },
  {
    title: 'Original & Unpublished Work',
    description: 'Authors should only submit originally written, unpublished work. Plagiarism is strictly prohibited and papers will be checked.',
    icon: 'fa-shield-halved text-emerald-500'
  },
  {
    title: 'Format & Page Constraints',
    description: 'Please limit your paper within 6 pages. The size of your Word file must be less than 10MB; files larger than 10MB will not be accepted.',
    icon: 'fa-file-circle-check text-cyan-500'
  },
  {
    title: 'IEEE Referencing Standard',
    description: 'All references and citations in the paper must follow the IEEE format of referencing.',
    icon: 'fa-list-ol text-violet-500'
  },
  {
    title: 'Over-length Page Charges',
    description: 'Standard submission is up to 6 pages. Authors may submit up to 8 pages with an over-length fee of INR 1500 per additional page.',
    icon: 'fa-coins text-amber-500'
  }
];

export const submissionSteps = [
  {
    step: '01',
    title: 'Format Manuscript',
    description: 'Prepare your paper strictly using the official IEEE A4 double-column Word template.'
  },
  {
    step: '02',
    title: 'Check Constraints',
    description: 'Keep your file within 6 pages and 10MB. Ensure references follow the IEEE standard.'
  },
  {
    step: '03',
    title: 'Submit via CMT',
    description: 'Register and upload your manuscript through the CMT online submission system.'
  },
  {
    step: '04',
    title: 'Review & Decision',
    description: 'Your paper will undergo peer review, and acceptance decision will be emailed by Oct 15, 2026.'
  }
];

export const conferenceTracks = [
  {
    id: 1,
    title: 'Computer Science and Engineering',
    icon: 'fa-laptop-code',
    topics: ['AI and ML', 'Data Science', 'Cloud Computing', 'Cybersecurity', 'Big Data', 'Database and Data Mining', 'Blockchain', 'Quantum Computing', 'Cryptography']
  },
  {
    id: 2,
    title: 'Electronics and Communication',
    icon: 'fa-microchip',
    topics: ['Communication Systems', 'Wireless Communication', 'Optical Communication', 'Signal Processing', 'Embedded Systems', 'VLSI Design and Microelectronics', 'IoT and Automation', 'Antennas', 'High Power Amplifiers', 'Microwave Devices']
  },
  {
    id: 3,
    title: 'Information Technology',
    icon: 'fa-network-wired',
    topics: ['IT Convergence Technology', 'Information Systems', 'Wireless Sensor Networks', 'Healthcare Informatics', 'Web-Based Learning']
  },
  {
    id: 4,
    title: 'Instrumentation',
    icon: 'fa-gauge-high',
    topics: ['Medical and Biological Measurement', 'Measurement Techniques', 'Sensor Networks', 'Nanotechnology', 'Speech, Audio and Video Signal Processing', 'Optical Control, Process Control and Distributed Control']
  },
  {
    id: 5,
    title: 'Electrical Engineering',
    icon: 'fa-bolt',
    topics: ['Smart Grid Technologies', 'Energy Management', 'Renewable Energy Integration', 'Electric Vehicle Applications', 'Innovations in Energy Storage', 'AI Optimized Power Systems']
  },
  {
    id: 6,
    title: 'Robotics and Automation',
    icon: 'fa-robot',
    topics: ['Industrial Robotics', 'Computational Intelligence in Robotics', 'Field Robotics', 'Human-Robot Interaction', 'Humanoid Robotics', 'Design and Control']
  }
];

export const submissionFAQs = [
  {
    question: 'Can I submit my paper in PDF format?',
    answer: 'For the initial submission, please upload your manuscript in Microsoft Word (.doc or .docx) format formatted according to the IEEE template.'
  },
  {
    question: 'What are the page limits and file size limit?',
    answer: 'Standard paper length is 6 pages, and maximum file size is 10MB. You can submit up to 8 pages by paying an over-length fee of INR 1500 per additional page.'
  },
  {
    question: 'How do I submit my paper?',
    answer: 'All submissions must go through the CMT online submission system. Hard copies or submissions via email are not accepted.'
  },
  {
    question: 'Can I submit work that has been previously published?',
    answer: 'No. Submissions must consist of original, unpublished work. Plagiarism check will be conducted for all submissions.'
  },
  {
    question: 'Who should I contact if I have queries?',
    answer: 'For any paper submission related queries, you can email us at ic4@medicaps.ac.in or contact the publication chairs listed on the contact page.'
  }
];

// ──────────────────────────────────────────────
// Unified export  (for one-line imports)
// ──────────────────────────────────────────────
export const conferenceData = {
  conferenceInfo,
  heroContent,
  navLinks,
  importantDates,
  contactInfo,
  socialLinks,
  footerContent,
  venueInfo,
  committeeData,
  programChair,
  workingCommittee,
  internationalAdvisoryCommittee1,
  internationalAdvisoryCommittee2,
  previousConferences,
  registrationFees,
  speakers,
  galleryImages,
  paperSubmissionInfo,
  submissionGuidelines,
  submissionSteps,
  conferenceTracks,
  submissionFAQs,
};
