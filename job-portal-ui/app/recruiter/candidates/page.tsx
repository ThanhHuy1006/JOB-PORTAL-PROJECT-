'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { PageHeader } from '@/components/dashboard/widgets'
import { Briefcase, MapPin, Building } from 'lucide-react'

const mockCandidates = [
  {
    id: 'cand1',
    name: 'Nguyễn Văn A',
    title: 'Senior Full Stack Developer',
    location: 'Hà Nội',
    experience: '8 năm',
    skills: ['React', 'Node.js', 'Python', 'PostgreSQL'],
    status: 'available',
  },
  {
    id: 'cand2',
    name: 'Trần Thị B',
    title: 'Product Manager',
    location: 'Sài Gòn',
    experience: '6 năm',
    skills: ['Product Strategy', 'Analytics', 'User Research', 'Agile'],
    status: 'available',
  },
  {
    id: 'cand3',
    name: 'Lê Minh C',
    title: 'UX/UI Designer',
    location: 'Hà Nội',
    experience: '5 năm',
    skills: ['Figma', 'Prototyping', 'User Testing', 'Design Systems'],
    status: 'interested',
  },
  {
    id: 'cand4',
    name: 'Phạm Thị D',
    title: 'Backend Engineer',
    location: 'Hà Nội',
    experience: '7 năm',
    skills: ['Java', 'Microservices', 'AWS', 'Docker'],
    status: 'available',
  },
]

export default function RecruiterCandidatesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Tìm kiếm ứng viên"
        description="Tìm kiếm và liên hệ ứng viên sẵn sàng"
      />

      {/* Search Filters */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            <Input placeholder="Tìm kiếm theo tên hoặc chuyên môn..." className="md:col-span-2" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Kỹ năng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="nodejs">Node.js</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="java">Java</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Địa điểm" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hanoi">Hà Nội</SelectItem>
                <SelectItem value="saigon">Sài Gòn</SelectItem>
                <SelectItem value="danang">Đà Nẵng</SelectItem>
                <SelectItem value="remote">Làm việc từ xa</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Candidates Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {mockCandidates.map((candidate) => (
          <Card key={candidate.id}>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-lg">{candidate.name}</p>
                  <p className="text-sm text-muted-foreground">{candidate.title}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="size-4 text-muted-foreground" />
                    {candidate.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="size-4 text-muted-foreground" />
                    {candidate.experience} kinh nghiệm
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Kỹ năng</p>
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button className="flex-1" size="sm">
                    Xem hồ sơ
                  </Button>
                  <Button variant="outline" className="flex-1" size="sm">
                    Gửi lời mời
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
