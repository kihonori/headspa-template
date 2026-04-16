"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

export function AccessMap() {
  return (
    <section id="access" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-14 flex flex-col items-center sm:mb-16">
            <span className="text-sm font-medium tracking-[0.5em] text-gold/80 sm:text-base">
              アクセス
            </span>
            <div style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}>
              <Image
                src="/images/logo-meguri-transparent.png"
                alt="MEGURIロゴ"
                width={160}
                height={160}
                className="mx-auto object-contain"
                style={{ opacity: 0.9 }}
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-10 flex flex-col items-center text-center">
            <p className="mb-1 text-sm tracking-[0.12em] text-foreground/80">
              ドライヘッドスパ　ゆう～MEGURI～
            </p>
            <p className="text-xs leading-[2.4] tracking-[0.08em] text-muted-foreground">
              福岡市東区唐原2丁目10-10
            </p>
            <p className="mt-1 text-[11px] tracking-[0.08em] text-muted-foreground">
              西鉄 宮地岳線 唐原駅 徒歩5分
            </p>
            <p className="mt-3 text-[11px] tracking-[0.08em] text-muted-foreground">
              TEL: 080-6213-9847
            </p>
            <p className="mt-1 text-[11px] tracking-[0.08em] text-muted-foreground">
              店舗前及びとなりアパートの①番駐車場
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="overflow-hidden border border-border/40">
            <iframe
              src="https://www.google.com/maps?q=%E7%A6%8F%E5%B2%A1%E5%B8%82%E6%9D%B1%E5%8C%BA%E5%94%90%E5%8E%9F2-10-10&output=embed"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ドライヘッドスパ　ゆう～MEGURI～ アクセスマップ"
              className="h-[300px] w-full grayscale transition-all duration-700 hover:grayscale-0 md:h-[400px]"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 grid grid-cols-2 gap-px border border-border/40 bg-border/40 text-center">
            <div className="bg-card px-3 py-4 md:px-4 md:py-5">
              <p className="mb-1 text-[10px] tracking-[0.2em] text-gold/70">
                OPEN
              </p>
              <p className="text-xs tracking-[0.1em] text-foreground/80">
                9:30 - 21:00
              </p>
            </div>
            <div className="bg-card px-3 py-4 md:px-4 md:py-5">
              <p className="mb-1 text-[10px] tracking-[0.2em] text-gold/70">
                CLOSED
              </p>
              <p className="text-xs tracking-[0.1em] text-foreground/80">
                不定休
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
