import Link from "next/link"
import { Send, Eye, Bookmark, CalendarDays, ArrowRight, TrendingUp } from "lucide-react"
import { PageHeader, StatCard, Panel } from "@/components/dashboard/widgets"
import { StatusBadge } from "@/components/status-badge"
import { CompanyLogo } from "@/components/company-logo"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { applications, getJob, getCompany, interviews } from "@/lib/mock-data"

export default function CandidateOverview() {
  const recent = applications.slice(0, 4)
  const upcoming = interviews.slice(0, 2)

  return (
    <div>
      <PageHeader title="Xin chào, An!" description="Đây là tổng quan hoạt động tìm việc của bạn." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Send} label="Đã ứng tuyển" value={5} trend="+2 trong tuần này" />
        <StatCard icon={Eye} label="Lượt xem hồ sơ" value={128} trend="+18% so với tuần trước" tone="emerald" />
        <StatCard icon={Bookmark} label="Việc đã lưu" value={9} tone="amber" />
        <StatCard icon={CalendarDays} label="Phỏng vấn" value={2} trend="Sắp tới" tone="rose" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Panel
            title="Hồ sơ ứng tuyển gần đây"
            action={
              <Button asChild variant="ghost" size="sm" className="text-primary">
                <Link href="/candidate/applications">
                  Xem tất cả <ArrowRight className="size-4" />
                </Link>
              </Button>
            }
          >
            <div className="flex flex-col divide-y divide-border">
              {recent.map((app) => {
                const job = getJob(app.jobId)
                const company = getCompany(job?.companyId ?? "")
                return (
                  <div key={app.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                    <CompanyLogo name={company?.name ?? ""} className="size-11" />
                    <div className="min-w-0 flex-1">
                      <Link href={`/jobs/${job?.id}`} className="truncate font-medium text-foreground hover:text-primary">
                        {job?.title}
                      </Link>
                      <p className="truncate text-sm text-muted-foreground">{company?.name}</p>
                    </div>
                    <StatusBadge status={app.status} />
                  </div>
                )
              })}
            </div>
          </Panel>
        </div>

        <div className="flex flex-col gap-6">
          <Panel title="Mức độ hoàn thiện hồ sơ">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-foreground">75%</span>
              <TrendingUp className="size-5 text-emerald-600" />
            </div>
            <Progress value={75} className="mt-3" />
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <li>· Thêm kinh nghiệm làm việc</li>
              <li>· Tải lên ảnh đại diện</li>
            </ul>
            <Button asChild variant="outline" size="sm" className="mt-4 w-full bg-transparent">
              <Link href="/candidate/profile">Hoàn thiện hồ sơ</Link>
            </Button>
          </Panel>

          <Panel title="Phỏng vấn sắp tới">
            <div className="flex flex-col gap-3">
              {upcoming.map((iv) => (
                <div key={iv.id} className="rounded-lg border border-border p-3">
                  <p className="font-medium text-foreground">{iv.jobTitle}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {new Date(iv.date).toLocaleDateString("vi-VN")} · {iv.time}
                  </p>
                  <StatusBadge status={iv.status} className="mt-2" />
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  )
}
