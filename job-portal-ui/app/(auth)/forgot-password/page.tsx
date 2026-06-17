"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Mail, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="size-7" />
        </div>
        <h1 className="mt-5 text-2xl font-bold text-foreground">Kiểm tra email của bạn</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Chúng tôi đã gửi liên kết đặt lại mật khẩu đến email của bạn. Vui lòng kiểm tra hộp thư đến.
        </p>
        <Button asChild variant="outline" className="mt-6 bg-transparent">
          <Link href="/login">
            <ArrowLeft className="size-4" />
            Quay lại đăng nhập
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div>
      <Link href="/login" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="size-4" />
        Quay lại đăng nhập
      </Link>
      <h1 className="mt-6 text-2xl font-bold text-foreground">Quên mật khẩu?</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Nhập email của bạn và chúng tôi sẽ gửi liên kết để đặt lại mật khẩu.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSent(true)
        }}
        className="mt-8 flex flex-col gap-4"
      >
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="email" type="email" placeholder="ban@email.com" className="pl-9" required />
          </div>
        </div>
        <Button type="submit" size="lg">
          Gửi liên kết đặt lại
        </Button>
      </form>
    </div>
  )
}
