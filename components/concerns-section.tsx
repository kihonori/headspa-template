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
          <div className="text-beauty space-y-4 md:space-y-6 text-center mt-10">
            <p className="text-beauty break-words text-gold-light/90 text-center leading-relaxed">
              その原因は 頭皮環境の乱れや
              <br />
              血流めぐりの低下かもしれません
            </p>
            <p className="text-beauty break-words text-foreground/88">
              当店では、頭皮環境を整えながら、頭皮から美しさを引き出す施術をご提供しています。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.32}>
          <div className="mx-auto mt-12 max-w-2xl border border-border/25 bg-background/30 px-6 py-8">
            <p className="text-center text-xs leading-relaxed tracking-[0.1em] whitespace-nowrap text-gold-light/90 sm:text-sm">
              「癒し で終わらない 頭皮から整える本質ケア」
            </p>
            <p className="mt-4 text-center text-xs leading-relaxed tracking-[0.08em] whitespace-nowrap text-foreground/84 sm:text-sm">
              頭皮ケア × 頭皮環境改善 × 深いリラクゼーション
            </p>
            <ul className="mx-auto mt-6 w-fit text-left flex flex-col gap-2.5 text-xs leading-[2] tracking-[0.08em] text-foreground/84 sm:text-sm">
              <li>・水やオイルを使わない完全ドライ施術</li>
              <li>・男性・女性どちらも利用可能</li>
            </ul>
          </div>
        </FadeIn>

        <SectionNextStep
          className="mx-auto px-4"
          leadClassName="mx-auto max-w-4xl px-4 text-center text-2xl leading-tight break-words md:text-4xl"
          leadText="あなたに合ったメニューをご案内します"
        >
          <MenuScrollButton />
        </SectionNextStep>
      </div>
    </section>
  )
}
