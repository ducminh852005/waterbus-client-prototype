const WEEKDAY_LABELS = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];

function parse(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function toIso(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function addDays(dateStr: string, amount: number): string {
  const date = parse(dateStr);
  date.setDate(date.getDate() + amount);
  return toIso(date);
}

export function formatWeekdayLabel(dateStr: string): string {
  return WEEKDAY_LABELS[parse(dateStr).getDay()];
}

export function formatShortDate(dateStr: string): string {
  const date = parse(dateStr);
  return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`;
}

export function formatFullDate(dateStr: string): string {
  const date = parse(dateStr);
  return `${formatWeekdayLabel(dateStr)}, ${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
}
