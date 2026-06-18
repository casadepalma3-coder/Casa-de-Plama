const stats = [
  { value: "1932", label: "Family Roots" },
  { value: "12", label: "Rare Varieties" },
  { value: "100%", label: "Hand Selected" },
]

export function Story() {
  return (
    <section className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">
              The House
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-tight text-foreground lg:text-5xl">
              A devotion to the date, passed through generations.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
              For nearly a century, our family has tended palm groves beneath the
              Arabian sun. Casa de Palma was born from a simple belief: that the
              date is not merely a fruit, but a treasure to be honored. We select
              only the rarest harvests, cured slowly and presented with the
              reverence they deserve.
            </p>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
              Every box that leaves our house carries the patience of the desert
              and the warmth of a heritage built on craft, not haste.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-8 py-12 text-center">
              <p className="font-serif text-5xl font-light text-primary lg:text-6xl">
                {s.value}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
