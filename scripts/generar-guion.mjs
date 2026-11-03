import { writeFileSync } from "node:fs";
import { slides } from "../src/slides.data.js";

const L = ["# Guion · Sistemas de Información Geográfica (Día GIS)", "", "_Generado desde `src/slides.data.js` con `npm run guion`. No editar a mano._", ""];
const capturas = [];
slides.forEach((s, i) => {
  L.push(`## ${i + 1}. ${s.titulo}  \`${s.tipo}\``, "");
  if (s.destacado) L.push(`> ${s.destacado}`, "");
  if (s.subtitulo) L.push(`*${s.subtitulo}*`, "");
  (s.puntos || []).forEach((p) => L.push(`- ${p}`));
  (s.pasos || []).forEach((p, k) => L.push(`${k + 1}. **${p.t}** — ${p.d}`));
  if (s.puntos || s.pasos) L.push("");
  if (s.captura) { L.push(`📷 Captura: \`src/capturas/${s.captura}\``, ""); capturas.push([i + 1, s.titulo, s.captura]); }
  L.push(`🎤 **Decir:** ${s.notas}`, "");
});
L.push("## Capturas a sacar", "", "| # | Diapositiva | Archivo |", "|---|---|---|");
capturas.forEach(([n, t, c]) => L.push(`| ${n} | ${t} | \`src/capturas/${c}\` |`));
writeFileSync(new URL("../GUION.md", import.meta.url), L.join("\n") + "\n");
console.log("GUION.md generado");
