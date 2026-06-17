import Link from 'next/link'
import { Briefcase, Mail, Phone, MapPin } from 'lucide-react'
import { categories } from '@/lib/mock-data'

const columns = [
  {
    title: 'Về JobHub',
    links: [
      { label: 'Giới thiệu', href: '#' },
      { label: 'Liên hệ', href: '#' },
      { label: 'Tuyển dụng', href: '/jobs' },
      { label: 'Cẩm nang nghề nghiệp', href: '/articles' },
    ],
  },
  {
    title: 'Hỗ trợ',
    links: [
      { label: 'Trung tâm trợ giúp', href: '#' },
      { label: 'Điều khoản sử dụng', href: '#' },
      { label: 'Chính sách bảo mật', href: '#' },
      { label: 'Câu hỏi thường gặp', href: '#' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Briefcase className="size-5" />
              </span>
              <span className="text-lg font-bold">JobHub</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Nền tảng tuyển dụng kết nối ứng viên và nhà tuyển dụng hàng đầu Việt Nam.
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4" />
                contact@jobhub.vn
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4" />
                1900 1234
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4" />
                Hà Nội, Việt Nam
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-foreground">Ngành nghề phổ biến</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {categories.slice(0, 5).map((c) => (
                <li key={c.name}>
                  <Link
                    href="/jobs"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© 2026 JobHub. Đồ án minh họa — dữ liệu là giả lập.</p>
        </div>
      </div>
    </footer>
  )
}
