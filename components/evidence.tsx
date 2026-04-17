"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { ReserveCtaButtons } from "@/components/reserve-cta-buttons"
import { SectionNextStep } from "@/components/section-next-step"

const excluded = [3, 8, 21]
const caseSummaries = [
  { age: "30代", concern: "頭頂部・抜け毛", period: "7ヶ月" },
  { age: "40代", concern: "分け目の薄さ", period: "6ヶ月" },
  { age: "50代", concern: "ボリューム不足", period: "8ヶ月" },
  { age: "30代", concern: "抜け毛・ハリ不足", period: "5ヶ月" },
]
const slides = Array.from({ length: 26 }, (_, i) => i + 1)
  .filter((n) => !excluded.includes(n))
  .map((n, i) => ({
    src: `/images/evidence-${String(n).padStart(2, "0")}.png`,
    alt: `Before & After ${i + 1}`,
    summary: caseSummaries[i % caseSummaries.length],
  }))

export function Evidence() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  useEffect(() => {
    if (slides.length <= 1) return
    const interval = setInterval(() => {
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50
    if (diff > threshold) next()
    else if (diff < -threshold) prev()
  }

  return (
    <section id="evidence" className="bg-secondary py-10 md:py-16 lg:py-36">
      <div className="mx-auto max-w-2xl px-4 md:px-8 lg:px-10">
        {/* セクションヘッダー */}
        <FadeIn>
          <div className="mb-16 flex flex-col items-center">
            <span className="text-sm font-medium tracking-[0.5em] text-gold/80 md:text-base">
              当店の育毛ケア・頭皮ケアの実績
            </span>
            <p className="mt-7 max-w-xl break-words text-center text-sm leading-relaxed tracking-[0.08em] text-foreground/80 md:text-base sm:text-[15px]">
              頭皮環境にお悩みの方へ
              <br />
              <br />
              抜け毛・薄毛・ボリューム不足などのお悩みに対し、
              <br />
              頭皮から整えることで変化を実感された実績をご紹介します。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            {/* スライド画像 */}
            <div
              className="relative mx-auto h-[420px] w-full max-w-md overflow-hidden rounded-xl border border-border/30 bg-zinc-800 md:h-[520px]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((slide, i) => (
                  <div key={i} className="relative flex h-[420px] w-full shrink-0 items-center justify-center p-2 md:h-[520px] md:p-3">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={800}
                      height={1000}
                      className="w-full h-[420px] md:h-auto object-contain rounded-xl"
                      sizes="(max-width: 768px) 100vw, 448px"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                    <div className="pointer-events-none absolute bottom-4 left-3 right-3 bg-black/45 px-4 py-2 backdrop-blur-[1px] md:bottom-6 md:left-4 md:right-4">
                      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] tracking-[0.08em] text-foreground/95 md:text-[12px]">
                        <span className="text-gold-light/95">{slide.summary.age}</span>
                        <span>お悩み：{slide.summary.concern}</span>
                        <span>施術期間：{slide.summary.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 左右ボタン（1枚以上ある場合のみ表示） */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-1 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-gold/30 bg-background/90 text-gold transition-all hover:bg-gold hover:text-background md:left-4 md:h-10 md:w-10"
                  aria-label="前へ"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M15 18l-6-6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="absolute right-1 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-gold/30 bg-background/90 text-gold transition-all hover:bg-gold hover:text-background md:right-4 md:h-10 md:w-10"
                  aria-label="次へ"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M9 18l6-6-6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* ドットインジケーター */}
          {slides.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-gold" : "w-1.5 bg-foreground/20"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </FadeIn>

        <SectionNextStep
          introText="変化を実感したい方は、今すぐご予約ください"
          leadText="ご予約はこちら"
          preCtaText={[
            "ご予約は30秒で完了します",
            "ご希望の日時を選ぶだけで簡単予約",
            "頭皮や育毛のお悩みはLINEからも相談可能",
          ]}
          footnote="※完全予約制のため事前予約をお願いいたします"
        >
          <ReserveCtaButtons compact />
        </SectionNextStep>
      </div>
    </section>
  )
}
