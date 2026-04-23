"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { ReserveCtaButtons } from "@/components/reserve-cta-buttons"
import { SectionNextStep } from "@/components/section-next-step"

export function CampaignSection() {
  return (
    <section
      id="reservation"
      className="bg-secondary py-16 scroll-mt-24 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8 lg:px-10">
        <FadeIn>
          <h2 className="mb-10 text-lg leading-snug tracking-[0.2em] text-gold/80 md:text-2xl">
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
            <div className="my-10 w-full max-w-[600px] overflow-hidden rounded-[12px] border border-border/30 bg-zinc-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/campaign.png"
                  alt="ご新規様特典・特別キャンペーン"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 600px"
                />
              </div>
            </div>
            <div className="max-w-[340px] mx-auto md:max-w-[640px] space-y-4 mt-6">
              <p className="text-base md:text-lg leading-relaxed tracking-[0.08em] text-foreground/80">
                数量限定ではございますが
                <br />
                ご新規様特典をご用意しております
                <br />
                この機会をぜひお見逃しなく
              </p>
            </div>
          </div>
        </FadeIn>

        <SectionNextStep
          leadText="ご予約は30秒で完了します"
          className="max-w-3xl"
          preCtaText={[
            "ご希望の日時を選ぶだけで簡単予約",
            "LINEで空き状況確認・先行予約も可能",
            "ご新規様はWEB予約からご利用いただけます",
          ]}
          footnote="※完全予約制のため 事前予約をお願いいたします"
        >
          <ReserveCtaButtons compact variant="web" />
        </SectionNextStep>
      </div>
    </section>
  )
}
