"use client"

import { FadeIn } from "@/components/fade-in"
import { MenuScrollButton, SectionNextStep } from "@/components/section-next-step"

const concerns = [
  "抜け毛や薄毛が気になる",
  "髪のボリュームが気になる",
  "頭皮の硬さや血行不良が気になる",
  "頭や首、肩が重い",
  "疲れが抜けにくい",
  "眠りが浅い",
  "ストレスが溜まっている",
]

export function ConcernsSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-10">
        <FadeIn>
          <h2 className="mb-10 text-base font-medium tracking-[0.35em] text-gold/80 sm:text-lg">
            こんなお悩みありませんか？
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="mx-auto flex max-w-2xl flex-col gap-3 text-sm leading-[2.1] tracking-[0.08em] text-foreground lg:text-[15px]">
            {concerns.map((concern) => (
              <li key={concern}>・{concern}</li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.18}>
          <p className="mx-auto mt-10 max-w-xl text-sm leading-[2.3] tracking-[0.08em] text-gold-light/90 sm:text-base">
            その原因は
            <br />
            頭皮環境の乱れやめぐりの低下かもしれません。
          </p>
        </FadeIn>

        <FadeIn delay={0.26}>
          <p className="mx-auto mt-10 max-w-2xl text-sm leading-[2.25] tracking-[0.08em] text-foreground/88 sm:text-[15px]">
            当店では、
            <br />
            頭皮環境を整えながら、
            <br />
            頭皮から美しさを引き出す施術をご提供しています。
          </p>
        </FadeIn>

        <FadeIn delay={0.32}>
          <div className="mx-auto mt-12 max-w-2xl border border-border/25 bg-background/30 px-6 py-8">
            <p className="text-sm leading-[2.2] tracking-[0.12em] text-gold-light/90 sm:text-[15px]">
              「癒し」で終わらない、
              <br />
              頭皮から整える本質ケア
            </p>
            <ul className="mx-auto mt-6 flex max-w-xl flex-col gap-2.5 text-xs leading-[2] tracking-[0.08em] text-foreground/84 sm:text-sm">
              <li>・頭皮ケア × 頭皮環境改善 × 深いリラクゼーション</li>
              <li>・水やオイルを使わない完全ドライ施術</li>
              <li>・男性・女性どちらも利用可能</li>
            </ul>
          </div>
        </FadeIn>

        <SectionNextStep leadText="あなたに合ったメニューをご案内します">
          <MenuScrollButton />
        </SectionNextStep>
      </div>
    </section>
  )
}
