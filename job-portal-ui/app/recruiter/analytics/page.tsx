'use client'

import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageHeader, StatCard } from '@/components/dashboard/widgets'
import { TrendingUp, Users, Eye, FileText } from 'lucide-react'

const monthlyData = [
  { month: 'T1', applications: 45, interviews: 8, hired: 2 },
  { month: 'T2', applications: 52, interviews: 10, hired: 3 },
  { month: 'T3', applications: 48, interviews: 9, hired: 2 },
  { month: 'T4', applications: 71, interviews: 14, hired: 4 },
  { month: 'T5', applications: 89, interviews: 18, hired: 5 },
  { month: 'T6', applications: 102, interviews: 21, hired: 6 },
]

const positionData = [
  { name: 'Developer', value: 312 },
  { name: 'Designer', value: 148 },
  { name: 'Manager', value: 95 },
  { name: 'Analyst', value: 87 },
  { name: 'Other', value: 58 },
]

const conversionData = [
  { stage: 'Nộp hồ sơ', count: 312 },
  { stage: 'Xem xét', count: 187 },
  { stage: 'Phỏng vấn', count: 89 },
  { stage: 'Offer', count: 27 },
  { stage: 'Đã thuê', count: 18 },
]

const COLORS = ['#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

export default function RecruiterAnalyticsPage() {
  const stats = [
    { label: 'Tổng hồ sơ', value: '312', icon: FileText, increase: '+18% so với tháng trước' },
    { label: 'Lượt xem', value: '4,521', icon: Eye, increase: '+35% so với tháng trước' },
    { label: 'Phỏng vấn', value: '89', icon: Users, increase: '+24% so với tháng trước' },
    { label: 'Tỷ lệ chuyển đổi', value: '5.8%', icon: TrendingUp, increase: '+0.8% so với tháng trước' },
  ]

  return (
    <div className="space-y-8">
      <PageHeader
        title="Phân tích tuyển dụng"
        description="Xem thống kê và hiệu suất tuyển dụng"
      />

      {/* Stats */}
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
        {/* Monthly Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Xu hướng hàng tháng</CardTitle>
            <CardDescription>Hồ sơ, phỏng vấn và lời mời theo tháng</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="applications" stroke="#0ea5e9" name="Hồ sơ" />
                <Line type="monotone" dataKey="interviews" stroke="#10b981" name="Phỏng vấn" />
                <Line type="monotone" dataKey="hired" stroke="#f59e0b" name="Đã thuê" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Applications by Position */}
        <Card>
          <CardHeader>
            <CardTitle>Hồ sơ theo vị trí</CardTitle>
            <CardDescription>Phân bố ứng viên theo vị trí tuyển dụng</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={positionData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={100} fill="#8884d8" dataKey="value">
                  {positionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Funnel */}
      <Card>
        <CardHeader>
          <CardTitle>Tỉ lệ chuyển đổi</CardTitle>
          <CardDescription>Giai đoạn tuyển dụng và số lượng ứng viên</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="stage" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="count" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
