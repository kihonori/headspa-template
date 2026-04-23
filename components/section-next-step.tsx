"use client"

import type { ReactNode } from "react"
import { FadeIn } from "@/components/fade-in"
import { cn } from "@/lib/utils"

type Props = {
  /** CTAブロック最上部（見出しより一段小さく・控えめに） */
  introText?: ReactNode
  leadText: string
  children: ReactNode
  className?: string
  preCtaText?: ReactNode[]
  /** ボタン直下の補助文（例：完全予約制の案内） */
  footnote?: ReactNode
  leadClassName?: string
}

export function SectionNextStep({
  introText,
  leadText,
  children,
  className,
  preCtaText,
  footnote,
  leadClassName,
}: Props) {
  return (
    <FadeIn delay={0.06}>
      <div
        className={cn(
          "mx-auto mt-16 max-w-3xl border-t border-border/20 pt-14 text-center md:mt-20 md:pt-16 lg:mt-24 lg:pt-20",
          className,
        )}
      >
        {introText ? (
          <div className="max-w-[340px] mx-auto md:max-w-[640px] space-y-4 text-center mb-8 sm:mb-9 mt-6">
            <p className="text-base md:text-lg leading-relaxed tracking-[0.08em] text-foreground/80">{introText}</p>
          </div>
        ) : null}
        <p
          className={cn(
            "mb-10 mx-auto max-w-3xl break-words whitespace-normal text-2xl leading-tight tracking-[0.02em] text-foreground/88 md:max-w-4xl md:text-4xl lg:text-5xl sm:mb-11",
            leadClassName,
          )}
        >
          {leadText}
        </p>
        {preCtaText?.length ? (
          <div className="max-w-[340px] mx-auto md:max-w-[640px] space-y-4 text-center mb-6 mt-6">
            {preCtaText.map((line) => (
              <p key={String(line)} className="text-base md:text-lg leading-relaxed tracking-[0.08em] text-foreground/80">
                {line}
              </p>
            ))}
          </div>
        ) : null}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          {children}
        </div>
        {footnote ? (
          <div className="max-w-[340px] mx-auto md:max-w-[640px] space-y-4 text-center mt-6">
            <p className="text-base md:text-lg leading-relaxed tracking-[0.08em] text-foreground/80">{footnote}</p>
          </div>
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
