"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { NightRelaxation } from "@/components/night-relaxation"
import { ReserveCtaButtons } from "@/components/reserve-cta-buttons"
import { ScalpTierBadge } from "@/components/scalp-tier-badge"
import type { MenuItem } from "@/lib/menu-data"
import { menus } from "@/lib/menu-data"
import { scalpTierBadges, scalpTierDescription } from "@/lib/scalp-tier-present"

const formatPrice = (price: string) => price.replace(/[¥￥]/g, "")
const formatDuration = (duration: string) => duration.replace("min", "分")

function ScalpCardDescription({ tier }: { tier: NonNullable<MenuItem["tier"]> }) {
  const text = scalpTierDescription[tier]
  return (
    <p className="mt-3 break-words whitespace-pre-line text-sm leading-relaxed text-muted-foreground/80 sm:text-base">
      {text}
    </p>
  )
}

export function MenuSection() {
  return (
    <section id="menu" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-8 lg:px-10">
        <FadeIn>
          <div className="mb-14 flex flex-col items-center lg:mb-20">
            <span className="text-base tracking-[0.5em] text-gold/80 sm:text-lg">
              メニュー
            </span>
            <div className="mt-6 mx-auto max-w-[90%] md:max-w-[640px]">
              <p className="mb-4 text-center text-base md:text-lg leading-relaxed tracking-[0.05em] text-foreground/80">
                癒しだけでは終わらない
                <br />
                ・頭皮ケア
                <br />
                ・育毛ケア
                <br />
                ・深いリラクゼーション
                <br />
                目的に合わせた最適な施術をご提供します
              </p>
              <p className="mb-4 text-center text-base md:text-lg leading-[1.8] tracking-[0.05em] text-foreground/80">
                当店では
                <br />
                お悩みやご希望に合わせて選べる
                <br />
                4つのコースをご用意しております
              </p>
              <p className="mb-4 text-center text-base md:text-lg leading-[1.8] tracking-[0.05em] text-foreground/80">
                初めての方から
                <br />
                本格的に改善を目指す方まで
              </p>
              <p className="mb-4 text-center text-base md:text-lg leading-[1.8] tracking-[0.05em] text-foreground/80">
                段階的に最適なケアを
                <br />
                お選びいただけます
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6 lg:gap-8">
          {menus.map((menu, idx) => (
            <FadeIn key={menu.id} delay={idx * 0.1}>
              <Link href={`/menu/${menu.id}`} className="group block">
                <div className="relative h-full overflow-hidden border border-border/30 bg-card transition-all duration-500 hover:border-gold/40">
                  <div className="flex h-full flex-col sm:flex-row">
                    {menu.image && (
                      <div className="relative h-56 w-full shrink-0 overflow-hidden sm:h-auto sm:w-64 lg:w-80">
                        <Image
                          src={
                            menu.id === "scalp"
                              ? "/images/128cbda037-5e6f-4077-b1e3-4500a79eb745.png"
                              : menu.image
                          }
                          alt={menu.tab}
                          fill
                          className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                            menu.id === "scalp" ? "object-center" : ""
                          }`}
                          sizes="(max-width: 640px) 100vw, 320px"
                        />
                        <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/20" />
                      </div>
                    )}

                    <div className="flex h-full flex-1 flex-col p-6 lg:p-8">
                      <div>
                        <div className="mb-5 flex items-start justify-between gap-4">
                          <div>
                            <span className="mb-1 block text-[10px] tracking-[0.3em] text-gold/60">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            {menu.id === "scalp" ? (
                              <>
                                <p className="text-[11px] tracking-[0.12em] text-gold-light/90">
                                  頭皮から美しさを整える
                                </p>
                                <h3 className="mt-1 break-words text-base tracking-[0.15em] text-foreground lg:text-lg">
                                  育毛ヘッドスパ
                                </h3>
                                <p className="mt-3 text-[9px] tracking-[0.22em] text-muted-foreground/70 sm:text-[10px] sm:tracking-[0.26em]">
                                  Scalp Care Head Spa
                                </p>
                              </>
                            ) : (
                              <>
                                <h3 className="break-words text-base tracking-[0.15em] text-foreground lg:text-lg">
                                  {menu.tab}
                                </h3>
                                <p className="mt-1 text-[11px] tracking-[0.1em] text-muted-foreground">
                                  {menu.enTitle}
                                </p>
                              </>
                            )}
                            {menu.id !== "scalp" ? (
                              <p className="mt-3 text-sm leading-relaxed tracking-[0.04em] text-gold-light/85 md:text-base">
                                深いリラックスと癒しを求める方へ
                              </p>
                            ) : null}
                          </div>
                          <span className="mt-1 shrink-0 text-gold/60 transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </div>

                        {menu.id === "scalp" ? (
                          <p className="mb-6 text-left text-sm leading-relaxed text-muted-foreground md:text-base">
                            抜け毛・薄毛・分け目・ボリューム不足・ハリコシの低下が気になる方へ。
                            <br />
                            頭皮環境を根本から整える、当グループ人気No.1の育毛ヘッドスパです。
                            <br />
                            <br />
                            高濃度ヒト幹細胞ケアを使用し、頭皮にうるおいを与えながら、
                            <br />
                            健やかで美しい髪を育む土台づくりを行います。
                            <br />
                            <br />
                            完全個室・1日4名限定の落ち着いた空間で、
                            <br />
                            周囲を気にせず本格的な頭皮ケアを受けていただけます。
                            <br />
                            <br />
                            お悩みの深さやご希望に合わせて、
                            <br />
                            3つのコースから最適なプランをご提案いたします。
                          </p>
                        ) : (
                          <p className="mb-6 break-words whitespace-pre-line text-base leading-relaxed tracking-[0.02em] text-muted-foreground md:text-lg">
                            {menu.descriptionParagraphs[0]}
                          </p>
                        )}
                      </div>

                      <div className="mt-auto border-t border-border/20 pt-6">
                        {menu.items.map((item) => {
                          const isScalpRow = menu.id === "scalp" && item.labelEn && item.tier
                          const tier = item.tier
                          const rowPad =
                            isScalpRow && tier === "standard"
                              ? "py-5 sm:py-6"
                              : isScalpRow
                                ? "py-4"
                                : "py-3.5"
                          const rowBg =
                            isScalpRow && tier === "standard"
                              ? "rounded-sm border border-[#C9A96E]/25 bg-[#262422]/80 px-1 -mx-1 sm:px-2 sm:-mx-2"
                              : ""

                          return (
                            <div
                              key={item.labelEn ?? item.name}
                              className={`${rowPad} ${rowBg} ${
                                isScalpRow ? "border-b border-border/10 last:border-b-0" : ""
                              }`}
                            >
                              {isScalpRow && tier ? (
                                <>
                                  <div className="flex flex-wrap items-center gap-2">
                                    {scalpTierBadges[tier].map((label) => (
                                      <ScalpTierBadge key={label}>{label}</ScalpTierBadge>
                                    ))}
                                  </div>
                                  <div className="text-beauty-wrap text-left mt-4">
                                    <p
                                      className="
text-gold
text-lg md:text-xl
font-semibold
tracking-[0.15em]
mb-2
opacity-90
"
                                    >
                                      {item.labelEn}
                                    </p>
                                    <p className="text-beauty text-foreground/92">
                                      {item.name}
                                    </p>
                                  </div>
                                  <ScalpCardDescription tier={tier} />
                                  <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 sm:justify-end">
                                    <span
                                      className={
                                        tier === "standard"
                                          ? "text-lg font-medium tabular-nums tracking-[0.08em] text-[#C9A96E] sm:text-xl"
                                          : tier === "premium"
                                            ? "text-base font-light tabular-nums tracking-[0.07em] text-foreground/88"
                                            : "text-sm font-light tabular-nums tracking-[0.06em] text-muted-foreground/88"
                                      }
                                    >
                                      {formatPrice(item.price)}
                                    </span>
                                    <span
                                      className={
                                        tier === "standard"
                                          ? "text-[10px] font-medium tracking-[0.1em] text-[#C9A96E]/90"
                                          : tier === "premium"
                                            ? "text-[10px] tracking-[0.08em] text-foreground/65"
                                            : "text-[9px] tracking-[0.08em] text-muted-foreground/55"
                                      }
                                    >
                                      円
                                    </span>
                                    <span className="text-[9px] text-muted-foreground/45">
                                      （税込）
                                    </span>
                                    <span className="text-[9px] text-muted-foreground/50">
                                      / {formatDuration(item.duration)}
                                    </span>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {menu.id === "relaxation" ? (
                                    <div className="text-center">
                                      {item.detail ? (
                                        <p className="text-gold text-lg md:text-xl font-semibold tracking-[0.15em] mb-2 opacity-90 uppercase">
                                          {item.detail}
                                        </p>
                                      ) : null}
                                      <p className="text-beauty text-foreground/92">
                                        {item.name}
                                      </p>
                                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground/80 break-words">
                                        頭・首・肩の深層筋にアプローチし
                                        <br />
                                        深いリラックスへ導く
                                        <br />
                                        本格リラクゼーションコース
                                      </p>
                                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground/80 break-words">
                                        対象：頭・首・肩まわりの疲れやストレスを
                                        <br />
                                        ケアしたい方
                                      </p>
                                      <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 sm:justify-end">
                                        <span className="text-base font-light tabular-nums tracking-[0.07em] text-foreground/88">
                                          {formatPrice(item.price)}
                                        </span>
                                        <span className="text-[10px] tracking-[0.08em] text-foreground/65">円</span>
                                        <span className="text-[9px] text-muted-foreground/45">（税込）</span>
                                        <span className="text-[9px] text-muted-foreground/50">
                                          / {formatDuration(item.duration)}
                                        </span>
                                      </div>
                                    </div>
                                  ) : (
                                    <>
                                      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                                        <div className="min-w-0 flex-1 text-left">
                                          <span className="text-[11px] tracking-[0.05em] text-foreground/70">
                                            {item.name}
                                          </span>
                                          {item.detail ? (
                                            <span className="ml-1 text-[10px] text-muted-foreground">
                                              ({item.detail})
                                            </span>
                                          ) : null}
                                        </div>
                                        <div className="flex shrink-0 items-baseline gap-1.5 sm:justify-end">
                                          <span className="text-base font-light tracking-[0.08em] text-gold">
                                            {formatPrice(item.price)}
                                          </span>
                                          <span className="text-[10px] tracking-[0.08em] text-gold/90">円</span>
                                          <span className="text-[9px] text-muted-foreground/45">（税込）</span>
                                          <span className="text-[9px] text-muted-foreground/55">
                                            / {formatDuration(item.duration)}
                                          </span>
                                        </div>
                                      </div>
                                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground/80 break-words">
                                        対象：頭・首・肩まわりの疲れやストレスをケアしたい方
                                      </p>
                                    </>
                                  )}
                                </>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <NightRelaxation />

        <FadeIn delay={0.12}>
          <div className="mx-auto mt-10 max-w-3xl border border-border/30 bg-card/70 px-5 py-8 text-center md:px-8 md:py-10">
            <p className="text-sm leading-snug tracking-[0.1em] text-gold-light/90 md:text-base md:tracking-[0.12em]">
              <span className="inline-block">5月7日（木）NEW OPEN</span>
            </p>
            <div className="mx-auto mt-6 max-w-md space-y-3.5 px-2 text-[15px] leading-[1.85] tracking-[0.06em] text-foreground/82 md:mt-7 md:text-base md:leading-loose md:tracking-[0.08em]">
              <p className="text-balance text-center">
                <span className="inline-block">数量限定ではございますが</span>
              </p>
              <p className="text-balance text-center">
                <span className="inline-block">ご予約いただいた方へ</span>
              </p>
              <p className="text-balance text-center">
                <span className="inline-block">特典をご用意しております。</span>
              </p>
            </div>
            <div className="mt-6">
              <ReserveCtaButtons webLabel="Squareで先行予約する" lineLabel="LINEで相談する" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
