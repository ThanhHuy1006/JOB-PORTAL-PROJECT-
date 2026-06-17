'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { PageHeader } from '@/components/dashboard/widgets'
import { Edit2, Trash2, Eye, Plus } from 'lucide-react'
import { toast } from 'sonner'

const mockArticles = [
  { id: 'a1', title: 'Bí quyết viết CV ấn tượng', author: 'Admin', status: 'published', views: 1240, created: '2024-06-15' },
  { id: 'a2', title: 'Chuẩn bị cho phỏng vấn việc làm', author: 'Admin', status: 'published', views: 893, created: '2024-06-14' },
  { id: 'a3', title: 'Xu hướng công nghệ năm 2024', author: 'Editor', status: 'draft', views: 0, created: '2024-06-13' },
  { id: 'a4', title: 'Làm việc từ xa: Ưu và nhược điểm', author: 'Admin', status: 'published', views: 567, created: '2024-06-12' },
]

const statusColors: Record<string, string> = {
  published: 'bg-green-100 text-green-800',
  draft: 'bg-gray-100 text-gray-800',
  archived: 'bg-red-100 text-red-800',
}

export default function AdminArticlesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Quản lý bài viết"
          description="Quản lý bài viết và tin tức"
        />
        <Button>
          <Plus className="mr-2 size-4" />
          Viết bài
        </Button>
      </div>

      {/* Articles Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách bài viết</CardTitle>
          <CardDescription>{mockArticles.length} bài viết</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tiêu đề</TableHead>
                <TableHead>Tác giả</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Lượt xem</TableHead>
                <TableHead>Ngày tạo</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockArticles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  <TableCell>{article.author}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[article.status]}>
                      {article.status === 'published' ? 'Đã phát hành' : article.status === 'draft' ? 'Nháp' : 'Lưu trữ'}
                    </Badge>
                  </TableCell>
                  <TableCell>{article.views}</TableCell>
                  <TableCell>{new Date(article.created).toLocaleDateString('vi-VN')}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => toast.success('Đang xem bài viết')}>
                        <Eye className="size-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => toast.success('Đang chỉnh sửa bài viết')}>
                        <Edit2 className="size-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => toast.success('Đã xóa bài viết')}>
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
