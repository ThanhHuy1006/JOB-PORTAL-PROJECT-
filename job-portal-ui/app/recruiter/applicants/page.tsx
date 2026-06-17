'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { PageHeader } from '@/components/dashboard/widgets'
import { MessageSquare, FileText, Eye } from 'lucide-react'

const mockApplications = [
  {
    id: 'app1',
    candidate: 'Nguyễn Văn A',
    position: 'Senior Developer',
    appliedAt: '2024-06-15',
    status: 'new',
    rating: 0,
    notes: '',
  },
  {
    id: 'app2',
    candidate: 'Trần Thị B',
    position: 'Product Manager',
    appliedAt: '2024-06-14',
    status: 'reviewing',
    rating: 4,
    notes: 'Kinh nghiệm phù hợp',
  },
  {
    id: 'app3',
    candidate: 'Lê Minh C',
    position: 'UX Designer',
    appliedAt: '2024-06-13',
    status: 'shortlisted',
    rating: 5,
    notes: 'Portfolio tuyệt vời',
  },
  {
    id: 'app4',
    candidate: 'Phạm Thị D',
    position: 'Backend Developer',
    appliedAt: '2024-06-12',
    status: 'interview',
    rating: 4,
    notes: 'Phỏng vấn kỹ thuật tuần sau',
  },
  {
    id: 'app5',
    candidate: 'Hoàng Văn E',
    position: 'Frontend Developer',
    appliedAt: '2024-06-11',
    status: 'rejected',
    rating: 2,
    notes: 'Kỹ năng không đủ',
  },
]

const statusColors: Record<string, { bg: string; text: string; label: string }> = {
  new: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Mới' },
  reviewing: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Đang xem xét' },
  shortlisted: { bg: 'bg-green-100', text: 'text-green-800', label: 'Rút gọn' },
  interview: { bg: 'bg-purple-100', text: 'text-purple-800', label: 'Phỏng vấn' },
  rejected: { bg: 'bg-red-100', text: 'text-red-800', label: 'Loại' },
}

export default function RecruiterApplicantsPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [view, setView] = useState<'table' | 'kanban'>('table')

  const filtered = mockApplications.filter((app) => {
    const matchSearch = app.candidate.toLowerCase().includes(search.toLowerCase()) ||
      app.position.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'all' || app.status === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <div className="space-y-8">
      <PageHeader
        title="Hồ sơ ứng viên"
        description="Quản lý hồ sơ ứng viên và theo dõi quá trình tuyển dụng"
      />

      {/* Filters */}
      <Card>
        <CardContent className="pt-6 flex gap-4 flex-wrap">
          <Input
            placeholder="Tìm kiếm ứng viên hoặc vị trí..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-64"
          />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả trạng thái</SelectItem>
              <SelectItem value="new">Mới</SelectItem>
              <SelectItem value="reviewing">Đang xem xét</SelectItem>
              <SelectItem value="shortlisted">Rút gọn</SelectItem>
              <SelectItem value="interview">Phỏng vấn</SelectItem>
              <SelectItem value="rejected">Loại</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* View Toggle & Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Danh sách ứng viên</CardTitle>
            <CardDescription>{filtered.length} ứng viên</CardDescription>
          </div>
          <Tabs value={view} onValueChange={(v) => setView(v as 'table' | 'kanban')}>
            <TabsList>
              <TabsTrigger value="table">Bảng</TabsTrigger>
              <TabsTrigger value="kanban">Kanban</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          {view === 'table' ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ứng viên</TableHead>
                  <TableHead>Vị trí</TableHead>
                  <TableHead>Ngày nộp</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Đánh giá</TableHead>
                  <TableHead>Hành động</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium">{app.candidate}</TableCell>
                    <TableCell>{app.position}</TableCell>
                    <TableCell>{new Date(app.appliedAt).toLocaleDateString('vi-VN')}</TableCell>
                    <TableCell>
                      <Badge className={`${statusColors[app.status].bg} ${statusColors[app.status].text}`}>
                        {statusColors[app.status].label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < app.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" title="Xem hồ sơ">
                          <Eye className="size-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Nhắn tin">
                          <MessageSquare className="size-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="grid gap-4 md:grid-cols-5">
              {Object.entries(statusColors).map(([status, { label }]) => (
                <div key={status} className="space-y-2">
                  <h3 className="font-medium text-sm">{label}</h3>
                  <div className="space-y-2">
                    {filtered
                      .filter((app) => app.status === status)
                      .map((app) => (
                        <div key={app.id} className="bg-gray-50 p-3 rounded-lg border">
                          <p className="text-sm font-medium">{app.candidate}</p>
                          <p className="text-xs text-muted-foreground">{app.position}</p>
                          <p className="text-xs mt-1">{app.notes}</p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
