import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Lock } from 'lucide-react'

export default function ForbiddenPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="inline-flex size-16 items-center justify-center rounded-full bg-destructive/10">
          <Lock className="size-8 text-destructive" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-6xl font-bold tracking-tight">403</h1>
          <p className="text-2xl font-semibold">Truy cập bị từ chối</p>
          <p className="text-muted-foreground">
            Bạn không có quyền truy cập trang này. Vui lòng đăng nhập hoặc liên hệ với quản trị viên.
          </p>
        </div>

        <div className="flex gap-3 justify-center">
          <Link href="/">
            <Button>Về trang chủ</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline">Đăng nhập</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
