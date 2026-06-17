import { cn } from '@/lib/utils'

const styles: Record<string, string> = {
  // Application statuses
  'Đã gửi': 'bg-slate-100 text-slate-700',
  'Đã xem': 'bg-blue-100 text-blue-700',
  'Đang xem xét': 'bg-amber-100 text-amber-700',
  'Phỏng vấn': 'bg-violet-100 text-violet-700',
  'Đã tuyển': 'bg-emerald-100 text-emerald-700',
  'Không phù hợp': 'bg-rose-100 text-rose-700',
  'Đã rút': 'bg-slate-100 text-slate-500',
  // Job statuses
  'Bản nháp': 'bg-slate-100 text-slate-600',
  'Chờ duyệt': 'bg-amber-100 text-amber-700',
  'Đang tuyển': 'bg-emerald-100 text-emerald-700',
  'Bị từ chối': 'bg-rose-100 text-rose-700',
  'Tạm ẩn': 'bg-slate-100 text-slate-600',
  'Hết hạn': 'bg-orange-100 text-orange-700',
  'Đã đóng': 'bg-slate-200 text-slate-700',
  // User / verification statuses
  'Hoạt động': 'bg-emerald-100 text-emerald-700',
  'Đã khóa': 'bg-rose-100 text-rose-700',
  'Chờ xác minh': 'bg-amber-100 text-amber-700',
  'Đã duyệt': 'bg-emerald-100 text-emerald-700',
  // Report / log statuses
  'Chưa xử lý': 'bg-rose-100 text-rose-700',
  'Đang xử lý': 'bg-amber-100 text-amber-700',
  'Đã xử lý': 'bg-emerald-100 text-emerald-700',
  'Thành công': 'bg-emerald-100 text-emerald-700',
  'Thất bại': 'bg-rose-100 text-rose-700',
  // Interview statuses
  'Đã xác nhận': 'bg-emerald-100 text-emerald-700',
  'Hoàn thành': 'bg-blue-100 text-blue-700',
  'Đã hủy': 'bg-rose-100 text-rose-700',
}

export function StatusBadge({
  status,
  className,
}: {
  status: string
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        styles[status] ?? 'bg-slate-100 text-slate-700',
        className,
      )}
    >
      {status}
    </span>
  )
}
