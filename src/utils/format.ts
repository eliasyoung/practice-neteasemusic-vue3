export function formatPlayCount(count: number): string {
  return count < 100000 ? count.toString() : Math.round(count / 10000) + "万";
}
