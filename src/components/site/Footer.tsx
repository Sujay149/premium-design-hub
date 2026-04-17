import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-bone/60">Jaffa Group</p>
            <h3 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">
              Begin a home <br />
              <span className="italic text-gold-soft">made for a lifetime.</span>
            </h3>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 border border-bone/40 px-6 py-3 font-sans text-xs uppercase tracking-[0.22em] hover:border-gold hover:text-gold transition-colors"
            >
              Start Your Build
              <span className="h-px w-5 bg-current" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid gap-10 sm:grid-cols-3">
            <div>
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                Studio
              </p>
              <ul className="mt-5 space-y-3 font-serif text-lg text-bone/85">
                <li><Link to="/portfolio" className="hover:text-gold">Portfolio</Link></li>
                <li><Link to="/services" className="hover:text-gold">Services</Link></li>
                <li><Link to="/process" className="hover:text-gold">Process</Link></li>
                <li><Link to="/about" className="hover:text-gold">About</Link></li>
                <li><Link to="/team" className="hover:text-gold">Team</Link></li>
                <li><Link to="/insights" className="hover:text-gold">Insights</Link></li>
                <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                Visit
              </p>
              <p className="mt-5 font-serif text-lg leading-relaxed text-bone/85">
                1750 Park Avenue<br />
                Park City, Utah 84060
              </p>
            </div>
            <div>
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                Inquiries
              </p>
              <p className="mt-5 font-serif text-lg leading-relaxed text-bone/85">
                hello@jaffagroup.com<br />
                +1 (435) 555&ndash;0142
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col-reverse md:flex-row justify-between gap-6 border-t border-bone/15 pt-8 font-sans text-xs uppercase tracking-[0.2em] text-bone/50">
          <p>© {new Date().getFullYear()} Jaffa Group. All rights reserved.</p>
          <p>Custom Luxury Homes · Park City, Utah</p>
        </div>
      </div>
    </footer>
  );
}
