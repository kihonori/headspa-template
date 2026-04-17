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
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="mb-5 rounded-sm bg-black/30 px-3 py-1.5 text-center text-xl leading-relaxed tracking-[0.12em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] md:mb-4 md:bg-transparent md:px-0 md:py-0 md:text-3xl md:tracking-[0.2em]"
            >
              頭皮から美しさを整える
            </motion.p>

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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease }}
              className="mb-6 text-lg leading-[2] tracking-[0.24em] text-gold-light/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] sm:text-xl md:mb-7"
              style={{ WebkitTextStroke: "1px black", paintOrder: "stroke fill" }}
            >
              日常に静かな贅沢を
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.65, ease }}
              className="mx-auto mb-6 max-w-2xl text-center text-[12px] leading-[2.1] tracking-[0.08em] text-foreground/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] sm:text-sm md:leading-[2.2]"
            >
              抜け毛・薄毛・頭皮環境・疲労・不眠に寄り添い、
              <br />
              深いリラクゼーションと頭皮ケアを同時に叶えます。
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.74, ease }}
              className="mb-7 flex flex-wrap items-center justify-center gap-2.5 text-[10px] tracking-[0.12em] text-foreground/88 sm:gap-3 sm:text-[11px] md:mb-8"
            >
              <span className="border border-gold/35 bg-black/25 px-3 py-1.5">完全個室</span>
              <span className="border border-gold/35 bg-black/25 px-3 py-1.5">1日4名限定</span>
              <span className="border border-gold/35 bg-black/25 px-3 py-1.5">完全予約制</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.85, ease }}
            >
              <div className="mb-4 space-y-1.5 text-[11px] tracking-[0.1em] text-foreground/85 sm:text-xs">
                <p>ご予約は30秒で完了します</p>
                <p>ご希望の日時を選ぶだけで簡単予約</p>
                <p>LINE相談も可能</p>
              </div>
              <ReserveCtaButtons compact />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.95, ease }}
              className="mt-3 text-center text-[11px] leading-[1.9] tracking-[0.14em] text-foreground/75 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-xs"
            >
              ※完全予約制のため事前予約をお願いいたします
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
