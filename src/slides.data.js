// Única fuente de contenido: de acá salen las diapositivas Y el guion (npm run guion).
// tipo: portada | seccion | texto | flujo | captura | cierre
// captura: ruta dentro de src/capturas/ (ej. "alerta-temprana/pronostico.png")
// puntos (captura): textos cortos que se numeran junto a la imagen
// notas: guion para quien presenta (se ve con la tecla N y sale en GUION.md)

export const slides = [
  {
    id: "portada",
    transicion: "desenfoque",
    tipo: "portada",
    titulo: "Sistemas de Información Geográfica",
    subtitulo: "Cómo sistematizamos la información territorial y la llevamos al mapa",
    area: "Observatorio Ambiental",
    pie: [
      "Dirección General de Sistemas de Información Geográfica",
      "Subsecretaría de Ordenamiento Territorial",
      "Ministerio de Ecología y RNR de Misiones",
    ],
    notas:
      "Saludo y presentación: Observatorio Ambiental, dentro de la Dirección General de Sistemas de Información Geográfica y la Subsecretaría de Ordenamiento Territorial. Anticipar la idea fuerza: vamos a recorrer dos sistemas de información geográfica del ministerio, Alerta Temprana y Ecodatos, y ver cómo la información territorial pasa de ser un dato suelto a ser una capa en un mapa. Duración total estimada: 12–15 minutos.",
  },

  // ───────────── ALERTA TEMPRANA ─────────────
  {
    id: "sec-at",
    transicion: "giro",
    tipo: "seccion",
    numero: "01",
    titulo: "Alerta Temprana",
    subtitulo: "Monitoreo del clima y de los riesgos para decidir y avisar a tiempo",
    notas:
      "Contar en una línea para qué existe: SIG de monitoreo para saber qué viene (tormentas, calor, crecidas, incendios) y avisar rápido a la población y a los organismos.",
  },
  {
    id: "at-sitio",
    transicion: "cortina",
    tipo: "captura",
    titulo: "La página pública",
    url: "alertatemprana.misiones.gob.ar",
    captura: "alerta-temprana/sitio-home.png",
    puntos: [
      "Es la cara pública del sistema: cualquiera consulta, sin usuario ni clave.",
      "Pronósticos, informes especiales e institucional en un solo sitio.",
      "Los mapas de la página son los mismos que se administran en el panel.",
    ],
    notas:
      "Empezar por lo que ve la gente: el sitio de la Dirección General de Alerta Temprana (alertatemprana.misiones.gob.ar). Es el WebGIS público: la población, los medios y otros organismos entran y ven la información sin instalar nada. Todo lo que mostramos después en el panel termina acá.",
  },
  {
    id: "at-sitio-mapas",
    transicion: "caida",
    tipo: "captura",
    titulo: "Monitoreo en tiempo real",
    url: "alertatemprana.misiones.gob.ar",
    captura: "alerta-temprana/sitio-mapas.png",
    puntos: [
      "Tres mapas de entrada: pronóstico, peligro de incendios y alertas.",
      "Cada mapa indica hace cuánto se publicó.",
      "Se pueden ampliar y recorrer con zoom, como en un visor SIG.",
    ],
    notas:
      "Bajar en la página hasta la sección de monitoreo. Son tres capas publicadas como mapas embebidos: el pronóstico, el índice de peligro de incendios forestales y las alertas meteorológicas vigentes. Cada uno muestra la hora de publicación, así se sabe qué tan fresco es el dato. Si hay internet en la sala, se puede abrir la página en vivo; si no, estas capturas alcanzan.",
  },
  {
    id: "at-panel",
    transicion: "desenfoque",
    tipo: "captura",
    titulo: "Detrás de la página: el generador de mapas",
    captura: "alerta-temprana/panel-mapas.png",
    puntos: [
      "Un módulo por cada mapa: pronóstico, riesgo de incendios, alertas y avisos.",
      "Cada uno se edita, se revisa en vista previa y se publica.",
      "Acceso por usuario, con permisos por módulo.",
    ],
    notas:
      "Ahora, lo que hay detrás de esa página: el panel de gestión, solo para el equipo. Mostrarlo como el administrador de capas de un SIG. Cada tarjeta es un tema (pronóstico, alertas, focos de calor, cuencas, lluvias) y se puede mirar por separado o en conjunto.",
  },
  {
    id: "at-pronostico",
    transicion: "cubo",
    tipo: "captura",
    titulo: "Pronóstico por municipio",
    captura: "alerta-temprana/pronostico.png",
    puntos: [
      "Los 79 municipios de Misiones coloreados por condición del tiempo.",
      "Límites políticos propios; países y provincias vecinas como contexto.",
      "Un clic: temperaturas, condición e ícono animado.",
    ],
    notas:
      "Es el mapa más visto. Capa de polígonos municipales con simbología por categoría (mapa temático). Cada municipio toma el dato de la estación oficial más cercana: es un análisis de proximidad. Mencionar que es un mapa web embebible en el sitio del ministerio.",
  },
  {
    id: "at-pronostico-clic",
    transicion: "abrir",
    tipo: "captura",
    titulo: "Un clic, la ficha del municipio",
    captura: "alerta-temprana/pronostico-clic.png",
    puntos: [
      "Se selecciona el municipio y se resalta su límite.",
      "La ficha trae la alerta vigente en esa zona.",
      "Temperaturas, estado del tiempo, sol, luna y próximos días.",
    ],
    notas:
      "Demostrar la consulta por identificación: clic sobre Oberá (o el municipio de la zona del público). Aparece la tabla de atributos hecha ficha: alerta vigente, mínima y máxima, condición, salida y puesta del sol y de la luna, y los próximos tres días.",
  },
  {
    id: "at-alertas",
    transicion: "zoom",
    tipo: "captura",
    titulo: "Alertas meteorológicas",
    captura: "alerta-temprana/alertas.png",
    puntos: [
      "Se leen automáticamente los avisos del Servicio Meteorológico Nacional.",
      "Zonas afectadas en amarillo, naranja o rojo según el nivel.",
      "Vigencia por horario: cada tramo se muestra como llega.",
    ],
    notas:
      "El SMN publica avisos en formato abierto (CAP). El sistema los lee solo, los separa por vigencia y los vincula a las zonas del territorio. Es una unión por atributo con simbología graduada (amarillo, naranja, rojo). Remarcar la automatización: nadie transcribe nada.",
  },
  {
    id: "at-alertas-panel",
    transicion: "deslizar",
    tipo: "captura",
    titulo: "Cómo se arma una alerta",
    captura: "alerta-temprana/panel-alertas.png",
    puntos: [
      "El sistema lee solo los avisos del SMN y los lista a la izquierda.",
      "«Usar como base» los carga en el mapa para revisarlos.",
      "Se corrige, se publica y se genera la placa para redes.",
    ],
    notas:
      "Mostrar el panel de alertas meteorológicas. A la izquierda aparecen las alertas que informa el SMN (en la captura, tres alertas amarillas por tormentas, granizo, vientos fuertes y lluvias intensas). Con «Usar como base» se cargan en el mapa por departamento; el equipo revisa, ajusta horarios y publica. Al publicar, el mapa público se actualiza y se pueden generar las placas.",
  },
  {
    id: "at-acp",
    transicion: "deslizar",
    tipo: "captura",
    titulo: "Avisos a corto plazo",
    captura: "alerta-temprana/acp.png",
    puntos: [
      "Cada aviso es un polígono que marca la zona afectada.",
      "Se muestra solo mientras está vigente y se retira solo.",
      "El color se cruza con la alerta vigente; del mapa sale la placa para redes.",
    ],
    notas:
      "Los avisos a corto plazo son los más urgentes. En octubre hubo 47. Explicar el cruce de capas: el aviso se superpone con la alerta vigente para colorearlo con coherencia, y la misma información genera la imagen para publicar.",
  },
  {
    id: "at-focos",
    transicion: "giro",
    tipo: "captura",
    titulo: "Focos de calor",
    captura: "alerta-temprana/focos.png",
    capas: [
      {
        tipo: "focos",
        puntos: [
          [900, 215, 2], [955, 305, 3], [1005, 372, 4], [900, 425, 2], [1012, 470, 1],
          [862, 505, 3], [800, 562, 5], [935, 545, 2], [733, 612, 1], [645, 668, 2], [965, 430, 3],
        ],
      },
    ],
    puntos: [
      "Anomalías térmicas detectadas por satélite (NASA FIRMS).",
      "Cada foco late sobre el mapa; el color indica la intensidad (1 a 5).",
      "Apoyan el seguimiento del riesgo de incendios.",
    ],
    notas:
      "Capa de puntos de origen satelital, ya georreferenciada (latitud y longitud). Se recorta al límite de Misiones —un clip espacial— y se dibuja. Ejemplo claro de dato abierto llevado a un WebGIS.",
  },
  {
    id: "at-riesgo",
    transicion: "cortina",
    tipo: "captura",
    titulo: "Peligro de incendios forestales",
    captura: "alerta-temprana/riesgo-incendios.png",
    puntos: [
      "Índice por departamento, de bajo a extremo.",
      "Escala de color estándar con leyenda al pie.",
      "Se combina con los focos de calor para priorizar zonas.",
    ],
    notas:
      "Mapa temático por departamento con cinco clases (bajo, moderado, alto, muy alto, extremo). Insistir en la leyenda: simbología clara para que cualquiera la interprete. Se mira junto con los focos de calor de la diapositiva anterior.",
  },
  {
    id: "at-cuencas",
    transicion: "caida",
    tipo: "captura",
    titulo: "Cuencas, arroyos e inundaciones",
    captura: "alerta-temprana/cuencas.png",
    puntos: [
      "Altura de los ríos Paraná, Uruguay e Iguazú y defluente de represas.",
      "Arroyos internos con estaciones de la Red Hidrológica Nacional.",
      "Puntos donde una crecida puede cortar rutas.",
    ],
    notas:
      "Capa hidrológica: estaciones puntuales con su último valor como atributo. Los puntos críticos de rutas son otra capa que se cruza con la altura del arroyo: análisis espacial para saber qué tramo queda comprometido.",
  },
  {
    id: "at-arroyos",
    transicion: "desenfoque",
    tipo: "captura",
    titulo: "Arroyos y rutas en riesgo",
    captura: "alerta-temprana/arroyos.png",
    puntos: [
      "Estaciones hidrológicas sobre la red de rutas y caminos.",
      "Color según el estado: normal, vigilancia, alerta o corte de ruta.",
      "Los puntos con círculo son cruces de arroyos vigilados.",
    ],
    notas:
      "Superposición de capas: la red vial, los cruces de arroyos y las estaciones del SNIH. El estado de cada punto se calcula con el nivel del arroyo y los umbrales cargados. Muy útil para ver qué ruta se puede cortar.",
  },
  {
    id: "at-historico",
    transicion: "abrir",
    tipo: "captura",
    titulo: "Histórico del tiempo",
    captura: "alerta-temprana/historico.png",
    puntos: [
      "Series de 1961 a hoy de tres estaciones de Misiones.",
      "Se elige zona y período; gráficos y tabla se recalculan.",
      "Cada gráfico y la tabla se exportan a PDF.",
    ],
    notas:
      "Pasar del mapa a la serie temporal: temperaturas y lluvia acumulada del período elegido. Es el análisis temporal que complementa al espacial. Mostrar cómo cambian los botones de 1 año, 10 años, 30 años y todo.",
  },
  {
    id: "at-ensamble",
    transicion: "zoom",
    tipo: "captura",
    titulo: "Ensamble de modelos",
    captura: "alerta-temprana/panel-ensamble.png",
    puntos: [
      "Cada línea es un modelo numérico distinto sobre el mismo departamento.",
      "Donde las líneas se separan, los modelos discrepan; donde se juntan, hay consenso.",
      "Se elige variable, departamento y rango de fechas.",
    ],
    notas:
      "Mostrar el gráfico de líneas: temperatura máxima de Capital a diez días, con un modelo por línea (ECMWF, GFS, ICON, WRF-SMN y otros) y la franja gris que marca el rango entre el más bajo y el más alto. Cada modelo es como una capa distinta sobre el mismo territorio; cuando las líneas se abren, hay incertidumbre y conviene cautela en el pronóstico. Se puede pasar el mouse para ver el valor de cada modelo en cada fecha.",
  },
  {
    id: "at-placas",
    transicion: "zoom",
    tipo: "placas",
    titulo: "Del mapa a las redes",
    placas: [
      { src: "alerta-temprana/placa-alerta-mapa-feed.jpg", leyenda: "Alerta meteorológica" },
      { src: "alerta-temprana/placa-alerta-aviso-feed.jpg", leyenda: "Aviso de alerta" },
      { src: "alerta-temprana/placa-lluvias.jpg", leyenda: "Monitoreo de lluvias" },
      { src: "alerta-temprana/placa-riesgo-historias.jpg", leyenda: "Riesgo de incendios" },
    ],
    puntos: [
      "El mapa se integra solo en la placa de Instagram y Facebook, con colores y leyenda.",
      "Se publican desde el sistema, en formato feed e historias.",
    ],
    notas:
      "Mostrar que el mapa no se queda en el sistema: se convierte en la imagen que sale en Instagram y Facebook. La alerta lleva el mapa pintado por nivel con la leyenda y los fenómenos; el aviso, el texto con la recomendación; el monitoreo de lluvias, la tabla por estación; el riesgo de incendios, el mapa por departamento. Cada placa sale en formato feed y en historias, se revisa antes de publicar y se envía desde el mismo panel a las redes del ministerio, con los logos institucionales y sin programa de diseño.",
  },
  {
    id: "at-informes",
    transicion: "giro",
    tipo: "captura",
    titulo: "Informes en PDF",
    captura: "alerta-temprana/panel-informes.png",
    puntos: [
      "Informe mensual, semanal y resumen de eventos del período.",
      "Todo editable; se puede ocultar columnas y filas sin borrarlas.",
      "Sale en PDF con el formato institucional.",
    ],
    notas:
      "Los informes se arman en tres pestañas: mensual, semanal y resumen de eventos. El resumen de eventos sale solo de la base (ACP, alertas, avisos) y se baja en PDF con el mismo formato que los otros informes. Cada título es editable y los datos quedan guardados para retomarlos después.",
  },
  {
    id: "at-salidas",
    transicion: "caida",
    tipo: "texto",
    titulo: "Otras salidas del mismo dato",
    puntos: [
      "Pantalla de TV para la sala: rotación de mapas, alertas y avisos a pantalla completa.",
      "Informes mensuales, semanales y de eventos en PDF, con el mismo formato institucional.",
      "Mapas embebibles que la página pública y otros sitios muestran en vivo.",
    ],
    notas:
      "Para cerrar el bloque: del mismo dato salen también la pantalla de la sala de monitoreo, los informes en PDF y los mapas que la página pública incrusta. Una sola fuente, muchas salidas.",
  },

  // ───────────── ECODATOS ─────────────
  {
    id: "sec-eco",
    transicion: "giro",
    tipo: "seccion",
    numero: "02",
    titulo: "Ecodatos",
    subtitulo: "Registros de campo con ubicación, ordenados en una sola base",
    notas:
      "Cambio de enfoque: acá el dato no viene de afuera, lo relevamos nosotros. Técnicos en territorio registran perforaciones, áreas protegidas, trámites, etc., desde formularios web y desde una app móvil, siempre con su ubicación.",
  },
  {
    id: "eco-que-es",
    transicion: "cortina",
    tipo: "flujo",
    titulo: "Del campo al mapa",
    pasos: [
      { t: "Relevamiento", d: "Formulario web o app móvil, con fotos y ubicación" },
      { t: "Geodatabase", d: "Una tabla por tema, con geometría y validación" },
      { t: "Consultas", d: "Filtros, tablas y estadísticas por territorio" },
      { t: "Mapa", d: "Puntos y polígonos con su ficha" },
    ],
    notas:
      "Explicar la lógica: cada formulario es una capa temática con su tabla de atributos y todos los registros tienen geometría. Por eso cualquier tabla se puede ver en el mapa sin trabajo extra.",
  },
  {
    id: "eco-panel",
    transicion: "giro",
    tipo: "captura",
    titulo: "Un panel de gestión",
    captura: "ecodatos/panel.png",
    puntos: [
      "Cada área del observatorio tiene su tarjeta con sus formularios.",
      "Cada formulario es una tabla, con carga de registros, tabla y estadísticas.",
      "Acceso por usuario, con permisos de edición o solo lectura.",
    ],
    notas: "Panel de gestión de Ecodatos. Cada tarjeta es un área y agrupa sus formularios; cada formulario es una tabla de la base con su ubicación. Los permisos son por usuario.",
  },
  {
    id: "eco-mapa",
    transicion: "caida",
    tipo: "captura",
    titulo: "Distribución geográfica de los registros",
    captura: "ecodatos/mapa-reportes.png",
    puntos: [
      "Cada registro se ubica en el mapa; el número es la cantidad en la zona.",
      "Los grupos se abren al acercar, hasta llegar al punto.",
      "La leyenda y los colores corresponden a la variable analizada.",
    ],
    notas:
      "Mapa de los 112 registros de áreas naturales protegidas, agrupados por departamento. Al acercar se separan hasta llegar al marcador individual. Es la capa de puntos de un SIG, con simbología por categoría y leyenda.",
  },
  {
    id: "eco-poligonos",
    transicion: "desenfoque",
    tipo: "captura",
    titulo: "Polígonos para los registros",
    captura: "ecodatos/poligonos.png",
    puntos: [
      "Se sube una capa GeoJSON (EPSG:4326), por ejemplo exportada desde QGIS.",
      "Cada polígono se agrega al registro que le corresponde.",
      "Hasta 5000 polígonos por archivo.",
    ],
    notas:
      "Pestaña de agregar polígonos: no crea registros, le suma a cada registro existente su polígono. Se acepta GeoJSON en EPSG:4326, como lo exporta un SIG de escritorio.",
  },
  {
    id: "eco-importar",
    transicion: "cubo",
    tipo: "captura",
    titulo: "Importar datos existentes",
    captura: "ecodatos/importar.png",
    puntos: [
      "CSV o GeoJSON con las columnas del formulario, con plantilla para bajar.",
      "Departamento y municipio por nombre, sin códigos.",
      "Se valida antes de guardar: si algo falla, no se guarda nada.",
    ],
    notas:
      "Mucho dato histórico vive en planillas. El cajón de importación explica las columnas, ofrece una plantilla y valida todo antes de guardar. Lo viejo también entra al mismo modelo.",
  },
  {
    id: "eco-estadisticas",
    transicion: "abrir",
    tipo: "captura",
    titulo: "Estadísticas por territorio",
    captura: "ecodatos/estadisticas.png",
    puntos: [
      "Se elige período, variable y tipo de gráfico.",
      "Gráfico y tabla se actualizan al instante, con porcentaje del total.",
      "Debajo del gráfico, el mismo dato se ve en el mapa.",
    ],
    notas:
      "El mapa responde dónde; las estadísticas responden cuánto. En la captura, áreas naturales protegidas por departamento. Es estadística zonal sobre las unidades territoriales.",
  },

  // ───────────── CIERRE ─────────────
  {
    id: "comun",
    transicion: "zoom",
    tipo: "texto",
    titulo: "Lo que tienen en común",
    puntos: [
      "El dato se carga o se trae una sola vez, georreferenciado.",
      "El mapa es una vista de la geodatabase, no un archivo aparte.",
      "WebGIS con herramientas abiertas: se consulta desde el navegador.",
      "Lo que se ve en pantalla sale también en placas, PDF y planillas.",
    ],
    notas:
      "Resumen. Insistir en que la clave de un SIG es la información geográfica bien sistematizada: una vez que el dato tiene ubicación y atributos, se puede mapear, analizar y difundir de muchas maneras.",
  },
  {
    id: "proximos",
    transicion: "deslizar",
    tipo: "seccion",
    numero: "03",
    titulo: "Otros sistemas",
    subtitulo: "Espacio reservado para sumar más sistemas del ministerio",
    notas: "Placeholder: acá se agregarán las próximas diapositivas (otros sistemas).",
  },
  {
    id: "cierre",
    transicion: "giro",
    tipo: "cierre",
    titulo: "Gracias",
    subtitulo: "¿Preguntas?",
    area: "Observatorio Ambiental",
    pie: [
      "Dirección General de Sistemas de Información Geográfica",
      "Subsecretaría de Ordenamiento Territorial",
      "Ministerio de Ecología y RNR de Misiones",
    ],
    notas:
      "Agradecer y abrir preguntas. Preparar respuestas para: ¿qué librerías usan? (mapas web abiertos: MapLibre y Leaflet), ¿dónde se guardan los datos? (base de datos propia del ministerio), ¿se pueden usar en QGIS u otro SIG de escritorio? (sí, los datos tienen coordenadas).",
  },
];
