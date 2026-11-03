import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { slides } from "./slides.data.js";
import flor from "./brand/ecologia-flor.png";
import logoAT from "./brand/alerta-temprana-blanco.png";
import logoEco from "./brand/ecodatos-logo.png";

// Capturas locales: se resuelven en build/dev desde src/capturas (sin red).
const imagenes = import.meta.glob("./capturas/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});
const imagenDe = (ruta) => imagenes[`./capturas/${ruta}`];

// Misma curva del pulso de los focos de la página (mapa-frontend/src/lib/pulsoFocos.js).
const COLORES_FOCO = ["#b5a99d", "#f5d35d", "#f6a53d", "#ed6b2f", "#d73b29", "#941c32"];
const suave = (t) => t * t * (3 - 2 * t);
const pulso = (f) => ({ radio: 9 + 17 * (1 - Math.pow(1 - f, 2.2)), op: 0.42 * suave(Math.min(1, f / 0.2)) * (1 - suave(f)) });
const KEYFRAMES_PULSO = "@keyframes latido{" + Array.from({ length: 21 }, (_, i) => {
  const { radio, op } = pulso(i / 20);
  return `${i * 5}%{transform:scale(${(radio / 9).toFixed(3)});opacity:${op.toFixed(3)}}`;
}).join("") + "}";

function CapaFocos({ puntos }) {
  return (
    <>
      {puntos.map(([x, y, i], k) => (
        <g key={k} transform={`translate(${x} ${y})`}>
          <circle className="foco-aro" r="13" fill={COLORES_FOCO[i]} />
          <circle r="8" fill={COLORES_FOCO[i]} stroke="#fff3e6" strokeWidth="1.6" opacity=".95" />
        </g>
      ))}
    </>
  );
}

function Captura({ ruta, capas }) {
  const src = imagenDe(ruta);
  return (
    <div className="marco">
      <div className="marco-barra">
        <i /> <i /> <i />
        <span>{ruta.split("/").pop()}</span>
      </div>
      {src && capas ? (
        <div className="capa-lienzo">
          <img src={src} alt="" draggable={false} />
          <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMin slice">
            <style>{KEYFRAMES_PULSO}</style>
            {capas.map((c, i) => (c.tipo === "focos" ? <CapaFocos key={i} puntos={c.puntos} /> : null))}
          </svg>
          <span className="etiqueta-ejemplo">Datos de ejemplo</span>
        </div>
      ) : src ? (
        <img src={src} alt="" draggable={false} />
      ) : (
        <div className="marco-vacio">
          <b>Falta la captura</b>
          <code>src/capturas/{ruta}</code>
        </div>
      )}
    </div>
  );
}

function PlacaImg({ ruta }) {
  const src = imagenDe(ruta);
  return src ? <img src={src} alt="" draggable={false} /> : <div className="placa-vacia"><code>{ruta}</code></div>;
}

function Slide({ s, n, total }) {
  const pie = (
    <div className="pie">
      <span>{s.tipo === "captura" || s.tipo === "texto" || s.tipo === "flujo" ? "Sistemas de Información Geográfica" : ""}</span>
      <span>
        {n} / {total}
      </span>
    </div>
  );
  switch (s.tipo) {
    case "portada":
    case "cierre":
      return (
        <div className={`slide centro ${s.tipo}`}>
          <img className="flor reveal" src={flor} alt="" />
          <h1 className="reveal">{s.titulo}</h1>
          <p className="sub reveal">{s.subtitulo}</p>
          {s.area && <p className="area reveal">{s.area}</p>}
          <div className="chico reveal">{[].concat(s.pie).map((l, i) => <p key={i}>{l}</p>)}</div>
        </div>
      );
    case "seccion":
      return (
        <div className="slide seccion">
          <span className="num reveal">{s.numero}</span>
          <div>
            <h1 className="reveal">{s.titulo}</h1>
            <p className="sub reveal">{s.subtitulo}</p>
            {s.id === "sec-at" && <img className="logo-sec reveal" src={logoAT} alt="" />}
            {s.id === "sec-eco" && <img className="logo-sec logo-eco reveal" src={logoEco} alt="Ecodatos" />}
          </div>
        </div>
      );
    case "texto":
      return (
        <div className="slide">
          <h2 className="reveal">{s.titulo}</h2>
          {s.destacado && <p className="destacado reveal">{s.destacado}</p>}
          <ul className="puntos">
            {s.puntos.map((p, i) => (
              <li className="reveal" key={i}>
                {p}
              </li>
            ))}
          </ul>
          {pie}
        </div>
      );
    case "flujo":
      return (
        <div className="slide">
          <h2 className="reveal">{s.titulo}</h2>
          <div className="flujo">
            {s.pasos.map((p, i) => (
              <div className="paso reveal" key={i}>
                <span className="paso-n">{i + 1}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
          {pie}
        </div>
      );
    case "placas":
      return (
        <div className="slide placas">
          <h2 className="reveal">{s.titulo}</h2>
          <div className="galeria">
            {s.placas.map((p, i) => (
              <figure className="placa reveal" key={i}>
                <PlacaImg ruta={p.src} />
                <figcaption>{p.leyenda}</figcaption>
              </figure>
            ))}
          </div>
          <ul className="chips">
            {s.puntos.map((p, i) => (
              <li className="reveal" key={i}>{p}</li>
            ))}
          </ul>
          {pie}
        </div>
      );
    case "captura":
      return (
        <div className="slide captura">
          <h2 className="reveal">
            {s.titulo}
            {s.url && <small className="url">{s.url}</small>}
          </h2>
          <div className="cuerpo">
            <div className="reveal grande">
              <Captura ruta={s.captura} capas={s.capas} />
            </div>
            <ol className="lista">
              {s.puntos.map((p, i) => (
                <li className="reveal" key={i}>
                  <b>{i + 1}</b>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </div>
          {pie}
        </div>
      );
    default:
      return null;
  }
}

export default function App() {
  const total = slides.length;
  const desdeHash = () => {
    const n = parseInt(location.hash.slice(1), 10);
    return Number.isFinite(n) ? Math.min(Math.max(n - 1, 0), total - 1) : 0;
  };
  const [i, setI] = useState(desdeHash);
  const [notas, setNotas] = useState(false);
  const [indice, setIndice] = useState(false);
  const toque = useRef(null);

  const ir = useCallback((n) => setI(Math.min(Math.max(n, 0), total - 1)), [total]);

  useEffect(() => {
    history.replaceState(null, "", `#${i + 1}`);
  }, [i]);

  useEffect(() => {
    const onKey = (e) => {
      if (["ArrowRight", "PageDown", " ", "Enter"].includes(e.key)) { e.preventDefault(); ir(i + 1); }
      else if (["ArrowLeft", "PageUp", "Backspace"].includes(e.key)) { e.preventDefault(); ir(i - 1); }
      else if (e.key === "Home") ir(0);
      else if (e.key === "End") ir(total - 1);
      else if (e.key === "n" || e.key === "N") setNotas((v) => !v);
      else if (e.key === "g" || e.key === "G") setIndice((v) => !v);
      else if (e.key === "f" || e.key === "F") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.();
      } else if (e.key === "Escape") setIndice(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, ir, total]);

  const escala = useEscala();
  const progreso = useMemo(() => ((i + 1) / total) * 100, [i, total]);

  return (
    <div
      className="escenario"
      onTouchStart={(e) => (toque.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (toque.current == null) return;
        const dx = e.changedTouches[0].clientX - toque.current;
        if (Math.abs(dx) > 50) ir(i + (dx < 0 ? 1 : -1));
        toque.current = null;
      }}
    >
      <div className="lienzo" style={{ transform: `scale(${escala})` }}>
        {slides.map((s, k) => {
          const pos = k - i;
          return (
            <section
              key={s.id}
              className={`hoja ${pos === 0 ? "activa" : ""}`}
              data-pos={pos < -1 ? -2 : pos > 1 ? 2 : pos}
              data-t={s.transicion || "deslizar"}
              aria-hidden={pos !== 0}
            >
              <Slide s={s} n={k + 1} total={total} />
            </section>
          );
        })}
        <div className="barra"><i style={{ width: `${progreso}%` }} /></div>
      </div>

      <button className="nav izq" onClick={() => ir(i - 1)} disabled={i === 0} aria-label="Anterior">‹</button>
      <button className="nav der" onClick={() => ir(i + 1)} disabled={i === total - 1} aria-label="Siguiente">›</button>

      <div className="ayuda">← → mover · N guion · G índice · F pantalla completa</div>

      {notas && (
        <aside className="notas">
          <h4>Guion · {i + 1}. {slides[i].titulo}</h4>
          <p>{slides[i].notas}</p>
        </aside>
      )}

      {indice && (
        <div className="indice" onClick={() => setIndice(false)}>
          <ul onClick={(e) => e.stopPropagation()}>
            {slides.map((s, k) => (
              <li key={s.id} className={k === i ? "act" : ""} onClick={() => { ir(k); setIndice(false); }}>
                <span>{k + 1}</span>
                {s.titulo}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// El lienzo es 1920×1080 y se escala para entrar en cualquier pantalla/proyector.
function useEscala() {
  const calc = () => Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
  const [e, setE] = useState(calc);
  useEffect(() => {
    const f = () => setE(calc());
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);
  return e;
}
