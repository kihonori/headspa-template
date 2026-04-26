"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ReserveCtaButtons } from "@/components/reserve-cta-buttons"

const ease = [0.25, 0.1, 0.25, 1]

const heroConcepts = ["完全個室", "完全予約制", "1日4名様限定"] as const

export function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden md:h-screen">
      <div className="hero relative flex h-full w-full items-center justify-center overflow-hidden bg-zinc-800">
        <Image
          src="/images/73 画像スクリーンショット 2026-02-09 154003.png"
          alt="ドライヘッドスパ　ゆう〜MEGURI〜"
          fill
          priority
          className="z-0 object-cover object-[70%_center] md:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25 md:bg-black/50" />

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6 text-center sm:px-8">
          <div className="pointer-events-auto flex w-full max-w-3xl flex-col items-center pt-14 sm:pt-20 md:max-w-4xl md:pt-24">
            {/* 1. 店名（MEGURI） */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease }}
              className="text-[2rem] font-medium leading-none tracking-[0.14em] text-gold-light/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.92)] sm:text-5xl sm:tracking-[0.15em] md:text-6xl md:tracking-[0.12em] lg:text-7xl"
            >
              <Image
                src="/images/logo-meguri-transparent.png"
                alt="MEGURI ロゴ"
                width={96}
                height={96}
                className="mx-auto mb-6 w-16 sm:w-20 md:w-24 opacity-90"
                priority
              />
              〜MEGURI〜
            </motion.h1>

            {/* 2. メインコピー / 5. サブコピー */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.42, ease }}
              className="text-lp space-y-4 mt-6"
            >
              <p className="text-lp w-full text-center text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.88)]">
                <span className="inline-block whitespace-nowrap">
                  頭皮から美しさを整え 髪も心も満たされる
                </span>
                <br />
                <br />
                <span className="inline-block whitespace-nowrap">ドライヘッドスパ専門店</span>
              </p>
              <p
                className="text-lp font-normal text-gold-light/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ WebkitTextStroke: "0.45px rgba(0,0,0,0.35)", paintOrder: "stroke fill" }}
              >
                日常に静かな贅沢を
              </p>
            </motion.div>

            {/* 3. コンセプト3つ（スマホ縦 / md〜横） */}
            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.5, ease }}
              className="mt-7 flex w-full flex-col items-center gap-2.5 sm:mt-8 md:mt-10 md:flex-row md:flex-wrap md:justify-center md:gap-0"
              aria-label="コンセプト"
            >
              {heroConcepts.map((label, index) => (
                <li key={label} className="flex flex-col items-center md:flex-row md:items-center">
                  {index > 0 ? (
                    <span
                      className="my-1.5 block h-px w-10 max-w-full bg-gold/25 md:mx-5 md:my-0 md:h-2.5 md:w-px md:max-w-none md:bg-gold/35"
                      aria-hidden
                    />
                  ) : null}
                  <span className="text-[10px] font-medium tracking-[0.22em] text-gold-light/92 drop-shadow-[0_1px_8px_rgba(0,0,0,0.75)] sm:text-[11px] sm:tracking-[0.24em] md:text-xs md:tracking-[0.26em]">
                    {label}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* 4. OPEN情報 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.58, ease }}
              className="text-lp space-y-4 mt-6"
            >
              <p className="text-lp font-semibold text-gold-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                5月7日（木）NEW OPEN
              </p>
              <p className="text-lp font-semibold text-gold-light/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.82)]">
                先行予約受付中
              </p>
            </motion.div>

            {/* 6. 予約ボタン */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.76, ease }}
              className="mt-10 w-full md:mt-12"
            >
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
