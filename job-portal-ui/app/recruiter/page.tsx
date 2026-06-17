'use client'

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowUp, Briefcase, Eye, FileText, MessageSquare, Users } from 'lucide-react'
import { PageHeader, StatCard } from '@/components/dashboard/widgets'
import Link from 'next/link'

const recruiterStats = [
  { label: 'Tin tuyển dụng', value: '12', icon: Briefcase, increase: '+2 tuần này' },
  { label: 'Hồ sơ nhận được', value: '47', icon: FileText, increase: '+8 tuần này' },
  { label: 'Lượt xem', value: '1,204', icon: Eye, increase: '+156 tuần này' },
  { label: 'Tin nhắn', value: '23', icon: MessageSquare, increase: '+5 chưa đọc' },
]

const applicantsTrend = [
  { name: 'Tuần 1', applications: 8, interviews: 2 },
  { name: 'Tuần 2', applications: 12, interviews: 4 },
  { name: 'Tuần 3', applications: 15, interviews: 5 },
  { name: 'Tuần 4', applications: 18, interviews: 6 },
  { name: 'Tuần 5', applications: 14, interviews: 5 },
  { name: 'Tuần 6', applications: 22, interviews: 8 },
]

const recentApplications = [
  {
    id: 'app1',
    candidate: 'Nguyễn Văn A',
    position: 'Senior Developer',
    status: 'new',
    appliedAt: '2 giờ trước',
  },
  {
    id: 'app2',
    candidate: 'Trần Thị B',
    position: 'Product Manager',
    status: 'reviewing',
    appliedAt: '4 giờ trước',
  },
  {
    id: 'app3',
    candidate: 'Lê Minh C',
    position: 'UX Designer',
    status: 'shortlisted',
    appliedAt: '1 ngày trước',
  },
]

const statusBadgeMap: Record<string, { color: string; label: string }> = {
  new: { color: 'bg-blue-100 text-blue-800', label: 'Mới' },
  reviewing: { color: 'bg-yellow-100 text-yellow-800', label: 'Đang xem xét' },
  shortlisted: { color: 'bg-green-100 text-green-800', label: 'Rút gọn' },
  rejected: { color: 'bg-red-100 text-red-800', label: 'Loại' },
}

export default function RecruiterDashboard() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Bảng điều khiển tuyển dụng"
        description="Quản lý tin tuyển dụng, ứng viên và phỏng vấn"
      />

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {recruiterStats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            increase={stat.increase}
          />
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Trend Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Xu hướng ứng viên</CardTitle>
            <CardDescription>Số lượng hồ sơ và phỏng vấn theo tuần</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={applicantsTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="applications" fill="#0ea5e9" name="Hồ sơ" />
                <Bar dataKey="interviews" fill="#10b981" name="Phỏng vấn" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Hành động nhanh</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/recruiter/jobs/new" className="block">
              <Button className="w-full" size="sm">
                Đăng tin tuyển dụng
              </Button>
            </Link>
            <Link href="/recruiter/jobs" className="block">
              <Button variant="outline" className="w-full" size="sm">
                Quản lý tin đăng
              </Button>
            </Link>
            <Link href="/recruiter/applicants" className="block">
              <Button variant="outline" className="w-full" size="sm">
                Xem hồ sơ
              </Button>
            </Link>
            <Link href="/recruiter/interviews" className="block">
              <Button variant="outline" className="w-full" size="sm">
                Lịch phỏng vấn
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Recent Applications */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Hồ sơ gần đây</CardTitle>
              <CardDescription>Những ứng viên vừa nộp hồ sơ</CardDescription>
            </div>
            <Link href="/recruiter/applicants">
              <Button variant="outline" size="sm">
                Xem tất cả
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentApplications.map((app) => (
              <div key={app.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div className="flex-1">
                  <p className="font-medium">{app.candidate}</p>
                  <p className="text-sm text-muted-foreground">{app.position}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge className={statusBadgeMap[app.status]?.color}>
                    {statusBadgeMap[app.status]?.label}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{app.appliedAt}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
