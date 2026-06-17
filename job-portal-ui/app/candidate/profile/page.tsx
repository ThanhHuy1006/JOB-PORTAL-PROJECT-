"use client"

import { Mail, Phone, MapPin, Briefcase, GraduationCap, Plus, Pencil } from "lucide-react"
import { toast } from "sonner"
import { PageHeader, Panel } from "@/components/dashboard/widgets"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const experiences = [
  {
    role: "Backend Developer",
    company: "Công ty TNHH Công nghệ XYZ",
    period: "01/2023 - Hiện tại",
    desc: "Phát triển và bảo trì hệ thống microservices phục vụ hơn 1 triệu người dùng.",
  },
  {
    role: "Junior Developer",
    company: "Startup ABC",
    period: "06/2021 - 12/2022",
    desc: "Xây dựng API và tích hợp cổng thanh toán cho ứng dụng thương mại điện tử.",
  },
]

const skills = ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kafka", "Redis", "Microservices"]

export default function CandidateProfile() {
  return (
    <div>
      <PageHeader
        title="Hồ sơ của tôi"
        description="Quản lý thông tin cá nhân và kinh nghiệm làm việc."
        action={
          <Button onClick={() => toast.success("Đã lưu thay đổi hồ sơ")}>
            <Pencil className="size-4" />
            Lưu thay đổi
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-1">
          <Panel>
            <div className="flex flex-col items-center text-center">
              <Avatar className="size-24">
                <AvatarFallback className="bg-primary text-2xl text-primary-foreground">NA</AvatarFallback>
              </Avatar>
              <h2 className="mt-4 text-lg font-bold text-foreground">Nguyễn Văn An</h2>
              <p className="text-sm text-muted-foreground">Backend Developer</p>
              <Button variant="outline" size="sm" className="mt-4 bg-transparent">
                Đổi ảnh đại diện
              </Button>
            </div>
            <dl className="mt-6 flex flex-col gap-3 text-sm">
              <Row icon={Mail} value="an.nguyen@email.com" />
              <Row icon={Phone} value="0901234567" />
              <Row icon={MapPin} value="Hà Nội" />
              <Row icon={Briefcase} value="4 năm kinh nghiệm" />
              <Row icon={GraduationCap} value="ĐH Bách Khoa Hà Nội" />
            </dl>
          </Panel>

          <Panel title="Kỹ năng" action={<Button variant="ghost" size="icon" className="size-7"><Plus className="size-4" /></Button>}>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <Badge key={s} variant="secondary" className="font-normal">
                  {s}
                </Badge>
              ))}
            </div>
          </Panel>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-2">
          <Panel title="Thông tin cơ bản">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Họ và tên" defaultValue="Nguyễn Văn An" />
              <Field label="Chức danh" defaultValue="Backend Developer" />
              <Field label="Email" defaultValue="an.nguyen@email.com" type="email" />
              <Field label="Số điện thoại" defaultValue="0901234567" />
              <Field label="Địa điểm" defaultValue="Hà Nội" />
              <Field label="Mức lương mong muốn" defaultValue="30 - 40 triệu" />
            </div>
            <div className="mt-4 grid gap-2">
              <Label>Giới thiệu bản thân</Label>
              <Textarea
                rows={4}
                defaultValue="Lập trình viên Backend với 4 năm kinh nghiệm xây dựng hệ thống quy mô lớn. Đam mê công nghệ và luôn tìm tòi học hỏi những kiến thức mới."
              />
            </div>
          </Panel>

          <Panel
            title="Kinh nghiệm làm việc"
            action={
              <Button variant="ghost" size="sm" className="text-primary">
                <Plus className="size-4" />
                Thêm
              </Button>
            }
          >
            <div className="flex flex-col gap-4">
              {experiences.map((e, i) => (
                <div key={i} className="relative rounded-lg border border-border p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{e.role}</h3>
                      <p className="text-sm text-muted-foreground">{e.company}</p>
                    </div>
                    <Badge variant="outline" className="shrink-0">
                      {e.period}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  )
}

function Row({ icon: Icon, value }: { icon: typeof Mail; value: string }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <Icon className="size-4 shrink-0" />
      <span className="text-foreground">{value}</span>
    </div>
  )
}

function Field({ label, defaultValue, type }: { label: string; defaultValue: string; type?: string }) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      <Input defaultValue={defaultValue} type={type} />
    </div>
  )
}
