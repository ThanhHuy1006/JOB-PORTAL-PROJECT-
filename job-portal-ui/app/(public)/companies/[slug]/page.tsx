import Image from "next/image"
import { notFound } from "next/navigation"
import { MapPin, Users, Globe, BadgeCheck, Heart, CheckCircle2 } from "lucide-react"
import { CompanyLogo } from "@/components/company-logo"
import { JobCard } from "@/components/jobs/job-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getCompanyBySlug, getJobsByCompany } from "@/lib/mock-data"

export default async function CompanyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const company = getCompanyBySlug(slug)
  if (!company) notFound()
  const jobs = getJobsByCompany(company.id)

  return (
    <div className="bg-secondary/40">
      {/* Cover */}
      <div className="relative h-48 w-full sm:h-64">
        <Image src={company.cover || "/placeholder.svg"} alt={`Ảnh bìa ${company.name}`} fill className="object-cover" />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="-mt-12 rounded-xl border border-border bg-card p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
              <CompanyLogo name={company.name} className="size-20 rounded-xl text-2xl ring-4 ring-card" />
              <div>
                <h1 className="flex items-center gap-1.5 text-2xl font-bold text-foreground">
                  {company.name}
                  {company.verified && <BadgeCheck className="size-5 text-primary" />}
                </h1>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3.5" />
                    {company.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="size-3.5" />
                    {company.size}
                  </span>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-primary"
                  >
                    <Globe className="size-3.5" />
                    Website
                  </a>
                </div>
              </div>
            </div>
            <Button variant="outline" className="bg-transparent">
              <Heart className="size-4" />
              Theo dõi ({company.followers.toLocaleString("vi-VN")})
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="about" className="mt-6 pb-10">
          <TabsList>
            <TabsTrigger value="about">Giới thiệu</TabsTrigger>
            <TabsTrigger value="jobs">Việc làm ({jobs.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="rounded-xl border border-border bg-card p-6">
                  <h2 className="text-lg font-semibold text-foreground">Về chúng tôi</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{company.about}</p>

                  <h3 className="mt-6 font-semibold text-foreground">Phúc lợi</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {company.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground">Hình ảnh công ty</h3>
                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {company.gallery.map((g, i) => (
                      <div key={i} className="relative aspect-video overflow-hidden rounded-lg">
                        <Image src={g || "/placeholder.svg"} alt={`Văn phòng ${company.name} ${i + 1}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">Thông tin chung</h3>
                <dl className="mt-4 flex flex-col gap-3 text-sm">
                  <Info label="Lĩnh vực" value={company.industry} />
                  <Info label="Quy mô" value={company.size} />
                  <Info label="Địa điểm" value={company.location} />
                  <Info label="Đang tuyển" value={`${company.openJobs} vị trí`} />
                  <Info label="Người theo dõi" value={company.followers.toLocaleString("vi-VN")} />
                </dl>
              </aside>
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="mt-6">
            {jobs.length > 0 ? (
              <div className="grid gap-3 md:grid-cols-2">
                {jobs.map((j) => (
                  <JobCard key={j.id} job={j} />
                ))}
              </div>
            ) : (
              <p className="rounded-xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
                Hiện chưa có vị trí tuyển dụng.
              </p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-medium text-foreground">{value}</dd>
    </div>
  )
}
