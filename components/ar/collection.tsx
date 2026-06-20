import Image from "next/image"

const varieties = [
  {
    name: "عجوة",
    origin: "المدينة المنورة",
    note: "داكنة، طريّة، وحلوة بلطف — أجلّ التمور وأكثرها تقديراً.",
    image: "/dates-ajwa.png",
    price: "ابتداءً من ٤٨$",
  },
  {
    name: "سكري",
    origin: "القصيم",
    note: "ذهبية تذوب في الفم بغنى الكراميل الرقيق.",
    image: "/dates-sukkari.png",
    price: "ابتداءً من ٤٢$",
  },
  {
    name: "مجدول",
    origin: "البساتين الملكية",
    note: "ثمار ممتلئة سخية بنكهة عسلية عميقة.",
    image: "/dates-medjool.png",
    price: "ابتداءً من ٤٥$",
  },
]

export function Collection() {
  return (
    <section id="collection" className="border-t border-border bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-xs tracking-[0.2em] text-primary">
              المجموعة
            </p>
            <h2 className="max-w-2xl text-balance font-serif text-4xl font-light leading-snug text-foreground lg:text-5xl">
              أصنافٌ نادرة، لكلٍّ منها طابعه الخاص.
            </h2>
          </div>
          <a
            href="#gifting"
            className="text-xs tracking-[0.1em] text-primary transition-opacity hover:opacity-70"
          >
            عرض الكل ←
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {varieties.map((v) => (
            <article key={v.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={v.image || "/placeholder.svg"}
                  alt={`تمر ${v.name} من ${v.origin}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="mt-6 flex items-baseline justify-between">
                <h3 className="font-serif text-3xl font-light text-foreground">
                  {v.name}
                </h3>
                <span className="text-xs tracking-[0.1em] text-primary">
                  {v.price}
                </span>
              </div>
              <p className="mt-1 text-xs tracking-[0.2em] text-muted-foreground">
                {v.origin}
              </p>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                {v.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
