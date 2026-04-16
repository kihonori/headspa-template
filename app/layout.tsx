import type { Metadata, Viewport } from 'next'
import { Noto_Serif_JP } from 'next/font/google'
import './globals.css'

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ドライヘッドスパ　ゆう～MEGURI～｜福岡市東区の完全個室ドライヘッドスパ',
  description: '福岡市東区の完全個室・1日4名限定「ドライヘッドスパ　ゆう～MEGURI～」。水やオイルを使わない熟練の手技で、眼精疲労や頭のこりを根本から解消します。お着替え不要・メイクをしたままで極上のリラックス体験を。',
  keywords: 'ヘッドスパ, 福岡, 福岡市東区, 育毛, 頭皮ケア, 完全個室, ヒト幹細胞, ドライヘッドスパ, エイジングケア',
  openGraph: {
    title: 'ドライヘッドスパ　ゆう～MEGURI～｜福岡市東区の完全個室ドライヘッドスパ',
    description: '福岡市東区の完全個室・1日4名限定「ドライヘッドスパ　ゆう～MEGURI～」。水やオイルを使わない熟練の手技で、眼精疲労や頭のこりを根本から解消します。',
    url: 'https://www.yuheadspa-osaka.net',
    siteName: 'ドライヘッドスパ　ゆう～MEGURI～',
    locale: 'ja_JP',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'ドライヘッドスパ　ゆう～MEGURI～',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '唐原2丁目10-10',
      addressLocality: '福岡市東区',
      addressRegion: '福岡県',
      addressCountry: 'JP',
    },
    telephone: '06-6115-9935',
    url: 'https://www.yuheadspa-osaka.net',
    openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:00-17:00',
    description:
      '福岡市東区の完全個室・1日4名限定「ドライヘッドスパ　ゆう～MEGURI～」。ヒト幹細胞×専門技術による育毛・頭皮ケアに特化した完全ドライヘッドスパ。',
    priceRange: '¥¥¥',
  }

  return (
    <html lang="ja" className={notoSerifJP.variable}>
      <body className="font-serif antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
