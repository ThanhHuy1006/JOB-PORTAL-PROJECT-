// ============================================================
// Mock data for the JobHub job portal.
// All data is static/in-memory — no backend required.
// ============================================================

export type JobType = 'Toàn thời gian' | 'Bán thời gian' | 'Thực tập' | 'Freelance'
export type WorkMode = 'Tại văn phòng' | 'Từ xa' | 'Linh hoạt'
export type Level = 'Thực tập sinh' | 'Nhân viên' | 'Trưởng nhóm' | 'Quản lý' | 'Giám đốc'

export type ApplicationStatus =
  | 'Đã gửi'
  | 'Đã xem'
  | 'Đang xem xét'
  | 'Phỏng vấn'
  | 'Đã tuyển'
  | 'Không phù hợp'
  | 'Đã rút'

export type JobStatus =
  | 'Bản nháp'
  | 'Chờ duyệt'
  | 'Đang tuyển'
  | 'Bị từ chối'
  | 'Tạm ẩn'
  | 'Hết hạn'
  | 'Đã đóng'

export interface Company {
  id: string
  name: string
  slug: string
  logo: string
  cover: string
  industry: string
  size: string
  location: string
  website: string
  verified: boolean
  followers: number
  openJobs: number
  about: string
  benefits: string[]
  gallery: string[]
}

export interface Job {
  id: string
  title: string
  companyId: string
  salary: string
  salaryMin: number
  location: string
  experience: string
  type: JobType
  workMode: WorkMode
  level: Level
  category: string
  postedAt: string
  deadline: string
  quantity: number
  views: number
  applicants: number
  status: JobStatus
  featured: boolean
  description: string
  requirements: string[]
  benefits: string[]
  skills: string[]
}

export interface Candidate {
  id: string
  name: string
  avatar: string
  title: string
  location: string
  experienceYears: number
  level: string
  education: string
  expectedSalary: string
  skills: string[]
  email: string
  phone: string
}

export interface Application {
  id: string
  jobId: string
  candidateId: string
  appliedAt: string
  cv: string
  status: ApplicationStatus
  rating: number
  coverLetter: string
  timeline: { date: string; label: string }[]
}

export interface Interview {
  id: string
  candidateName: string
  candidateId: string
  jobTitle: string
  date: string
  time: string
  mode: 'Trực tuyến' | 'Trực tiếp'
  location: string
  interviewer: string
  status: 'Chờ xác nhận' | 'Đã xác nhận' | 'Hoàn thành' | 'Đã hủy'
}

export interface Article {
  id: string
  slug: string
  title: string
  category: string
  excerpt: string
  cover: string
  author: string
  publishedAt: string
  readTime: string
  content: string[]
}

export const categories = [
  { name: 'Công nghệ thông tin', icon: 'Code', jobs: 1240 },
  { name: 'Kinh doanh / Bán hàng', icon: 'TrendingUp', jobs: 980 },
  { name: 'Marketing / Truyền thông', icon: 'Megaphone', jobs: 640 },
  { name: 'Tài chính / Kế toán', icon: 'Calculator', jobs: 520 },
  { name: 'Nhân sự', icon: 'Users', jobs: 310 },
  { name: 'Thiết kế / Sáng tạo', icon: 'Palette', jobs: 280 },
  { name: 'Xây dựng / Kiến trúc', icon: 'Building2', jobs: 210 },
  { name: 'Chăm sóc khách hàng', icon: 'Headphones', jobs: 190 },
]

export const locations = [
  'Hà Nội',
  'TP. Hồ Chí Minh',
  'Đà Nẵng',
  'Hải Phòng',
  'Cần Thơ',
  'Bình Dương',
]

export const companies: Company[] = [
  {
    id: 'c1',
    name: 'FPT Software',
    slug: 'fpt-software',
    logo: '/companies/logo-fpt.png',
    cover: '/companies/cover-tech.png',
    industry: 'Công nghệ thông tin',
    size: '5000+ nhân viên',
    location: 'Hà Nội',
    website: 'https://fptsoftware.com',
    verified: true,
    followers: 12400,
    openJobs: 24,
    about:
      'FPT Software là công ty phần mềm hàng đầu Việt Nam, cung cấp dịch vụ chuyển đổi số cho các tập đoàn toàn cầu. Chúng tôi quy tụ hơn 30.000 kỹ sư trên khắp thế giới.',
    benefits: ['Lương tháng 13', 'Bảo hiểm sức khỏe', 'Làm việc linh hoạt', 'Đào tạo quốc tế'],
    gallery: ['/companies/office-1.png', '/companies/office-2.png', '/companies/office-3.png'],
  },
  {
    id: 'c2',
    name: 'Tiki',
    slug: 'tiki',
    logo: '/companies/logo-tiki.png',
    cover: '/companies/cover-ecommerce.png',
    industry: 'Thương mại điện tử',
    size: '1000-5000 nhân viên',
    location: 'TP. Hồ Chí Minh',
    website: 'https://tiki.vn',
    verified: true,
    followers: 8900,
    openJobs: 16,
    about:
      'Tiki là sàn thương mại điện tử uy tín hàng đầu Việt Nam với cam kết giao hàng nhanh và dịch vụ khách hàng xuất sắc.',
    benefits: ['Cổ phần ESOP', 'Bảo hiểm cao cấp', 'Du lịch hàng năm', 'Phụ cấp ăn trưa'],
    gallery: ['/companies/office-2.png', '/companies/office-3.png', '/companies/office-1.png'],
  },
  {
    id: 'c3',
    name: 'VNG Corporation',
    slug: 'vng',
    logo: '/companies/logo-vng.png',
    cover: '/companies/cover-gaming.png',
    industry: 'Công nghệ / Game',
    size: '1000-5000 nhân viên',
    location: 'TP. Hồ Chí Minh',
    website: 'https://vng.com.vn',
    verified: true,
    followers: 15200,
    openJobs: 31,
    about:
      'VNG là kỳ lân công nghệ đầu tiên của Việt Nam, phát triển các sản phẩm như Zalo, ZaloPay và nhiều tựa game đình đám.',
    benefits: ['Phòng gym miễn phí', 'Bữa ăn miễn phí', 'Chăm sóc y tế', 'Học bổng'],
    gallery: ['/companies/office-3.png', '/companies/office-1.png', '/companies/office-2.png'],
  },
  {
    id: 'c4',
    name: 'Techcombank',
    slug: 'techcombank',
    logo: '/companies/logo-tcb.png',
    cover: '/companies/cover-finance.png',
    industry: 'Ngân hàng / Tài chính',
    size: '5000+ nhân viên',
    location: 'Hà Nội',
    website: 'https://techcombank.com',
    verified: true,
    followers: 6700,
    openJobs: 12,
    about:
      'Techcombank là một trong những ngân hàng thương mại cổ phần lớn nhất Việt Nam, tiên phong trong chuyển đổi số ngành tài chính.',
    benefits: ['Thưởng KPI hấp dẫn', 'Vay ưu đãi', 'Bảo hiểm gia đình', 'Lộ trình thăng tiến'],
    gallery: ['/companies/office-1.png', '/companies/office-2.png', '/companies/office-3.png'],
  },
  {
    id: 'c5',
    name: 'Shopee Vietnam',
    slug: 'shopee',
    logo: '/companies/logo-shopee.png',
    cover: '/companies/cover-ecommerce.png',
    industry: 'Thương mại điện tử',
    size: '5000+ nhân viên',
    location: 'TP. Hồ Chí Minh',
    website: 'https://shopee.vn',
    verified: false,
    followers: 9800,
    openJobs: 19,
    about:
      'Shopee là nền tảng thương mại điện tử hàng đầu Đông Nam Á, mang đến trải nghiệm mua sắm trực tuyến tiện lợi cho hàng triệu người dùng.',
    benefits: ['Lương cạnh tranh', 'Cổ phiếu công ty', 'Môi trường quốc tế', 'Phát triển nghề nghiệp'],
    gallery: ['/companies/office-2.png', '/companies/office-1.png', '/companies/office-3.png'],
  },
  {
    id: 'c6',
    name: 'MoMo',
    slug: 'momo',
    logo: '/companies/logo-momo.png',
    cover: '/companies/cover-finance.png',
    industry: 'Fintech',
    size: '1000-5000 nhân viên',
    location: 'TP. Hồ Chí Minh',
    website: 'https://momo.vn',
    verified: true,
    followers: 11300,
    openJobs: 22,
    about:
      'MoMo là siêu ứng dụng ví điện tử số 1 Việt Nam với hơn 30 triệu người dùng, tiên phong trong lĩnh vực thanh toán số.',
    benefits: ['Bảo hiểm sức khỏe', 'Thưởng cổ phần', 'Flexible time', 'Team building'],
    gallery: ['/companies/office-3.png', '/companies/office-2.png', '/companies/office-1.png'],
  },
]

export function getCompany(id: string) {
  return companies.find((c) => c.id === id)
}
export function getCompanyBySlug(slug: string) {
  return companies.find((c) => c.slug === slug)
}

export const jobs: Job[] = [
  {
    id: 'j1',
    title: 'Senior Backend Developer (Java)',
    companyId: 'c1',
    salary: '30 - 45 triệu',
    salaryMin: 30,
    location: 'Hà Nội',
    experience: '3-5 năm',
    type: 'Toàn thời gian',
    workMode: 'Linh hoạt',
    level: 'Trưởng nhóm',
    category: 'Công nghệ thông tin',
    postedAt: '2026-06-12',
    deadline: '2026-07-15',
    quantity: 3,
    views: 1240,
    applicants: 48,
    status: 'Đang tuyển',
    featured: true,
    description:
      'Chúng tôi đang tìm kiếm một Senior Backend Developer giàu kinh nghiệm để tham gia phát triển các hệ thống quy mô lớn phục vụ khách hàng toàn cầu.',
    requirements: [
      'Tối thiểu 3 năm kinh nghiệm với Java/Spring Boot',
      'Hiểu biết sâu về microservices và kiến trúc phân tán',
      'Kinh nghiệm với SQL và NoSQL databases',
      'Thành thạo Docker, Kubernetes là một lợi thế',
    ],
    benefits: ['Lương tháng 13 + thưởng dự án', 'Bảo hiểm sức khỏe cao cấp', 'Làm việc từ xa 2 ngày/tuần'],
    skills: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'j2',
    title: 'Product Designer (UI/UX)',
    companyId: 'c3',
    salary: '20 - 35 triệu',
    salaryMin: 20,
    location: 'TP. Hồ Chí Minh',
    experience: '2-4 năm',
    type: 'Toàn thời gian',
    workMode: 'Tại văn phòng',
    level: 'Nhân viên',
    category: 'Thiết kế / Sáng tạo',
    postedAt: '2026-06-13',
    deadline: '2026-07-10',
    quantity: 2,
    views: 890,
    applicants: 32,
    status: 'Đang tuyển',
    featured: true,
    description:
      'Tham gia đội ngũ thiết kế sản phẩm để tạo ra những trải nghiệm người dùng tuyệt vời cho hàng triệu người dùng.',
    requirements: [
      'Có portfolio thể hiện kỹ năng thiết kế sản phẩm',
      'Thành thạo Figma, Sketch',
      'Hiểu biết về design system và user research',
    ],
    benefits: ['Môi trường sáng tạo', 'Trang thiết bị hiện đại', 'Cơ hội học hỏi'],
    skills: ['Figma', 'UI/UX', 'Design System', 'Prototyping', 'User Research'],
  },
  {
    id: 'j3',
    title: 'Frontend Developer (ReactJS)',
    companyId: 'c2',
    salary: '18 - 30 triệu',
    salaryMin: 18,
    location: 'TP. Hồ Chí Minh',
    experience: '1-3 năm',
    type: 'Toàn thời gian',
    workMode: 'Linh hoạt',
    level: 'Nhân viên',
    category: 'Công nghệ thông tin',
    postedAt: '2026-06-14',
    deadline: '2026-07-20',
    quantity: 4,
    views: 1560,
    applicants: 67,
    status: 'Đang tuyển',
    featured: true,
    description:
      'Phát triển giao diện người dùng cho nền tảng thương mại điện tử với hàng triệu lượt truy cập mỗi ngày.',
    requirements: [
      'Thành thạo ReactJS, TypeScript',
      'Kinh nghiệm với Redux, React Query',
      'Hiểu biết về responsive design và performance',
    ],
    benefits: ['Cổ phần ESOP', 'Du lịch hàng năm', 'Phụ cấp ăn trưa'],
    skills: ['React', 'TypeScript', 'Redux', 'CSS', 'Next.js'],
  },
  {
    id: 'j4',
    title: 'Digital Marketing Manager',
    companyId: 'c5',
    salary: '25 - 40 triệu',
    salaryMin: 25,
    location: 'TP. Hồ Chí Minh',
    experience: '4-6 năm',
    type: 'Toàn thời gian',
    workMode: 'Tại văn phòng',
    level: 'Quản lý',
    category: 'Marketing / Truyền thông',
    postedAt: '2026-06-10',
    deadline: '2026-07-05',
    quantity: 1,
    views: 720,
    applicants: 28,
    status: 'Đang tuyển',
    featured: false,
    description:
      'Lãnh đạo đội ngũ marketing số, xây dựng và triển khai chiến lược tăng trưởng cho thương hiệu.',
    requirements: [
      'Kinh nghiệm quản lý đội ngũ marketing',
      'Thành thạo Google Ads, Facebook Ads',
      'Tư duy phân tích dữ liệu tốt',
    ],
    benefits: ['Lương cạnh tranh', 'Cổ phiếu công ty', 'Môi trường quốc tế'],
    skills: ['Digital Marketing', 'SEO', 'Google Ads', 'Analytics', 'Leadership'],
  },
  {
    id: 'j5',
    title: 'Data Analyst',
    companyId: 'c6',
    salary: '15 - 25 triệu',
    salaryMin: 15,
    location: 'TP. Hồ Chí Minh',
    experience: '1-2 năm',
    type: 'Toàn thời gian',
    workMode: 'Từ xa',
    level: 'Nhân viên',
    category: 'Công nghệ thông tin',
    postedAt: '2026-06-15',
    deadline: '2026-07-25',
    quantity: 2,
    views: 540,
    applicants: 19,
    status: 'Đang tuyển',
    featured: false,
    description:
      'Phân tích dữ liệu người dùng để đưa ra insight giúp cải thiện sản phẩm và trải nghiệm thanh toán.',
    requirements: [
      'Thành thạo SQL, Python',
      'Kinh nghiệm với công cụ BI (Tableau, Power BI)',
      'Tư duy logic và khả năng kể chuyện bằng dữ liệu',
    ],
    benefits: ['Làm việc từ xa', 'Bảo hiểm sức khỏe', 'Thưởng cổ phần'],
    skills: ['SQL', 'Python', 'Tableau', 'Statistics', 'Excel'],
  },
  {
    id: 'j6',
    title: 'Chuyên viên Tín dụng',
    companyId: 'c4',
    salary: '12 - 20 triệu',
    salaryMin: 12,
    location: 'Hà Nội',
    experience: '1-3 năm',
    type: 'Toàn thời gian',
    workMode: 'Tại văn phòng',
    level: 'Nhân viên',
    category: 'Tài chính / Kế toán',
    postedAt: '2026-06-11',
    deadline: '2026-07-12',
    quantity: 5,
    views: 430,
    applicants: 15,
    status: 'Đang tuyển',
    featured: false,
    description:
      'Thẩm định hồ sơ tín dụng, tư vấn sản phẩm tài chính và chăm sóc khách hàng doanh nghiệp.',
    requirements: [
      'Tốt nghiệp chuyên ngành Tài chính - Ngân hàng',
      'Kỹ năng giao tiếp và đàm phán tốt',
      'Chịu được áp lực doanh số',
    ],
    benefits: ['Thưởng KPI hấp dẫn', 'Vay ưu đãi', 'Lộ trình thăng tiến'],
    skills: ['Tín dụng', 'Phân tích tài chính', 'Giao tiếp', 'Excel'],
  },
  {
    id: 'j7',
    title: 'DevOps Engineer',
    companyId: 'c1',
    salary: '28 - 42 triệu',
    salaryMin: 28,
    location: 'Đà Nẵng',
    experience: '3-5 năm',
    type: 'Toàn thời gian',
    workMode: 'Linh hoạt',
    level: 'Nhân viên',
    category: 'Công nghệ thông tin',
    postedAt: '2026-06-09',
    deadline: '2026-07-08',
    quantity: 2,
    views: 680,
    applicants: 24,
    status: 'Đang tuyển',
    featured: true,
    description:
      'Xây dựng và vận hành hạ tầng CI/CD, đảm bảo hệ thống vận hành ổn định và an toàn.',
    requirements: [
      'Kinh nghiệm với AWS/GCP',
      'Thành thạo Terraform, Kubernetes',
      'Hiểu biết về monitoring và security',
    ],
    benefits: ['Lương tháng 13', 'Đào tạo quốc tế', 'Làm việc linh hoạt'],
    skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux'],
  },
  {
    id: 'j8',
    title: 'Nhân viên Kinh doanh',
    companyId: 'c2',
    salary: '10 - 18 triệu',
    salaryMin: 10,
    location: 'Hà Nội',
    experience: 'Dưới 1 năm',
    type: 'Toàn thời gian',
    workMode: 'Tại văn phòng',
    level: 'Nhân viên',
    category: 'Kinh doanh / Bán hàng',
    postedAt: '2026-06-08',
    deadline: '2026-07-02',
    quantity: 10,
    views: 920,
    applicants: 41,
    status: 'Đang tuyển',
    featured: false,
    description:
      'Phát triển thị trường, tìm kiếm khách hàng mới và chăm sóc khách hàng hiện tại.',
    requirements: [
      'Đam mê kinh doanh, không ngại thử thách',
      'Kỹ năng giao tiếp tốt',
      'Không yêu cầu kinh nghiệm',
    ],
    benefits: ['Hoa hồng hấp dẫn', 'Đào tạo bài bản', 'Cơ hội thăng tiến nhanh'],
    skills: ['Bán hàng', 'Giao tiếp', 'Đàm phán', 'CRM'],
  },
]

export function getJob(id: string) {
  return jobs.find((j) => j.id === id)
}
export function getJobsByCompany(companyId: string) {
  return jobs.filter((j) => j.companyId === companyId)
}
export function getSimilarJobs(job: Job) {
  return jobs.filter((j) => j.id !== job.id && j.category === job.category).slice(0, 3)
}

export const candidates: Candidate[] = [
  {
    id: 'cd1',
    name: 'Nguyễn Văn An',
    avatar: '/avatars/avatar-1.png',
    title: 'Backend Developer',
    location: 'Hà Nội',
    experienceYears: 4,
    level: 'Trưởng nhóm',
    education: 'Đại học Bách Khoa Hà Nội',
    expectedSalary: '30 - 40 triệu',
    skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kafka'],
    email: 'an.nguyen@email.com',
    phone: '0901234567',
  },
  {
    id: 'cd2',
    name: 'Trần Thị Bình',
    avatar: '/avatars/avatar-2.png',
    title: 'Product Designer',
    location: 'TP. Hồ Chí Minh',
    experienceYears: 3,
    level: 'Nhân viên',
    education: 'Đại học Kiến trúc TP.HCM',
    expectedSalary: '20 - 30 triệu',
    skills: ['Figma', 'UI/UX', 'Design System', 'User Research'],
    email: 'binh.tran@email.com',
    phone: '0912345678',
  },
  {
    id: 'cd3',
    name: 'Lê Hoàng Cường',
    avatar: '/avatars/avatar-3.png',
    title: 'Frontend Developer',
    location: 'Đà Nẵng',
    experienceYears: 2,
    level: 'Nhân viên',
    education: 'Đại học Đà Nẵng',
    expectedSalary: '18 - 25 triệu',
    skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS'],
    email: 'cuong.le@email.com',
    phone: '0923456789',
  },
  {
    id: 'cd4',
    name: 'Phạm Thị Dung',
    avatar: '/avatars/avatar-4.png',
    title: 'Data Analyst',
    location: 'TP. Hồ Chí Minh',
    experienceYears: 2,
    level: 'Nhân viên',
    education: 'Đại học Kinh tế Quốc dân',
    expectedSalary: '15 - 22 triệu',
    skills: ['SQL', 'Python', 'Tableau', 'Statistics'],
    email: 'dung.pham@email.com',
    phone: '0934567890',
  },
  {
    id: 'cd5',
    name: 'Vũ Minh Đức',
    avatar: '/avatars/avatar-5.png',
    title: 'DevOps Engineer',
    location: 'Hà Nội',
    experienceYears: 5,
    level: 'Trưởng nhóm',
    education: 'Đại học Công nghệ - ĐHQGHN',
    expectedSalary: '35 - 45 triệu',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
    email: 'duc.vu@email.com',
    phone: '0945678901',
  },
]

export function getCandidate(id: string) {
  return candidates.find((c) => c.id === id)
}

export const applications: Application[] = [
  {
    id: 'a1',
    jobId: 'j1',
    candidateId: 'cd1',
    appliedAt: '2026-06-13',
    cv: 'CV_Backend_Developer.pdf',
    status: 'Phỏng vấn',
    rating: 4,
    coverLetter:
      'Tôi rất hứng thú với vị trí Senior Backend Developer tại FPT Software. Với 4 năm kinh nghiệm làm việc với Java và microservices...',
    timeline: [
      { date: '13/06/2026', label: 'Đã gửi hồ sơ' },
      { date: '14/06/2026', label: 'Nhà tuyển dụng đã xem' },
      { date: '16/06/2026', label: 'Được mời phỏng vấn' },
    ],
  },
  {
    id: 'a2',
    jobId: 'j3',
    candidateId: 'cd3',
    appliedAt: '2026-06-14',
    cv: 'CV_Frontend_React.pdf',
    status: 'Đang xem xét',
    rating: 3,
    coverLetter: 'Tôi mong muốn được đóng góp vào đội ngũ phát triển frontend của Tiki...',
    timeline: [
      { date: '14/06/2026', label: 'Đã gửi hồ sơ' },
      { date: '15/06/2026', label: 'Nhà tuyển dụng đã xem' },
    ],
  },
  {
    id: 'a3',
    jobId: 'j5',
    candidateId: 'cd4',
    appliedAt: '2026-06-15',
    cv: 'CV_Data_Analyst.pdf',
    status: 'Đã gửi',
    rating: 0,
    coverLetter: 'Với nền tảng phân tích dữ liệu vững chắc, tôi tin mình phù hợp với vị trí này...',
    timeline: [{ date: '15/06/2026', label: 'Đã gửi hồ sơ' }],
  },
  {
    id: 'a4',
    jobId: 'j2',
    candidateId: 'cd2',
    appliedAt: '2026-06-12',
    cv: 'CV_Product_Designer.pdf',
    status: 'Đã tuyển',
    rating: 5,
    coverLetter: 'Tôi đã theo dõi các sản phẩm của VNG từ lâu và rất muốn được tham gia...',
    timeline: [
      { date: '12/06/2026', label: 'Đã gửi hồ sơ' },
      { date: '13/06/2026', label: 'Nhà tuyển dụng đã xem' },
      { date: '14/06/2026', label: 'Được mời phỏng vấn' },
      { date: '16/06/2026', label: 'Được nhận' },
    ],
  },
  {
    id: 'a5',
    jobId: 'j7',
    candidateId: 'cd5',
    appliedAt: '2026-06-10',
    cv: 'CV_DevOps.pdf',
    status: 'Không phù hợp',
    rating: 2,
    coverLetter: 'Tôi có kinh nghiệm vận hành hạ tầng cloud quy mô lớn...',
    timeline: [
      { date: '10/06/2026', label: 'Đã gửi hồ sơ' },
      { date: '11/06/2026', label: 'Nhà tuyển dụng đã xem' },
      { date: '13/06/2026', label: 'Hồ sơ không phù hợp' },
    ],
  },
]

export function getApplication(id: string) {
  return applications.find((a) => a.id === id)
}

export const interviews: Interview[] = [
  {
    id: 'i1',
    candidateName: 'Nguyễn Văn An',
    candidateId: 'cd1',
    jobTitle: 'Senior Backend Developer',
    date: '2026-06-20',
    time: '09:00 - 10:00',
    mode: 'Trực tuyến',
    location: 'Google Meet',
    interviewer: 'Trần Quốc Bảo (Engineering Manager)',
    status: 'Đã xác nhận',
  },
  {
    id: 'i2',
    candidateName: 'Lê Hoàng Cường',
    candidateId: 'cd3',
    jobTitle: 'Frontend Developer',
    date: '2026-06-21',
    time: '14:00 - 15:00',
    mode: 'Trực tiếp',
    location: 'Tầng 12, Tòa nhà Bitexco, TP.HCM',
    interviewer: 'Phạm Thu Hà (Tech Lead)',
    status: 'Chờ xác nhận',
  },
  {
    id: 'i3',
    candidateName: 'Phạm Thị Dung',
    candidateId: 'cd4',
    jobTitle: 'Data Analyst',
    date: '2026-06-22',
    time: '10:30 - 11:30',
    mode: 'Trực tuyến',
    location: 'Microsoft Teams',
    interviewer: 'Nguyễn Hải Đăng (Data Lead)',
    status: 'Đã xác nhận',
  },
]

export const articles: Article[] = [
  {
    id: 'ar1',
    slug: 'bi-quyet-viet-cv-an-tuong',
    title: 'Bí quyết viết CV ấn tượng để vượt qua vòng loại hồ sơ',
    category: 'Cẩm nang CV',
    excerpt:
      'Một CV được trau chuốt là chìa khóa mở ra cánh cửa phỏng vấn. Cùng khám phá những nguyên tắc vàng giúp CV của bạn nổi bật.',
    cover: '/articles/article-cv.png',
    author: 'Mai Anh',
    publishedAt: '2026-06-10',
    readTime: '5 phút đọc',
    content: [
      'Trong thị trường lao động cạnh tranh, CV của bạn chỉ có vài giây để gây ấn tượng với nhà tuyển dụng.',
      'Hãy tập trung vào thành tích cụ thể thay vì liệt kê nhiệm vụ. Dùng số liệu để chứng minh năng lực.',
      'Giữ CV ngắn gọn trong 1-2 trang, trình bày rõ ràng và nhất quán về font chữ, khoảng cách.',
    ],
  },
  {
    id: 'ar2',
    slug: 'chuan-bi-phong-van-thanh-cong',
    title: '10 câu hỏi phỏng vấn thường gặp và cách trả lời',
    category: 'Phỏng vấn',
    excerpt:
      'Chuẩn bị kỹ lưỡng cho buổi phỏng vấn sẽ giúp bạn tự tin hơn rất nhiều. Đây là những câu hỏi bạn nên luyện tập trước.',
    cover: '/articles/article-interview.png',
    author: 'Hoàng Nam',
    publishedAt: '2026-06-08',
    readTime: '7 phút đọc',
    content: [
      'Phỏng vấn là cơ hội để bạn thể hiện không chỉ năng lực chuyên môn mà còn cả thái độ và sự phù hợp văn hóa.',
      'Hãy nghiên cứu kỹ về công ty và vị trí ứng tuyển trước khi đến buổi phỏng vấn.',
      'Luyện tập phương pháp STAR (Situation, Task, Action, Result) để trả lời các câu hỏi tình huống.',
    ],
  },
  {
    id: 'ar3',
    slug: 'xu-huong-nghe-nghiep-2026',
    title: 'Top ngành nghề có nhu cầu tuyển dụng cao năm 2026',
    category: 'Xu hướng',
    excerpt:
      'Thị trường lao động đang thay đổi nhanh chóng. Cùng tìm hiểu những ngành nghề đang khát nhân lực nhất hiện nay.',
    cover: '/articles/article-trend.png',
    author: 'Thanh Tú',
    publishedAt: '2026-06-05',
    readTime: '6 phút đọc',
    content: [
      'Công nghệ thông tin tiếp tục dẫn đầu về nhu cầu tuyển dụng với mức lương hấp dẫn.',
      'Các ngành liên quan đến AI, dữ liệu và an ninh mạng đang tăng trưởng mạnh mẽ.',
      'Kỹ năng mềm và khả năng thích ứng ngày càng được nhà tuyển dụng coi trọng.',
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}

// ---- Admin data ----
export interface AdminUser {
  id: string
  name: string
  email: string
  role: 'Ứng viên' | 'Nhà tuyển dụng' | 'Quản trị viên'
  joinedAt: string
  status: 'Hoạt động' | 'Đã khóa' | 'Chờ xác minh'
}

export const adminUsers: AdminUser[] = [
  { id: 'u1', name: 'Nguyễn Văn An', email: 'an.nguyen@email.com', role: 'Ứng viên', joinedAt: '2026-01-15', status: 'Hoạt động' },
  { id: 'u2', name: 'FPT Software', email: 'hr@fptsoftware.com', role: 'Nhà tuyển dụng', joinedAt: '2026-02-20', status: 'Hoạt động' },
  { id: 'u3', name: 'Trần Thị Bình', email: 'binh.tran@email.com', role: 'Ứng viên', joinedAt: '2026-03-10', status: 'Hoạt động' },
  { id: 'u4', name: 'Công ty ABC', email: 'recruit@abc.com', role: 'Nhà tuyển dụng', joinedAt: '2026-06-14', status: 'Chờ xác minh' },
  { id: 'u5', name: 'Lê Hoàng Cường', email: 'cuong.le@email.com', role: 'Ứng viên', joinedAt: '2026-04-22', status: 'Đã khóa' },
  { id: 'u6', name: 'Admin Hệ thống', email: 'admin@jobhub.vn', role: 'Quản trị viên', joinedAt: '2026-01-01', status: 'Hoạt động' },
]

export interface EmployerVerification {
  id: string
  company: string
  representative: string
  taxCode: string
  submittedAt: string
  status: 'Chờ duyệt' | 'Đã duyệt' | 'Bị từ chối'
}

export const employerVerifications: EmployerVerification[] = [
  { id: 'ev1', company: 'Công ty ABC', representative: 'Đỗ Văn Hùng', taxCode: '0123456789', submittedAt: '2026-06-14', status: 'Chờ duyệt' },
  { id: 'ev2', company: 'Startup XYZ', representative: 'Lý Thị Mai', taxCode: '0987654321', submittedAt: '2026-06-13', status: 'Chờ duyệt' },
  { id: 'ev3', company: 'Tập đoàn DEF', representative: 'Trần Quốc Việt', taxCode: '0456789123', submittedAt: '2026-06-12', status: 'Đã duyệt' },
]

export interface Report {
  id: string
  reporter: string
  target: string
  reason: string
  reportedAt: string
  status: 'Chưa xử lý' | 'Đang xử lý' | 'Đã xử lý'
}

export const reports: Report[] = [
  { id: 'r1', reporter: 'Nguyễn Văn An', target: 'Tin tuyển dụng #J102', reason: 'Thông tin lương sai sự thật', reportedAt: '2026-06-14', status: 'Chưa xử lý' },
  { id: 'r2', reporter: 'Trần Thị Bình', target: 'Công ty Lừa Đảo Co.', reason: 'Có dấu hiệu lừa đảo, yêu cầu đóng phí', reportedAt: '2026-06-13', status: 'Đang xử lý' },
  { id: 'r3', reporter: 'Lê Hoàng Cường', target: 'Tin tuyển dụng #J088', reason: 'Nội dung trùng lặp spam', reportedAt: '2026-06-11', status: 'Đã xử lý' },
]

export interface SystemLog {
  id: string
  actor: string
  action: string
  target: string
  time: string
  ip: string
  result: 'Thành công' | 'Thất bại'
}

export const systemLogs: SystemLog[] = [
  { id: 'l1', actor: 'admin@jobhub.vn', action: 'Phê duyệt tin tuyển dụng', target: 'Job #J120', time: '2026-06-16 09:32', ip: '113.161.42.10', result: 'Thành công' },
  { id: 'l2', actor: 'hr@fptsoftware.com', action: 'Đăng tin tuyển dụng', target: 'Job #J121', time: '2026-06-16 08:15', ip: '210.245.31.8', result: 'Thành công' },
  { id: 'l3', actor: 'unknown', action: 'Đăng nhập thất bại', target: 'admin@jobhub.vn', time: '2026-06-16 02:44', ip: '45.227.255.1', result: 'Thất bại' },
  { id: 'l4', actor: 'admin@jobhub.vn', action: 'Khóa tài khoản', target: 'cuong.le@email.com', time: '2026-06-15 16:20', ip: '113.161.42.10', result: 'Thành công' },
]

export interface NotificationItem {
  id: string
  type: 'application' | 'interview' | 'system' | 'message'
  title: string
  description: string
  time: string
  read: boolean
}

export const notifications: NotificationItem[] = [
  { id: 'n1', type: 'interview', title: 'Lời mời phỏng vấn mới', description: 'FPT Software mời bạn phỏng vấn vị trí Senior Backend Developer.', time: '2 giờ trước', read: false },
  { id: 'n2', type: 'application', title: 'Hồ sơ đã được xem', description: 'Tiki đã xem hồ sơ ứng tuyển Frontend Developer của bạn.', time: '5 giờ trước', read: false },
  { id: 'n3', type: 'system', title: 'Hoàn thiện hồ sơ', description: 'Hồ sơ của bạn đã hoàn thiện 75%. Bổ sung thông tin để tăng cơ hội.', time: '1 ngày trước', read: true },
  { id: 'n4', type: 'message', title: 'Tin nhắn mới', description: 'Nhà tuyển dụng VNG đã gửi cho bạn một tin nhắn.', time: '2 ngày trước', read: true },
]

export interface Conversation {
  id: string
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
  messages: { from: 'me' | 'them'; text: string; time: string }[]
}

export const conversations: Conversation[] = [
  {
    id: 'cv1',
    name: 'HR - FPT Software',
    avatar: '/companies/logo-fpt.png',
    lastMessage: 'Chúng tôi muốn mời bạn phỏng vấn vào thứ 5 tới.',
    time: '10:30',
    unread: 2,
    messages: [
      { from: 'them', text: 'Chào bạn, cảm ơn bạn đã ứng tuyển vị trí Senior Backend Developer.', time: '10:20' },
      { from: 'them', text: 'Chúng tôi muốn mời bạn phỏng vấn vào thứ 5 tới.', time: '10:30' },
      { from: 'me', text: 'Cảm ơn anh/chị. Tôi rất sẵn lòng tham gia phỏng vấn.', time: '10:35' },
    ],
  },
  {
    id: 'cv2',
    name: 'HR - VNG',
    avatar: '/companies/logo-vng.png',
    lastMessage: 'Bạn có thể gửi thêm portfolio không?',
    time: 'Hôm qua',
    unread: 0,
    messages: [
      { from: 'them', text: 'Bạn có thể gửi thêm portfolio không?', time: 'Hôm qua' },
    ],
  },
]
