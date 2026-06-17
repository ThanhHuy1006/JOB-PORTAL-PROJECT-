'use client'

import {
  LayoutDashboard,
  Building2,
  PlusCircle,
  Briefcase,
  Users,
  CalendarDays,
  Search,
  BarChart3,
  Settings,
} from 'lucide-react'
import { DashboardShell, type NavSection } from '@/components/dashboard/dashboard-shell'

const sections: NavSection[] = [
  {
    items: [
      { label: 'Tổng quan', href: '/recruiter', icon: LayoutDashboard },
      { label: 'Hồ sơ công ty', href: '/recruiter/company', icon: Building2 },
    ],
  },
  {
    label: 'Tuyển dụng',
    items: [
      { label: 'Đăng tin mới', href: '/recruiter/jobs/new', icon: PlusCircle },
      { label: 'Quản lý tin', href: '/recruiter/jobs', icon: Briefcase },
      { label: 'Ứng viên', href: '/recruiter/applicants', icon: Users, badge: 12 },
      { label: 'Lịch phỏng vấn', href: '/recruiter/interviews', icon: CalendarDays, badge: 3 },
      { label: 'Tìm ứng viên', href: '/recruiter/search', icon: Search },
    ],
  },
  {
    label: 'Khác',
    items: [
      { label: 'Báo cáo', href: '/recruiter/analytics', icon: BarChart3 },
      { label: 'Cài đặt', href: '/recruiter/settings', icon: Settings },
    ],
  },
]

export default function RecruiterLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell
      sections={sections}
      user={{ name: 'FPT Software', email: 'hr@fptsoftware.com', role: 'Nhà tuyển dụng' }}
    >
      {children}
    </DashboardShell>
  )
}
