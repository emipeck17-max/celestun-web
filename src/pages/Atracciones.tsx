import { Link } from "react-router-dom";
import flamingo from "../assets/Asset-8.jpg";
import landscape from "../assets/Asset-9.jpg";
import flamingoIcon from "../assets/Asset 1@300x.png";

const turtleStats = [
  { value: "90K", label: "Crías liberadas en 2023", icon: "water" },
  { value: "Jul–Oct", label: "Temporada de desove", icon: "calendar_month" },
  { value: "3", label: "Especies protegidas", icon: "eco" },
];

const activities = [
  {
    icon: "sailing",
    title: "Tours en Lancha",
    desc: "Recorre la laguna y los manglares con guías certificados.",
  },
  {
    icon: "beach_access",
    title: "Playa Virgen",
    desc: "10 km de costa sin masificar, ideal para descansar.",
  },
  {
    icon: "restaurant",
    title: "Cocina Yucateca",
    desc: "Mariscos frescos y sabores locales únicos.",
  },
];

export default function Atracciones() {
  return (
    <>
      {/* ── Page header ────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-4 md:px-16 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <span className="font-label-caps text-primary uppercase tracking-widest text-xs">
            Paraíso Natural · Yucatán
          </span>
          <h1 className="font-display-lg text-[3rem] md:text-[5rem] text-on-surface uppercase mt-4 mb-6 leading-none">
            Atracciones
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Celestún alberga algunas de las maravillas naturales más
            impresionantes del sureste mexicano. Descubre lo que te espera.
          </p>
        </div>
      </section>

      {/* ── Flamencos ──────────────────────────────────────────────── */}
      <section
        className="py-24 px-4 md:px-16 bg-on-secondary-fixed text-white"
        id="flamencos"
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div className="space-y-7">
            <div className="flex items-center gap-3">
              <img
                src={flamingoIcon}
                alt=""
                aria-hidden
                className="w-10 h-10"
              />
              <span className="font-label-caps text-primary-fixed-dim uppercase tracking-widest text-xs">
                Colonia #1 en América del Norte
              </span>
            </div>
            <h2 className="font-display-lg text-4xl md:text-5xl text-primary-fixed uppercase leading-tight">
              Flamencos Rosados
            </h2>
            <p className="font-body-lg text-white/60 leading-relaxed">
              Contempla el espectáculo natural más impresionante del sureste
              mexicano. Más de 30,000 flamencos hacen de Celestún su hogar,
              pintando de rosa el horizonte de la laguna.
            </p>
            <ul className="space-y-3">
              {[
                "Mejor época: noviembre a marzo",
                "Tours en lancha al amanecer",
                "Observación desde miradores",
                "Guías locales certificados",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-body-sm text-white/70"
                >
                  <span className="material-symbols-outlined text-primary-fixed text-base flex-shrink-0">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/conservacion"
              className="inline-block border-2 border-primary-fixed text-primary-fixed font-label-caps px-6 py-3 uppercase tracking-widest font-bold hover:bg-primary-fixed hover:text-on-primary-fixed transition-all"
            >
              Ver reglas de avistamiento
            </Link>
          </div>

          {/* Flamingo illustration — square, full render */}
          <div className="bg-white/5 border-2 border-white/10 p-10 flex items-center justify-center">
            <img
              src={flamingo}
              alt="Flamenco rosado en su hábitat natural"
              className="w-full max-w-[300px] md:max-w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ── Visitor experience ─────────────────────────────────────── */}
      <section className="py-24 px-4 md:px-16 bg-surface" id="experiencia">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Visitor illustration — portrait, full render */}
          <div
            className="bg-surface-container-low border-4 border-on-secondary-fixed-variant p-8 flex items-center justify-center"
            style={{ boxShadow: "8px 8px 0 0 #27308a" }}
          >
            <img
              src={landscape}
              alt="Visitantes disfrutando Celestún"
              className="w-full max-w-[240px] md:max-w-[320px] object-contain"
            />
          </div>

          {/* Text */}
          <div className="space-y-7">
            <span className="font-label-caps text-secondary uppercase tracking-widest text-xs">
              Experiencia completa
            </span>
            <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface uppercase leading-tight">
              Más que un destino
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Celestún ofrece una experiencia que combina naturaleza, cultura y
              gastronomía. Desde los manglares hasta la playa, cada rincón tiene
              algo especial que descubrir.
            </p>
            <div className="space-y-4 pt-2">
              {activities.map((a) => (
                <div
                  key={a.title}
                  className="flex items-start gap-4 p-4 border-l-4 border-secondary bg-surface-container-low"
                >
                  <span className="material-symbols-outlined text-2xl text-secondary flex-shrink-0 mt-0.5">
                    {a.icon}
                  </span>
                  <div>
                    <h4 className="font-title-md text-on-surface text-lg leading-tight">
                      {a.title}
                    </h4>
                    <p className="font-body-sm text-on-surface-variant">
                      {a.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sea turtles ────────────────────────────────────────────── */}
      <section
        className="py-24 px-4 md:px-16 bg-secondary text-white"
        id="tortugas"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center space-y-6 mb-16">
            <span className="font-label-caps text-secondary-fixed-dim uppercase tracking-widest text-xs">
              Programa de conservación
            </span>
            <h2 className="font-display-lg text-4xl md:text-5xl uppercase leading-tight">
              Tortugas Marinas
            </h2>
            <p className="font-body-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Únete a nuestros esfuerzos de conservación. Cada año, más de
              90,000 crías de tortuga son liberadas gracias al trabajo conjunto
              de voluntarios y biólogos marinos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {turtleStats.map((s) => (
              <div
                key={s.label}
                className="bg-white/10 p-8 border border-white/20 text-center"
              >
                <span className="material-symbols-outlined text-4xl text-secondary-fixed-dim mb-4 block">
                  {s.icon}
                </span>
                <div className="font-display-lg text-4xl text-white mb-2">
                  {s.value}
                </div>
                <p className="font-body-sm text-white/50 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
