'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { PageHeader } from '@/components/dashboard/widgets'
import { Calendar, Clock, MapPin, Video, Phone, Plus } from 'lucide-react'
import Link from 'next/link'

const mockInterviews = [
  {
    id: 'int1',
    candidate: 'Nguyễn Văn A',
    position: 'Senior Developer',
    date: '2024-06-20',
    time: '10:00',
    type: 'video',
    interviewer: 'Trần Hữu B',
    location: 'Online',
    status: 'scheduled',
  },
  {
    id: 'int2',
    candidate: 'Trần Thị B',
    position: 'Product Manager',
    date: '2024-06-19',
    time: '14:30',
    type: 'in-person',
    interviewer: 'Lê Thị C',
    location: 'Hà Nội - Phòng họp 201',
    status: 'scheduled',
  },
  {
    id: 'int3',
    candidate: 'Lê Minh C',
    position: 'UX Designer',
    date: '2024-06-18',
    time: '09:00',
    type: 'phone',
    interviewer: 'Phạm Văn D',
    location: 'Điện thoại',
    status: 'completed',
  },
  {
    id: 'int4',
    candidate: 'Phạm Thị D',
    position: 'Backend Developer',
    date: '2024-06-17',
    time: '16:00',
    type: 'video',
    interviewer: 'Hoàng Văn E',
    location: 'Online',
    status: 'completed',
  },
]

const statusColors: Record<string, string> = {
  scheduled: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
}

const typeIcons: Record<string, typeof Video> = {
  video: Video,
  phone: Phone,
  'in-person': MapPin,
}

export default function RecruiterInterviewsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Lịch phỏng vấn"
          description="Quản lý và theo dõi phỏng vấn ứng viên"
        />
        <Button>
          <Plus className="mr-2 size-4" />
          Tạo phỏng vấn
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6 flex gap-4">
          <Input placeholder="Tìm kiếm ứng viên..." className="flex-1" />
          <Select defaultValue="upcoming">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="upcoming">Sắp tới</SelectItem>
              <SelectItem value="completed">Hoàn thành</SelectItem>
              <SelectItem value="cancelled">Đã hủy</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Interviews List */}
      <div className="space-y-4">
        {mockInterviews.map((interview) => {
          const TypeIcon = typeIcons[interview.type]
          return (
            <Card key={interview.id}>
              <CardContent className="pt-6 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      {TypeIcon && <TypeIcon className="size-6 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{interview.candidate}</p>
                      <p className="text-sm text-muted-foreground">{interview.position}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 items-center">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="size-4 text-muted-foreground" />
                    {new Date(interview.date).toLocaleDateString('vi-VN')}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="size-4 text-muted-foreground" />
                    {interview.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="size-4 text-muted-foreground" />
                    {interview.location}
                  </div>
                  <Badge className={statusColors[interview.status]}>
                    {interview.status === 'scheduled' ? 'Đã lên lịch' : interview.status === 'completed' ? 'Hoàn thành' : 'Đã hủy'}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Chi tiết
                    </Button>
                    {interview.status === 'scheduled' && (
                      <Button size="sm">Tham gia</Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
