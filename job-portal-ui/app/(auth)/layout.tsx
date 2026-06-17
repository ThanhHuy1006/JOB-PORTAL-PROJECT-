import Link from "next/link"
import { Briefcase, CheckCircle2 } from "lucide-react"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Brand panel */}
      <div className="relative hidden w-1/2 flex-col justify-between bg-primary p-12 text-primary-foreground lg:flex">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/15">
            <Briefcase className="size-5" />
          </span>
          <span className="text-xl font-bold">JobHub</span>
        </Link>

        <div>
          <h1 className="text-balance text-3xl font-bold leading-tight">
            Kết nối với hàng nghìn cơ hội việc làm tốt nhất
          </h1>
          <ul className="mt-8 flex flex-col gap-4">
            {[
              "Hơn 8.300 công ty uy tín đang tuyển dụng",
              "Tạo CV chuyên nghiệp chỉ trong vài phút",
              "Theo dõi tiến trình ứng tuyển dễ dàng",
              "Nhận gợi ý việc làm phù hợp với bạn",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <CheckCircle2 className="size-5 shrink-0" />
                <span className="text-primary-foreground/90">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-primary-foreground/70">© 2026 JobHub. Đồ án minh họa.</p>
      </div>

      {/* Form panel */}
      <div className="flex w-full flex-col items-center justify-center bg-background px-4 py-10 lg:w-1/2">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-8 flex items-center justify-center gap-2 lg:hidden">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Briefcase className="size-5" />
            </span>
            <span className="text-xl font-bold text-foreground">JobHub</span>
          </Link>
          {children}
        </div>
      </div>
    </div>
  )
}
