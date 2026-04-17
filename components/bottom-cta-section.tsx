"use client"

import { FadeIn } from "@/components/fade-in"
import { ReserveCtaButtons } from "@/components/reserve-cta-buttons"

export function BottomCtaSection() {
  return (
    <section className="bg-secondary py-10 md:py-16 lg:py-24" aria-label="ご予約">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8 lg:px-10">
        <FadeIn>
          <div className="mx-auto mb-8 max-w-xl space-y-1.5 break-words text-sm leading-relaxed tracking-[0.1em] text-foreground/82 md:text-base sm:mb-10">
            <p className="text-gold-light/90">5月7日（木）オープン / 先行予約受付中</p>
            <p>現在オープン前につき、Square予約にて先行予約を承っております。</p>
            <p>当店は完全個室のため、周りを気にせずリラックスしていただけます。</p>
            <p className="pt-1 text-foreground/75">※完全予約制のため事前予約をお願いいたします</p>
          </div>
          <ReserveCtaButtons webLabel="Squareで先行予約する" lineLabel="LINEで相談する" />
          <p className="mx-auto mt-10 max-w-md break-words text-sm leading-relaxed tracking-[0.12em] text-foreground/70 md:text-base sm:mt-12">
            先行予約限定の特典をご用意しております。ご予約はSquareから、ご相談はLINEからお気軽にご連絡ください。
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
