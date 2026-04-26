import type { MenuItem } from "@/lib/menu-data"

/** ラグジュアリー誘導用：バッジ・説明（レベル表記は使わない） */
export const SCALP_BADGE_GOLD = "#C9A96E" as const

export const scalpTierBadges: Record<
  NonNullable<MenuItem["tier"]>,
  readonly string[]
> = {
  premium: ["最上位ケア"],
  standard: ["人気No.1"],
  light: ["初めての方におすすめ"],
}

export const scalpTierDescription: Record<
  NonNullable<MenuItem["tier"]>,
  string
> = {
  premium: "頭皮環境を根本から整え、\nより高い効果を求める方向けの上位コース。",
  standard: "当店で最も選ばれている人気No.1コース。\n初めての方から継続ケアまで幅広くおすすめです。",
  light: "初めての方でも安心して始められる頭皮ケアコース。\n無理なくケアをスタートしたい方におすすめです。",
}
