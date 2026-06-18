import Image from "next/image"

export function Heritage() {
  return (
    <section id="heritage" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[60vh] lg:min-h-[80vh]">
          <Image
            src="/heritage-palm.png"
            alt="Saudi Arabian date palm plantation at golden hour"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/20" />
        </div>
        <div className="flex flex-col justify-center bg-background px-6 py-20 lg:px-16 lg:py-0">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">
            From Grove to Gift
          </p>
          <h2 className="max-w-lg text-balance font-serif text-4xl font-light leading-tight text-foreground lg:text-5xl">
            Where the desert meets devotion.
          </h2>
          <p className="mt-8 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
            Our palms rise from soil tended by hand for generations. The fruit
            ripens slowly under an unhurried sun, gathered at its peak and cured
            with the same care our founders practiced decades ago.
          </p>

          <div className="mt-12 space-y-8">
            {[
              {
                step: "01",
                title: "Hand Harvest",
                text: "Each cluster is gathered at perfect ripeness by skilled growers.",
              },
              {
                step: "02",
                title: "Slow Curing",
                text: "Time-honored methods preserve texture, aroma, and depth.",
              },
              {
                step: "03",
                title: "Final Selection",
                text: "Only flawless fruit earns a place in a Casa de Palma box.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 border-t border-border pt-6">
                <span className="font-serif text-2xl font-light text-primary">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
