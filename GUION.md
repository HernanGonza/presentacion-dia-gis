# Guion · Sistemas de Información Geográfica (Día GIS)

_Generado desde `src/slides.data.js` con `npm run guion`. No editar a mano._

## 1. Sistemas de Información Geográfica  `portada`

*Cómo sistematizamos la información territorial y la llevamos al mapa*

🎤 **Decir:** Saludo y presentación: Observatorio Ambiental, dentro de la Dirección General de Sistemas de Información Geográfica y la Subsecretaría de Ordenamiento Territorial. Anticipar la idea fuerza: vamos a recorrer dos sistemas de información geográfica del ministerio, Alerta Temprana y Ecodatos, y ver cómo la información territorial pasa de ser un dato suelto a ser una capa en un mapa. Duración total estimada: 12–15 minutos.

## 2. Alerta Temprana  `seccion`

*Monitoreo del clima y de los riesgos para decidir y avisar a tiempo*

🎤 **Decir:** Contar en una línea para qué existe: SIG de monitoreo para saber qué viene (tormentas, calor, crecidas, incendios) y avisar rápido a la población y a los organismos.

## 3. La página pública  `captura`

- Es la cara pública del sistema: cualquiera consulta, sin usuario ni clave.
- Pronósticos, informes especiales e institucional en un solo sitio.
- Los mapas de la página son los mismos que se administran en el panel.

📷 Captura: `src/capturas/alerta-temprana/sitio-home.png`

🎤 **Decir:** Empezar por lo que ve la gente: el sitio de la Dirección General de Alerta Temprana (alertatemprana.misiones.gob.ar). Es el WebGIS público: la población, los medios y otros organismos entran y ven la información sin instalar nada. Todo lo que mostramos después en el panel termina acá.

## 4. Monitoreo en tiempo real  `captura`

- Tres mapas de entrada: pronóstico, peligro de incendios y alertas.
- Cada mapa indica hace cuánto se publicó.
- Se pueden ampliar y recorrer con zoom, como en un visor SIG.

📷 Captura: `src/capturas/alerta-temprana/sitio-mapas.png`

🎤 **Decir:** Bajar en la página hasta la sección de monitoreo. Son tres capas publicadas como mapas embebidos: el pronóstico, el índice de peligro de incendios forestales y las alertas meteorológicas vigentes. Cada uno muestra la hora de publicación, así se sabe qué tan fresco es el dato. Si hay internet en la sala, se puede abrir la página en vivo; si no, estas capturas alcanzan.

## 5. Detrás de la página: el generador de mapas  `captura`

- Un módulo por cada mapa: pronóstico, riesgo de incendios, alertas y avisos.
- Cada uno se edita, se revisa en vista previa y se publica.
- Acceso por usuario, con permisos por módulo.

📷 Captura: `src/capturas/alerta-temprana/panel-mapas.png`

🎤 **Decir:** Ahora, lo que hay detrás de esa página: el panel de gestión, solo para el equipo. Mostrarlo como el administrador de capas de un SIG. Cada tarjeta es un tema (pronóstico, alertas, focos de calor, cuencas, lluvias) y se puede mirar por separado o en conjunto.

## 6. Pronóstico por municipio  `captura`

- Los 79 municipios de Misiones coloreados por condición del tiempo.
- Límites políticos propios; países y provincias vecinas como contexto.
- Un clic: temperaturas, condición e ícono animado.

📷 Captura: `src/capturas/alerta-temprana/pronostico.png`

🎤 **Decir:** Es el mapa más visto. Capa de polígonos municipales con simbología por categoría (mapa temático). Cada municipio toma el dato de la estación oficial más cercana: es un análisis de proximidad. Mencionar que es un mapa web embebible en el sitio del ministerio.

## 7. Un clic, la ficha del municipio  `captura`

- Se selecciona el municipio y se resalta su límite.
- La ficha trae la alerta vigente en esa zona.
- Temperaturas, estado del tiempo, sol, luna y próximos días.

📷 Captura: `src/capturas/alerta-temprana/pronostico-clic.png`

🎤 **Decir:** Demostrar la consulta por identificación: clic sobre Oberá (o el municipio de la zona del público). Aparece la tabla de atributos hecha ficha: alerta vigente, mínima y máxima, condición, salida y puesta del sol y de la luna, y los próximos tres días.

## 8. Alertas meteorológicas  `captura`

- Se leen automáticamente los avisos del Servicio Meteorológico Nacional.
- Zonas afectadas en amarillo, naranja o rojo según el nivel.
- Vigencia por horario: cada tramo se muestra como llega.

📷 Captura: `src/capturas/alerta-temprana/alertas.png`

🎤 **Decir:** El SMN publica avisos en formato abierto (CAP). El sistema los lee solo, los separa por vigencia y los vincula a las zonas del territorio. Es una unión por atributo con simbología graduada (amarillo, naranja, rojo). Remarcar la automatización: nadie transcribe nada.

## 9. Cómo se arma una alerta  `captura`

- El sistema lee solo los avisos del SMN y los lista a la izquierda.
- «Usar como base» los carga en el mapa para revisarlos.
- Se corrige, se publica y se genera la placa para redes.

📷 Captura: `src/capturas/alerta-temprana/panel-alertas.png`

🎤 **Decir:** Mostrar el panel de alertas meteorológicas. A la izquierda aparecen las alertas que informa el SMN (en la captura, tres alertas amarillas por tormentas, granizo, vientos fuertes y lluvias intensas). Con «Usar como base» se cargan en el mapa por departamento; el equipo revisa, ajusta horarios y publica. Al publicar, el mapa público se actualiza y se pueden generar las placas.

## 10. Avisos a corto plazo  `captura`

- Cada aviso es un polígono que marca la zona afectada.
- Se muestra solo mientras está vigente y se retira solo.
- El color se cruza con la alerta vigente; del mapa sale la placa para redes.

📷 Captura: `src/capturas/alerta-temprana/acp.png`

🎤 **Decir:** Los avisos a corto plazo son los más urgentes. En octubre hubo 47. Explicar el cruce de capas: el aviso se superpone con la alerta vigente para colorearlo con coherencia, y la misma información genera la imagen para publicar.

## 11. Focos de calor  `captura`

- Anomalías térmicas detectadas por satélite (NASA FIRMS).
- Cada foco late sobre el mapa; el color indica la intensidad (1 a 5).
- Apoyan el seguimiento del riesgo de incendios.

📷 Captura: `src/capturas/alerta-temprana/focos.png`

🎤 **Decir:** Capa de puntos de origen satelital, ya georreferenciada (latitud y longitud). Se recorta al límite de Misiones —un clip espacial— y se dibuja. Ejemplo claro de dato abierto llevado a un WebGIS.

## 12. Peligro de incendios forestales  `captura`

- Índice por departamento, de bajo a extremo.
- Escala de color estándar con leyenda al pie.
- Se combina con los focos de calor para priorizar zonas.

📷 Captura: `src/capturas/alerta-temprana/riesgo-incendios.png`

🎤 **Decir:** Mapa temático por departamento con cinco clases (bajo, moderado, alto, muy alto, extremo). Insistir en la leyenda: simbología clara para que cualquiera la interprete. Se mira junto con los focos de calor de la diapositiva anterior.

## 13. Cuencas, arroyos e inundaciones  `captura`

- Altura de los ríos Paraná, Uruguay e Iguazú y defluente de represas.
- Arroyos internos con estaciones de la Red Hidrológica Nacional.
- Puntos donde una crecida puede cortar rutas.

📷 Captura: `src/capturas/alerta-temprana/cuencas.png`

🎤 **Decir:** Capa hidrológica: estaciones puntuales con su último valor como atributo. Los puntos críticos de rutas son otra capa que se cruza con la altura del arroyo: análisis espacial para saber qué tramo queda comprometido.

## 14. Arroyos y rutas en riesgo  `captura`

- Estaciones hidrológicas sobre la red de rutas y caminos.
- Color según el estado: normal, vigilancia, alerta o corte de ruta.
- Los puntos con círculo son cruces de arroyos vigilados.

📷 Captura: `src/capturas/alerta-temprana/arroyos.png`

🎤 **Decir:** Superposición de capas: la red vial, los cruces de arroyos y las estaciones del SNIH. El estado de cada punto se calcula con el nivel del arroyo y los umbrales cargados. Muy útil para ver qué ruta se puede cortar.

## 15. Histórico del tiempo  `captura`

- Series de 1961 a hoy de tres estaciones de Misiones.
- Se elige zona y período; gráficos y tabla se recalculan.
- Cada gráfico y la tabla se exportan a PDF.

📷 Captura: `src/capturas/alerta-temprana/historico.png`

🎤 **Decir:** Pasar del mapa a la serie temporal: temperaturas y lluvia acumulada del período elegido. Es el análisis temporal que complementa al espacial. Mostrar cómo cambian los botones de 1 año, 10 años, 30 años y todo.

## 16. Ensamble de modelos  `captura`

- Cada línea es un modelo numérico distinto sobre el mismo departamento.
- Donde las líneas se separan, los modelos discrepan; donde se juntan, hay consenso.
- Se elige variable, departamento y rango de fechas.

📷 Captura: `src/capturas/alerta-temprana/panel-ensamble.png`

🎤 **Decir:** Mostrar el gráfico de líneas: temperatura máxima de Capital a diez días, con un modelo por línea (ECMWF, GFS, ICON, WRF-SMN y otros) y la franja gris que marca el rango entre el más bajo y el más alto. Cada modelo es como una capa distinta sobre el mismo territorio; cuando las líneas se abren, hay incertidumbre y conviene cautela en el pronóstico. Se puede pasar el mouse para ver el valor de cada modelo en cada fecha.

## 17. Del mapa a las redes  `placas`

- El mapa se integra solo en la placa de Instagram y Facebook, con colores y leyenda.
- Se publican desde el sistema, en formato feed e historias.

🎤 **Decir:** Mostrar que el mapa no se queda en el sistema: se convierte en la imagen que sale en Instagram y Facebook. La alerta lleva el mapa pintado por nivel con la leyenda y los fenómenos; el aviso, el texto con la recomendación; el monitoreo de lluvias, la tabla por estación; el riesgo de incendios, el mapa por departamento. Cada placa sale en formato feed y en historias, se revisa antes de publicar y se envía desde el mismo panel a las redes del ministerio, con los logos institucionales y sin programa de diseño.

## 18. Informes en PDF  `captura`

- Informe mensual, semanal y resumen de eventos del período.
- Todo editable; se puede ocultar columnas y filas sin borrarlas.
- Sale en PDF con el formato institucional.

📷 Captura: `src/capturas/alerta-temprana/panel-informes.png`

🎤 **Decir:** Los informes se arman en tres pestañas: mensual, semanal y resumen de eventos. El resumen de eventos sale solo de la base (ACP, alertas, avisos) y se baja en PDF con el mismo formato que los otros informes. Cada título es editable y los datos quedan guardados para retomarlos después.

## 19. Otras salidas del mismo dato  `texto`

- Pantalla de TV para la sala: rotación de mapas, alertas y avisos a pantalla completa.
- Informes mensuales, semanales y de eventos en PDF, con el mismo formato institucional.
- Mapas embebibles que la página pública y otros sitios muestran en vivo.

🎤 **Decir:** Para cerrar el bloque: del mismo dato salen también la pantalla de la sala de monitoreo, los informes en PDF y los mapas que la página pública incrusta. Una sola fuente, muchas salidas.

## 20. Ecodatos  `seccion`

*Registros de campo con ubicación, ordenados en una sola base*

🎤 **Decir:** Cambio de enfoque: acá el dato no viene de afuera, lo relevamos nosotros. Técnicos en territorio registran perforaciones, áreas protegidas, trámites, etc., desde formularios web y desde una app móvil, siempre con su ubicación.

## 21. Del campo al mapa  `flujo`

1. **Relevamiento** — Formulario web o app móvil, con fotos y ubicación
2. **Geodatabase** — Una tabla por tema, con geometría y validación
3. **Consultas** — Filtros, tablas y estadísticas por territorio
4. **Mapa** — Puntos y polígonos con su ficha

🎤 **Decir:** Explicar la lógica: cada formulario es una capa temática con su tabla de atributos y todos los registros tienen geometría. Por eso cualquier tabla se puede ver en el mapa sin trabajo extra.

## 22. Un panel de gestión  `captura`

- Cada área del observatorio tiene su tarjeta con sus formularios.
- Cada formulario es una tabla, con carga de registros, tabla y estadísticas.
- Acceso por usuario, con permisos de edición o solo lectura.

📷 Captura: `src/capturas/ecodatos/panel.png`

🎤 **Decir:** Panel de gestión de Ecodatos. Cada tarjeta es un área y agrupa sus formularios; cada formulario es una tabla de la base con su ubicación. Los permisos son por usuario.

## 23. Distribución geográfica de los registros  `captura`

- Cada registro se ubica en el mapa; el número es la cantidad en la zona.
- Los grupos se abren al acercar, hasta llegar al punto.
- La leyenda y los colores corresponden a la variable analizada.

📷 Captura: `src/capturas/ecodatos/mapa-reportes.png`

🎤 **Decir:** Mapa de los 112 registros de áreas naturales protegidas, agrupados por departamento. Al acercar se separan hasta llegar al marcador individual. Es la capa de puntos de un SIG, con simbología por categoría y leyenda.

## 24. Polígonos para los registros  `captura`

- Se sube una capa GeoJSON (EPSG:4326), por ejemplo exportada desde QGIS.
- Cada polígono se agrega al registro que le corresponde.
- Hasta 5000 polígonos por archivo.

📷 Captura: `src/capturas/ecodatos/poligonos.png`

🎤 **Decir:** Pestaña de agregar polígonos: no crea registros, le suma a cada registro existente su polígono. Se acepta GeoJSON en EPSG:4326, como lo exporta un SIG de escritorio.

## 25. Importar datos existentes  `captura`

- CSV o GeoJSON con las columnas del formulario, con plantilla para bajar.
- Departamento y municipio por nombre, sin códigos.
- Se valida antes de guardar: si algo falla, no se guarda nada.

📷 Captura: `src/capturas/ecodatos/importar.png`

🎤 **Decir:** Mucho dato histórico vive en planillas. El cajón de importación explica las columnas, ofrece una plantilla y valida todo antes de guardar. Lo viejo también entra al mismo modelo.

## 26. Estadísticas por territorio  `captura`

- Se elige período, variable y tipo de gráfico.
- Gráfico y tabla se actualizan al instante, con porcentaje del total.
- Debajo del gráfico, el mismo dato se ve en el mapa.

📷 Captura: `src/capturas/ecodatos/estadisticas.png`

🎤 **Decir:** El mapa responde dónde; las estadísticas responden cuánto. En la captura, áreas naturales protegidas por departamento. Es estadística zonal sobre las unidades territoriales.

## 27. Lo que tienen en común  `texto`

- El dato se carga o se trae una sola vez, georreferenciado.
- El mapa es una vista de la geodatabase, no un archivo aparte.
- WebGIS con herramientas abiertas: se consulta desde el navegador.
- Lo que se ve en pantalla sale también en placas, PDF y planillas.

🎤 **Decir:** Resumen. Insistir en que la clave de un SIG es la información geográfica bien sistematizada: una vez que el dato tiene ubicación y atributos, se puede mapear, analizar y difundir de muchas maneras.

## 28. Otros sistemas  `seccion`

*Espacio reservado para sumar más sistemas del ministerio*

🎤 **Decir:** Placeholder: acá se agregarán las próximas diapositivas (otros sistemas).

## 29. Gracias  `cierre`

*¿Preguntas?*

🎤 **Decir:** Agradecer y abrir preguntas. Preparar respuestas para: ¿qué librerías usan? (mapas web abiertos: MapLibre y Leaflet), ¿dónde se guardan los datos? (base de datos propia del ministerio), ¿se pueden usar en QGIS u otro SIG de escritorio? (sí, los datos tienen coordenadas).

## Capturas a sacar

| # | Diapositiva | Archivo |
|---|---|---|
| 3 | La página pública | `src/capturas/alerta-temprana/sitio-home.png` |
| 4 | Monitoreo en tiempo real | `src/capturas/alerta-temprana/sitio-mapas.png` |
| 5 | Detrás de la página: el generador de mapas | `src/capturas/alerta-temprana/panel-mapas.png` |
| 6 | Pronóstico por municipio | `src/capturas/alerta-temprana/pronostico.png` |
| 7 | Un clic, la ficha del municipio | `src/capturas/alerta-temprana/pronostico-clic.png` |
| 8 | Alertas meteorológicas | `src/capturas/alerta-temprana/alertas.png` |
| 9 | Cómo se arma una alerta | `src/capturas/alerta-temprana/panel-alertas.png` |
| 10 | Avisos a corto plazo | `src/capturas/alerta-temprana/acp.png` |
| 11 | Focos de calor | `src/capturas/alerta-temprana/focos.png` |
| 12 | Peligro de incendios forestales | `src/capturas/alerta-temprana/riesgo-incendios.png` |
| 13 | Cuencas, arroyos e inundaciones | `src/capturas/alerta-temprana/cuencas.png` |
| 14 | Arroyos y rutas en riesgo | `src/capturas/alerta-temprana/arroyos.png` |
| 15 | Histórico del tiempo | `src/capturas/alerta-temprana/historico.png` |
| 16 | Ensamble de modelos | `src/capturas/alerta-temprana/panel-ensamble.png` |
| 18 | Informes en PDF | `src/capturas/alerta-temprana/panel-informes.png` |
| 22 | Un panel de gestión | `src/capturas/ecodatos/panel.png` |
| 23 | Distribución geográfica de los registros | `src/capturas/ecodatos/mapa-reportes.png` |
| 24 | Polígonos para los registros | `src/capturas/ecodatos/poligonos.png` |
| 25 | Importar datos existentes | `src/capturas/ecodatos/importar.png` |
| 26 | Estadísticas por territorio | `src/capturas/ecodatos/estadisticas.png` |
