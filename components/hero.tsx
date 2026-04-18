"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ReserveCtaButtons } from "@/components/reserve-cta-buttons"

const ease = [0.25, 0.1, 0.25, 1]

const heroBadges = ["完全個室", "完全予約制", "1日4名限定"] as const

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

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-5 text-center sm:px-6">
          <div className="pointer-events-auto flex w-full max-w-4xl flex-col items-center pt-16 sm:pt-20 md:pt-24">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease }}
              className="flex w-full flex-col items-center text-center"
            >
              <p className="max-w-xl text-[13px] font-medium leading-snug tracking-[0.18em] text-gold-light/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] sm:text-sm sm:tracking-[0.2em] md:text-base md:tracking-[0.22em]">
                ドライヘッドスパ専門店　ゆう
              </p>
              <h1 className="mt-3 text-[2.1rem] font-medium leading-none tracking-[0.14em] text-gold-light/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] sm:mt-3.5 sm:text-5xl sm:tracking-[0.16em] md:mt-5 md:text-6xl md:tracking-[0.12em] lg:text-7xl">
                〜MEGURI〜
              </h1>
            </motion.header>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.42, ease }}
              className="mx-auto mt-5 w-full max-w-[22.5rem] text-[13px] leading-[1.92] tracking-[0.06em] text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.88)] sm:mt-6 sm:max-w-xl sm:text-sm sm:leading-[1.88] sm:tracking-[0.07em] md:mt-7 md:max-w-2xl md:text-lg md:leading-[1.78] md:tracking-[0.08em] lg:max-w-3xl lg:text-xl lg:leading-[1.72]"
            >
              頭皮から美しさを整え、髪も心も満たされるドライヘッドスパ専門店
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.48, ease }}
              className="mx-auto mt-4 w-full max-w-[19.5rem] text-center sm:mt-4 sm:max-w-md md:mt-5 md:max-w-xl"
            >
              <p className="text-[13px] font-semibold leading-snug tracking-[0.08em] text-gold-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.88)] sm:text-sm sm:tracking-[0.1em] md:text-base md:leading-tight md:tracking-[0.12em] lg:text-[1.0625rem]">
                5月7日（木）NEW OPEN
              </p>
              <p className="mt-1.5 text-[12px] font-semibold leading-snug tracking-[0.06em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] sm:mt-2 sm:text-[13px] sm:tracking-[0.08em] md:text-sm md:tracking-[0.1em] lg:text-[0.9375rem]">
                先行予約受付中
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.54, ease }}
              className="mt-4 text-[14px] font-normal leading-relaxed tracking-[0.1em] text-gold-light/88 drop-shadow-[0_2px_10px_rgba(0,0,0,0.88)] sm:mt-4.5 sm:text-[15px] sm:tracking-[0.12em] md:mt-5 md:text-base md:tracking-[0.1em]"
              style={{ WebkitTextStroke: "0.5px rgba(0,0,0,0.4)", paintOrder: "stroke fill" }}
            >
              日常に静かな贅沢を
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.58, ease }}
              className="mt-5 flex w-full max-w-md flex-wrap items-center justify-center gap-2 sm:mt-6 sm:max-w-none sm:gap-2.5 md:mt-7 md:gap-3"
              aria-label="店舗のご案内"
            >
              {heroBadges.map((label) => (
                <li key={label}>
                  <span className="inline-flex min-h-[2.125rem] items-center justify-center border border-gold/40 bg-black/45 px-3 py-1.5 text-[10px] font-medium tracking-[0.14em] text-gold-light/95 shadow-[0_2px_12px_rgba(0,0,0,0.35)] backdrop-blur-[2px] sm:min-h-0 sm:px-3.5 sm:py-2 sm:text-[11px] sm:tracking-[0.16em] md:text-xs md:tracking-[0.18em]">
                    {label}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.72, ease }}
              className="mt-6 w-full md:mt-8"
            >
              <p className="mb-4 text-center text-[11px] leading-relaxed tracking-[0.04em] text-white/80 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] sm:mb-5 sm:text-xs sm:tracking-[0.05em] md:mb-6 md:text-sm">
                オープン前のため、ご予約枠には限りがございます。
              </p>
              <ReserveCtaButtons
                compact
                webLabel="Squareで先行予約する"
                lineLabel="LINEで相談する"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
