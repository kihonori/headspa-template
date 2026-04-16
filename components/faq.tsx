"use client"

import { FadeIn } from "@/components/fade-in"
import { ReserveCtaButtons } from "@/components/reserve-cta-buttons"
import { SectionNextStep } from "@/components/section-next-step"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "育毛ケアはどのくらいの頻度で通うのがおすすめですか？",
    a: "最初の1〜2ヶ月は2週間に1回、その後は月1〜2回のメンテナンスがおすすめです。頭皮状態に合わせて無理のない頻度をご提案しますので、初めての方もご安心ください。",
  },
  {
    q: "男性でも利用できますか？",
    a: "はい、男性・女性どちらのお客様にもご利用いただいております。抜け毛や頭皮環境のお悩みも、性別を問わずお気軽にご相談ください。",
  },
  {
    q: "抜け毛や薄毛の相談はできますか？",
    a: "もちろん可能です。頭皮の状態や生活リズムを丁寧に伺いながら、Premium（高濃度）・Standard（中濃度）・Light（ベーシック）のコースから、現在の状態に合うものをご案内いたします。",
  },
  {
    q: "髪を濡らさず施術を受けられますか？",
    a: "はい。水やオイルを使わない完全ドライ施術のため、髪を濡らさずに受けていただけます。お着替え不要で、メイクをしたままでもご利用可能です。",
  },
  {
    q: "初めてでも大丈夫ですか？",
    a: "初回はお悩みや体調を丁寧に伺ったうえで、施術の強さや進め方を調整いたします。緊張しやすい方でも落ち着いて過ごせるよう、完全個室でご案内しています。",
  },
  {
    q: "スタイリング剤をつけたままでも利用できますか？",
    a: "ご利用可能です。育毛コースの効果実感を高めたい場合は、頭皮が清潔な状態でのご来店がおすすめです。難しい場合もそのままで問題ありません。",
  },
  {
    q: "ドライヘッドスパとは何ですか？",
    a: "ドライヘッドスパは水やオイルを使わず、頭皮や首肩を中心に手技でめぐりを整える施術です。頭皮ケアと深いリラクゼーションを同時に叶えられるのが特長です。",
  },
  {
    q: "施術は痛くないですか？",
    a: "強すぎない心地よい圧で行いますので、痛みはほとんどありません。刺激の感じ方はお客様ごとに異なるため、施術中も細かく強さを調整いたします。",
  },
  {
    q: "予約は必須ですか？",
    a: "当店は完全予約制です。1日4名様限定のため、事前のWEB予約をお願いしております。頭皮や育毛のお悩みはLINEからもお気軽にご相談いただけます。",
  },
  {
    q: "支払い方法は？",
    a: "現金、クレジットカード（一括）、各種QRコード決済（PayPay / d払い / au PAY / WeChat PAY / Alipay+）に対応しています。",
  },
  {
    q: "駐車場はありますか？",
    a: "サロン前に駐車場をご用意しております。7番をご利用ください。場所の詳細はACCESSページにも掲載しています。",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-16 flex flex-col items-center">
            <span className="text-sm font-medium tracking-[0.5em] text-gold/80 sm:text-base">
              よくある質問
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/30"
              >
                <AccordionTrigger className="flex min-h-[44px] items-center py-5 text-left text-sm tracking-[0.05em] text-foreground/80 hover:text-gold hover:no-underline md:py-6 lg:text-[15px]">
                  <span className="flex items-start gap-3">
                    <span className="shrink-0 text-[11px] tracking-[0.1em] text-gold/60">Q.</span>
                    <span>{faq.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-6 text-xs leading-[2.2] tracking-[0.03em] text-muted-foreground md:pl-7 lg:text-[13px]">
                  <span className="mr-2 shrink-0 text-[11px] tracking-[0.1em] text-gold/40">A.</span>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>

        <SectionNextStep
          leadText="ご予約は30秒で完了します"
          preCtaText={[
            "ご希望の日時を選ぶだけで簡単予約",
            "頭皮や育毛のお悩みはLINEからも相談可能",
          ]}
          footnote="※完全予約制のため事前予約をお願いいたします"
        >
          <ReserveCtaButtons compact />
        </SectionNextStep>
      </div>
    </section>
  )
}
