"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { MailCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function VerifyPage() {
  const router = useRouter()
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  function handleChange(i: number, val: string) {
    const digit = val.replace(/\D/g, "").slice(-1)
    const next = [...code]
    next[i] = digit
    setCode(next)
    if (digit && i < 5) inputs.current[i + 1]?.focus()
  }

  return (
    <div className="text-center">
      <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        <MailCheck className="size-7" />
      </div>
      <h1 className="mt-5 text-2xl font-bold text-foreground">Xác minh email</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Chúng tôi đã gửi mã xác minh gồm 6 chữ số đến email của bạn. Nhập mã bên dưới để hoàn tất đăng ký.
      </p>

      <div className="mt-8 flex justify-center gap-2">
        {code.map((d, i) => (
          <Input
            key={i}
            ref={(el) => {
              inputs.current[i] = el
            }}
            value={d}
            onChange={(e) => handleChange(i, e.target.value)}
            inputMode="numeric"
            maxLength={1}
            aria-label={`Chữ số ${i + 1}`}
            className="size-12 text-center text-lg font-semibold"
          />
        ))}
      </div>

      <Button onClick={() => router.push("/login")} size="lg" className="mt-8 w-full">
        Xác minh
      </Button>

      <p className="mt-6 text-sm text-muted-foreground">
        Chưa nhận được mã?{" "}
        <button className="font-medium text-primary hover:underline">Gửi lại</button>
      </p>
      <p className="mt-2 text-sm">
        <Link href="/login" className="text-muted-foreground hover:text-primary">
          Quay lại đăng nhập
        </Link>
      </p>
    </div>
  )
}
