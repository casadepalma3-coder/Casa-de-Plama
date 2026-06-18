import Link from "next/link"

export function LanguageSwitcher({ lang }: { lang: "en" | "ar" }) {
  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
      <Link
        href="/"
        aria-current={lang === "en" ? "page" : undefined}
        className={
          lang === "en"
            ? "text-primary"
            : "text-muted-foreground transition-colors hover:text-primary"
        }
      >
        EN
      </Link>
      <span className="text-border">|</span>
      <Link
        href="/ar"
        aria-current={lang === "ar" ? "page" : undefined}
        className={
          lang === "ar"
            ? "text-primary"
            : "text-muted-foreground transition-colors hover:text-primary"
        }
      >
        العربية
      </Link>
    </div>
  )
}
