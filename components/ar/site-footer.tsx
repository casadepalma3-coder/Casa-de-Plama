export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="font-serif text-2xl font-semibold tracking-[0.2em] text-foreground">
              كاسا دي بالما
            </span>
            <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              منتقو أجود التمور السعودية. تُصنع بعراقة وتُسلّم بعناية، إلى موائد
              تقدّر النادر.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-xs tracking-[0.2em] text-primary">
                استكشف
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><a href="#collection" className="hover:text-primary">المجموعة</a></li>
                <li><a href="#heritage" className="hover:text-primary">الإرث</a></li>
                <li><a href="#gifting" className="hover:text-primary">الإهداء</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] text-primary">
                تواصل
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><a href="mailto:hello@casadepalma.com" className="hover:text-primary">hello@casadepalma.com</a></li>
                <li>الرياض، المملكة العربية السعودية</li>
                <li>+966 11 000 0000</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] text-primary">
                تابعنا
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">إنستغرام</a></li>
                <li><a href="#" className="hover:text-primary">بينترست</a></li>
                <li><a href="#" className="hover:text-primary">واتساب</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs tracking-[0.2em] text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} كاسا دي بالما. جميع الحقوق محفوظة.</p>
          <p>صُنع في المملكة العربية السعودية</p>
        </div>
      </div>
    </footer>
  )
}
