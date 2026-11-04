# Guion · Sistemas de Información Geográfica (Día GIS)

_Generado desde `src/slides.data.js` con `npm run guion`. No editar a mano._

## 1. Sistemas de Información Geográfica  `portada`

*Cómo sistematizamos la información territorial y la llevamos al mapa*

🎤 **Decir:** Saludo y presentación: Observatorio Ambiental, dentro de la Dirección General de Sistemas de Información Geográfica y la Subsecretaría de Ordenamiento Territorial. Anticipar la idea fuerza: vamos a recorrer dos sistemas de información geográfica del ministerio, Alerta Temprana y Ecodatos, y ver cómo la información territorial pasa de ser un dato suelto a ser una capa en un mapa. Duración total estimada: 12–15 minutos.

## 2. Alerta Temprana  `seccion`

*Monitoreo del clima y de los riesgos para decidir y avisar a tiempo*

🎤 **Decir:** Contar en una línea para qué existe: SIG de monitoreo para saber qué viene (tormentas, calor, crecidas, incendios) y avisar rápido a la población y a los organismos.

## 3. La página pública y su generador de mapas  `mosaico`

🎤 **Decir:** Empezar por lo que ve la gente: el sitio de la Dirección General de Alerta Temprana (alertatemprana.misiones.gob.ar). Es el sitio web público con los mapas: la población, los medios y otros organismos entran y ven la información sin instalar nada. Todo lo que mostramos después en el panel termina acá. Bajar en la página hasta la sección de monitoreo. Son tres capas publicadas como mapas embebidos: el pronóstico, el índice de peligro de incendios forestales y las alertas meteorológicas vigentes. Cada uno muestra la hora de publicación, así se sabe qué tan fresco es el dato. Si hay internet en la sala, se puede abrir la página en vivo; si no, estas capturas alcanzan. Ahora, lo que hay detrás de esa página: el panel de gestión, solo para el equipo. Mostrarlo como el administrador de capas de un SIG. Cada tarjeta es un tema (pronóstico, alertas, focos de calor, cuencas, lluvias) y se puede mirar por separado o en conjunto.

## 4. Pronóstico por municipio  `mosaico`

🎤 **Decir:** Es el mapa más visto. Capa de polígonos municipales con simbología por categoría (mapa temático). Cada municipio toma el dato de la estación oficial más cercana: es un análisis de proximidad. Mencionar que es un mapa web embebible en el sitio del ministerio. Demostrar la consulta por identificación: clic sobre Oberá (o el municipio de la zona del público). Aparece la tabla de atributos hecha ficha: alerta vigente, mínima y máxima, condición, salida y puesta del sol y de la luna, y los próximos tres días.

## 5. Alertas y avisos  `mosaico`

🎤 **Decir:** El SMN publica avisos en formato abierto (CAP). El sistema los lee solo, los separa por vigencia y los vincula a las zonas del territorio. Es una unión por atributo con simbología graduada (amarillo, naranja, rojo). Remarcar la automatización: nadie transcribe nada. Mostrar el panel de alertas meteorológicas. A la izquierda aparecen las alertas que informa el SMN (en la captura, tres alertas amarillas por tormentas, granizo, vientos fuertes y lluvias intensas). Con «Usar como base» se cargan en el mapa por departamento; el equipo revisa, ajusta horarios y publica. Al publicar y el mapa público se actualiza. Los avisos a corto plazo son los más urgentes. En octubre hubo 47. Explicar el cruce de capas: el aviso se superpone con la alerta vigente para colorearlo con coherencia, y la misma información genera la imagen para publicar.

## 6. Incendios: focos y peligro  `mosaico`

🎤 **Decir:** Capa de puntos de origen satelital, ya georreferenciada (latitud y longitud). Se recorta al límite de Misiones —un clip espacial— y se dibuja. Ejemplo claro de dato abierto llevado a un mapa web. Mapa temático por departamento con cinco clases (bajo, moderado, alto, muy alto, extremo). Insistir en la leyenda: simbología clara para que cualquiera la interprete. Se mira junto con los focos de calor de la diapositiva anterior.

## 7. Cuencas, arroyos y rutas en riesgo  `mosaico`

🎤 **Decir:** Capa hidrológica: estaciones puntuales con su último valor como atributo. Los puntos críticos de rutas son otra capa que se cruza con la altura del arroyo: análisis espacial para saber qué tramo queda comprometido. Superposición de capas: la red vial, los cruces de arroyos y las estaciones del SNIH. El estado de cada punto se calcula con el nivel del arroyo y los umbrales cargados. Muy útil para ver qué ruta se puede cortar.

## 8. Ecodatos  `seccion`

*Registros de campo con ubicación, ordenados en una sola base*

🎤 **Decir:** Cambio de enfoque: acá el dato no viene de afuera, lo relevamos nosotros. Técnicos en territorio registran perforaciones, áreas protegidas, trámites, etc., desde formularios web y desde una app móvil, siempre con su ubicación.

## 9. Del campo al mapa  `flujo`

1. **Relevamiento** — Formulario web o app móvil, con fotos y ubicación
2. **Geodatabase** — Una tabla por tema, con geometría y validación
3. **Consultas** — Filtros, tablas y estadísticas por territorio
4. **Mapa** — Puntos y polígonos con su ficha

🎤 **Decir:** Explicar la lógica: cada formulario es una capa temática con su tabla de atributos y todos los registros tienen geometría. Por eso cualquier tabla se puede ver en el mapa sin trabajo extra.

## 10. Un panel de gestión  `captura`

- Cada área del observatorio tiene su tarjeta con sus formularios.
- Cada formulario es una tabla, con carga de registros, tabla y estadísticas.
- Acceso por usuario, con permisos de edición o solo lectura.

📷 Captura: `src/capturas/ecodatos/panel.png`

🎤 **Decir:** Panel de gestión de Ecodatos. Cada tarjeta es un área y agrupa sus formularios; cada formulario es una tabla de la base con su ubicación. Los permisos son por usuario.

## 11. Distribución geográfica de los registros  `captura`

- Cada registro se ubica en el mapa; el número es la cantidad en la zona.
- Los grupos se abren al acercar, hasta llegar al punto.
- La leyenda y los colores corresponden a la variable analizada.

📷 Captura: `src/capturas/ecodatos/mapa-reportes.png`

🎤 **Decir:** Mapa de los 112 registros de áreas naturales protegidas, agrupados por departamento. Al acercar se separan hasta llegar al marcador individual. Es la capa de puntos de un SIG, con simbología por categoría y leyenda.

## 12. Polígonos para los registros  `captura`

- Se sube una capa GeoJSON (EPSG:4326), por ejemplo exportada desde QGIS.
- Cada polígono se agrega al registro que le corresponde.
- Hasta 5000 polígonos por archivo.

📷 Captura: `src/capturas/ecodatos/poligonos.png`

🎤 **Decir:** Pestaña de agregar polígonos: no crea registros, le suma a cada registro existente su polígono. Se acepta GeoJSON en EPSG:4326, como lo exporta un SIG de escritorio.

## 13. Importar datos existentes  `captura`

- CSV o GeoJSON con las columnas del formulario, con plantilla para bajar.
- Departamento y municipio por nombre, sin códigos.
- Se valida antes de guardar: si algo falla, no se guarda nada.

📷 Captura: `src/capturas/ecodatos/importar.png`

🎤 **Decir:** Mucho dato histórico vive en planillas. El cajón de importación explica las columnas, ofrece una plantilla y valida todo antes de guardar. Lo viejo también entra al mismo modelo.

## 14. Estadísticas por territorio  `captura`

- Se elige período, variable y tipo de gráfico.
- Gráfico y tabla se actualizan al instante, con porcentaje del total.
- Debajo del gráfico, el mismo dato se ve en el mapa.

📷 Captura: `src/capturas/ecodatos/estadisticas.png`

🎤 **Decir:** El mapa responde dónde; las estadísticas responden cuánto. En la captura, áreas naturales protegidas por departamento. Es estadística zonal sobre las unidades territoriales.

## 15. Una sola base  `seccion`

*Cómo entra el dato, dónde se guarda y cómo vuelve a los sistemas*

🎤 **Decir:** Cierre del recorrido de los dos sistemas: ahora el hilo que los une. Los datos entran por distintas puertas, caen en una única base de datos centralizada y desde ahí se mapean. Y el camino es de ida y vuelta: lo que se edita en el GIS se refleja en los sistemas.

## 16. Cómo circula la información  `flujo`

1. **Se recolecta** — Ecodatos (web y app móvil) y Alerta Temprana: avisos, estaciones y focos
2. **Se centraliza** — Todo cae en una única base de datos PostgreSQL, con ubicación y atributos
3. **Se mapea** — QGIS, instalado en cada PC, se conecta a la base y trae las capas
4. **Vuelve** — Lo que se edita en QGIS se guarda en la base y se ve en los sistemas

🎤 **Decir:** Esta es la diapositiva eje. Dos familias de fuentes: lo que relevamos nosotros en territorio (Ecodatos, con formularios web y la app móvil) y lo que monitoreamos (Alerta Temprana: avisos del SMN, estaciones, focos de calor). Todo termina en la misma base de datos. El GIS que usamos es QGIS, instalado en las computadoras, conectado directo a la base: lee las tablas como capas y también escribe en ellas. Por eso una corrección hecha en QGIS aparece en Ecodatos y en Alerta Temprana sin volver a cargar nada.

## 17. Fuente 1: formularios web  `captura`

- Cada tema tiene su formulario, que es una tabla de la base.
- Departamento y municipio se eligen de una lista, sin códigos.
- Al guardar, el registro queda en la base y aparece en la tabla.

📷 Captura: `src/capturas/ecodatos/formulario-nuevo.jpg`

🎤 **Decir:** Alta de un registro desde la web: es el formulario de áreas naturales protegidas, vacío. Cada campo es una columna de la tabla. No hay planilla intermedia: lo que se carga acá ya está en la base.

## 18. Fuente 2: la app móvil de campo  `captura`

- App Ecodatos para el celular: se elige el área del reporte.
- Los formularios son los mismos que en la web, por usuario y permisos.
- Sirve para cargar tanto relevamientos como reportes de Alerta Temprana.

📷 Captura: `src/capturas/app/inicio.jpg`

🎤 **Decir:** La app Ecodatos (la carpeta se llama EcoAlerta) es la puerta de ingreso en territorio. Lista los formularios que el usuario tiene habilitados, agrupados por área. Los técnicos y guardaparques cargan desde el lugar del hecho. Captura tomada en la versión web de la app, en tema de la app.

## 19. Un reporte, en el lugar del hecho  `captura`

- Ejemplo: atropellamiento de fauna silvestre.
- Fecha, ubicación, departamento, municipio y datos del hecho.
- Los campos salen de la misma definición que usa la web.

📷 Captura: `src/capturas/app/formulario.jpg`

🎤 **Decir:** Formulario dinámico: se arma a partir de la definición de la tabla, por eso web y app muestran los mismos campos. No hace falta programar una pantalla por formulario.

## 20. Ubicación, fotos y voz  `captura`

- La ubicación GPS se toma sola y queda como coordenadas.
- Se adjuntan fotos y notas de voz.
- «Enviar reporte» lo guarda en la base centralizada.

📷 Captura: `src/capturas/app/envio.jpg`

🎤 **Decir:** El GPS es lo que convierte el reporte en dato geográfico: lat y lon quedan en el registro. En la captura (versión web) el mapa del formulario no se dibuja ni hay GPS real; las coordenadas son de prueba. En el celular se ve el mapa con el punto.

## 21. Todo cae en la misma base  `captura`

- Lo cargado desde la web y desde la app aparece en la misma tabla.
- Búsqueda, filtros por columna y exportación a CSV.
- Cada registro tiene sus coordenadas, listas para el mapa.

📷 Captura: `src/capturas/ecodatos/tabla-registros.jpg`

🎤 **Decir:** Tabla de áreas naturales protegidas con 112 registros. Da igual si el registro vino de la web, de la app o de una importación: es la misma tabla. Las coordenadas están en columnas, así que el mapa no necesita ningún paso intermedio.

## 22. La misma base, en el mapa de Ecodatos  `captura`

- El mapa lee directo de la tabla: no hay una copia aparte.
- Cada registro nuevo aparece sin hacer nada más.
- La misma base es la que abre QGIS en las computadoras.

📷 Captura: `src/capturas/ecodatos/mapa-reportes.png`

🎤 **Decir:** Es la misma base que se ve en la tabla anterior, ahora como mapa web de Ecodatos con puntos agrupados. Aclarar que este es el mapa de la aplicación; el GIS de trabajo es QGIS, que se conecta a esta misma base (siguiente diapositiva).

## 23. Se edita en QGIS y vuelve a los sistemas  `flujo`

1. **Se conecta** — QGIS abre la base de datos y carga la capa
2. **Se edita** — Se corrige el atributo o la ubicación del registro
3. **Se guarda** — «Guardar ediciones» escribe el cambio en la misma base
4. **Se refleja** — Ecodatos, la app y Alerta Temprana muestran el dato actualizado

🎤 **Decir:** El circuito es de ida y vuelta porque QGIS y los sistemas comparten la misma base. No hay que exportar, corregir y volver a importar. Esta diapositiva no lleva captura de QGIS; si se quiere, se puede mostrar en vivo.

## 24. Lo que tienen en común  `texto`

- El dato se carga o se trae una sola vez, georreferenciado.
- El mapa es una vista de la geodatabase, no un archivo aparte.
- Los mapas web se consultan desde el navegador; el trabajo de análisis se hace en QGIS.
- Se edita desde QGIS y el cambio vuelve a los sistemas.

🎤 **Decir:** Resumen. Insistir en que la clave de un SIG es la información geográfica bien sistematizada: una vez que el dato tiene ubicación y atributos, se puede mapear, analizar y difundir de muchas maneras.

## 25. Otros sistemas  `seccion`

*Espacio reservado para sumar más sistemas del ministerio*

🎤 **Decir:** Placeholder: acá se agregarán las próximas diapositivas (otros sistemas).

## 26. Gracias  `cierre`

*¿Preguntas?*

🎤 **Decir:** Agradecer y abrir preguntas. Preparar respuestas para: ¿qué librerías usan? (mapas web abiertos: MapLibre y Leaflet), ¿dónde se guardan los datos? (base de datos propia del ministerio), ¿se pueden usar en QGIS u otro SIG de escritorio? (sí, los datos tienen coordenadas).

## Capturas a sacar

| # | Diapositiva | Archivo |
|---|---|---|
| 10 | Un panel de gestión | `src/capturas/ecodatos/panel.png` |
| 11 | Distribución geográfica de los registros | `src/capturas/ecodatos/mapa-reportes.png` |
| 12 | Polígonos para los registros | `src/capturas/ecodatos/poligonos.png` |
| 13 | Importar datos existentes | `src/capturas/ecodatos/importar.png` |
| 14 | Estadísticas por territorio | `src/capturas/ecodatos/estadisticas.png` |
| 17 | Fuente 1: formularios web | `src/capturas/ecodatos/formulario-nuevo.jpg` |
| 18 | Fuente 2: la app móvil de campo | `src/capturas/app/inicio.jpg` |
| 19 | Un reporte, en el lugar del hecho | `src/capturas/app/formulario.jpg` |
| 20 | Ubicación, fotos y voz | `src/capturas/app/envio.jpg` |
| 21 | Todo cae en la misma base | `src/capturas/ecodatos/tabla-registros.jpg` |
| 22 | La misma base, en el mapa de Ecodatos | `src/capturas/ecodatos/mapa-reportes.png` |
