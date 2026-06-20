export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="font-serif text-2xl font-semibold tracking-[0.2em] text-foreground">
              CASA DE PALMA
            </span>
            <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Curators of the finest Saudi dates. Crafted with heritage,
              delivered with care, to tables that appreciate the rare.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-primary">
                Explore
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><a href="#collection" className="hover:text-primary">Collection</a></li>
                <li><a href="#heritage" className="hover:text-primary">Heritage</a></li>
                <li><a href="#gifting" className="hover:text-primary">Gifting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-primary">
                Contact
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><a href="mailto:hello@casadepalma.com" className="hover:text-primary">hello@casadepalma.com</a></li>
                <li>Riyadh, Saudi Arabia</li>
                <li>+966 11 000 0000</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-primary">
                Follow
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Instagram</a></li>
                <li><a href="#" className="hover:text-primary">Pinterest</a></li>
                <li><a href="#" className="hover:text-primary">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Casa de Palma. All rights reserved.</p>
          <p>Made in the Kingdom of Saudi Arabia</p>
        </div>
      </div>
    </footer>
  )
}
