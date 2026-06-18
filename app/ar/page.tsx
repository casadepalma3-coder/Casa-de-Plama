import type { Metadata } from "next"
import { SiteHeader } from "@/components/ar/site-header"
import { Hero } from "@/components/ar/hero"
import { Story } from "@/components/ar/story"
import { Collection } from "@/components/ar/collection"
import { Heritage } from "@/components/ar/heritage"
import { Gifting } from "@/components/ar/gifting"
import { SiteFooter } from "@/components/ar/site-footer"

export const metadata: Metadata = {
  title: "كاسا دي بالما — تمور سعودية فاخرة",
  description:
    "تنتقي كاسا دي بالما أجود التمور السعودية — العجوة والسكري والمجدول — مُجتناة بعراقة ومصنوعة لأصحاب الذائقة الرفيعة.",
  alternates: {
    canonical: "/ar",
    languages: {
      en: "/",
      ar: "/ar",
    },
  },
}

export default function ArabicPage() {
  return (
    <main dir="rtl" lang="ar" className="min-h-screen bg-background font-arabic text-right">
      <SiteHeader />
      <Hero />
      <Story />
      <Collection />
      <Heritage />
      <Gifting />
      <SiteFooter />
    </main>
  )
}
