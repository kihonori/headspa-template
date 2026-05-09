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
          <div className="text-beauty mb-10 text-center md:mb-11">
            <p className="text-sm tracking-[0.1em] text-gold-light/90 md:text-base md:tracking-[0.12em]">
              <span className="inline-block">5月7日（木）NEW OPEN</span>
            </p>
            <div className="mx-auto mt-6 max-w-md space-y-3.5 px-2 text-[15px] leading-[1.85] tracking-[0.06em] text-foreground/82 md:mt-7 md:text-base md:leading-loose md:tracking-[0.08em]">
              <p className="text-balance text-center">
                <span className="inline-block">数量限定ではございますが</span>
              </p>
              <p className="text-balance text-center">
                <span className="inline-block">ご予約いただいた方へ</span>
              </p>
              <p className="text-balance text-center">
                <span className="inline-block">特典をご用意しております。</span>
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <ReserveCtaButtons />
        </FadeIn>
        <FadeIn delay={0.22}>
          <div className="mx-auto mt-10 max-w-2xl text-center sm:mt-12">
            <p className="text-beauty text-sm leading-relaxed tracking-[0.05em] text-foreground/70 md:text-[15px]">
              Square予約ページにてご希望の日時を選択してご予約いただけます
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
