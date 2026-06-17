import Link from "next/link"
import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { articles } from "@/lib/mock-data"

export default function ArticlesPage() {
  const [featured, ...rest] = articles

  return (
    <div className="bg-secondary/40">
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-4 py-10 text-center">
          <h1 className="text-balance text-3xl font-bold text-foreground">Cẩm nang nghề nghiệp</h1>
          <p className="mt-2 text-muted-foreground">
            Kiến thức, kinh nghiệm và lời khuyên hữu ích cho hành trình sự nghiệp của bạn
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Featured */}
        <Link
          href={`/articles/${featured.slug}`}
          className="group grid overflow-hidden rounded-xl border border-border bg-card md:grid-cols-2"
        >
          <div className="relative aspect-video md:aspect-auto">
            <Image src={featured.cover || "/placeholder.svg"} alt={featured.title} fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-center p-6">
            <Badge variant="secondary" className="w-fit">
              {featured.category}
            </Badge>
            <h2 className="mt-3 text-balance text-xl font-bold text-foreground group-hover:text-primary">
              {featured.title}
            </h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
              <span>{featured.author}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" />
                {featured.readTime}
              </span>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <Link
              key={a.id}
              href={`/articles/${a.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="relative aspect-video">
                <Image src={a.cover || "/placeholder.svg"} alt={a.title} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <Badge variant="secondary" className="w-fit">
                  {a.category}
                </Badge>
                <h3 className="mt-3 text-balance font-semibold text-foreground group-hover:text-primary">
                  {a.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                <div className="mt-auto pt-4 text-sm font-medium text-primary">
                  <span className="inline-flex items-center gap-1">
                    Đọc tiếp
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
