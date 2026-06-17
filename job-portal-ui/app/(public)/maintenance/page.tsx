import { Card } from '@/components/ui/card'
import { Wrench } from 'lucide-react'

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="inline-flex size-16 items-center justify-center rounded-full bg-primary/10 animate-pulse">
          <Wrench className="size-8 text-primary" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Bảo trì hệ thống</h1>
          <p className="text-muted-foreground">
            JobHub đang tạm thời bảo trì để cải thiện dịch vụ. Chúng tôi sẽ quay lại sớm nhất có thể.
          </p>
        </div>

        <Card className="bg-muted/50 border-primary/20 p-4 space-y-2">
          <p className="text-sm font-medium">Thông tin bảo trì</p>
          <p className="text-xs text-muted-foreground">
            Dự kiến hoàn thành: Hôm nay lúc 02:00 sáng
          </p>
        </Card>

        <div className="space-y-3 pt-4">
          <div className="flex items-center justify-center gap-2">
            <div className="size-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Hệ thống sẽ quay lại trong ít phút</span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground pt-4">
          Để cập nhật, vui lòng theo dõi: <a href="https://twitter.com/jobhub" className="underline hover:text-foreground">@jobhub</a>
        </p>
      </div>
    </div>
  )
}
