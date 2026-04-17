"use client"

import { FadeIn } from "@/components/fade-in"
import { ReserveCtaButtons } from "@/components/reserve-cta-buttons"

export function BottomCtaSection() {
  return (
    <section className="bg-secondary py-10 md:py-16 lg:py-24" aria-label="ご予約">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8 lg:px-10">
        <FadeIn>
          <div className="mx-auto mb-8 max-w-xl space-y-1.5 break-words text-sm leading-relaxed tracking-[0.1em] text-foreground/82 md:text-base sm:mb-10">
            <p>ご予約は30秒で完了します</p>
            <p>ご希望の日時を選ぶだけで簡単予約</p>
            <p>頭皮や育毛のお悩みはLINEからも相談可能</p>
            <p className="pt-1 text-foreground/75">※完全予約制のため事前予約をお願いいたします</p>
          </div>
          <ReserveCtaButtons />
          <p className="mx-auto mt-10 max-w-md break-words text-sm leading-relaxed tracking-[0.12em] text-foreground/70 md:text-base sm:mt-12">
            Square予約ページにて
            <br />
            ご希望の日時を選択してご予約いただけます
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
