"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ReserveCtaButtons } from "@/components/reserve-cta-buttons"

const ease = [0.25, 0.1, 0.25, 1]

export function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden md:h-screen">
      <div className="hero relative flex h-full w-full items-center justify-center overflow-hidden bg-zinc-800">
        <Image
          src="/images/73 画像スクリーンショット 2026-02-09 154003.png"
          alt="ドライヘッドスパ　ゆう～MEGURI～"
          fill
          priority
          className="z-0 object-cover object-[center_10%] md:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25 md:bg-black/50" />

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
          <div className="pointer-events-auto flex max-w-3xl flex-col items-center pt-20 md:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease }}
              className="mb-7 flex flex-col items-center text-center md:mb-6"
            >
              <div className="text-sm tracking-[0.14em] text-gold-light/90 opacity-90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:text-base">
                ドライヘッドスパ専門店　ゆう
              </div>
              <h1 className="mt-3 flex items-center justify-center gap-1 text-5xl font-medium leading-none tracking-[0.18em] text-gold-light/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] md:mt-6 md:text-7xl">
                <span className="hidden md:block">～</span>
                <span>MEGURI</span>
                <span className="hidden md:block">～</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.42, ease }}
              className="mb-4 rounded-sm bg-black/30 px-3 py-1.5 text-center text-xl leading-relaxed tracking-[0.12em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] md:mb-4 md:bg-transparent md:px-0 md:py-0 md:text-3xl md:tracking-[0.2em]"
            >
              頭皮から美しさを整える
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease }}
              className="mb-6 text-lg leading-[2] tracking-[0.24em] text-gold-light/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] sm:text-xl md:mb-7"
              style={{ WebkitTextStroke: "1px black", paintOrder: "stroke fill" }}
            >
              日常に静かな贅沢を
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.85, ease }}
              className="mt-2 md:mt-4"
            >
              <div className="mb-5 space-y-2 text-center">
                <p className="mt-6 text-center text-xl font-medium tracking-wide text-gold-light md:text-2xl">
                  5月7日（木）NEW OPEN
                </p>
                <p className="mt-2 text-center text-lg font-medium text-white md:text-xl">
                  先行予約受付中
                </p>
                <p className="mt-2 text-center text-sm text-white/80 md:text-base">
                  オープン前のため、ご予約枠には限りがございます。
                </p>
              </div>
              <ReserveCtaButtons compact variant="line" lineLabel="LINEで先行予約する" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.95, ease }}
              className="mt-5 text-center text-[11px] leading-[1.9] tracking-[0.14em] text-foreground/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-xs"
            >
              当店は完全個室のため、周りを気にせずリラックスしていただけます。
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
