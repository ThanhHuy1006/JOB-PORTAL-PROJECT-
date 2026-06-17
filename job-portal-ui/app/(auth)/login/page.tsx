"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Eye, EyeOff, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const router = useRouter()
  const [showPw, setShowPw] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push("/candidate")
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Đăng nhập</h1>
      <p className="mt-1 text-sm text-muted-foreground">Chào mừng trở lại! Vui lòng nhập thông tin của bạn.</p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="ban@email.com" defaultValue="an.nguyen@email.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Mật khẩu</Label>
            <Link href="/forgot-password" className="text-sm font-medium text-primary hover:underline">
              Quên mật khẩu?
            </Link>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPw ? "text" : "password"}
              defaultValue="password"
              required
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPw((v) => !v)}
              aria-label={showPw ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        <Label className="flex items-center gap-2 text-sm font-normal text-muted-foreground">
          <Checkbox defaultChecked />
          Ghi nhớ đăng nhập
        </Label>

        <Button type="submit" size="lg" className="mt-2">
          <LogIn className="size-4" />
          Đăng nhập
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Chưa có tài khoản?{" "}
        <Link href="/register" className="font-medium text-primary hover:underline">
          Đăng ký ngay
        </Link>
      </p>

      <div className="mt-6 rounded-lg border border-dashed border-border bg-muted/50 p-3 text-center text-xs text-muted-foreground">
        Đây là bản demo. Đăng nhập bằng vai trò:
        <div className="mt-2 flex justify-center gap-2">
          <Link href="/candidate" className="font-medium text-primary hover:underline">
            Ứng viên
          </Link>
          <span>·</span>
          <Link href="/recruiter" className="font-medium text-primary hover:underline">
            Nhà tuyển dụng
          </Link>
          <span>·</span>
          <Link href="/admin" className="font-medium text-primary hover:underline">
            Quản trị
          </Link>
        </div>
      </div>
    </div>
  )
}
