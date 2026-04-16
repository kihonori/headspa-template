import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

/** 育毛コース用：#C9A96E 基調の控えめラベル */
export function ScalpTierBadge({ children }: Props) {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-[#C9A96E]/35 bg-[#C9A96E]/10 px-2.5 py-1 text-[7px] font-medium tracking-[0.14em] text-[#C9A96E] sm:px-3 sm:py-1 sm:text-[8px] sm:tracking-[0.16em]">
      {children}
    </span>
  )
}
