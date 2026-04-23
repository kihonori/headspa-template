"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { MenuScrollButton, SectionNextStep } from "@/components/section-next-step"

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <FadeIn>
          <div className="mb-6 flex justify-center">
            <div className="relative h-[88px] w-[88px] overflow-hidden rounded-[9999px] border border-gold/25 bg-background/70 p-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.22)] sm:h-[100px] sm:w-[100px] lg:h-[120px] lg:w-[120px]">
              <Image
                src="/images/logo-meguri-transparent.png"
                alt="\u30c9\u30e9\u30a4\u30d8\u30c3\u30c9\u30b9\u30d1\u5c02\u9580\u5e97 \u3086\u3046 MEGURI"
                fill
                className="object-contain p-1.5 opacity-[0.93]"
                sizes="(max-width: 640px) 88px, (max-width: 1024px) 100px, 120px"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mb-12 flex flex-col items-center">
            <span className="text-base tracking-[0.5em] text-gold/80 sm:text-lg">
              {"\u5f53\u5e97\u306b\u3064\u3044\u3066"}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="text-center">
            <div className="relative mx-auto mb-10 aspect-[4/3] w-full max-w-xl overflow-hidden rounded-sm border border-border/30">
              <Image
                src="/images/about-interior.png"
                alt="\u5f53\u5e97\u306e\u65bd\u8853\u30eb\u30fc\u30e0"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 576px"
              />
            </div>
            <div className="text-beauty space-y-4 md:space-y-6 text-center">
              <p className="text-beauty break-words text-foreground/78">
                福岡市東区の完全個室
                <br />
                ドライヘッドスパ専門店 ゆう〜MEGURI〜
              </p>
              <p className="text-beauty break-words text-foreground/80 leading-relaxed">
                水やオイルを使わない完全ドライ施術で
                <br />
                頭皮ケア・育毛ケア・深いリラクゼーションを
                <br />
                丁寧にサポートいたします
              </p>
              <p className="text-beauty break-words text-foreground/80 leading-relaxed">
                1日4名様限定 完全予約制の特別空間
              </p>
              <p className="text-beauty break-words text-foreground/80 leading-relaxed">
                当店は「頭皮から美しさを整える」をコンセプトに
                <br />
                癒しで終わらない 本質ケアの施術をご提供しています
              </p>
            </div>
          </div>
        </FadeIn>

        <SectionNextStep leadText={"\u5f53\u5e97\u306e\u65bd\u8853\u5185\u5bb9\u30fb\u6599\u91d1\u306f\u3053\u3061\u3089"}>
          <MenuScrollButton />
        </SectionNextStep>
      </div>
    </section>
  )
}
