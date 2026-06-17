"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { CompanyCard } from "@/components/companies/company-card"
import { EmptyState } from "@/components/empty-state"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { companies } from "@/lib/mock-data"

export default function CompaniesPage() {
  const [keyword, setKeyword] = useState("")
  const [industry, setIndustry] = useState("all")

  const industries = useMemo(() => Array.from(new Set(companies.map((c) => c.industry))), [])

  const filtered = companies.filter((c) => {
    if (keyword && !c.name.toLowerCase().includes(keyword.toLowerCase())) return false
    if (industry !== "all" && c.industry !== industry) return false
    return true
  })

  return (
    <div className="bg-secondary/40">
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <h1 className="text-balance text-3xl font-bold text-foreground">Khám phá các công ty hàng đầu</h1>
          <p className="mt-2 text-muted-foreground">Tìm hiểu về môi trường làm việc và cơ hội nghề nghiệp</p>
          <div className="mx-auto mt-6 flex max-w-2xl flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Tên công ty"
                className="h-11 pl-9"
              />
            </div>
            <Select value={industry} onValueChange={setIndustry}>
              <SelectTrigger className="h-11 sm:w-56">
                <SelectValue placeholder="Lĩnh vực" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả lĩnh vực</SelectItem>
                {industries.map((i) => (
                  <SelectItem key={i} value={i}>
                    {i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="mb-4 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{filtered.length}</span> công ty
        </p>
        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <CompanyCard key={c.id} company={c} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Không tìm thấy công ty"
            description="Thử thay đổi từ khóa tìm kiếm hoặc lĩnh vực."
            action={
              <Button
                variant="outline"
                onClick={() => {
                  setKeyword("")
                  setIndustry("all")
                }}
              >
                Đặt lại
              </Button>
            }
          />
        )}
      </div>
    </div>
  )
}
