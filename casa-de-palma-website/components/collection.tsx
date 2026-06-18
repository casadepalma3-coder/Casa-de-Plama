import Image from "next/image"

const varieties = [
  {
    name: "Ajwa",
    origin: "Madinah",
    note: "Dark, soft, and subtly sweet — the most revered of all dates.",
    image: "/dates-ajwa.png",
    price: "From $48",
  },
  {
    name: "Sukkari",
    origin: "Al-Qassim",
    note: "Golden and melting with a delicate caramel richness.",
    image: "/dates-sukkari.png",
    price: "From $42",
  },
  {
    name: "Medjool",
    origin: "Royal Groves",
    note: "Generous, plump fruit with deep honeyed flavor.",
    image: "/dates-medjool.png",
    price: "From $45",
  },
]

export function Collection() {
  return (
    <section id="collection" className="border-t border-border bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">
              The Collection
            </p>
            <h2 className="max-w-2xl text-balance font-serif text-4xl font-light leading-tight text-foreground lg:text-5xl">
              Rare varieties, each with its own character.
            </h2>
          </div>
          <a
            href="#gifting"
            className="text-xs uppercase tracking-[0.2em] text-primary transition-opacity hover:opacity-70"
          >
            View All →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {varieties.map((v) => (
            <article key={v.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={v.image || "/placeholder.svg"}
                  alt={`${v.name} dates from ${v.origin}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="mt-6 flex items-baseline justify-between">
                <h3 className="font-serif text-3xl font-light text-foreground">
                  {v.name}
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-primary">
                  {v.price}
                </span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
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
