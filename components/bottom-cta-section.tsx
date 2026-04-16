"use client"

import { FadeIn } from "@/components/fade-in"
import { ReserveCtaButtons } from "@/components/reserve-cta-buttons"

export function BottomCtaSection() {
  return (
    <section className="bg-secondary py-20 lg:py-24" aria-label="ご予約">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <FadeIn>
          <div className="mx-auto mb-8 max-w-xl space-y-1.5 text-[11px] leading-[1.9] tracking-[0.1em] text-foreground/82 sm:mb-10 sm:text-xs">
            <p>ご予約は30秒で完了します</p>
            <p>ご希望の日時を選ぶだけで簡単予約</p>
            <p>頭皮や育毛のお悩みはLINEからも相談可能</p>
            <p className="pt-1 text-foreground/75">※完全予約制のため事前予約をお願いいたします</p>
          </div>
          <ReserveCtaButtons />
          <p className="mx-auto mt-10 max-w-md text-[11px] leading-[2] tracking-[0.12em] text-foreground/70 sm:mt-12 sm:text-xs">
            Square予約ページにて
            <br />
            ご希望の日時を選択してご予約いただけます
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
