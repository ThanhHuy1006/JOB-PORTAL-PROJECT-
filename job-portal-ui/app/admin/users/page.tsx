'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { PageHeader } from '@/components/dashboard/widgets'
import { Trash2, Ban, Shield } from 'lucide-react'
import { toast } from 'sonner'

const mockUsers = [
  { id: 'u1', name: 'Nguyễn Văn A', email: 'a@example.com', type: 'Ứng viên', status: 'active', joined: '2024-06-15' },
  { id: 'u2', name: 'Trần Thị B', email: 'b@example.com', type: 'Nhà tuyển dụng', status: 'verified', joined: '2024-06-14' },
  { id: 'u3', name: 'Lê Minh C', email: 'c@example.com', type: 'Ứng viên', status: 'active', joined: '2024-06-13' },
  { id: 'u4', name: 'Phạm Thị D', email: 'd@example.com', type: 'Nhà tuyển dụng', status: 'pending', joined: '2024-06-12' },
  { id: 'u5', name: 'Hoàng Văn E', email: 'e@example.com', type: 'Ứng viên', status: 'banned', joined: '2024-06-11' },
]

const statusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-800',
  verified: 'bg-blue-100 text-blue-800',
  pending: 'bg-yellow-100 text-yellow-800',
  banned: 'bg-red-100 text-red-800',
}

export default function AdminUsersPage() {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')

  const filtered = mockUsers.filter((user) => {
    const matchSearch = user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    const matchType = typeFilter === 'all' || user.type === typeFilter
    return matchSearch && matchType
  })

  return (
    <div className="space-y-8">
      <PageHeader
        title="Quản lý người dùng"
        description="Quản lý tài khoản người dùng và quyền hạn"
      />

      {/* Filters */}
      <Card>
        <CardContent className="pt-6 flex gap-4">
          <Input
            placeholder="Tìm kiếm theo tên hoặc email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1"
          />
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả loại</SelectItem>
              <SelectItem value="Ứng viên">Ứng viên</SelectItem>
              <SelectItem value="Nhà tuyển dụng">Nhà tuyển dụng</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách người dùng</CardTitle>
          <CardDescription>{filtered.length} người dùng</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Loại</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Ngày tham gia</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.type}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[user.status]}>
                      {user.status === 'active' ? 'Hoạt động' :
                       user.status === 'verified' ? 'Xác minh' :
                       user.status === 'pending' ? 'Chờ xác nhận' : 'Bị cấm'}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(user.joined).toLocaleDateString('vi-VN')}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        title={user.status === 'banned' ? 'Mở khóa' : 'Khóa tài khoản'}
                        onClick={() => toast.success(user.status === 'banned' ? 'Đã mở khóa tài khoản' : 'Đã khóa tài khoản')}
                      >
                        <Ban className="size-4" />
                      </Button>
                      {user.type === 'Nhà tuyển dụng' && (
                        <Button
                          variant="ghost"
                          size="sm"
                          title="Cấp quyền"
                          onClick={() => toast.success('Đã cấp quyền')}
                        >
                          <Shield className="size-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        title="Xóa"
                        onClick={() => toast.success('Người dùng đã bị xóa')}
                      >
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
