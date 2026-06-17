'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { PageHeader, StatCard } from '@/components/dashboard/widgets'
import { jobs, getCompany } from '@/lib/mock-data'
import { Eye, MessageSquare, Edit2, Trash2, Plus } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

const recruiterJobs = jobs.slice(0, 8)

export default function RecruiterJobsPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const jobStats = [
    { label: 'Tin đang hoạt động', value: '12', icon: Eye },
    { label: 'Hồ sơ nhận được', value: '47', icon: MessageSquare },
    { label: 'Tổng lượt xem', value: '1,204', icon: Eye },
  ]

  const filtered = recruiterJobs.filter((j) => {
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'all' || j.status === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Quản lý tin tuyển dụng"
          description="Đăng, chỉnh sửa và xóa tin tuyển dụng"
        />
        <Link href="/recruiter/jobs/new">
          <Button>
            <Plus className="mr-2 size-4" />
            Đăng tin mới
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {jobStats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            increase="Tháng này"
          />
        ))}
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Tìm kiếm và lọc</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Input
            placeholder="Tìm kiếm theo tiêu đề..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1"
          />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả trạng thái</SelectItem>
              <SelectItem value="active">Đang hoạt động</SelectItem>
              <SelectItem value="closed">Đã đóng</SelectItem>
              <SelectItem value="draft">Nháp</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Jobs Table */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-3">
            {filtered.map((job) => {
              const company = getCompany(job.companyId)
              return (
                <div key={job.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                  <div className="flex-1">
                    <p className="font-medium">{job.title}</p>
                    <p className="text-sm text-muted-foreground">{company?.name} • {job.location}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">{job.applicants || 0} ứng viên</p>
                      <p className="text-xs text-muted-foreground">{job.views || 0} lượt xem</p>
                    </div>
                    <Badge variant={job.status === 'active' ? 'default' : 'secondary'}>
                      {job.status === 'active' ? 'Hoạt động' : job.status === 'closed' ? 'Đã đóng' : 'Nháp'}
                    </Badge>
                    <div className="flex gap-2">
                      <Link href={`/recruiter/jobs/${job.id}/edit`}>
                        <Button variant="ghost" size="sm">
                          <Edit2 className="size-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toast.success('Tin tuyển dụng đã được xóa')}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
