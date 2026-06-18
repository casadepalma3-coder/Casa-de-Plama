import Image from "next/image"

export function Gifting() {
  return (
    <section id="gifting" className="border-t border-border bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 aspect-square overflow-hidden rounded-sm lg:order-1">
            <Image
              src="/gift-box.png"
              alt="Luxury Casa de Palma gift box of assorted dates"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">
              The Art of Gifting
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-tight text-foreground lg:text-5xl">
              A gift that speaks of generosity.
            </h2>
            <p className="mt-8 text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
              Presented in hand-finished boxes with gold detailing, our gifting
              collection transforms the timeless date into an offering worthy of
              the most important occasions — from Ramadan to corporate honors.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Bespoke assortments of signature varieties",
                "Personalized engraving and dedication cards",
                "Worldwide express delivery",
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
              className="mt-10 inline-block rounded-sm bg-primary px-8 py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Compose a Gift
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
