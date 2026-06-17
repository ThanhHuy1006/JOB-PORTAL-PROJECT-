"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { User, Building2, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

type Role = "candidate" | "recruiter"

export default function RegisterPage() {
  const router = useRouter()
  const [role, setRole] = useState<Role>("candidate")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push("/verify")
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Tạo tài khoản</h1>
      <p className="mt-1 text-sm text-muted-foreground">Bắt đầu hành trình sự nghiệp của bạn cùng JobHub.</p>

      {/* Role selector */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <RoleCard
          active={role === "candidate"}
          onClick={() => setRole("candidate")}
          icon={User}
          title="Ứng viên"
          desc="Tìm việc làm"
        />
        <RoleCard
          active={role === "recruiter"}
          onClick={() => setRole("recruiter")}
          icon={Building2}
          title="Nhà tuyển dụng"
          desc="Đăng tin tuyển"
        />
      </div>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        {role === "candidate" ? (
          <div className="grid gap-2">
            <Label htmlFor="name">Họ và tên</Label>
            <Input id="name" placeholder="Nguyễn Văn A" required />
          </div>
        ) : (
          <>
            <div className="grid gap-2">
              <Label htmlFor="company">Tên công ty</Label>
              <Input id="company" placeholder="Công ty TNHH ABC" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact">Người liên hệ</Label>
              <Input id="contact" placeholder="Trần Thị B" required />
            </div>
          </>
        )}

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="ban@email.com" required />
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm">Nhập lại mật khẩu</Label>
            <Input id="confirm" type="password" required />
          </div>
        </div>

        <Label className="flex items-start gap-2 text-sm font-normal text-muted-foreground">
          <Checkbox required className="mt-0.5" />
          <span>
            Tôi đồng ý với{" "}
            <Link href="#" className="text-primary hover:underline">
              Điều khoản
            </Link>{" "}
            và{" "}
            <Link href="#" className="text-primary hover:underline">
              Chính sách bảo mật
            </Link>
          </span>
        </Label>

        <Button type="submit" size="lg" className="mt-2">
          <UserPlus className="size-4" />
          Đăng ký
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Đã có tài khoản?{" "}
        <Link href="/login" className="font-medium text-primary hover:underline">
          Đăng nhập
        </Link>
      </p>
    </div>
  )
}

function RoleCard({
  active,
  onClick,
  icon: Icon,
  title,
  desc,
}: {
  active: boolean
  onClick: () => void
  icon: typeof User
  title: string
  desc: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 rounded-xl border p-4 text-center transition-colors",
        active ? "border-primary bg-primary/5" : "border-border hover:border-primary/50",
      )}
    >
      <Icon className={cn("size-6", active ? "text-primary" : "text-muted-foreground")} />
      <span className="mt-1 font-semibold text-foreground">{title}</span>
      <span className="text-xs text-muted-foreground">{desc}</span>
    </button>
  )
}
