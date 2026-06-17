'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageHeader } from '@/components/dashboard/widgets'
import { CheckCircle, XCircle, Briefcase, MapPin, DollarSign } from 'lucide-react'
import { toast } from 'sonner'

const mockJobApprovals = [
  {
    id: 'ja1',
    title: 'Senior Full Stack Developer',
    company: 'FPT Software',
    location: 'Hà Nội',
    salary: '30-45 triệu',
    submittedAt: '2024-06-15',
    status: 'pending',
  },
  {
    id: 'ja2',
    title: 'Product Manager',
    company: 'Techstart Vietnam',
    location: 'Sài Gòn',
    salary: '25-35 triệu',
    submittedAt: '2024-06-14',
    status: 'pending',
  },
  {
    id: 'ja3',
    title: 'UX/UI Designer',
    company: 'Vietcombank',
    location: 'Hà Nội',
    salary: '20-28 triệu',
    submittedAt: '2024-06-13',
    status: 'approved',
  },
  {
    id: 'ja4',
    title: 'Data Scientist',
    company: 'Startup XYZ',
    location: 'Làm việc từ xa',
    salary: '35-50 triệu',
    submittedAt: '2024-06-12',
    status: 'rejected',
  },
]

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  approved: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
}

export default function AdminApprovalsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Phê duyệt tin tuyển dụng"
        description="Xem xét và phê duyệt các tin tuyển dụng mới"
      />

      {/* Job Approvals List */}
      <div className="space-y-4">
        {mockJobApprovals.map((job) => (
          <Card key={job.id}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-medium text-lg">{job.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{job.company}</p>
                  
                  <div className="flex flex-wrap gap-3 mt-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="size-4 text-muted-foreground" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="size-4 text-muted-foreground" />
                      {job.salary}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="size-4 text-muted-foreground" />
                      Gửi: {new Date(job.submittedAt).toLocaleDateString('vi-VN')}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 items-end">
                  <Badge className={statusColors[job.status]}>
                    {job.status === 'pending' ? 'Chờ phê duyệt' : job.status === 'approved' ? 'Đã phê duyệt' : 'Từ chối'}
                  </Badge>
                  {job.status === 'pending' && (
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => toast.success('Đã phê duyệt tin tuyển dụng')}
                      >
                        <CheckCircle className="mr-1 size-4" />
                        Phê duyệt
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toast.error('Đã từ chối tin tuyển dụng')}
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
