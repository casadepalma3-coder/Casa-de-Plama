const stats = [
  { value: "١٩٣٢", label: "جذور العائلة" },
  { value: "١٢", label: "أصناف نادرة" },
  { value: "٪١٠٠", label: "مُنتقاة يدوياً" },
]

export function Story() {
  return (
    <section className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-6 text-xs tracking-[0.2em] text-primary">
              الدار
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-snug text-foreground lg:text-5xl">
              شغفٌ بالتمر تتوارثه الأجيال.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
              على مدى قرنٍ تقريباً، اعتنت عائلتنا ببساتين النخيل تحت شمس الجزيرة
              العربية. وُلدت كاسا دي بالما من إيمانٍ بسيط: أن التمرة ليست مجرد
              ثمرة، بل كنزٌ يستحق التكريم. ننتقي أندر المحاصيل فقط، نجففها على مهلٍ
              ونقدّمها بما تستحقه من إجلال.
            </p>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
              كل علبةٍ تغادر دارنا تحمل صبر الصحراء ودفء إرثٍ بُني على الحرفة لا
              على العجلة.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-8 py-12 text-center">
              <p className="font-serif text-5xl font-light text-primary lg:text-6xl">
                {s.value}
              </p>
              <p className="mt-3 text-xs tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
