import { Link } from "react-router-dom";
import yucatanMark from "../assets/Asset 7@300x.png";

export default function Footer() {
  return (
    <footer className="bg-on-secondary-fixed text-white py-16 px-4 md:px-16 border-t-8 border-primary">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="space-y-6">
          <div className="font-display-lg text-4xl text-primary-fixed">
            CELESTÚN
          </div>
          <p className="font-body-sm opacity-70 max-w-xs leading-relaxed">
            Trabajando por un futuro sustentable donde el hombre y la naturaleza
            prosperen en armonía.
          </p>
          <img
            src={yucatanMark}
            alt="Yucatán Renacimiento Maya"
            className="h-12 w-auto opacity-80"
          />
          <div className="flex gap-4">
            {["facebook", "share", "public"].map((icon) => (
              <span
                key={icon}
                className="material-symbols-outlined cursor-pointer hover:text-primary-fixed transition-colors"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-label-caps text-primary-fixed-dim mb-6 tracking-widest text-xs uppercase">
            Explorar
          </h4>
          <ul className="space-y-4 font-body-sm">
            {[
              { label: "Inicio", to: "/" },
              { label: "Conservación", to: "/conservacion" },
              { label: "Atracciones", to: "/atracciones" },
              { label: "Guía de Sustentabilidad", to: "#" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="opacity-70 hover:opacity-100 hover:underline underline-offset-4 transition-opacity"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-label-caps text-primary-fixed-dim mb-6 tracking-widest text-xs uppercase">
            Contacto
          </h4>
          <p className="font-body-sm opacity-70 mb-4 leading-relaxed">
            Secretaría de Ecología y Medio Ambiente, Celestún, Yucatán.
          </p>
          <p className="font-title-md text-primary-fixed break-all">
            hola@celestun.gob.mx
          </p>
          <div className="mt-8 pt-8 border-t border-white/10 text-xs opacity-40 uppercase tracking-widest">
            © 2025 Renacimiento Maya. Hecho con orgullo en Yucatán.
          </div>
        </div>
      </div>
    </footer>
  );
}
