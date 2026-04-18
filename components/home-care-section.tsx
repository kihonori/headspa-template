"use client"

import { FadeIn } from "@/components/fade-in"

export function HomeCareSection() {
  return (
    <section
      className="border-y border-border/25 bg-[#12110F] py-16 md:py-20 lg:py-24"
      aria-label="ホームケア商品のご案内"
    >
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8 lg:px-10">
        <FadeIn>
          <span className="text-sm tracking-[0.45em] text-gold/75 sm:text-base">
            ホームケア
          </span>
          <h2 className="mt-6 font-serif text-lg font-light tracking-[0.14em] text-foreground sm:text-xl md:text-2xl">
            施術の効果を、日常へ
          </h2>
          <div className="text-beauty space-y-4 md:space-y-6 text-center mt-8">
            <p className="text-beauty break-words text-foreground/78">
              サロンでのケアとあわせてご活用いただけるホームケア商品をご用意しております。頭皮環境を整え、育毛ケアにもつながるよう、成分と使い心地にこだわったラインです。
            </p>
            <p className="text-beauty break-words text-foreground/78">
              施術後の持続感を高め、ご自宅でも心地よいリチュアルとしてお使いいただけます。
            </p>
          </div>
          <p className="mx-auto mt-10 max-w-lg border-t border-border/30 pt-8 text-xs leading-[1.95] tracking-[0.08em] text-muted-foreground/90 md:text-sm">
            商品のご案内は、ご希望を伺ったうえで行います。無理な販売やしつこいお声がけはいたしませんので、どうぞご安心ください。
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
