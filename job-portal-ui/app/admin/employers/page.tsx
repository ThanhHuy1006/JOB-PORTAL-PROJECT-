'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { PageHeader } from '@/components/dashboard/widgets'
import { Eye, CheckCircle, Trash2 } from 'lucide-react'
import { toast } from 'sonner'

const mockEmployers = [
  { id: 'e1', name: 'FPT Software', email: 'hr@fptsoftware.com', status: 'verified', jobs: 12, applicants: 47, joined: '2024-06-15' },
  { id: 'e2', name: 'Vietcombank', email: 'recruit@vietcombank.com.vn', status: 'verified', jobs: 8, applicants: 23, joined: '2024-06-14' },
  { id: 'e3', name: 'Techstart Vietnam', email: 'hr@techstart.vn', status: 'pending', jobs: 0, applicants: 0, joined: '2024-06-13' },
  { id: 'e4', name: 'Samsung Vietnam', email: 'recruitment@samsung.com.vn', status: 'verified', jobs: 15, applicants: 89, joined: '2024-06-12' },
]

const statusColors: Record<string, string> = {
  verified: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  rejected: 'bg-red-100 text-red-800',
}

export default function AdminEmployersPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Quản lý nhà tuyển dụng"
        description="Quản lý tài khoản công ty"
      />

      {/* Filters */}
      <Card>
        <CardContent className="pt-6 flex gap-4">
          <Input placeholder="Tìm kiếm theo tên hoặc email..." className="flex-1" />
        </CardContent>
      </Card>

      {/* Employers Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách nhà tuyển dụng</CardTitle>
          <CardDescription>{mockEmployers.length} nhà tuyển dụng</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên công ty</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Tin đăng</TableHead>
                <TableHead>Hồ sơ</TableHead>
                <TableHead>Ngày tham gia</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockEmployers.map((emp) => (
                <TableRow key={emp.id}>
                  <TableCell className="font-medium">{emp.name}</TableCell>
                  <TableCell>{emp.email}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[emp.status]}>
                      {emp.status === 'verified' ? 'Xác minh' : emp.status === 'pending' ? 'Chờ xác nhận' : 'Từ chối'}
                    </Badge>
                  </TableCell>
                  <TableCell>{emp.jobs}</TableCell>
                  <TableCell>{emp.applicants}</TableCell>
                  <TableCell>{new Date(emp.joined).toLocaleDateString('vi-VN')}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => toast.success('Đã xem thông tin công ty')}>
                        <Eye className="size-4" />
                      </Button>
                      {emp.status === 'pending' && (
                        <Button variant="ghost" size="sm" onClick={() => toast.success('Đã phê duyệt công ty')}>
                          <CheckCircle className="size-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" onClick={() => toast.success('Công ty đã bị xóa')}>
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
