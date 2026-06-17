import Link from "next/link"
import { notFound } from "next/navigation"
import {
  MapPin,
  Briefcase,
  Clock,
  Wallet,
  Users,
  CalendarClock,
  Eye,
  GraduationCap,
  Building2,
  CheckCircle2,
  ChevronRight,
} from "lucide-react"
import { CompanyLogo } from "@/components/company-logo"
import { JobCard } from "@/components/jobs/job-card"
import { ApplyDialog } from "@/components/jobs/apply-dialog"
import { SaveJobButton } from "@/components/jobs/save-job-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { getJob, getCompany, getSimilarJobs } from "@/lib/mock-data"

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const job = getJob(id)
  if (!job) notFound()
  const company = getCompany(job.companyId)
  const similar = getSimilarJobs(job)

  const meta = [
    { icon: Wallet, label: "Mức lương", value: job.salary, accent: true },
    { icon: MapPin, label: "Địa điểm", value: job.location },
    { icon: Briefcase, label: "Kinh nghiệm", value: job.experience },
    { icon: GraduationCap, label: "Cấp bậc", value: job.level },
  ]

  return (
    <div className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Trang chủ</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/jobs">Việc làm</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-[200px] truncate">{job.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Header card */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <CompanyLogo name={company?.name ?? job.title} className="size-16 text-xl" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-2">
                    <h1 className="text-balance text-2xl font-bold text-foreground">{job.title}</h1>
                    {job.featured && (
                      <Badge className="mt-1 shrink-0 bg-accent text-accent-foreground hover:bg-accent">
                        Nổi bật
                      </Badge>
                    )}
                  </div>
                  <Link
                    href={`/companies/${company?.slug}`}
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    <Building2 className="size-4" />
                    {company?.name}
                  </Link>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {meta.map((m) => (
                  <div key={m.label} className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                      <m.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{m.label}</p>
                      <p className={`font-semibold ${m.accent ? "text-emerald-600" : "text-foreground"}`}>
                        {m.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ApplyDialog jobTitle={job.title} className="flex-1" />
                <SaveJobButton />
              </div>

              <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarClock className="size-3.5" />
                Hạn nộp hồ sơ: {new Date(job.deadline).toLocaleDateString("vi-VN")}
              </p>
            </div>

            {/* Description */}
            <div className="mt-6 rounded-xl border border-border bg-card p-6">
              <Section title="Mô tả công việc">
                <p className="leading-relaxed text-muted-foreground">{job.description}</p>
              </Section>

              <Section title="Yêu cầu ứng viên">
                <ul className="flex flex-col gap-2">
                  {job.requirements.map((r) => (
                    <li key={r} className="flex gap-2 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Quyền lợi">
                <ul className="flex flex-col gap-2">
                  {job.benefits.map((b) => (
                    <li key={b} className="flex gap-2 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Kỹ năng" last>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((s) => (
                    <Badge key={s} variant="secondary" className="font-normal">
                      {s}
                    </Badge>
                  ))}
                </div>
              </Section>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <CompanyLogo name={company?.name ?? ""} className="size-12" />
                <div className="min-w-0">
                  <Link href={`/companies/${company?.slug}`} className="font-semibold text-foreground hover:text-primary">
                    {company?.name}
                  </Link>
                  <p className="truncate text-xs text-muted-foreground">{company?.industry}</p>
                </div>
              </div>
              <dl className="mt-4 flex flex-col gap-3 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Quy mô</dt>
                  <dd className="font-medium text-foreground">{company?.size}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Lĩnh vực</dt>
                  <dd className="font-medium text-foreground">{company?.industry}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Địa điểm</dt>
                  <dd className="font-medium text-foreground">{company?.location}</dd>
                </div>
              </dl>
              <Button asChild variant="outline" className="mt-4 w-full bg-transparent">
                <Link href={`/companies/${company?.slug}`}>
                  Xem công ty
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Thống kê tin tuyển dụng</h3>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <Stat icon={Eye} value={job.views} label="Lượt xem" />
                <Stat icon={Users} value={job.applicants} label="Ứng tuyển" />
                <Stat icon={Clock} value={job.quantity} label="Cần tuyển" />
              </div>
            </div>
          </aside>
        </div>

        {/* Similar jobs */}
        {similar.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-4 text-xl font-bold text-foreground">Việc làm tương tự</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {similar.map((j) => (
                <JobCard key={j.id} job={j} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

function Section({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={last ? "" : "mb-6 border-b border-border pb-6"}>
      <h2 className="mb-3 text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </div>
  )
}

function Stat({ icon: Icon, value, label }: { icon: typeof Eye; value: number; label: string }) {
  return (
    <div className="rounded-lg bg-secondary p-3">
      <Icon className="mx-auto size-4 text-primary" />
      <p className="mt-1 font-bold text-foreground">{value.toLocaleString("vi-VN")}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}
