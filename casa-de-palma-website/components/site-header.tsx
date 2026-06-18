"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Heritage", href: "#heritage" },
  { label: "Gifting", href: "#gifting" },
  { label: "Contact", href: "#contact" },
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
            CASA DE PALMA
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.4em] text-primary">
            Premium Saudi Dates
          </span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#gifting"
          className="hidden rounded-sm border border-primary/60 px-5 py-2 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-block"
        >
          Order Now
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
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
                className="py-3 text-sm uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#gifting"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm border border-primary/60 px-5 py-3 text-center text-xs uppercase tracking-[0.2em] text-primary"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
