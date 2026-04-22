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
          <p className="mt-6 text-center text-foreground/78 leading-relaxed md:leading-loose md:text-left">
            施術の効果を、日常へ
            <br />
            <br />
            サロンでのケアとあわせてご活用いただけるホームケア商品をご用意しております。
            <br />
            頭皮環境を整え、育毛ケアにもつながるよう、成分と使い心地にこだわったラインです。
            <br />
            <br />
            施術後の持続感を高め、ご自宅でも心地よいリチュアルとしてお使いいただけます。
            <br />
            <br />
            <span className="text-sm opacity-70">
              商品のご案内は、ご希望を伺ったうえで行います。
              <br />
              無理な販売やしつこいお声がけはいたしませんので、どうぞご安心ください。
            </span>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
