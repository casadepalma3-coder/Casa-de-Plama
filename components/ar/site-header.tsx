"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

const links = [
  { label: "المجموعة", href: "#collection" },
  { label: "الإرث", href: "#heritage" },
  { label: "الإهداء", href: "#gifting" },
  { label: "تواصل معنا", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold tracking-[0.2em] text-foreground">
            كاسا دي بالما
          </span>
          <span className="mt-1 text-[10px] tracking-[0.2em] text-primary">
            تمور سعودية فاخرة
          </span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <LanguageSwitcher lang="ar" />
          <a
            href="#gifting"
            className="rounded-sm border border-primary/60 px-5 py-2 text-xs tracking-[0.1em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            اطلب الآن
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#gifting"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm border border-primary/60 px-5 py-3 text-center text-xs tracking-[0.1em] text-primary"
            >
              اطلب الآن
            </a>
            <div className="mt-4 flex justify-center">
              <LanguageSwitcher lang="ar" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
