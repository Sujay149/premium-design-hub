import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const transparent = onHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-background/85 backdrop-blur-md border-b border-border/60"
      }`}
    >
      <div
        className={`container-editorial flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link
          to="/"
          className={`font-serif text-2xl tracking-tight transition-colors ${
            transparent ? "text-bone" : "text-foreground"
          }`}
        >
          <span>Jaffa</span>
          <span className="text-gold">.</span>
          <span className="ml-1 font-sans text-[0.65rem] uppercase tracking-[0.3em] align-middle opacity-70">
            Group
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-sans text-xs uppercase tracking-[0.22em] transition-colors ${
                transparent ? "text-bone/85 hover:text-gold" : "text-foreground/75 hover:text-gold"
              }`}
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Link
            to="/contact"
            className={`group inline-flex items-center gap-3 border px-5 py-2.5 font-sans text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
              transparent
                ? "border-bone/40 text-bone hover:border-gold hover:text-gold"
                : "border-foreground/30 text-foreground hover:border-gold hover:text-gold"
            }`}
          >
            Start Your Build
            <span className="h-px w-4 bg-current transition-all duration-300 group-hover:w-6" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 ${transparent ? "text-bone" : "text-foreground"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden bg-ink text-bone transition-[max-height] duration-500 ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="container-editorial flex flex-col gap-6 py-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-serif text-3xl tracking-tight hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-3 border border-bone/40 px-5 py-3 font-sans text-xs uppercase tracking-[0.22em] hover:border-gold hover:text-gold w-fit"
          >
            Start Your Build
          </Link>
        </nav>
      </div>
    </header>
  );
}
