import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'

export default function ServerErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="inline-flex size-16 items-center justify-center rounded-full bg-destructive/10">
          <AlertTriangle className="size-8 text-destructive" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-6xl font-bold tracking-tight">500</h1>
          <p className="text-2xl font-semibold">Lỗi máy chủ nội bộ</p>
          <p className="text-muted-foreground">
            Có lỗi không mong muốn xảy ra. Đội ngũ của chúng tôi đã được thông báo và sẽ sớm khắc phục.
          </p>
        </div>

        <div className="flex gap-3 justify-center">
          <Link href="/">
            <Button>Về trang chủ</Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => location.reload()}
          >
            Tải lại trang
          </Button>
        </div>

        <p className="text-sm text-muted-foreground pt-4">
          Mã lỗi: {Math.random().toString(36).substr(2, 9).toUpperCase()}
        </p>
      </div>
    </div>
  )
}
