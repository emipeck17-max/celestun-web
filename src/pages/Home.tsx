import { Link } from "react-router-dom";
import heroScene from "../assets/Asset 6@300x.png";
import celestunLogo from "../assets/Asset 2@300x.png";
import flamingo from "../assets/Asset 3@300x.png";
import visitor from "../assets/Asset 4@300x.png";
import sticker from "../assets/Asset 5@300x.png";

const stats = [
  { value: "15K+", label: "Visitantes al día\nen temporada alta" },
  { value: "90K", label: "Crías de tortuga\nliberadas en 2023" },
  { value: "#1", label: "Colonia de flamencos\nen América del Norte" },
  { value: "59K", label: "Hectáreas de\necosistema protegido" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative h-[calc(100vh-4rem)] mt-16 flex flex-col overflow-hidden">
        {/* Background */}
        <img
          src={heroScene}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

        {/* Content */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-6 py-12 gap-6">
          <p className="font-label-caps text-white text-2xl uppercase tracking-[0.35em]">
            Bienvenidos a
          </p>
          <div className="w-[200px] sm:w-[260px] md:w-[360px] lg:w-[460px]">
            <img
              src={celestunLogo}
              alt="CELESTÚN"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
          <p className="font-display-lg text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] text-white uppercase leading-tight drop-shadow-lg max-w-2xl">
            Donde la naturaleza y la cultura se encuentran
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              to="/atracciones"
              className="bg-primary text-on-primary font-label-caps px-8 py-4 uppercase tracking-widest border-b-4 border-on-secondary-container font-bold hover:opacity-90 active:scale-95 transition-all"
            >
              Explorar Atracciones
            </Link>
            <Link
              to="/conservacion"
              className="bg-white/10 backdrop-blur-sm text-white font-label-caps px-8 py-4 uppercase tracking-widest border-2 border-white/40 font-bold hover:bg-white/20 active:scale-95 transition-all"
            >
              Conservación
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative z-10 pb-8 flex justify-center">
          <span className="material-symbols-outlined text-white/60 text-4xl animate-bounce">
            keyboard_arrow_down
          </span>
        </div>
      </section>

      {/* ── Stats strip ────────────────────────────────────────────── */}
      <section className="bg-on-secondary-fixed py-12 px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.value} className="text-center px-4 sm:px-6 py-4">
              <div className="font-display-lg text-3xl md:text-5xl text-primary-fixed mb-1">
                {s.value}
              </div>
              <p className="font-body-sm text-white/50 uppercase tracking-wider text-xs leading-relaxed whitespace-pre-line">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────────────── */}
      <section className="py-24 px-4 md:px-16 bg-surface">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div className="space-y-7 order-2 md:order-1">
            <span className="font-label-caps text-tertiary uppercase tracking-widest text-xs">
              Reserva de la Biósfera · UNESCO
            </span>
            <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface uppercase leading-tight">
              Hay lugares que no pueden cuidarse solos.
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Celestún es una{" "}
              <span className="text-primary font-bold">
                Reserva de la Biósfera
              </span>{" "}
              de fama mundial. Sus flamencos, tortugas y manglares dependen de
              cada persona que la visita.
            </p>
            <p className="font-title-md text-on-secondary-fixed font-bold italic">
              Esa persona eres tú. Bienvenido.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/conservacion"
                className="border-4 border-on-surface font-label-caps px-6 py-3 uppercase tracking-widest font-bold hover:bg-on-surface hover:text-white transition-all"
              >
                Cómo Conservar
              </Link>
              <Link
                to="/atracciones"
                className="font-label-caps px-6 py-3 uppercase tracking-widest font-bold text-primary hover:underline underline-offset-4 flex items-center gap-1"
              >
                Explorar
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Illustration — portrait, no crop */}
          <div
            className="order-1 md:order-2 bg-surface-container-low border-4 border-on-secondary-fixed-variant flex items-center justify-center p-8"
            style={{ boxShadow: "8px 8px 0 0 #27308a" }}
          >
            <img
              src={visitor}
              alt="Visitantes en Celestún"
              className="w-full max-w-[260px] md:max-w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── Discover cards ─────────────────────────────────────────── */}
      <section className="py-24 px-4 md:px-16 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface uppercase inline-block border-b-4 border-primary pb-2">
              Descubre Celestún
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Conservation */}
            <Link
              to="/conservacion"
              className="group relative bg-on-secondary-fixed text-white p-10 border-4 border-on-secondary-fixed overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              style={{ boxShadow: "8px 8px 0 0 #27308a" }}
            >
              <img
                src={flamingo}
                alt=""
                aria-hidden="true"
                className="absolute -right-10 -bottom-10 w-52 opacity-10 pointer-events-none"
              />
              <span className="material-symbols-outlined text-5xl text-primary-fixed mb-5 block">
                eco
              </span>
              <h3 className="font-display-lg text-3xl text-primary-fixed mb-4">
                Conservación
              </h3>
              <p className="font-body-sm text-white/60 mb-8 max-w-sm leading-relaxed">
                Aprende las reglas básicas para visitar la reserva y cómo
                contribuir a su protección.
              </p>
              <span className="font-label-caps text-primary-fixed-dim uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                Ver más
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </span>
            </Link>

            {/* Attractions */}
            <Link
              to="/atracciones"
              className="group relative bg-primary text-on-primary p-10 border-4 border-on-secondary-fixed overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              style={{ boxShadow: "8px 8px 0 0 #27308a" }}
            >
              <img
                src={flamingo}
                alt=""
                aria-hidden="true"
                className="absolute -right-6 -bottom-6 w-52 opacity-15 pointer-events-none"
              />
              <span className="material-symbols-outlined text-5xl text-on-primary mb-5 block">
                landscape
              </span>
              <h3 className="font-display-lg text-3xl text-on-primary mb-4">
                Atracciones
              </h3>
              <p className="font-body-sm text-on-primary/70 mb-8 max-w-sm leading-relaxed">
                Flamencos rosados, tortugas marinas y manglares únicos te
                esperan en este paraíso natural.
              </p>
              <span className="font-label-caps text-on-primary uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                Ver más
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────────────────────────── */}
      <section className="py-24 px-4 md:px-16 bg-primary-container">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Sticker — visible on all sizes, centered on mobile */}
          <div className="flex-shrink-0 flex justify-center">
            <img
              src={sticker}
              alt=""
              aria-hidden="true"
              className="w-36 sm:w-44 lg:w-86 opacity-90"
            />
          </div>

          {/* Text + form */}
          <div className="flex-grow text-center lg:text-left space-y-8">
            <h2 className="font-display-lg text-4xl md:text-5xl text-on-primary-fixed uppercase leading-tight">
              Únete a la red de conservación
            </h2>
            <p className="font-body-lg text-on-primary-fixed-variant max-w-lg mx-auto lg:mx-0">
              Recibe noticias sobre temporadas de avistamiento y oportunidades
              para ayudar a proteger nuestro paraíso.
            </p>
            <form
              className="flex flex-col sm:flex-row border-4 border-on-primary-fixed"
              style={{ boxShadow: "8px 8px 0 0 #291800" }}
            >
              <input
                type="email"
                placeholder="Correo electrónico"
                className="grow p-5 bg-white font-body-lg focus:outline-none border-b-4 sm:border-b-0 sm:border-r-4 border-on-primary-fixed"
              />
              <button
                type="submit"
                className="bg-secondary text-white px-10 py-5 font-label-caps uppercase tracking-widest font-bold hover:bg-on-secondary-fixed transition-colors"
              >
                Unirse
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
