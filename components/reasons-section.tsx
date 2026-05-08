"use client"

import { FadeIn } from "@/components/fade-in"

const reasons = [
  "育毛ケア × 頭皮環境改善に特化した専門施術",
  "頭皮から美しさを整えるドライヘッドスパ専門店",
  "完全個室・1日4名限定の上質空間",
  "頭皮ケアと深いリラクゼーションを同時に提供",
  "男性・女性どちらも利用可能",
  "LINEで事前相談可能",
]

export function ReasonsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source src="/images/施術　動画①fcv3Robye13NyAxVdqEKLH_rxwyFVfVi-HOXsk5ITfg.MP4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-10">
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
              <div className="h-full border border-border/40 bg-card/90 px-5 py-5 backdrop-blur-[1px] sm:px-6 sm:py-6">
                <p className="flex items-start gap-3 text-sm leading-[2] tracking-[0.06em] text-foreground/86 sm:text-[15px]">
                  <span className="mt-0.5 text-[10px] tracking-[0.1em] text-gold/70">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className={idx < 2 ? "whitespace-nowrap text-[12px] sm:text-[14px]" : ""}>
                    {reason}
                  </span>
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
