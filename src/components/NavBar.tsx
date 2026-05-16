import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Inicio", to: "/", end: true },
  { label: "Conservación", to: "/conservacion", end: false },
  { label: "Atracciones", to: "/atracciones", end: false },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const active =
    "text-primary font-bold border-b-2 border-primary pb-0.5 font-title-md transition-colors";
  const inactive =
    "text-on-surface-variant hover:text-primary font-title-md transition-colors";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b-2 border-on-secondary-fixed-variant"
      style={{ boxShadow: "4px 4px 0 rgba(39,48,138,0.7)" }}
    >
      <div className="flex justify-between items-center px-4 md:px-16 py-4 max-w-[1280px] mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="font-display-lg text-2xl md:text-[2rem] text-primary uppercase tracking-widest leading-none"
        >
          CELESTÚN
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/atracciones"
            className="hidden md:block bg-primary text-on-primary font-label-caps px-6 py-3 uppercase tracking-widest border-b-4 border-on-secondary-container font-bold hover:opacity-90 active:scale-95 transition-all"
          >
            Planear Visita
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-on-surface"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="material-symbols-outlined text-3xl leading-none">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-surface border-t-2 border-on-secondary-fixed-variant px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold font-title-md text-lg"
                  : "text-on-surface-variant font-title-md text-lg hover:text-primary"
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/atracciones"
            className="bg-primary text-on-primary font-label-caps px-6 py-4 uppercase tracking-widest border-b-4 border-on-secondary-container font-bold text-center mt-1"
            onClick={() => setOpen(false)}
          >
            Planear Visita
          </Link>
        </div>
      )}
    </nav>
  );
}
