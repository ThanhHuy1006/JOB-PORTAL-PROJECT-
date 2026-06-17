'use client'

import {
  LayoutDashboard,
  Users,
  Building2,
  CheckCircle,
  FileCheck,
  Grid3x3,
  FileText,
  BarChart3,
  Settings,
  Shield,
} from 'lucide-react'
import { DashboardShell, type NavSection } from '@/components/dashboard/dashboard-shell'

const sections: NavSection[] = [
  {
    items: [
      { label: 'Tổng quan', href: '/admin', icon: LayoutDashboard },
    ],
  },
  {
    label: 'Quản lý hệ thống',
    items: [
      { label: 'Người dùng', href: '/admin/users', icon: Users, badge: 8 },
      { label: 'Nhà tuyển dụng', href: '/admin/employers', icon: Building2, badge: 12 },
      { label: 'Xác minh', href: '/admin/verifications', icon: CheckCircle, badge: 5 },
      { label: 'Phê duyệt tin', href: '/admin/approvals', icon: FileCheck, badge: 3 },
    ],
  },
  {
    label: 'Nội dung',
    items: [
      { label: 'Danh mục', href: '/admin/categories', icon: Grid3x3 },
      { label: 'Bài viết', href: '/admin/articles', icon: FileText },
    ],
  },
  {
    label: 'Khác',
    items: [
      { label: 'Báo cáo', href: '/admin/reports', icon: BarChart3 },
      { label: 'Nhật ký', href: '/admin/logs', icon: Shield },
      { label: 'Cài đặt', href: '/admin/settings', icon: Settings },
    ],
  },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell
      sections={sections}
      user={{ name: 'Admin', email: 'admin@jobhub.vn', role: 'Quản trị viên' }}
    >
      {children}
    </DashboardShell>
  )
}
