import { cn } from '@/lib/utils'

const palette = [
  'bg-blue-600',
  'bg-emerald-600',
  'bg-orange-500',
  'bg-rose-500',
  'bg-cyan-600',
  'bg-indigo-600',
]

function colorFor(name: string) {
  const sum = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return palette[sum % palette.length]
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function CompanyLogo({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center rounded-lg font-semibold text-white',
        colorFor(name),
        className,
      )}
      aria-hidden="true"
    >
      {initials(name)}
    </div>
  )
}
