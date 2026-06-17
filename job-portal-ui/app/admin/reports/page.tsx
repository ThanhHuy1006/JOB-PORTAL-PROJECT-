'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageHeader } from '@/components/dashboard/widgets'
import { Download, FileText } from 'lucide-react'
import { toast } from 'sonner'

const reports = [
  {
    id: 'r1',
    name: 'Báo cáo người dùng tháng 6',
    description: 'Thống kê người dùng, lượt đăng ký và hoạt động',
    generated: '2024-06-15',
  },
  {
    id: 'r2',
    name: 'Báo cáo tuyển dụng tháng 6',
    description: 'Tin đăng, hồ sơ, phỏng vấn và tỷ lệ chuyển đổi',
    generated: '2024-06-15',
  },
  {
    id: 'r3',
    name: 'Báo cáo doanh thu tháng 6',
    description: 'Doanh thu từ các gói dịch vụ premium',
    generated: '2024-06-14',
  },
  {
    id: 'r4',
    name: 'Báo cáo sự cố hệ thống',
    description: 'Các sự cố, lỗi và thời gian bảo trì',
    generated: '2024-06-13',
  },
]

export default function AdminReportsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Báo cáo"
        description="Xem và tải xuống các báo cáo hệ thống"
      />

      {/* Reports List */}
      <div className="grid gap-4 md:grid-cols-2">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="size-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{report.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{report.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">Tạo: {new Date(report.generated).toLocaleDateString('vi-VN')}</p>
                </div>
              </div>
              <Button
                className="mt-4 w-full"
                variant="outline"
                size="sm"
                onClick={() => toast.success('Đang tải báo cáo...')}
              >
                <Download className="mr-2 size-4" />
                Tải xuống
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
