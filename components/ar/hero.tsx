import Image from "next/image"

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/hero-dates.png"
        alt="تمور سعودية فاخرة في وعاء داكن أنيق"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-background/30" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 lg:px-10">
        <p className="mb-6 text-xs tracking-[0.2em] text-primary">
          مُجتنى في المملكة العربية السعودية
        </p>
        <h1 className="max-w-4xl text-balance font-serif text-5xl font-light leading-[1.15] text-foreground sm:text-6xl lg:text-8xl">
          فنّ
          <span className="block italic text-primary">أجود التمور.</span>
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
          تنتقي كاسا دي بالما أرقى التمور وأندرها من قلب الجزيرة العربية — تُختار
          كل ثمرة باليد، تكريماً لقرونٍ من العراقة ولفخامة الصحراء الهادئة.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#collection"
            className="rounded-sm bg-primary px-8 py-4 text-xs tracking-[0.1em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            اكتشف المجموعة
          </a>
          <a
            href="#heritage"
            className="rounded-sm border border-border px-8 py-4 text-xs tracking-[0.1em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            إرثنا
          </a>
        </div>
      </div>
    </section>
  )
}
