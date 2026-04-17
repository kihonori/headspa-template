"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BOOKING_URL, LINE_URL } from "@/lib/site-links"

export function FloatingReserve() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 280)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2"
        >
          <div className="flex max-w-[min(100vw-2rem,380px)] flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-md border border-gold/40 bg-[#5c4a3d] px-4 py-2.5 shadow-lg">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-[10px] font-medium leading-snug tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[11px]"
            >
              Squareで先行予約する
            </a>
            <span className="hidden text-white/80 sm:inline">｜</span>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-[10px] font-medium leading-snug tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[11px]"
            >
              LINEで相談する
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
