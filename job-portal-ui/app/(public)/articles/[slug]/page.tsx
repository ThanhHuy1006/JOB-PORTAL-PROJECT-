import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Clock, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getArticle, articles } from "@/lib/mock-data"

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()
  const related = articles.filter((a) => a.slug !== slug).slice(0, 2)

  return (
    <div className="bg-card">
      <article className="mx-auto max-w-3xl px-4 py-10">
        <Link href="/articles" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="size-4" />
          Quay lại cẩm nang
        </Link>

        <Badge variant="secondary" className="mt-6">
          {article.category}
        </Badge>
        <h1 className="mt-3 text-balance text-3xl font-bold text-foreground">{article.title}</h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{article.author}</span>
          <span>·</span>
          <span>{new Date(article.publishedAt).toLocaleDateString("vi-VN")}</span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" />
            {article.readTime}
          </span>
        </div>

        <div className="relative mt-6 aspect-video overflow-hidden rounded-xl">
          <Image src={article.cover || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        </div>

        <div className="mt-8 flex flex-col gap-5 text-pretty leading-relaxed text-foreground/90">
          <p className="text-lg font-medium text-foreground">{article.excerpt}</p>
          {article.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      <div className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <h2 className="mb-4 text-xl font-bold text-foreground">Bài viết liên quan</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {related.map((a) => (
              <Link
                key={a.id}
                href={`/articles/${a.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative aspect-video">
                  <Image src={a.cover || "/placeholder.svg"} alt={a.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-balance font-semibold text-foreground group-hover:text-primary">{a.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
