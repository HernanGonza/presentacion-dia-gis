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
    tipo: "mosaico",
    titulo: "La página pública y su generador de mapas",
    url: "alertatemprana.misiones.gob.ar",
    items: [
      { src: "alerta-temprana/sitio-home.png", leyenda: "La página pública", texto: "Cualquiera consulta, sin usuario ni clave." },
      { src: "alerta-temprana/sitio-mapas.png", leyenda: "Monitoreo en tiempo real", texto: "Pronóstico, incendios y alertas, con su hora de publicación." },
      { src: "alerta-temprana/panel-mapas.png", leyenda: "El generador de mapas", texto: "Un módulo por mapa: se edita, se revisa y se publica." },
    ],
    notas:
      "Empezar por lo que ve la gente: el sitio de la Dirección General de Alerta Temprana (alertatemprana.misiones.gob.ar). Es el sitio web público con los mapas: la población, los medios y otros organismos entran y ven la información sin instalar nada. Todo lo que mostramos después en el panel termina acá." + " " + "Bajar en la página hasta la sección de monitoreo. Son tres capas publicadas como mapas embebidos: el pronóstico, el índice de peligro de incendios forestales y las alertas meteorológicas vigentes. Cada uno muestra la hora de publicación, así se sabe qué tan fresco es el dato. Si hay internet en la sala, se puede abrir la página en vivo; si no, estas capturas alcanzan." + " " + "Ahora, lo que hay detrás de esa página: el panel de gestión, solo para el equipo. Mostrarlo como el administrador de capas de un SIG. Cada tarjeta es un tema (pronóstico, alertas, focos de calor, cuencas, lluvias) y se puede mirar por separado o en conjunto.",
  },
  {
    id: "at-pronostico",
    transicion: "giro",
    tipo: "mosaico",
    titulo: "Pronóstico por municipio",
    items: [
      { src: "alerta-temprana/pronostico.png", leyenda: "79 municipios", texto: "Coloreados por condición del tiempo, con límites propios." },
      { src: "alerta-temprana/pronostico-clic.png", leyenda: "Un clic, la ficha", texto: "Alerta vigente, temperaturas, sol, luna y próximos días." },
    ],
    notas:
      "Es el mapa más visto. Capa de polígonos municipales con simbología por categoría (mapa temático). Cada municipio toma el dato de la estación oficial más cercana: es un análisis de proximidad. Mencionar que es un mapa web embebible en el sitio del ministerio." + " " + "Demostrar la consulta por identificación: clic sobre Oberá (o el municipio de la zona del público). Aparece la tabla de atributos hecha ficha: alerta vigente, mínima y máxima, condición, salida y puesta del sol y de la luna, y los próximos tres días.",
  },
  {
    id: "at-alertas",
    transicion: "caida",
    tipo: "mosaico",
    titulo: "Alertas y avisos",
    items: [
      { src: "alerta-temprana/alertas.png", leyenda: "Alertas del SMN", texto: "Se leen solas; amarillo, naranja o rojo según el nivel." },
      { src: "alerta-temprana/panel-alertas.png", leyenda: "Cómo se arma una alerta", texto: "Se listan los avisos, se usan como base y se publican." },
      { src: "alerta-temprana/acp.png", leyenda: "Avisos a corto plazo", texto: "Polígonos de la zona afectada, solo mientras están vigentes." },
    ],
    notas:
      "El SMN publica avisos en formato abierto (CAP). El sistema los lee solo, los separa por vigencia y los vincula a las zonas del territorio. Es una unión por atributo con simbología graduada (amarillo, naranja, rojo). Remarcar la automatización: nadie transcribe nada." + " " + "Mostrar el panel de alertas meteorológicas. A la izquierda aparecen las alertas que informa el SMN (en la captura, tres alertas amarillas por tormentas, granizo, vientos fuertes y lluvias intensas). Con «Usar como base» se cargan en el mapa por departamento; el equipo revisa, ajusta horarios y publica. Al publicar y el mapa público se actualiza." + " " + "Los avisos a corto plazo son los más urgentes. En octubre hubo 47. Explicar el cruce de capas: el aviso se superpone con la alerta vigente para colorearlo con coherencia, y la misma información genera la imagen para publicar.",
  },
  {
    id: "at-incendios",
    transicion: "desenfoque",
    tipo: "mosaico",
    titulo: "Incendios: focos y peligro",
    items: [
      { src: "alerta-temprana/focos.png", leyenda: "Focos de calor", texto: "Anomalías detectadas por satélite (NASA FIRMS); el color marca la intensidad.", capas: [
      {
        tipo: "focos",
        puntos: [
          [900, 215, 2], [955, 305, 3], [1005, 372, 4], [900, 425, 2], [1012, 470, 1],
          [862, 505, 3], [800, 562, 5], [935, 545, 2], [733, 612, 1], [645, 668, 2], [965, 430, 3],
        ],
      },
    ] },
      { src: "alerta-temprana/riesgo-incendios.png", leyenda: "Peligro de incendios", texto: "Índice por departamento, de bajo a extremo, con leyenda." },
    ],
    notas:
      "Capa de puntos de origen satelital, ya georreferenciada (latitud y longitud). Se recorta al límite de Misiones —un clip espacial— y se dibuja. Ejemplo claro de dato abierto llevado a un mapa web." + " " + "Mapa temático por departamento con cinco clases (bajo, moderado, alto, muy alto, extremo). Insistir en la leyenda: simbología clara para que cualquiera la interprete. Se mira junto con los focos de calor de la diapositiva anterior.",
  },
  {
    id: "at-agua",
    transicion: "cubo",
    tipo: "mosaico",
    titulo: "Cuencas, arroyos y rutas en riesgo",
    items: [
      { src: "alerta-temprana/cuencas.png", leyenda: "Cuencas e inundaciones", texto: "Altura de los ríos Paraná, Uruguay e Iguazú y estaciones de arroyos." },
      { src: "alerta-temprana/arroyos.png", leyenda: "Arroyos y rutas", texto: "Estado normal, vigilancia, alerta o corte de ruta." },
    ],
    notas:
      "Capa hidrológica: estaciones puntuales con su último valor como atributo. Los puntos críticos de rutas son otra capa que se cruza con la altura del arroyo: análisis espacial para saber qué tramo queda comprometido." + " " + "Superposición de capas: la red vial, los cruces de arroyos y las estaciones del SNIH. El estado de cada punto se calcula con el nivel del arroyo y los umbrales cargados. Muy útil para ver qué ruta se puede cortar.",
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

  // ───────────── DEL DATO AL MAPA Y DE VUELTA ─────────────
  {
    id: "sec-base",
    transicion: "giro",
    tipo: "seccion",
    numero: "03",
    titulo: "Una sola base",
    subtitulo: "Cómo entra el dato, dónde se guarda y cómo vuelve a los sistemas",
    notas:
      "Cierre del recorrido de los dos sistemas: ahora el hilo que los une. Los datos entran por distintas puertas, caen en una única base de datos centralizada y desde ahí se mapean. Y el camino es de ida y vuelta: lo que se edita en el GIS se refleja en los sistemas.",
  },
  {
    id: "base-flujo",
    transicion: "cortina",
    tipo: "flujo",
    titulo: "Cómo circula la información",
    pasos: [
      { t: "Se recolecta", d: "Ecodatos (web y app móvil) y Alerta Temprana: avisos, estaciones y focos" },
      { t: "Se centraliza", d: "Todo cae en una única base de datos PostgreSQL, con ubicación y atributos" },
      { t: "Se mapea", d: "QGIS, instalado en cada PC, se conecta a la base y trae las capas" },
      { t: "Vuelve", d: "Lo que se edita en QGIS se guarda en la base y se ve en los sistemas" },
    ],
    notas:
      "Esta es la diapositiva eje. Dos familias de fuentes: lo que relevamos nosotros en territorio (Ecodatos, con formularios web y la app móvil) y lo que monitoreamos (Alerta Temprana: avisos del SMN, estaciones, focos de calor). Todo termina en la misma base de datos. El GIS que usamos es QGIS, instalado en las computadoras, conectado directo a la base: lee las tablas como capas y también escribe en ellas. Por eso una corrección hecha en QGIS aparece en Ecodatos y en Alerta Temprana sin volver a cargar nada.",
  },
  {
    id: "base-web",
    transicion: "caida",
    tipo: "captura",
    contener: true,
    titulo: "Fuente 1: formularios web",
    url: "ecodatos.ecologia.misiones.gob.ar",
    captura: "ecodatos/formulario-nuevo.jpg",
    puntos: [
      "Cada tema tiene su formulario, que es una tabla de la base.",
      "Departamento y municipio se eligen de una lista, sin códigos.",
      "Al guardar, el registro queda en la base y aparece en la tabla.",
    ],
    notas:
      "Alta de un registro desde la web: es el formulario de áreas naturales protegidas, vacío. Cada campo es una columna de la tabla. No hay planilla intermedia: lo que se carga acá ya está en la base.",
  },
  {
    id: "app-inicio",
    transicion: "desenfoque",
    tipo: "captura",
    contener: true,
    titulo: "Fuente 2: la app móvil de campo",
    captura: "app/inicio.jpg",
    puntos: [
      "App Ecodatos para el celular: se elige el área del reporte.",
      "Los formularios son los mismos que en la web, por usuario y permisos.",
      "Sirve para cargar tanto relevamientos como reportes de Alerta Temprana.",
    ],
    notas:
      "La app Ecodatos (la carpeta se llama EcoAlerta) es la puerta de ingreso en territorio. Lista los formularios que el usuario tiene habilitados, agrupados por área. Los técnicos y guardaparques cargan desde el lugar del hecho. Captura tomada en la versión web de la app, en tema de la app.",
  },
  {
    id: "app-formulario",
    transicion: "cubo",
    tipo: "captura",
    contener: true,
    titulo: "Un reporte, en el lugar del hecho",
    captura: "app/formulario.jpg",
    puntos: [
      "Ejemplo: atropellamiento de fauna silvestre.",
      "Fecha, ubicación, departamento, municipio y datos del hecho.",
      "Los campos salen de la misma definición que usa la web.",
    ],
    notas:
      "Formulario dinámico: se arma a partir de la definición de la tabla, por eso web y app muestran los mismos campos. No hace falta programar una pantalla por formulario.",
  },
  {
    id: "app-envio",
    transicion: "abrir",
    tipo: "captura",
    contener: true,
    titulo: "Ubicación, fotos y voz",
    captura: "app/envio.jpg",
    puntos: [
      "La ubicación GPS se toma sola y queda como coordenadas.",
      "Se adjuntan fotos y notas de voz.",
      "«Enviar reporte» lo guarda en la base centralizada.",
    ],
    notas:
      "El GPS es lo que convierte el reporte en dato geográfico: lat y lon quedan en el registro. En la captura (versión web) el mapa del formulario no se dibuja ni hay GPS real; las coordenadas son de prueba. En el celular se ve el mapa con el punto.",
  },
  {
    id: "base-tabla",
    transicion: "zoom",
    tipo: "captura",
    contener: true,
    titulo: "Todo cae en la misma base",
    captura: "ecodatos/tabla-registros.jpg",
    puntos: [
      "Lo cargado desde la web y desde la app aparece en la misma tabla.",
      "Búsqueda, filtros por columna y exportación a CSV.",
      "Cada registro tiene sus coordenadas, listas para el mapa.",
    ],
    notas:
      "Tabla de áreas naturales protegidas con 112 registros. Da igual si el registro vino de la web, de la app o de una importación: es la misma tabla. Las coordenadas están en columnas, así que el mapa no necesita ningún paso intermedio.",
  },
  {
    id: "base-mapa",
    transicion: "deslizar",
    tipo: "captura",
    titulo: "La misma base, en el mapa de Ecodatos",
    captura: "ecodatos/mapa-reportes.png",
    puntos: [
      "El mapa lee directo de la tabla: no hay una copia aparte.",
      "Cada registro nuevo aparece sin hacer nada más.",
      "La misma base es la que abre QGIS en las computadoras.",
    ],
    notas:
      "Es la misma base que se ve en la tabla anterior, ahora como mapa web de Ecodatos con puntos agrupados. Aclarar que este es el mapa de la aplicación; el GIS de trabajo es QGIS, que se conecta a esta misma base (siguiente diapositiva).",
  },
  {
    id: "base-vuelta",
    transicion: "giro",
    tipo: "flujo",
    titulo: "Se edita en QGIS y vuelve a los sistemas",
    pasos: [
      { t: "Se conecta", d: "QGIS abre la base de datos y carga la capa" },
      { t: "Se edita", d: "Se corrige el atributo o la ubicación del registro" },
      { t: "Se guarda", d: "«Guardar ediciones» escribe el cambio en la misma base" },
      { t: "Se refleja", d: "Ecodatos, la app y Alerta Temprana muestran el dato actualizado" },
    ],
    notas:
      "El circuito es de ida y vuelta porque QGIS y los sistemas comparten la misma base. No hay que exportar, corregir y volver a importar. Esta diapositiva no lleva captura de QGIS; si se quiere, se puede mostrar en vivo.",
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
      "Los mapas web se consultan desde el navegador; el trabajo de análisis se hace en QGIS.",
      "Se edita desde QGIS y el cambio vuelve a los sistemas.",
    ],
    notas:
      "Resumen. Insistir en que la clave de un SIG es la información geográfica bien sistematizada: una vez que el dato tiene ubicación y atributos, se puede mapear, analizar y difundir de muchas maneras.",
  },
  {
    id: "proximos",
    transicion: "deslizar",
    tipo: "seccion",
    numero: "04",
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
