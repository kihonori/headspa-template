"use client"

import { FadeIn } from "@/components/fade-in"
import { ReserveCtaButtons } from "@/components/reserve-cta-buttons"

export function BookingCtaSection() {
  return (
    <section className="bg-background py-10 md:py-16 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8 lg:px-10">
        <FadeIn>
          <h2 className="mb-8 break-words text-2xl tracking-[0.16em] text-gold/80 md:text-4xl">
            ご予約はこちら
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="text-beauty space-y-4 md:space-y-6 text-center mb-10">
            <p>ご予約は30秒で完了します</p>
            <p>ご希望の日時を選ぶだけで簡単予約</p>
            <p>頭皮や育毛のお悩みはLINEからも相談可能</p>
            <p className="pt-1 text-foreground/75">※完全予約制のため事前予約をお願いいたします</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <ReserveCtaButtons />
        </FadeIn>
        <FadeIn delay={0.22}>
          <div className="text-beauty space-y-4 md:space-y-6 text-center mt-10 sm:mt-12">
            <p className="text-beauty break-words text-foreground/70">
              Square予約ページにてご希望の日時を選択してご予約いただけます
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
