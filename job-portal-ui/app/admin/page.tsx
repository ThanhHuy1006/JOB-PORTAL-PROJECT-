'use client'

import { LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageHeader, StatCard } from '@/components/dashboard/widgets'
import { Users, Building2, FileText, AlertCircle, TrendingUp } from 'lucide-react'

const dailyStats = [
  { date: 'T2', users: 120, jobs: 45, applications: 380 },
  { date: 'T3', users: 132, jobs: 48, applications: 421 },
  { date: 'T4', users: 145, jobs: 52, applications: 489 },
  { date: 'T5', users: 158, jobs: 55, applications: 521 },
  { date: 'T6', users: 172, jobs: 61, applications: 612 },
  { date: 'T7', users: 189, jobs: 68, applications: 718 },
  { date: 'CN', users: 201, jobs: 75, applications: 821 },
]

const recentUsers = [
  { id: 'u1', name: 'Nguyễn Văn A', email: 'a@example.com', type: 'Ứng viên', status: 'active', joined: '2 giờ trước' },
  { id: 'u2', name: 'Trần Thị B', email: 'b@example.com', type: 'Nhà tuyển dụng', status: 'pending', joined: '4 giờ trước' },
  { id: 'u3', name: 'Lê Minh C', email: 'c@example.com', type: 'Ứng viên', status: 'active', joined: '1 ngày trước' },
]

const stats = [
  { label: 'Người dùng hoạt động', value: '1,203', icon: Users, increase: '+23% từ tuần trước' },
  { label: 'Nhà tuyển dụng', value: '156', icon: Building2, increase: '+12% từ tuần trước' },
  { label: 'Tin tuyển dụng', value: '523', icon: FileText, increase: '+45% từ tuần trước' },
  { label: 'Cảnh báo', value: '18', icon: AlertCircle, increase: '8 chưa xem' },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Bảng điều khiển quản trị"
        description="Giám sát và quản lý hệ thống"
      />

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            increase={stat.increase}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Người dùng mới theo tuần</CardTitle>
            <CardDescription>Xu hướng đăng ký người dùng</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#0ea5e9" name="Người dùng" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hoạt động hàng ngày</CardTitle>
            <CardDescription>Tin đăng và hồ sơ</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="jobs" fill="#10b981" name="Tin đăng" />
                <Bar dataKey="applications" fill="#0ea5e9" name="Hồ sơ" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Users */}
      <Card>
        <CardHeader>
          <CardTitle>Người dùng mới gần đây</CardTitle>
          <CardDescription>Những người đăng ký trong 24 giờ qua</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div className="flex-1">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline">{user.type}</Badge>
                  <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                    {user.status === 'active' ? 'Hoạt động' : 'Chờ xác nhận'}
                  </Badge>
                  <span className="text-sm text-muted-foreground w-24 text-right">{user.joined}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
