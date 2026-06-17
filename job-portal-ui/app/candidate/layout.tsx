import {
  LayoutDashboard,
  User,
  FileText,
  Send,
  Bookmark,
  CalendarDays,
  MessageSquare,
  Settings,
} from "lucide-react"
import { DashboardShell, type NavSection } from "@/components/dashboard/dashboard-shell"

const sections: NavSection[] = [
  {
    items: [
      { label: "Tổng quan", href: "/candidate", icon: LayoutDashboard },
      { label: "Hồ sơ của tôi", href: "/candidate/profile", icon: User },
      { label: "Quản lý CV", href: "/candidate/cvs", icon: FileText },
    ],
  },
  {
    label: "Tìm việc",
    items: [
      { label: "Việc đã ứng tuyển", href: "/candidate/applications", icon: Send, badge: 5 },
      { label: "Việc đã lưu", href: "/candidate/saved", icon: Bookmark },
      { label: "Lịch phỏng vấn", href: "/candidate/interviews", icon: CalendarDays, badge: 2 },
      { label: "Tin nhắn", href: "/candidate/messages", icon: MessageSquare, badge: 2 },
    ],
  },
  {
    label: "Tài khoản",
    items: [{ label: "Cài đặt", href: "/candidate/settings", icon: Settings }],
  },
]

export default function CandidateLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell
      sections={sections}
      user={{ name: "Nguyễn Văn An", email: "an.nguyen@email.com", role: "Ứng viên" }}
    >
      {children}
    </DashboardShell>
  )
}
