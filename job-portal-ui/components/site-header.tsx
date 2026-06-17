'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Briefcase,
  Search,
  Bell,
  Menu,
  ChevronDown,
  User,
  Building2,
  Shield,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/jobs', label: 'Việc làm' },
  { href: '/companies', label: 'Công ty' },
  { href: '/articles', label: 'Cẩm nang' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Briefcase className="size-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">JobHub</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <form
          action="/jobs"
          className="ml-auto hidden flex-1 items-center md:flex md:max-w-xs lg:max-w-sm"
        >
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              name="q"
              placeholder="Tìm việc làm, công ty..."
              className="pl-9"
              aria-label="Tìm kiếm việc làm"
            />
          </div>
        </form>

        <div className="ml-auto flex items-center gap-2 md:ml-2">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hidden md:inline-flex"
            aria-label="Thông báo"
          >
            <Link href="/candidate/notifications">
              <Bell className="size-5" />
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="hidden gap-1 md:inline-flex">
                Trải nghiệm Demo
                <ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Vào dashboard theo vai trò</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/candidate/dashboard">
                  <User className="mr-2 size-4" /> Ứng viên
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/recruiter/dashboard">
                  <Building2 className="mr-2 size-4" /> Nhà tuyển dụng
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admin/dashboard">
                  <Shield className="mr-2 size-4" /> Quản trị viên
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link href="/login">Đăng nhập</Link>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/register">Đăng ký</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Mở menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="px-1">Menu</SheetTitle>
              <div className="mt-4 flex flex-col gap-1">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="my-2 h-px bg-border" />
                <MobileLink href="/login" onClick={() => setOpen(false)}>
                  Đăng nhập
                </MobileLink>
                <MobileLink href="/register" onClick={() => setOpen(false)}>
                  Đăng ký
                </MobileLink>
                <div className="my-2 h-px bg-border" />
                <p className="px-3 py-1 text-xs font-medium uppercase text-muted-foreground">
                  Dashboard demo
                </p>
                <MobileLink href="/candidate/dashboard" onClick={() => setOpen(false)}>
                  Ứng viên
                </MobileLink>
                <MobileLink href="/recruiter/dashboard" onClick={() => setOpen(false)}>
                  Nhà tuyển dụng
                </MobileLink>
                <MobileLink href="/admin/dashboard" onClick={() => setOpen(false)}>
                  Quản trị viên
                </MobileLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MobileLink({
  href,
  onClick,
  children,
  className,
}: {
  href: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn('rounded-md px-3 py-2 text-sm font-medium hover:bg-muted', className)}
    >
      {children}
    </Link>
  )
}
