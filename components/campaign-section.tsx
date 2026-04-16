"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { ReserveCtaButtons } from "@/components/reserve-cta-buttons"
import { SectionNextStep } from "@/components/section-next-step"

export function CampaignSection() {
  return (
    <section
      id="reservation"
      className="bg-secondary py-20 scroll-mt-24 lg:py-28"
    >
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <FadeIn>
          <h2 className="mb-12 text-base tracking-[0.5em] text-gold/80 sm:text-lg">
            特別キャンペーン
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto flex w-full max-w-xl flex-col items-center">
            <div className="mb-6 flex flex-col items-center gap-2">
              <span className="text-lg tracking-[0.28em] text-gold-light/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:text-xl">
                初回限定
              </span>
              <span className="text-xl font-medium tracking-[0.22em] text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:text-2xl">
                特別価格
              </span>
            </div>
            <div className="w-full overflow-hidden rounded-sm border border-border/30 bg-zinc-800">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/card-2-newcomer.png"
                  alt="ご新規様特典・特別キャンペーン"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 576px"
                />
              </div>
            </div>
            <p className="mt-10 text-sm leading-[2.6] tracking-[0.08em] text-foreground/70 lg:text-[15px]">
              数量限定ではございますが
              <br />
              ご新規様特典をご用意しております。
              <br />
              この機会をぜひお見逃しなく。
            </p>
          </div>
        </FadeIn>

        <SectionNextStep
          leadText="ご予約は30秒で完了します"
          className="max-w-3xl"
          preCtaText={[
            "ご希望の日時を選ぶだけで簡単予約",
            "LINE相談も可能",
            "ご新規様はWEB予約からご利用いただけます",
          ]}
          footnote="※完全予約制のため事前予約をお願いいたします"
        >
          <ReserveCtaButtons compact variant="web" />
        </SectionNextStep>
      </div>
    </section>
  )
}
