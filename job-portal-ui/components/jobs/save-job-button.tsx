"use client"

import { useState } from "react"
import { Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SaveJobButton() {
  const [saved, setSaved] = useState(false)
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={() => setSaved((v) => !v)}
      className="bg-transparent"
    >
      <Bookmark className={cn("size-4", saved && "fill-primary text-primary")} />
      {saved ? "Đã lưu" : "Lưu tin"}
    </Button>
  )
}
