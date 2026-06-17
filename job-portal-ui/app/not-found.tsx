import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="inline-flex size-16 items-center justify-center rounded-full bg-destructive/10">
          <AlertCircle className="size-8 text-destructive" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-6xl font-bold tracking-tight">404</h1>
          <p className="text-2xl font-semibold">Trang không tìm thấy</p>
          <p className="text-muted-foreground">
            Rất xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
        </div>

        <div className="flex gap-3 justify-center">
          <Link href="/">
            <Button>Về trang chủ</Button>
          </Link>
          <Link href="/jobs">
            <Button variant="outline">Tìm việc làm</Button>
          </Link>
        </div>

        <p className="text-sm text-muted-foreground pt-4">
          Nếu bạn cho rằng đây là một lỗi, vui lòng <a href="mailto:support@jobhub.vn" className="underline hover:text-foreground">liên hệ với chúng tôi</a>.
        </p>
      </div>
    </div>
  )
}
