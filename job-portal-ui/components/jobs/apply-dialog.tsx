"use client"

import { useState } from "react"
import { Send, Upload, FileText, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ApplyDialog({ jobTitle, className }: { jobTitle: string; className?: string }) {
  const [open, setOpen] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setOpen(false)
    toast.success("Đã gửi hồ sơ ứng tuyển thành công!", {
      description: `Nhà tuyển dụng sẽ xem xét hồ sơ cho vị trí ${jobTitle}.`,
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className} size="lg">
          <Send className="size-4" />
          Ứng tuyển ngay
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Ứng tuyển vị trí</DialogTitle>
          <DialogDescription>{jobTitle}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid gap-2">
            <Label htmlFor="apply-name">Họ và tên</Label>
            <Input id="apply-name" defaultValue="Nguyễn Văn An" required />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="apply-email">Email</Label>
              <Input id="apply-email" type="email" defaultValue="an.nguyen@email.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="apply-phone">Số điện thoại</Label>
              <Input id="apply-phone" defaultValue="0901234567" required />
            </div>
          </div>

          <div className="grid gap-2">
            <Label>Chọn CV</Label>
            <RadioGroup defaultValue="cv1" className="gap-2">
              {["CV_Backend_Developer.pdf", "CV_FullStack_2026.pdf"].map((cv, i) => (
                <Label
                  key={cv}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-border p-3 text-sm font-normal has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                >
                  <RadioGroupItem value={`cv${i + 1}`} />
                  <FileText className="size-4 text-primary" />
                  <span className="text-foreground">{cv}</span>
                </Label>
              ))}
            </RadioGroup>
            <Button type="button" variant="outline" size="sm" className="mt-1 w-fit bg-transparent">
              <Upload className="size-4" />
              Tải CV mới
            </Button>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="apply-cover">Thư giới thiệu (tùy chọn)</Label>
            <Textarea
              id="apply-cover"
              rows={4}
              placeholder="Giới thiệu ngắn gọn về bản thân và lý do bạn phù hợp với vị trí này..."
            />
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full sm:w-auto">
              <CheckCircle2 className="size-4" />
              Gửi hồ sơ
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
