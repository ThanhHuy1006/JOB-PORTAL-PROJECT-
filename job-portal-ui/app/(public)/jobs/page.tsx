"use client"

import { useMemo, useState } from "react"
import { Search, MapPin, SlidersHorizontal } from "lucide-react"
import { JobCard } from "@/components/jobs/job-card"
import { JobFilters, emptyFilters, type JobFilterState } from "@/components/jobs/job-filters"
import { EmptyState } from "@/components/empty-state"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { jobs } from "@/lib/mock-data"

function salaryInRange(salaryMin: number, ranges: string[]) {
  if (ranges.length === 0) return true
  return ranges.some((r) => {
    const [min, max] = r.split("-").map(Number)
    return salaryMin >= min && salaryMin < max
  })
}

export default function JobsPage() {
  const [keyword, setKeyword] = useState("")
  const [location, setLocation] = useState("all")
  const [sort, setSort] = useState("newest")
  const [filters, setFilters] = useState<JobFilterState>(emptyFilters)

  const filtered = useMemo(() => {
    const result = jobs.filter((job) => {
      if (keyword && !job.title.toLowerCase().includes(keyword.toLowerCase())) return false
      if (location !== "all" && job.location !== location) return false
      if (filters.categories.length && !filters.categories.includes(job.category)) return false
      if (filters.levels.length && !filters.levels.includes(job.level)) return false
      if (filters.types.length && !filters.types.includes(job.type)) return false
      if (filters.workModes.length && !filters.workModes.includes(job.workMode)) return false
      if (filters.locations.length && !filters.locations.includes(job.location)) return false
      if (!salaryInRange(job.salaryMin, filters.salary)) return false
      return true
    })

    if (sort === "salary") result.sort((a, b) => b.salaryMin - a.salaryMin)
    else if (sort === "newest") result.sort((a, b) => b.postedAt.localeCompare(a.postedAt))
    else if (sort === "popular") result.sort((a, b) => b.applicants - a.applicants)
    return result
  }, [keyword, location, sort, filters])

  return (
    <div className="bg-secondary/40">
      {/* Search bar */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Chức danh, kỹ năng hoặc công ty"
                className="h-11 pl-9"
              />
            </div>
            <div className="relative sm:w-56">
              <MapPin className="absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-muted-foreground" />
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="h-11 pl-9">
                  <SelectValue placeholder="Địa điểm" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả địa điểm</SelectItem>
                  {["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Cần Thơ", "Bình Dương"].map((l) => (
                    <SelectItem key={l} value={l}>
                      {l}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button className="h-11 px-8">Tìm kiếm</Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex gap-6">
          {/* Desktop filters */}
          <aside className="hidden w-72 shrink-0 lg:block">
            <JobFilters value={filters} onChange={setFilters} />
          </aside>

          <div className="min-w-0 flex-1">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">
                Tìm thấy <span className="font-semibold text-foreground">{filtered.length}</span> việc làm
              </p>
              <div className="flex items-center gap-2">
                {/* Mobile filter trigger */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden">
                      <SlidersHorizontal className="size-4" />
                      Lọc
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 overflow-y-auto p-0">
                    <SheetHeader className="sr-only">
                      <SheetTitle>Bộ lọc việc làm</SheetTitle>
                    </SheetHeader>
                    <div className="p-4">
                      <JobFilters value={filters} onChange={setFilters} />
                    </div>
                  </SheetContent>
                </Sheet>
                <Select value={sort} onValueChange={setSort}>
                  <SelectTrigger className="h-9 w-40 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Mới nhất</SelectItem>
                    <SelectItem value="salary">Lương cao nhất</SelectItem>
                    <SelectItem value="popular">Phổ biến nhất</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filtered.length > 0 ? (
              <div className="flex flex-col gap-3">
                {filtered.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <EmptyState
                title="Không tìm thấy việc làm phù hợp"
                description="Thử điều chỉnh từ khóa hoặc bộ lọc để xem thêm kết quả."
                action={
                  <Button
                    variant="outline"
                    onClick={() => {
                      setKeyword("")
                      setLocation("all")
                      setFilters(emptyFilters)
                    }}
                  >
                    Đặt lại bộ lọc
                  </Button>
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
