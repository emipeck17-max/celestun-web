import flamingoIcon from "../assets/Asset 1@300x.png";
import flamingo from "../assets/Asset 3@300x.png";

const rules = [
  {
    icon: "delete_forever",
    title: "No tirar basura",
    description:
      "Mantengamos limpias nuestras playas, manglares y aguas para las generaciones futuras.",
  },
  {
    icon: "groups",
    title: "Respetar la comunidad",
    description:
      "Valora a los habitantes locales y sus tradiciones ancestrales milenarias.",
  },
  {
    icon: "no_transportation",
    title: "Sin motores",
    description:
      "Protege el ecosistema evitando vehículos motorizados en zonas protegidas.",
  },
  {
    icon: "pets",
    title: "No alimentar fauna",
    description:
      "No interfieras con la fauna silvestre para mantener el equilibrio natural.",
  },
];

const commitments = [
  { icon: "water", label: "Protección del manglar" },
  { icon: "flutter_dash", label: "Monitoreo de flamencos" },
  { icon: "eco", label: "Liberación de tortugas" },
  { icon: "volunteer_activism", label: "Voluntariado local" },
];

export default function Conservacion() {
  return (
    <>
      {/* ── Page header ────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-4 md:px-16 bg-on-secondary-fixed text-white relative overflow-hidden">
        {/* Faded flamingo ghost */}
        <img
          src={flamingo}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full opacity-[0.07] pointer-events-none object-contain"
        />
        <div className="max-w-[1280px] mx-auto relative z-10">
          <span className="font-label-caps text-primary-fixed-dim uppercase tracking-widest text-xs">
            Reserva de la Biósfera
          </span>
          <h1 className="font-display-lg text-[3rem] md:text-[5rem] text-primary-fixed uppercase mt-4 mb-6 leading-none">
            Conservación
          </h1>
          <p className="font-body-lg text-white/60 max-w-2xl leading-relaxed">
            Celestún es un ecosistema único en el mundo. Su protección depende
            de cada visitante que elige hacer las cosas bien.
          </p>
        </div>
      </section>

      {/* ── Rules ──────────────────────────────────────────────────── */}
      <section className="py-24 px-4 md:px-16 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-4 mb-16 pb-6 border-b-4 border-tertiary">
            <h2 className="font-display-lg text-[2.5rem] md:text-headline-lg text-tertiary uppercase leading-none">
              Reglas Básicas
            </h2>
            <img src={flamingoIcon} alt="" aria-hidden className="w-12 h-12" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {rules.map((rule) => (
              <div
                key={rule.title}
                className="bg-white p-8 border-4 border-on-secondary-fixed-variant hard-shadow flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <span className="material-symbols-outlined text-5xl text-primary mb-5">
                  {rule.icon}
                </span>
                <h3 className="font-title-md text-on-surface mb-3 text-lg">
                  {rule.title}
                </h3>
                <p className="font-body-sm text-on-surface-variant leading-relaxed">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact ─────────────────────────────────────────────────── */}
      <section className="py-24 px-4 md:px-16 bg-surface">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Flamingo illustration — square, no crop */}
          <div className="flex items-center justify-center p-10 bg-surface-container-low border-4 border-on-secondary-fixed-variant"
            style={{ boxShadow: "8px 8px 0 0 #27308a" }}>
            <img
              src={flamingo}
              alt="Flamenco rosado en Celestún"
              className="w-full max-w-[300px] md:max-w-full object-contain"
            />
          </div>

          {/* Text */}
          <div className="space-y-7">
            <span className="font-label-caps text-primary uppercase tracking-widest text-xs">
              Nuestro compromiso
            </span>
            <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface uppercase leading-tight">
              Cada visita cuenta.
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              El turismo responsable es la principal fuente de ingresos para la
              conservación de la reserva. Tu visita contribuye directamente a
              los programas de monitoreo y restauración del ecosistema.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              {commitments.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 bg-surface-container-low p-4 border-l-4 border-primary"
                >
                  <span className="material-symbols-outlined text-xl text-primary flex-shrink-0">
                    {c.icon}
                  </span>
                  <span className="font-body-sm font-bold text-on-surface">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pledge ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 md:px-16 bg-tertiary text-white">
        <div className="max-w-3xl mx-auto text-center space-y-7">
          <h2 className="font-display-lg text-4xl md:text-5xl uppercase leading-tight">
            Tu compromiso hace la diferencia
          </h2>
          <p className="font-body-lg text-white/70 max-w-xl mx-auto">
            Al visitar Celestún, te conviertes en guardián de uno de los
            ecosistemas más importantes de México.
          </p>
          <button className="bg-white text-tertiary font-label-caps px-8 py-4 uppercase tracking-widest font-bold border-b-4 border-on-tertiary-container hover:opacity-90 active:scale-95 transition-all">
            Descarga la Guía del Visitante
          </button>
        </div>
      </section>
    </>
  );
}
