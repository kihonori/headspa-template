"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { MenuScrollButton, SectionNextStep } from "@/components/section-next-step"

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <FadeIn>
          <div className="mb-6 flex justify-center">
            <div className="relative h-[88px] w-[88px] overflow-hidden rounded-[9999px] border border-gold/25 bg-background/70 p-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.22)] sm:h-[100px] sm:w-[100px] lg:h-[120px] lg:w-[120px]">
              <Image
                src="/images/logo-meguri-transparent.png"
                alt="\u30c9\u30e9\u30a4\u30d8\u30c3\u30c9\u30b9\u30d1\u5c02\u9580\u5e97 \u3086\u3046 MEGURI"
                fill
                className="object-contain p-1.5 opacity-[0.93]"
                sizes="(max-width: 640px) 88px, (max-width: 1024px) 100px, 120px"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mb-12 flex flex-col items-center">
            <span className="text-base tracking-[0.5em] text-gold/80 sm:text-lg">
              {"\u5f53\u5e97\u306b\u3064\u3044\u3066"}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="text-center">
            <div className="relative mx-auto mb-10 aspect-[4/3] w-full max-w-xl overflow-hidden rounded-sm border border-border/30">
              <Image
                src="/images/about-interior.png"
                alt="\u5f53\u5e97\u306e\u65bd\u8853\u30eb\u30fc\u30e0"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 576px"
              />
            </div>
            <p className="mx-auto max-w-xl text-sm leading-[2.5] tracking-[0.08em] text-foreground/78 lg:text-[15px]">
              {"\u798f\u5ca1\u5e02\u6771\u533a\u306e\u5b8c\u5168\u500b\u5ba4"}
              <br />
              {"\u30c9\u30e9\u30a4\u30d8\u30c3\u30c9\u30b9\u30d1\u5c02\u9580\u5e97 \u3086\u3046\uff5eMEGURI\uff5e"}
              <br />
              <br />
              {"\u6c34\u3084\u30aa\u30a4\u30eb\u3092\u4f7f\u308f\u306a\u3044\u5b8c\u5168\u30c9\u30e9\u30a4\u65bd\u8853\u3067\u3001"}
              <br />
              {"\u982d\u76ae\u30b1\u30a2\u30fb\u80b2\u6bdb\u30b1\u30a2\u30fb\u6df1\u3044\u30ea\u30e9\u30af\u30bc\u30fc\u30b7\u30e7\u30f3\u3092"}
              <br />
              {"\u4e01\u5be7\u306b\u30b5\u30dd\u30fc\u30c8\u3044\u305f\u3057\u307e\u3059\u3002"}
              <br />
              <br />
              {"1\u65e54\u540d\u69d8\u9650\u5b9a\u3001\u5b8c\u5168\u4e88\u7d04\u5236\u3002"}
              <br />
              {"\u843d\u3061\u7740\u3044\u305f\u7a7a\u9593\u3067\u3001\u3086\u3063\u304f\u308a\u304a\u904e\u3054\u3057\u304f\u3060\u3055\u3044\u3002"}
              <br />
              <br />
              {"\u5f53\u5e97\u306f\u300c\u982d\u76ae\u304b\u3089\u7f8e\u3057\u3055\u3092\u6574\u3048\u308b\u300d\u3092\u30b3\u30f3\u30bb\u30d7\u30c8\u306b\u3001"}
              <br />
              {"\u7652\u3057\u3060\u3051\u3067\u7d42\u308f\u3089\u306a\u3044\u65bd\u8853\u3092\u3054\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"}
            </p>
          </div>
        </FadeIn>

        <SectionNextStep leadText={"\u5f53\u5e97\u306e\u65bd\u8853\u5185\u5bb9\u30fb\u6599\u91d1\u306f\u3053\u3061\u3089"}>
          <MenuScrollButton />
        </SectionNextStep>
      </div>
    </section>
  )
}
