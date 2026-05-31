import type { Availability } from "@/lib/content";

const statusClasses: Record<Availability, string> = {
  Available: "border-emerald-400/35 bg-emerald-400/10 text-emerald-200",
  Limited: "border-amber-300/35 bg-amber-300/10 text-amber-100",
  "Pre-order": "border-sky-300/35 bg-sky-300/10 text-sky-100"
};

export function StatusBadge({ status }: { status: Availability }) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[status]}`}>
      {status}
    </span>
  );
}
