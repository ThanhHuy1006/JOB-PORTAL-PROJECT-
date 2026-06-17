'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { PageHeader } from '@/components/dashboard/widgets'
import { MapPin, Globe, Users, DollarSign } from 'lucide-react'
import { toast } from 'sonner'

export default function RecruiterCompanyPage() {
  const company = {
    name: 'FPT Software',
    website: 'https://www.fptsoftware.com',
    phone: '024 7777 1234',
    location: 'Hà Nội, Việt Nam',
    employees: '5000+',
    description: 'FPT Software là công ty hàng đầu về công nghệ thông tin tại Việt Nam, chuyên cung cấp các giải pháp phần mềm tòa nhà trên toàn thế giới.',
    logo: 'FPS',
    verified: true,
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Thông tin công ty"
        description="Cập nhật hồ sơ công ty của bạn"
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Company Info Cards */}
        <div className="space-y-4 lg:col-span-2">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle>Thông tin cơ bản</CardTitle>
              <CardDescription>Chi tiết chung về công ty</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Tên công ty</Label>
                <Input id="name" defaultValue={company.name} />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input id="website" type="url" defaultValue={company.website} />
              </div>
              <div>
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input id="phone" defaultValue={company.phone} />
              </div>
              <div>
                <Label htmlFor="location">Địa chỉ</Label>
                <Input id="location" defaultValue={company.location} />
              </div>
              <div>
                <Label htmlFor="description">Mô tả công ty</Label>
                <Textarea id="description" defaultValue={company.description} rows={4} />
              </div>
              <Button onClick={() => toast.success('Thông tin đã cập nhật')}>Lưu thay đổi</Button>
            </CardContent>
          </Card>

          {/* Recruitment Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Cài đặt tuyển dụng</CardTitle>
              <CardDescription>Tùy chỉnh quy trình tuyển dụng</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="auto_screening">Tự động loại hồ sơ</Label>
                <Input id="auto_screening" type="checkbox" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="auto_reply">Tự động trả lời ứng viên</Label>
                <Input id="auto_reply" type="checkbox" className="mt-2" />
              </div>
              <Button onClick={() => toast.success('Cài đặt đã lưu')}>Lưu cài đặt</Button>
            </CardContent>
          </Card>
        </div>

        {/* Company Stats */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Thống kê</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Users className="size-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Nhân viên</p>
                  <p className="font-medium">{company.employees}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="size-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Địa điểm</p>
                  <p className="font-medium">{company.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Globe className="size-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <a href={company.website} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline text-sm">
                    Truy cập
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <DollarSign className="size-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Gói dịch vụ</p>
                  <p className="font-medium">Professional</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Xác minh</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-green-500" />
                <span className="text-sm">Công ty đã được xác minh</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
