import Image from "next/image"

export function Heritage() {
  return (
    <section id="heritage" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[60vh] lg:min-h-[80vh]">
          <Image
            src="/heritage-palm.png"
            alt="مزرعة نخيل تمر سعودية في ساعة الغروب الذهبية"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/20" />
        </div>
        <div className="flex flex-col justify-center bg-background px-6 py-20 lg:px-16 lg:py-0">
          <p className="mb-6 text-xs tracking-[0.2em] text-primary">
            من البستان إلى الهدية
          </p>
          <h2 className="max-w-lg text-balance font-serif text-4xl font-light leading-snug text-foreground lg:text-5xl">
            حيث تلتقي الصحراء بالإخلاص.
          </h2>
          <p className="mt-8 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
            ترتفع نخيلنا من تربةٍ تُعتنى بها يدوياً جيلاً بعد جيل. تنضج الثمار
            ببطءٍ تحت شمسٍ متمهلة، تُجنى في أوج نضجها وتُعالج بالعناية ذاتها التي
            مارسها مؤسسونا منذ عقود.
          </p>

          <div className="mt-12 space-y-8">
            {[
              {
                step: "٠١",
                title: "الجني اليدوي",
                text: "تُجمع كل عذقٍ في نضجٍ مثالي على يد مزارعين مهرة.",
              },
              {
                step: "٠٢",
                title: "المعالجة البطيئة",
                text: "أساليب عريقة تحفظ القوام والعبير والعمق.",
              },
              {
                step: "٠٣",
                title: "الانتقاء النهائي",
                text: "لا تنال مكانها في علبة كاسا دي بالما إلا الثمار الكاملة.",
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
