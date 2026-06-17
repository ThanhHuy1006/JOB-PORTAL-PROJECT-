'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { PageHeader } from '@/components/dashboard/widgets'

const mockLogs = [
  {
    id: 'l1',
    action: 'Người dùng đăng ký',
    user: 'Nguyễn Văn A',
    type: 'info',
    timestamp: '2024-06-15 14:30:25',
    details: 'Email: a@example.com',
  },
  {
    id: 'l2',
    action: 'Công ty được phê duyệt',
    user: 'Admin',
    type: 'success',
    timestamp: '2024-06-15 13:45:10',
    details: 'FPT Software được phê duyệt',
  },
  {
    id: 'l3',
    action: 'Tin tuyển dụng bị xóa',
    user: 'Admin',
    type: 'warning',
    timestamp: '2024-06-15 12:20:45',
    details: 'Tin "Senior Developer" bị xóa vì vi phạm',
  },
  {
    id: 'l4',
    action: 'Lỗi hệ thống',
    user: 'System',
    type: 'error',
    timestamp: '2024-06-15 11:15:30',
    details: 'Database connection timeout',
  },
  {
    id: 'l5',
    action: 'Tin tuyển dụng đăng',
    user: 'FPT Software',
    type: 'info',
    timestamp: '2024-06-15 10:05:12',
    details: 'Tin "Product Manager"',
  },
]

const typeColors: Record<string, string> = {
  info: 'bg-blue-100 text-blue-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
}

export default function AdminLogsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Nhật ký hệ thống"
        description="Theo dõi hoạt động và sự kiện hệ thống"
      />

      {/* Filters */}
      <Card>
        <CardContent className="pt-6 flex gap-4">
          <Input placeholder="Tìm kiếm sự kiện..." className="flex-1" />
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Loại sự kiện" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="info">Thông tin</SelectItem>
              <SelectItem value="success">Thành công</SelectItem>
              <SelectItem value="warning">Cảnh báo</SelectItem>
              <SelectItem value="error">Lỗi</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Nhật ký hoạt động</CardTitle>
          <CardDescription>{mockLogs.length} sự kiện gần đây</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sự kiện</TableHead>
                <TableHead>Người dùng</TableHead>
                <TableHead>Loại</TableHead>
                <TableHead>Thời gian</TableHead>
                <TableHead>Chi tiết</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.action}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell>
                    <Badge className={typeColors[log.type]}>
                      {log.type === 'info' ? 'Thông tin' :
                       log.type === 'success' ? 'Thành công' :
                       log.type === 'warning' ? 'Cảnh báo' : 'Lỗi'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">{log.timestamp}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{log.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
