import { notFound } from "next/navigation"
import Link from "next/link"
import { MenuDetailHero } from "@/components/menu-detail-hero"
import { MenuPricingBlock } from "@/components/menu-pricing-block"
import { menus } from "@/lib/menu-data"
import { BOOKING_URL } from "@/lib/site-links"

export function generateStaticParams() {
  return menus.map((menu) => ({ id: menu.id }))
}

export default async function MenuDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const menu = menus.find((m) => m.id === id)
  if (!menu) notFound()

  return (
    <main className="min-h-screen bg-background">
      <MenuDetailHero image={menu.image} tab={menu.tab} enTitle={menu.enTitle} isScalp={menu.id === "scalp"} />

      <div className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-16 lg:px-10 lg:py-24">
        {/* Description */}
        <div className="mb-14">
          <div className="mx-auto h-px w-10 bg-gold/30" />
          <div className="mt-10 space-y-5 break-words text-center text-sm leading-relaxed tracking-[0.04em] text-muted-foreground md:text-base lg:text-sm">
            {menu.descriptionParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-14 border border-border/25 bg-card/70 px-6 py-10 sm:px-10">
          <p className="mb-7 text-center text-[10px] tracking-[0.3em] text-gold/70">
            効果・効能
          </p>
          <ul className="mx-auto flex max-w-md flex-col gap-2.5 text-left text-[12px] leading-[1.95] tracking-[0.06em] text-foreground/84 sm:text-[13px]">
            {menu.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5">
                <span className="mt-[0.62em] h-1 w-1 shrink-0 rounded-full bg-gold/75" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-lg text-center text-[11px] leading-[2.1] tracking-[0.08em] text-foreground/76 sm:text-xs">
            {menu.benefitNote}
          </p>
        </div>

        <MenuPricingBlock menu={menu} />

        {/* Treatment steps */}
        <div className="mb-14">
          <p className="mb-6 text-center text-[10px] tracking-[0.3em] text-gold/60">
            施術内容
          </p>
          <div className="grid grid-cols-1 gap-px bg-border/20 md:grid-cols-3 lg:grid-cols-4">
            {menu.steps.map((step, idx) => (
              <div
                key={step}
                className="flex items-center justify-center bg-card px-3 py-4 text-center"
              >
                <span className="mr-2 text-[9px] text-muted-foreground/40">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="break-words text-sm tracking-[0.08em] text-foreground/70 md:text-base">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[44px] w-full items-center justify-center border border-gold bg-gold px-10 py-3 text-center text-[11px] tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-gold sm:w-auto"
          >
            WEB予約（空き状況を見る）
          </a>
          <Link
            href="/#menu"
            className="flex min-h-[44px] w-full items-center justify-center border border-foreground/20 px-10 py-3 text-center text-[11px] tracking-[0.2em] text-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold sm:w-auto"
          >
            メニュー一覧へ
          </Link>
        </div>
      </div>
    </main>
  )
}
