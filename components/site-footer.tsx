"use client"

import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-10 text-center">
        <div className="mb-8">
          <Image
            src="/images/logo-meguri-transparent.png"
            alt="??????????? ?? MEGURI"
            width={130}
            height={130}
            className="mx-auto object-contain"
            style={{ opacity: 0.85 }}
          />
        </div>

        <div className="space-y-2 text-foreground/80">
          <p className="text-xs tracking-[0.06em]">
            {"\u30c9\u30e9\u30a4\u30d8\u30c3\u30c9\u30b9\u30d1\u5c02\u9580\u5e97 \u3086\u3046 MEGURI"}
          </p>
          <p className="text-xs tracking-[0.06em]">
            {"\u798f\u5ca1\u5e02\u6771\u533a\u5510\u539f2\u4e01\u76ee10-10"}
          </p>
          <p className="text-xs tracking-[0.06em]">
            {"\u55b6\u696d\u6642\u9593 9:00\u301c17:00\uff08\u4e0d\u5b9a\u4f11\uff09"}
          </p>
        </div>
      </div>
    </footer>
  )
}
