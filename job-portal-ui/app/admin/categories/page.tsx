'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PageHeader } from '@/components/dashboard/widgets'
import { Edit2, Trash2, Plus } from 'lucide-react'
import { categories } from '@/lib/mock-data'
import { toast } from 'sonner'

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Quản lý danh mục"
          description="Thêm, sửa, xóa danh mục công việc"
        />
        <Button>
          <Plus className="mr-2 size-4" />
          Thêm danh mục
        </Button>
      </div>

      {/* Add Category Form */}
      <Card>
        <CardHeader>
          <CardTitle>Danh mục mới</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Tên danh mục</label>
            <Input placeholder="Ví dụ: AI & Machine Learning" className="mt-1" />
          </div>
          <div>
            <label className="text-sm font-medium">Mô tả</label>
            <Input placeholder="Mô tả ngắn về danh mục" className="mt-1" />
          </div>
          <Button onClick={() => toast.success('Đã thêm danh mục mới')}>Thêm danh mục</Button>
        </CardContent>
      </Card>

      {/* Categories List */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách danh mục</CardTitle>
          <CardDescription>{categories.length} danh mục</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((cat) => (
              <div key={cat.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                <div>
                  <p className="font-medium">{cat.name}</p>
                  <p className="text-sm text-muted-foreground">{cat.count} tin đăng</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" onClick={() => toast.success('Đang chỉnh sửa danh mục')}>
                    <Edit2 className="size-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => toast.success('Đã xóa danh mục')}>
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
