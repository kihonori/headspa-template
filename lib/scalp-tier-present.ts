import type { MenuItem } from "@/lib/menu-data"

/** ラグジュアリー誘導用：バッジ・説明（レベル表記は使わない） */
export const SCALP_BADGE_GOLD = "#C9A96E" as const

export const scalpTierBadges: Record<
  NonNullable<MenuItem["tier"]>,
  readonly string[]
> = {
  premium: ["人気No.1"],
  standard: ["迷ったらこちら"],
  light: ["初めての方におすすめ"],
}

export const scalpTierDescription: Record<
  NonNullable<MenuItem["tier"]>,
  string
> = {
  premium: "頭皮環境を根本から整え、\nより高い効果を求める方向けの上位コース。",
  standard: "バランスよくケアしたい方におすすめ。\n迷われた際は、まずこちらからご検討ください。",
  light: "まずは頭皮ケアを始めたい方におすすめ。\n無理なくケアをスタートしたい方向け。",
}
