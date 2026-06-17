import Link from "next/link"
import { MapPin, Users, BadgeCheck, Briefcase } from "lucide-react"
import { CompanyLogo } from "@/components/company-logo"
import type { Company } from "@/lib/mock-data"

export function CompanyCard({ company }: { company: Company }) {
  return (
    <Link
      href={`/companies/${company.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <CompanyLogo name={company.name} className="size-14 text-lg" />
        <div className="min-w-0">
          <h3 className="flex items-center gap-1 truncate font-semibold text-foreground group-hover:text-primary">
            {company.name}
            {company.verified && <BadgeCheck className="size-4 shrink-0 text-primary" />}
          </h3>
          <p className="truncate text-sm text-muted-foreground">{company.industry}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <MapPin className="size-3.5" />
          {company.location}
        </span>
        <span className="inline-flex items-center gap-1">
          <Users className="size-3.5" />
          {company.size}
        </span>
      </div>
      <div className="mt-4 inline-flex w-fit items-center gap-1 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
        <Briefcase className="size-3.5" />
        {company.openJobs} việc làm đang tuyển
      </div>
    </Link>
  )
}
