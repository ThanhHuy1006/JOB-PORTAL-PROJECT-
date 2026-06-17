"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { categories, locations, type Level, type JobType, type WorkMode } from "@/lib/mock-data"

export const LEVELS: Level[] = ["Thực tập sinh", "Nhân viên", "Trưởng nhóm", "Quản lý", "Giám đốc"]
export const JOB_TYPES: JobType[] = ["Toàn thời gian", "Bán thời gian", "Thực tập", "Freelance"]
export const WORK_MODES: WorkMode[] = ["Tại văn phòng", "Từ xa", "Linh hoạt"]
export const SALARY_RANGES = [
  { id: "0-10", label: "Dưới 10 triệu" },
  { id: "10-20", label: "10 - 20 triệu" },
  { id: "20-30", label: "20 - 30 triệu" },
  { id: "30-100", label: "Trên 30 triệu" },
]

export interface JobFilterState {
  categories: string[]
  levels: Level[]
  types: JobType[]
  workModes: WorkMode[]
  locations: string[]
  salary: string[]
}

export const emptyFilters: JobFilterState = {
  categories: [],
  levels: [],
  types: [],
  workModes: [],
  locations: [],
  salary: [],
}

interface JobFiltersProps {
  value: JobFilterState
  onChange: (value: JobFilterState) => void
}

export function JobFilters({ value, onChange }: JobFiltersProps) {
  function toggle<T extends string>(key: keyof JobFilterState, item: T) {
    const list = value[key] as T[]
    const next = list.includes(item) ? list.filter((i) => i !== item) : [...list, item]
    onChange({ ...value, [key]: next })
  }

  const activeCount =
    value.categories.length +
    value.levels.length +
    value.types.length +
    value.workModes.length +
    value.locations.length +
    value.salary.length

  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h2 className="font-semibold text-card-foreground">Bộ lọc</h2>
        {activeCount > 0 && (
          <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => onChange(emptyFilters)}>
            Xóa lọc ({activeCount})
          </Button>
        )}
      </div>
      <Accordion type="multiple" defaultValue={["cat", "level", "type", "mode", "loc", "salary"]} className="px-4">
        <FilterGroup
          id="cat"
          label="Ngành nghề"
          items={categories.map((c) => ({ value: c.name, label: c.name }))}
          selected={value.categories}
          onToggle={(v) => toggle("categories", v)}
        />
        <FilterGroup
          id="level"
          label="Cấp bậc"
          items={LEVELS.map((l) => ({ value: l, label: l }))}
          selected={value.levels}
          onToggle={(v) => toggle("levels", v as Level)}
        />
        <FilterGroup
          id="type"
          label="Hình thức"
          items={JOB_TYPES.map((t) => ({ value: t, label: t }))}
          selected={value.types}
          onToggle={(v) => toggle("types", v as JobType)}
        />
        <FilterGroup
          id="mode"
          label="Nơi làm việc"
          items={WORK_MODES.map((m) => ({ value: m, label: m }))}
          selected={value.workModes}
          onToggle={(v) => toggle("workModes", v as WorkMode)}
        />
        <FilterGroup
          id="loc"
          label="Địa điểm"
          items={locations.map((l) => ({ value: l, label: l }))}
          selected={value.locations}
          onToggle={(v) => toggle("locations", v)}
        />
        <FilterGroup
          id="salary"
          label="Mức lương"
          items={SALARY_RANGES.map((s) => ({ value: s.id, label: s.label }))}
          selected={value.salary}
          onToggle={(v) => toggle("salary", v)}
          last
        />
      </Accordion>
    </div>
  )
}

function FilterGroup({
  id,
  label,
  items,
  selected,
  onToggle,
  last,
}: {
  id: string
  label: string
  items: { value: string; label: string }[]
  selected: string[]
  onToggle: (v: string) => void
  last?: boolean
}) {
  return (
    <AccordionItem value={id} className={last ? "border-b-0" : ""}>
      <AccordionTrigger className="text-sm font-medium">{label}</AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-2.5 pb-2">
          {items.map((item) => (
            <Label
              key={item.value}
              className="flex cursor-pointer items-center gap-2.5 text-sm font-normal text-muted-foreground hover:text-foreground"
            >
              <Checkbox checked={selected.includes(item.value)} onCheckedChange={() => onToggle(item.value)} />
              {item.label}
            </Label>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
