"use client"

import { BOOKING_URL, LINE_URL } from "@/lib/site-links"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  /** 長い文言用に少し詰めたパディング */
  compact?: boolean
  variant?: "both" | "web" | "line"
  webLabel?: string
  lineLabel?: string
}

export function ReserveCtaButtons({
  className,
  compact,
  variant = "both",
  webLabel = "WEB予約（空き状況を見る）",
  lineLabel = "LINEで空き状況を見る",
}: Props) {
  const showWeb = variant === "both" || variant === "web"
  const showLine = variant === "both" || variant === "line"

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5",
        className,
      )}
    >
      {showWeb && (
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex min-h-[48px] w-full max-w-[280px] items-center justify-center rounded-full border border-gold bg-gold text-center text-background shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-transparent hover:text-gold",
            compact
              ? "px-4 py-3 text-[11px] leading-snug tracking-[0.08em] sm:px-6 sm:text-sm sm:tracking-[0.14em]"
              : "px-6 py-3 text-sm tracking-[0.12em] sm:tracking-[0.14em]",
          )}
        >
          {webLabel}
        </a>
      )}
      {showLine && (
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex min-h-[48px] w-full max-w-[280px] items-center justify-center rounded-full border border-foreground/40 bg-background/75 text-center text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-gold hover:text-gold",
            compact
              ? "px-4 py-3 text-[11px] leading-snug tracking-[0.08em] sm:px-6 sm:text-sm sm:tracking-[0.14em]"
              : "px-6 py-3 text-sm tracking-[0.12em] sm:tracking-[0.14em]",
          )}
        >
          {lineLabel}
        </a>
      )}
    </div>
  )
}
