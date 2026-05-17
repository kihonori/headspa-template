"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { ReserveCtaButtons } from "@/components/reserve-cta-buttons"

export function NightRelaxation() {
  return (
    <FadeIn delay={0.1}>
      <div className="relative mt-12 overflow-hidden border border-border/30 md:mt-16 lg:mt-20">
        <Image
          src="/images/store-interior-new.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 1024px"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/72 md:bg-black/68" />

        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-5 py-14 text-center sm:px-8 md:py-20 lg:py-24">
          <p className="text-[10px] tracking-[0.38em] text-gold/70 sm:text-[11px]">
            FRIDAY &amp; SATURDAY LIMITED
          </p>

          <h3 className="mt-5 text-balance text-xl font-medium tracking-[0.14em] text-gold sm:text-2xl md:tracking-[0.18em] lg:text-[1.65rem]">
            <span className="block tracking-[0.22em]">金・土限定</span>
            <span className="mt-3 block text-lg font-normal tracking-[0.1em] text-gold-light/92 sm:text-xl sm:tracking-[0.12em]">
              夜間施術も承っております
            </span>
          </h3>

          <div className="mt-9 max-w-md border-t border-gold/25 pt-9 text-[15px] leading-[1.9] tracking-[0.08em] text-gold-light/90 md:mt-10 md:pt-10 md:text-base md:leading-loose md:tracking-[0.1em]">
            <p className="text-balance font-medium text-gold">
              <span className="inline-block">全コースに</span>
            </p>
            <p className="mt-2 text-balance text-lg tracking-[0.12em] text-gold-light/95 sm:text-xl sm:tracking-[0.14em]">
              <span className="inline-block">フットアロマオイルマッサージ付き</span>
            </p>
          </div>

          <div className="mt-10 md:mt-12">
            <ReserveCtaButtons variant="web" webLabel="夜間予約はこちら" />
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
