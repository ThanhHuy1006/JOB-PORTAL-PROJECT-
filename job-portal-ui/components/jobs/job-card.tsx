'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MapPin, Briefcase, Clock, DollarSign, Bookmark } from 'lucide-react'
import { CompanyLogo } from '@/components/company-logo'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { getCompany, type Job } from '@/lib/mock-data'

export function JobCard({ job }: { job: Job }) {
  const company = getCompany(job.companyId)
  const [saved, setSaved] = useState(false)

  return (
    <div className="group relative flex gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md">
      <CompanyLogo name={company?.name ?? job.title} className="size-14 text-lg" />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate font-semibold text-foreground">
              <Link href={`/jobs/${job.id}`} className="hover:text-primary">
                <span className="absolute inset-0" aria-hidden="true" />
                {job.title}
              </Link>
            </h3>
            <p className="truncate text-sm text-muted-foreground">{company?.name}</p>
          </div>
          {job.featured && (
            <Badge className="relative z-10 shrink-0 bg-accent text-accent-foreground hover:bg-accent">
              Nổi bật
            </Badge>
          )}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1 font-medium text-emerald-600">
            <DollarSign className="size-3.5" />
            {job.salary}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3.5" />
            {job.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <Briefcase className="size-3.5" />
            {job.experience}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" />
            {job.type}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {job.skills.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setSaved((v) => !v)}
        aria-label={saved ? 'Bỏ lưu việc làm' : 'Lưu việc làm'}
        className="relative z-10 self-start text-muted-foreground transition-colors hover:text-primary"
      >
        <Bookmark className={cn('size-5', saved && 'fill-primary text-primary')} />
      </button>
    </div>
  )
}
