"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

type Props = {
  image: string
  tab: string
  enTitle: string
  isScalp: boolean
}

export function MenuDetailHero({ image, tab, enTitle, isScalp }: Props) {
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setLoaded(true)
    if (!isScalp) return

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY)
        ticking = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isScalp])

  const parallaxY = isScalp ? scrollY * 0.18 : 0
  const zoomScale = loaded && isScalp ? 1 : 1.05

  return (
    <div className={`relative w-full overflow-hidden ${image ? "h-screen" : "h-[30vh] bg-zinc-900"}`}>
      {image && (
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translateY(${parallaxY}px) scale(${zoomScale})`,
            transition: "transform 1.5s ease-out",
          }}
        >
          <Image src={image} alt={tab} fill className="object-cover object-center" sizes="100vw" priority />
        </div>
      )}
      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute left-5 top-8 z-10 lg:left-10">
        <Link
          href="/#menu"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-white/60 transition-colors hover:text-gold"
        >
          ← メニューへ戻る
        </Link>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="mb-3 text-[10px] tracking-[0.4em] text-gold/80">メニュー</span>
        <h1 className="mb-2 text-xl tracking-[0.2em] text-white lg:text-3xl">{tab}</h1>
        <p
          className={
            isScalp
              ? "text-[9px] tracking-[0.22em] text-white/55 sm:text-[10px] sm:tracking-[0.26em]"
              : "text-[11px] tracking-[0.15em] text-white/60"
          }
        >
          {enTitle}
        </p>
      </div>
    </div>
  )
}
