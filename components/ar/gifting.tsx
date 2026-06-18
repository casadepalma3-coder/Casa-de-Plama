import Image from "next/image"

export function Gifting() {
  return (
    <section id="gifting" className="border-t border-border bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 aspect-square overflow-hidden rounded-sm lg:order-1">
            <Image
              src="/gift-box.png"
              alt="علبة هدايا فاخرة من كاسا دي بالما تضم تشكيلة تمور"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-6 text-xs tracking-[0.2em] text-primary">
              فنّ الإهداء
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-snug text-foreground lg:text-5xl">
              هديةٌ تنطق بالكرم.
            </h2>
            <p className="mt-8 text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
              تُقدَّم في علبٍ منمّقة يدوياً بلمساتٍ ذهبية، تحوّل مجموعتنا للإهداء
              التمرة الخالدة إلى هديةٍ تليق بأهم المناسبات — من رمضان إلى
              التكريمات المؤسسية.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "تشكيلات مخصصة من أصنافنا المميزة",
                "نقش شخصي وبطاقات إهداء",
                "توصيل سريع إلى جميع أنحاء العالم",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-10 inline-block rounded-sm bg-primary px-8 py-4 text-xs tracking-[0.1em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              صمّم هديتك
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
