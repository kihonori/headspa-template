export type MenuItem = {
  name: string
  detail: string
  duration: string
  price: string
  /** 育毛メニュー用：英語ラベル行（例 Scalp Care | Premium） */
  labelEn?: string
  /** 育毛メニュー用：表示強弱・対象文の出し分け */
  tier?: "premium" | "standard" | "light"
}

export type Menu = {
  id: string
  tab: string
  enTitle: string
  image: string
  descriptionParagraphs: string[]
  benefits: string[]
  benefitNote: string
  items: MenuItem[]
  steps: string[]
}

export const menus: Menu[] = [
  {
    id: "scalp",
    tab: "育毛ヘッドスパ",
    enTitle: "Scalp Care Head Spa",
    image: "/images/128cbda037-5e6f-4077-b1e3-4500a79eb745.png",
    descriptionParagraphs: [
      "頭皮から美しさを整える育毛ケア。",
      "お客様満足No.1として支持される、頭皮と髪を根本から整えるラグジュアリーなヘッドスパ。",
      "ヒト幹細胞培養上清液を使用し、頭皮環境を整え、ハリ・コシのある髪へ導きます。",
    ],
    benefits: [
      "薄毛予防／改善",
      "白髪予防／改善",
      "頭皮環境改善",
      "血行促進",
      "自律神経ケア",
      "ストレスケア",
      "髪質改善",
    ],
    benefitNote:
      "抜け毛・薄毛・頭皮環境が気になる方には、頭皮から整える育毛ケアがおすすめです。",
    items: [
      {
        labelEn: "SCALP CARE | PREMIUM",
        name: "ヒト幹細胞 頭皮ケア（高濃度）",
        tier: "premium",
        detail: "",
        duration: "90min",
        price: "¥32,000",
      },
      {
        labelEn: "SCALP CARE | STANDARD",
        name: "ヒト幹細胞 頭皮ケア（中濃度）",
        tier: "standard",
        detail: "",
        duration: "90min",
        price: "¥18,000",
      },
      {
        labelEn: "SCALP CARE | LIGHT",
        name: "頭皮ケア（ベーシック）",
        tier: "light",
        detail: "",
        duration: "90min",
        price: "¥15,000",
      },
    ],
    steps: [
      "頭皮マイクロスコープ",
      "ブラッシング",
      "足湯",
      "カッサ",
      "ホットストーン",
      "ヒト幹細胞塗布",
      "電気バリブラシ",
    ],
  },
  {
    id: "relaxation",
    tab: "リラクゼーション",
    enTitle: "リラクゼーション ヘッドスパ",
    image: "/images/relaxation-bg.png",
    descriptionParagraphs: [
      "頭・首・肩の深層筋を丁寧にほぐし、深いリラックスへ導くドライヘッドスパ。",
      "ホットストーンや足湯を組み合わせ、日々の疲れをやさしく解消します。",
      "水やオイルを使わない完全ドライ施術のため、お着替え不要で気軽にご利用いただけます。",
    ],
    benefits: [
      "脳疲労の回復",
      "睡眠の質向上",
      "リフトアップ",
      "目力アップ",
      "眼精疲労ケア",
      "ストレス・自律神経ケア",
      "頭皮・ヘアケア",
    ],
    benefitNote:
      "不眠・脳疲労・ストレスを感じている方には、深いリラクゼーション効果のあるドライヘッドスパがおすすめです。",
    items: [
      {
        name: "リラクゼーション ヘッドスパ",
        detail: "",
        duration: "60〜90min",
        price: "¥13,000",
      },
    ],
    steps: [
      "ブラッシング",
      "足湯",
      "カッサ",
      "ホットストーン",
      "電気バリブラシ",
    ],
  },
]
