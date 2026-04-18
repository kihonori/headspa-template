import type { Menu, MenuItem } from "@/lib/menu-data"
import { scalpTierBadges, scalpTierDescription } from "@/lib/scalp-tier-present"
import { ScalpTierBadge } from "@/components/scalp-tier-badge"

/** ¥32,000 → 数値と表示用桁区切り */
function parsePriceYen(raw: string): { digits: string; amount: number } | null {
  const cleaned = raw.replace(/[¥￥,\s]/g, "")
  const amount = parseInt(cleaned, 10)
  if (!Number.isFinite(amount)) return null
  return { digits: amount.toLocaleString("ja-JP"), amount }
}

/** 「ヒト幹細胞」で不自然に改行されないようノーブレークで包む */
function LevelTitle({ text }: { text: string }) {
  const parts = text.split(/(ヒト幹細胞)/g)
  return (
    <span>
      {parts.map((part, i) =>
        part === "ヒト幹細胞" ? (
          <span key={i} className="whitespace-nowrap">
            ヒト幹細胞
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  )
}

function TierDescription({ tier }: { tier: NonNullable<MenuItem["tier"]> }) {
  const text = scalpTierDescription[tier]
  const lines = text.split("\n")
  return (
    <p className="mt-5 max-w-md text-[10px] leading-[2.05] tracking-[0.07em] text-muted-foreground/78 sm:mx-0 sm:mr-auto sm:text-[11px] sm:leading-[2.1]">
      {lines.map((line, i) => (
        <span key={i}>
          {i > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </p>
  )
}

function ScalpPricingRow({ item, isLast }: { item: MenuItem; isLast: boolean }) {
  const tier = item.tier ?? null
  const parsed = parsePriceYen(item.price)
  const badges = tier ? [...scalpTierBadges[tier]] : []
  const hasLuxuryLines = Boolean(item.labelEn && tier)

  const rowLayout =
    tier === "standard"
      ? "flex w-full min-w-0 flex-col gap-10 px-7 py-14 sm:flex-row sm:items-stretch sm:justify-between sm:gap-16 sm:px-14 sm:py-16"
      : "flex w-full min-w-0 flex-col gap-9 px-6 py-11 sm:flex-row sm:items-stretch sm:justify-between sm:gap-12 sm:px-11 sm:py-12"

  const rowSurface =
    tier === "standard"
      ? "border-l-2 border-[#C9A96E]/30 bg-[#262422]"
      : "bg-card"

  const borderBottom = !isLast ? "border-b border-border/20" : ""

  const lineEnCls =
    "text-[8px] font-medium uppercase tracking-[0.16em] text-muted-foreground/65 sm:text-[9px] sm:tracking-[0.18em]"

  const lineJpCls =
    tier === "standard"
      ? "mt-3.5 text-[15px] font-medium leading-[1.8] tracking-[0.075em] text-foreground sm:text-[16px] sm:tracking-[0.08em]"
      : tier === "premium"
        ? "mt-3 text-[13px] font-medium leading-[1.75] tracking-[0.06em] text-foreground/92 sm:text-[14px]"
        : tier === "light"
          ? "mt-3 text-[12px] font-normal leading-[1.72] tracking-[0.05em] text-muted-foreground sm:text-[13px]"
          : "mt-3 text-sm leading-relaxed tracking-[0.06em] text-foreground"

  const badgeWrapCls = "flex flex-wrap items-center justify-center gap-2 sm:justify-start"

  return (
    <div className={`${rowLayout} ${rowSurface} ${borderBottom}`}>
      <div className="min-w-0 flex-1 text-center sm:text-left">
        {hasLuxuryLines && tier ? (
          <>
            <div className={badgeWrapCls}>
              {badges.map((label) => (
                <ScalpTierBadge key={label}>{label}</ScalpTierBadge>
              ))}
            </div>
            <p className={`${lineEnCls} ${tier === "standard" ? "mt-6" : "mt-5"}`}>
              {item.labelEn}
            </p>
            <p className={`break-keep ${lineJpCls}`}>
              <LevelTitle text={item.name} />
            </p>
            <TierDescription tier={tier} />
          </>
        ) : (
          <p className="text-sm tracking-[0.08em] text-foreground">{item.name}</p>
        )}
        {item.detail ? (
          <p className="mt-4 text-[10px] tracking-[0.06em] text-muted-foreground">
            ({item.detail})
          </p>
        ) : null}
      </div>

      <div
        className={`flex w-full shrink-0 flex-col items-center sm:w-auto sm:items-end sm:justify-center sm:border-l sm:border-border/15 ${
          tier === "standard" ? "gap-5 sm:min-w-[12.5rem] sm:pl-12" : "gap-4 sm:min-w-[11rem] sm:pl-9"
        }`}
      >
        <span className="text-[10px] tabular-nums tracking-[0.14em] text-muted-foreground/55">
          {item.duration}
        </span>

        {parsed ? (
          <div className="flex flex-col items-center gap-1 sm:items-end">
            <div className="flex flex-wrap items-baseline justify-center gap-x-2 sm:justify-end">
              <span
                className={
                  tier === "standard"
                    ? "font-medium tabular-nums tracking-[0.11em] text-[2.125rem] leading-none text-[#C9A96E] sm:text-[2.375rem]"
                    : tier === "premium"
                      ? "font-light tabular-nums tracking-[0.09em] text-[1.5rem] leading-none text-foreground/88 sm:text-[1.5625rem]"
                      : "font-light tabular-nums tracking-[0.08em] text-[1.2rem] leading-none text-muted-foreground/88 sm:text-[1.3rem]"
                }
              >
                {parsed.digits}
              </span>
              <span
                className={
                  tier === "standard"
                    ? "text-sm font-medium tracking-[0.12em] text-[#C9A96E]/95"
                    : tier === "premium"
                      ? "text-xs font-light tracking-[0.1em] text-foreground/72"
                      : "text-[10px] font-light tracking-[0.09em] text-muted-foreground/65"
                }
              >
                円
              </span>
              <span className="text-[9px] tracking-[0.06em] text-muted-foreground/50">
                （税込）
              </span>
            </div>
          </div>
        ) : (
          <span className="text-2xl font-light text-[#C9A96E]">{item.price}</span>
        )}
      </div>
    </div>
  )
}

function DefaultPricingRow({ item, isLast }: { item: MenuItem; isLast: boolean }) {
  const parsed = parsePriceYen(item.price)

  return (
    <div
      className={`flex flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center sm:gap-6 sm:px-8 sm:py-9 ${
        !isLast ? "border-b border-border/20" : ""
      }`}
    >
      <div className="min-w-0 text-center sm:text-left">
        <p className="text-sm leading-relaxed tracking-[0.1em] text-foreground">
          {item.name}
        </p>
        {item.detail ? (
          <p className="mt-2 text-[10px] tracking-[0.06em] text-muted-foreground">
            ({item.detail})
          </p>
        ) : null}
      </div>
      <div className="flex shrink-0 flex-row flex-wrap items-baseline justify-center gap-x-2 gap-y-1 sm:justify-end">
        <span className="text-[10px] tabular-nums tracking-[0.12em] text-muted-foreground/60">
          {item.duration}
          <span className="text-muted-foreground/40"> / </span>
        </span>
        {parsed ? (
          <>
            <span className="text-2xl font-light tabular-nums tracking-[0.08em] text-gold">
              {parsed.digits}
            </span>
            <span className="text-xs tracking-[0.12em] text-gold/90">円</span>
            <span className="text-[9px] tracking-[0.05em] text-muted-foreground/50">
              （税込）
            </span>
          </>
        ) : (
          <>
            <span className="text-2xl font-light tracking-[0.05em] text-gold">
              {item.price}
            </span>
            <span className="text-[9px] text-muted-foreground/50">(税込)</span>
          </>
        )}
      </div>
    </div>
  )
}

export function MenuPricingBlock({ menu }: { menu: Menu }) {
  const isScalp = menu.id === "scalp"

  return (
    <div className="mb-14 overflow-hidden border border-border/30 bg-card">
      <div className="border-b border-border/20 px-6 py-7 text-center sm:py-6">
        <span className="text-[10px] tracking-[0.32em] text-gold/60">料金</span>
      </div>
      {menu.items.map((item, idx) =>
        isScalp ? (
          <ScalpPricingRow
            key={(item.labelEn ?? item.name) + idx}
            item={item}
            isLast={idx === menu.items.length - 1}
          />
        ) : (
          <DefaultPricingRow
            key={item.name + idx}
            item={item}
            isLast={idx === menu.items.length - 1}
          />
        ),
      )}
    </div>
  )
}
