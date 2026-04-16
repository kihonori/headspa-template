"use client"

import type { ReactNode } from "react"
import { FadeIn } from "@/components/fade-in"
import { cn } from "@/lib/utils"

type Props = {
  /** CTAブロック最上部（見出しより一段小さく・控えめに） */
  introText?: string
  leadText: string
  children: ReactNode
  className?: string
  preCtaText?: string[]
  /** ボタン直下の補助文（例：完全予約制の案内） */
  footnote?: string
}

export function SectionNextStep({
  introText,
  leadText,
  children,
  className,
  preCtaText,
  footnote,
}: Props) {
  return (
    <FadeIn delay={0.06}>
      <div
        className={cn(
          "mx-auto mt-16 max-w-xl border-t border-border/20 pt-14 text-center lg:mt-24 lg:pt-20",
          className,
        )}
      >
        {introText ? (
          <p className="mx-auto mb-8 max-w-md text-[11px] leading-[2] tracking-[0.12em] text-foreground/78 sm:mb-9 sm:text-xs sm:tracking-[0.14em]">
            {introText}
          </p>
        ) : null}
        <p className="mb-10 text-sm leading-[2.5] tracking-[0.1em] text-foreground/88 sm:mb-11 sm:text-[15px]">
          {leadText}
        </p>
        {preCtaText?.length ? (
          <div className="mb-5 space-y-1.5 text-center text-[11px] leading-[1.9] tracking-[0.1em] text-foreground/82 sm:text-xs">
            {preCtaText.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ) : null}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          {children}
        </div>
        {footnote ? (
          <p className="mx-auto mt-8 max-w-md text-[11px] leading-[1.9] tracking-[0.14em] text-foreground/75 sm:mt-9 sm:text-xs">
            {footnote}
          </p>
        ) : null}
      </div>
    </FadeIn>
  )
}

export function MenuScrollButton({ className }: { className?: string }) {
  return (
    <a
      href="#menu"
      className={cn(
        "inline-flex min-h-[48px] w-full max-w-[280px] items-center justify-center rounded-full border border-gold bg-transparent px-8 py-3 text-sm tracking-[0.14em] text-gold shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-gold hover:text-background",
        className,
      )}
    >
      メニューを見る
    </a>
  )
}
