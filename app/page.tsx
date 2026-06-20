import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Story } from "@/components/story"
import { Collection } from "@/components/collection"
import { Heritage } from "@/components/heritage"
import { Gifting } from "@/components/gifting"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
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
