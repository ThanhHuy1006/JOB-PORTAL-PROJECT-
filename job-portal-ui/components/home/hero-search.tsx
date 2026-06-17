'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Search, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { locations } from '@/lib/mock-data'

export function HeroSearch() {
  const router = useRouter()
  const [q, setQ] = useState('')
  const [loc, setLoc] = useState('all')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (q) params.set('q', q)
    if (loc !== 'all') params.set('location', loc)
    router.push(`/jobs?${params.toString()}`)
  }

  return (
    <form
      onSubmit={submit}
      className="flex flex-col gap-3 rounded-2xl bg-card p-3 shadow-lg sm:flex-row sm:items-center"
    >
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Tên công việc, kỹ năng, công ty"
          className="h-12 border-0 bg-transparent pl-10 text-base focus-visible:ring-0"
          aria-label="Từ khóa tìm kiếm"
        />
      </div>
      <div className="hidden h-8 w-px bg-border sm:block" />
      <div className="relative sm:w-56">
        <MapPin className="absolute left-3 top-1/2 z-10 size-5 -translate-y-1/2 text-muted-foreground" />
        <Select value={loc} onValueChange={setLoc}>
          <SelectTrigger className="h-12 border-0 bg-transparent pl-10 text-base focus:ring-0">
            <SelectValue placeholder="Địa điểm" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả địa điểm</SelectItem>
            {locations.map((l) => (
              <SelectItem key={l} value={l}>
                {l}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" size="lg" className="h-12 px-8 text-base">
        Tìm việc
      </Button>
    </form>
  )
}
