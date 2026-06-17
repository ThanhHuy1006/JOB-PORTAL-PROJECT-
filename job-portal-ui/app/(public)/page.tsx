import Link from 'next/link'
import Image from 'next/image'
import {
  Code,
  TrendingUp,
  Megaphone,
  Calculator,
  Users,
  Palette,
  Building2,
  Headphones,
  ArrowRight,
  Briefcase,
  MapPin,
} from 'lucide-react'
import { HeroSearch } from '@/components/home/hero-search'
import { JobCard } from '@/components/jobs/job-card'
import { CompanyLogo } from '@/components/company-logo'
import { Button } from '@/components/ui/button'
import {
  jobs,
  companies,
  categories,
  articles,
  locations,
  getJobsByCompany,
} from '@/lib/mock-data'

const iconMap: Record<string, typeof Code> = {
  Code,
  TrendingUp,
  Megaphone,
  Calculator,
  Users,
  Palette,
  Building2,
  Headphones,
}

const stats = [
  { value: '12.500+', label: 'Việc làm đang tuyển' },
  { value: '8.300+', label: 'Công ty uy tín' },
  { value: '150.000+', label: 'Ứng viên' },
  { value: '95%', label: 'Tỷ lệ hài lòng' },
]

export default function HomePage() {
  const featured = jobs.filter((j) => j.featured)
  const latest = [...jobs].sort((a, b) => b.postedAt.localeCompare(a.postedAt)).slice(0, 6)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20 lg:px-8">
          <div>
            <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              Nền tảng tuyển dụng #1 Việt Nam
            </span>
            <h1 className="mt-4 text-pretty text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Tìm công việc <span className="text-primary">mơ ước</span> của bạn ngay hôm nay
            </h1>
            <p className="mt-4 max-w-lg text-pretty text-lg text-muted-foreground">
              Khám phá hàng nghìn cơ hội việc làm từ các công ty hàng đầu. Ứng tuyển nhanh chóng và
              theo dõi hồ sơ dễ dàng.
            </p>
            <div className="mt-8">
              <HeroSearch />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span>Phổ biến:</span>
              {['Developer', 'Designer', 'Marketing', 'Kế toán'].map((t) => (
                <Link
                  key={t}
                  href={`/jobs?q=${t}`}
                  className="rounded-full border border-border bg-card px-3 py-1 transition-colors hover:border-primary hover:text-primary"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="/hero-jobs.png"
              alt="Minh họa môi trường làm việc hiện đại"
              width={640}
              height={480}
              className="rounded-2xl object-cover shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading title="Ngành nghề phổ biến" subtitle="Khám phá cơ hội theo lĩnh vực" />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => {
            const Icon = iconMap[c.icon] ?? Briefcase
            return (
              <Link
                key={c.name}
                href="/jobs"
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.jobs} việc làm</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Featured jobs */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            title="Việc làm nổi bật"
            subtitle="Những cơ hội tốt nhất dành cho bạn"
            href="/jobs"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featured.map((j) => (
              <JobCard key={j.id} job={j} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured companies */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          title="Công ty nổi bật"
          subtitle="Nhà tuyển dụng hàng đầu đang tìm kiếm bạn"
          href="/companies"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {companies.slice(0, 6).map((c) => (
            <Link
              key={c.id}
              href={`/companies/${c.slug}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-md"
            >
              <CompanyLogo name={c.name} className="size-14 text-lg" />
              <div className="min-w-0">
                <p className="truncate font-semibold">{c.name}</p>
                <p className="truncate text-sm text-muted-foreground">{c.industry}</p>
                <p className="mt-1 text-xs font-medium text-primary">
                  {getJobsByCompany(c.id).length} việc làm đang tuyển
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest jobs + locations */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeading title="Việc làm mới nhất" href="/jobs" />
              <div className="mt-6 grid gap-4">
                {latest.slice(0, 4).map((j) => (
                  <JobCard key={j.id} job={j} />
                ))}
              </div>
            </div>
            <div>
              <SectionHeading title="Việc làm theo địa điểm" />
              <div className="mt-6 flex flex-col gap-3">
                {locations.map((l) => (
                  <Link
                    key={l}
                    href={`/jobs?location=${encodeURIComponent(l)}`}
                    className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-medium">
                      <MapPin className="size-4 text-primary" />
                      {l}
                    </span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          title="Cẩm nang nghề nghiệp"
          subtitle="Lời khuyên hữu ích cho hành trình sự nghiệp"
          href="/articles"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.id}
              href={`/articles/${a.slug}`}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-md"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <Image
                  src={a.cover}
                  alt={a.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-primary">{a.category}</span>
                <h3 className="mt-2 line-clamp-2 font-semibold group-hover:text-primary">
                  {a.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{a.excerpt}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {a.author} · {a.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-primary-foreground">
            Bạn là nhà tuyển dụng?
          </h2>
          <p className="max-w-xl text-pretty text-primary-foreground/80">
            Đăng tin tuyển dụng và tiếp cận hàng trăm nghìn ứng viên chất lượng trên JobHub.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/register?role=recruiter">Đăng tin tuyển dụng ngay</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

function SectionHeading({
  title,
  subtitle,
  href,
}: {
  title: string
  subtitle?: string
  href?: string
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-1 text-muted-foreground">{subtitle}</p>}
      </div>
      {href && (
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Xem tất cả <ArrowRight className="size-4" />
        </Link>
      )}
    </div>
  )
}
