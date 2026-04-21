"use client"

import { FadeIn } from "@/components/fade-in"

const reasons = [
  "頭皮から美しさを整えるドライヘッドスパ専門店",
  "水やオイルを使わない完全ドライ施術",
  "完全個室・1日4名限定の上質空間",
  "頭皮ケアと深いリラクゼーションを同時に提供",
  "男性・女性どちらも利用可能",
  "LINEで事前相談可能",
]

export function ReasonsSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-14 flex flex-col items-center lg:mb-16">
            <span className="text-base tracking-[0.5em] text-gold/80 sm:text-lg">
              選ばれる理由
            </span>
            <h2 className="mt-6 text-center text-lg leading-[1.8] tracking-[0.12em] text-foreground sm:text-xl">
              ゆう～MEGURI～が選ばれる理由
            </h2>
            <div className="text-lp space-y-4 mt-6">
              <p className="text-lp text-foreground/80 leading-relaxed">
                頭皮から美しさを整える本質ケアを、
                <br />
                完全個室の落ち着いた空間でご提供しています。
              </p>
              <p className="text-lp text-foreground/80 leading-relaxed">
                水やオイルを使わないドライ施術だからこそ、
                <br />
                頭皮ケアと深いリラクゼーションを両立できます。
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
          {reasons.map((reason, idx) => (
            <FadeIn key={reason} delay={idx * 0.06}>
              <div className="h-full border border-border/30 bg-card px-5 py-5 sm:px-6 sm:py-6">
                <p className="flex items-start gap-3 text-sm leading-[2] tracking-[0.06em] text-foreground/86 sm:text-[15px]">
                  <span className="mt-0.5 text-[10px] tracking-[0.1em] text-gold/70">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{reason}</span>
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
