'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageHeader } from '@/components/dashboard/widgets'
import { CheckCircle, XCircle, FileText } from 'lucide-react'
import { toast } from 'sonner'

const mockVerifications = [
  {
    id: 'v1',
    company: 'FPT Software',
    type: 'Giấy phép kinh doanh',
    status: 'pending',
    submittedAt: '2024-06-15',
    document: 'Số đăng ký kinh doanh: 0101234567',
  },
  {
    id: 'v2',
    company: 'Techstart Vietnam',
    type: 'Giấy chứng nhận công ty',
    status: 'pending',
    submittedAt: '2024-06-14',
    document: 'Certificate ID: TSV-2024-001',
  },
  {
    id: 'v3',
    company: 'Vietcombank',
    type: 'Giấy phép kinh doanh',
    status: 'approved',
    submittedAt: '2024-06-13',
    document: 'Số đăng ký kinh doanh: 0100100001',
  },
  {
    id: 'v4',
    company: 'Startup XYZ',
    type: 'Giấy chứng nhận công ty',
    status: 'rejected',
    submittedAt: '2024-06-12',
    document: 'Certificate expired',
  },
]

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  approved: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
}

export default function AdminVerificationsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Xác minh công ty"
        description="Phê duyệt hoặc từ chối yêu cầu xác minh công ty"
      />

      {/* Verifications List */}
      <div className="space-y-4">
        {mockVerifications.map((ver) => (
          <Card key={ver.id}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-medium text-lg">{ver.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{ver.type}</p>
                  <div className="mt-3 p-3 bg-gray-50 rounded text-sm">
                    <div className="flex items-center gap-2">
                      <FileText className="size-4 text-muted-foreground" />
                      {ver.document}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Gửi vào: {new Date(ver.submittedAt).toLocaleDateString('vi-VN')}</p>
                </div>
                <div className="flex flex-col gap-3 items-end">
                  <Badge className={statusColors[ver.status]}>
                    {ver.status === 'pending' ? 'Chờ xem xét' : ver.status === 'approved' ? 'Đã phê duyệt' : 'Từ chối'}
                  </Badge>
                  {ver.status === 'pending' && (
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => toast.success('Đã phê duyệt xác minh')}
                      >
                        <CheckCircle className="mr-1 size-4" />
                        Phê duyệt
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toast.error('Đã từ chối xác minh')}
                      >
                        <XCircle className="mr-1 size-4" />
                        Từ chối
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
