"use client"

import { FadeIn } from "@/components/fade-in"

export function HomeCareSection() {
  return (
    <section
      className="border-y border-border/25 bg-[#12110F] py-16 md:py-24"
      aria-label="ホームケア商品のご案内"
    >
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8 lg:px-10">
        <FadeIn>
          <span className="text-sm tracking-[0.45em] text-gold/75 sm:text-base">
            ホームケア
          </span>
          <div className="max-w-[340px] mx-auto md:max-w-[640px] text-center">
            <p className="text-base md:text-lg leading-relaxed tracking-[0.08em] text-foreground/80">
              施術の効果を 日常へ
            </p>

            <p className="mt-8 text-base md:text-lg leading-relaxed tracking-[0.08em] text-foreground/80">
              サロンでのケアとあわせてご活用いただける
              <br />
              ホームケア商品をご用意しております
              <br />
              <br />
              頭皮環境を整え 育毛ケアにもつながるよう
              <br />
              成分と使い心地にこだわったラインです
            </p>

            <p className="mt-8 text-base md:text-lg leading-relaxed tracking-[0.08em] text-foreground/80">
              施術後の持続感を高め
              <br />
              ご自宅でも心地よいリチュアルとしてお使いいただけます
            </p>

            <p className="mt-8 text-base md:text-lg leading-relaxed tracking-[0.08em] text-foreground/80 opacity-70">
              商品のご案内は ご希望を伺ったうえで行います
              <br />
              無理な販売やしつこいお声がけはいたしませんので どうぞご安心ください
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
