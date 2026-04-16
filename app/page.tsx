import Header from "@/components/header"
import { Hero } from "@/components/hero"
import { ConcernsSection } from "@/components/concerns-section"
import { About } from "@/components/about"
import { ReasonsSection } from "@/components/reasons-section"
import { CampaignSection } from "@/components/campaign-section"
import { MenuSection } from "@/components/menu-section"
import { Evidence } from "@/components/evidence"
import { Faq } from "@/components/faq"
import { AccessMap } from "@/components/access-map"
import { CategoryLinks } from "@/components/category-links"
import { BottomCtaSection } from "@/components/bottom-cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ConcernsSection />
      <ReasonsSection />
      <About />
      <CampaignSection />
      <MenuSection />
      <Evidence />
      <Faq />
      <AccessMap />
      <CategoryLinks />
      <BottomCtaSection />
      <SiteFooter />
    </main>
  )
}
