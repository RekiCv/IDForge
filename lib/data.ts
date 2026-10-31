import type { Gender } from "./types";

export const firstNames: Record<Gender, readonly string[]> = {
  masculino: [
    "Álvaro", "Mateo", "Santiago", "Diego", "Lucas", "Joaquín", "Tomás",
    "Emilio", "Bruno", "Iván", "Gabriel", "Hugo", "Adrián", "Nicolás",
    "Sebastián", "Mauricio", "Rodrigo", "Felipe", "Andrés", "Damián",
    "Ezequiel", "Lorenzo", "Facundo", "Gael", "Marcos", "Rubén", "Óscar",
    "Julián", "Aarón", "Cristian", "Eduardo", "Ramiro", "Ignacio", "Vicente",
  ],
  femenino: [
    "Valentina", "Camila", "Lucía", "Martina", "Sofía", "Elena", "Renata",
    "Isabella", "Antonella", "Paula", "Daniela", "Marina", "Clara", "Alba",
    "Noa", "Julia", "Vera", "Irene", "Carla", "Emma", "Olivia", "Regina",
    "Ximena", "Agustina", "Florencia", "Milagros", "Abril", "Rocío",
    "Pilar", "Nerea", "Aitana", "Guadalupe", "Amparo", "Lorena", "Cecilia",
  ],
  "no binario": [
    "Ariel", "Alex", "Sam", "Noel", "Ari", "Luca", "Eden", "Río", "Sol",
    "Cris", "Dani", "Álex", "Gabi", "Nico", "Rafa", "Mica", "Aure", "Quinn",
  ],
};

export const lastNames: readonly string[] = [
  "García", "Fernández", "López", "Martínez", "Sánchez", "Pérez", "Gómez",
  "Rodríguez", "Ruiz", "Hernández", "Díaz", "Moreno", "Álvarez", "Romero",
  "Alonso", "Gutiérrez", "Navarro", "Torres", "Domínguez", "Vázquez",
  "Ramos", "Gil", "Ramírez", "Serrano", "Blanco", "Molina", "Morales",
  "Ortega", "Delgado", "Castro", "Ortiz", "Rubio", "Marín", "Sanz",
  "Iglesias", "Medina", "Garrido", "Cortés", "Castillo", "Santos",
  "Lozano", "Guerrero", "Cano", "Prieto", "Méndez", "Cruz", "Calvo",
  "Vega", "Suárez", "Reyes", "Cabrera", "Núñez", "Aguilar", "Vargas",
  "Herrera", "Peña", "Flores", "Rojas", "Acosta", "Benítez", "Silva",
];

export type Place = {
  city: string;
  country: string;
  streets: readonly string[];
  postalPrefix: string;
};

export const places: readonly Place[] = [
  {
    city: "Madrid",
    country: "España",
    streets: ["Calle de Alcalá", "Calle Mayor", "Paseo de la Castellana", "Calle de Fuencarral", "Ronda de Valencia"],
    postalPrefix: "28",
  },
  {
    city: "Barcelona",
    country: "España",
    streets: ["Carrer de Gràcia", "Carrer del Carme", "Passeig de Sant Joan", "Carrer de Sants", "Rambla de Catalunya"],
    postalPrefix: "08",
  },
  {
    city: "Valencia",
    country: "España",
    streets: ["Carrer de la Pau", "Avinguda del Port", "Carrer de Sagunt", "Plaça del Tossal", "Carrer de Xàtiva"],
    postalPrefix: "46",
  },
  {
    city: "Sevilla",
    country: "España",
    streets: ["Calle Sierpes", "Calle Betis", "Avenida de la Constitución", "Calle Feria", "Plaza Nueva"],
    postalPrefix: "41",
  },
  {
    city: "Bilbao",
    country: "España",
    streets: ["Gran Vía de Don Diego López de Haro", "Calle Licenciado Poza", "Plaza Moyúa", "Calle Ercilla", "Alameda Rekalde"],
    postalPrefix: "48",
  },
  {
    city: "Ciudad de México",
    country: "México",
    streets: ["Avenida Reforma", "Calle Colima", "Avenida Insurgentes", "Calle Génova", "Calzada de Tlalpan"],
    postalPrefix: "06",
  },
  {
    city: "Guadalajara",
    country: "México",
    streets: ["Avenida Chapultepec", "Calle Morelos", "Avenida Vallarta", "Calle Colón", "Paseo de la Reforma"],
    postalPrefix: "44",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    streets: ["Avenida Corrientes", "Calle Defensa", "Avenida Santa Fe", "Calle Florida", "Avenida Belgrano"],
    postalPrefix: "10",
  },
  {
    city: "Córdoba",
    country: "Argentina",
    streets: ["Avenida Colón", "Calle San Martín", "Bulevar San Juan", "Calle Belgrano", "Avenida Vélez Sarsfield"],
    postalPrefix: "50",
  },
  {
    city: "Bogotá",
    country: "Colombia",
    streets: ["Carrera Séptima", "Calle 85", "Avenida Chile", "Carrera 13", "Calle 26"],
    postalPrefix: "11",
  },
  {
    city: "Medellín",
    country: "Colombia",
    streets: ["Carrera 43A", "Calle 10", "Avenida Poblado", "Carrera 70", "Calle 50"],
    postalPrefix: "05",
  },
  {
    city: "Lima",
    country: "Perú",
    streets: ["Avenida Arequipa", "Jirón de la Unión", "Avenida Larco", "Calle Schell", "Avenida Brasil"],
    postalPrefix: "15",
  },
  {
    city: "Santiago",
    country: "Chile",
    streets: ["Avenida Providencia", "Calle Huérfanos", "Avenida Vitacura", "Paseo Ahumada", "Avenida Matta"],
    postalPrefix: "83",
  },
  {
    city: "Montevideo",
    country: "Uruguay",
    streets: ["Avenida 18 de Julio", "Calle Sarandí", "Bulevar Artigas", "Calle Colonia", "Avenida Brasil"],
    postalPrefix: "11",
  },
  {
    city: "Quito",
    country: "Ecuador",
    streets: ["Avenida Amazonas", "Calle La Ronda", "Avenida 10 de Agosto", "Calle Guayaquil", "Avenida Naciones Unidas"],
    postalPrefix: "17",
  },
  {
    city: "Lisboa",
    country: "Portugal",
    streets: ["Rua Augusta", "Avenida da Liberdade", "Rua do Carmo", "Praça do Comércio", "Rua Garrett"],
    postalPrefix: "11",
  },
  {
    city: "Roma",
    country: "Italia",
    streets: ["Via del Corso", "Via Nazionale", "Via Appia", "Via Cola di Rienzo", "Piazza Navona"],
    postalPrefix: "00",
  },
  {
    city: "Berlín",
    country: "Alemania",
    streets: ["Unter den Linden", "Kastanienallee", "Kurfürstendamm", "Torstraße", "Schönhauser Allee"],
    postalPrefix: "10",
  },
];

export const occupations: readonly string[] = [
  "arquitectura de interiores", "diseño gráfico", "ingeniería de sonido",
  "docencia de literatura", "fotografía documental", "cocina de autor",
  "análisis de datos", "veterinaria de animales exóticos", "periodismo freelance",
  "restauración de muebles", "desarrollo de videojuegos", "traducción jurada",
  "urbanismo", "danza contemporánea", "psicología clínica",
  "iluminación escénica", "edición de podcast", "biología marina",
  "joyería artesanal", "locución de radio", "gestión cultural", "pilotaje de drones",
  "barismo de especialidad", "ilustración editorial", "enfermería de urgencias",
  "guion de series", "cerámica", "tasación de arte", "astronomía",
  "entrenamiento personal", "panadería de masa madre", "producción musical",
];

export const companies: readonly string[] = [
  "Estudio Nómada", "Taller Pérgola", "Casa Meridiano", "Cooperativa Bruma",
  "Instituto Lumen", "Editorial Contraluz", "Factoría Aural", "Grupo Kilómetro Cero",
  "Laboratorio Sur", "Agencia Paralaje", "Mercado Abierto", "Fundación Tránsito",
  "Estudio Rizoma", "Proyecto Cobalto", "Archivo Vivo", "Compañía Horizonte",
  "Nodo Norte", "Taller de las Horas", "Oficina Vector", "Casa Semilla",
];

export const educationOptions: readonly string[] = [
  "Licenciatura en Bellas Artes · Universidad de Salamanca",
  "Grado en Arquitectura · Universidad Politécnica de Madrid",
  "Licenciatura en Comunicación Audiovisual · Universidad de Buenos Aires",
  "Ingeniería en Sistemas · Tecnológico de Monterrey",
  "Grado en Psicología · Universidad de Barcelona",
  "Licenciatura en Letras · Universidad Nacional Autónoma de México",
  "Grado en Diseño Industrial · Universidad de los Andes",
  "Máster en Sonido y Música · Universidad de Chile",
  "Licenciatura en Biología · Universidad de la República",
  "Grado en Periodismo · Universidad de Sevilla",
  "Máster en Animación · Universidad Pompeu Fabra",
  "Licenciatura en Historia del Arte · Universidad de Lisboa",
];

export const maritalStatuses: Record<Gender, readonly string[]> = {
  masculino: ["soltero", "casado", "en pareja", "divorciado", "separado", "viudo"],
  femenino: ["soltera", "casada", "en pareja", "divorciada", "separada", "viuda"],
  "no binario": ["soltero/a", "casado/a", "en pareja", "divorciado/a", "separado/a", "viudo/a"],
};

export const partnerNames: readonly string[] = [
  "Marta", "Iván", "Lucía", "Diego", "Ana", "Bruno", "Sofía", "Emilio",
  "Paula", "Gael", "Nerea", "Hugo", "Alba", "Mateo", "Clara", "Ramiro",
  "Vera", "Nicolás", "Irene", "Felipe",
];

export const petOptions: readonly string[] = [
  "una gata atigrada llamada Miga",
  "un perro mestizo llamado Tofu",
  "un conejo blanco llamado Pimienta",
  "un gato negro llamado Ónix",
  "una perra llamada Luna",
  "un hámster llamado Boni",
  "dos gatos llamados Sal y Pimienta",
  "un perro viejo llamado Capitán",
  "una cotorra llamada Chisme",
  "una tortuga llamada Décimo",
];

export const languages: readonly string[] = [
  "español", "inglés", "portugués", "italiano", "francés", "alemán",
  "catalán", "euskera", "gallego", "japonés", "árabe", "ruso", "nahuatl",
  "lengua de signos",
];

export const hobbies: readonly string[] = [
  "restaurar radios antiguas", "escalar en roca", "coleccionar mapas",
  "hacer pan de masa madre", "fotografía analógica", "jardinería de balcón",
  "ajedrez rápido", "cerámica", "correr de noche", "aprender idiomas",
  "tocar el piano", "senderismo de fin de semana", "buceo", "origami",
  "reparar bicicletas", "leer ciencia ficción", "cantar en un coro",
  "dibujar cómics", "cocinar recetas familiares", "observar aves",
  "coleccionar vinilos", "juegos de mesa", "escribir cartas", "yoga",
  "tallar madera", "urban sketching", "apicultura", "boxeo amateur",
];

export const traits: readonly string[] = [
  "curiosa hasta el exceso", "terriblemente puntual", "irónicamente optimista",
  "leal a sus amigos", "alérgica a la rutina", "obstinada", "tranquila",
  "impaciente con las mentiras", "generosa con el tiempo ajeno",
  "obsesiva con los detalles", "valiente en lo pequeño", "distraída",
  "buena escuchando", "incapaz de guardar un secreto", "meticulosa",
  "espontánea", "nostálgica", "pragmática", "soñadora", "desconfiada",
];

export const fears: readonly string[] = [
  "los ascensores estrechos", "las llamadas telefónicas inesperadas",
  "el silencio de las casas vacías", "las alturas", "los payasos",
  "quedarse sin batería en la carretera", "las multitudes",
  "los espejos en la oscuridad", "volar en aviones pequeños",
  "los espacios sin ventanas", "hablar en público", "los perros grandes",
  "perderse sin mapa", "las sorpresas de cumpleaños",
];

export const quirks: readonly string[] = [
  "ordena los libros por color, no por autor",
  "siempre lleva una libreta en el bolsillo",
  "no puede empezar un libro sin leer la última página",
  "habla con las plantas cuando cree que nadie mira",
  "toma el café siempre en la misma taza",
  "guarda las entradas de cine de todas las películas",
  "camina descalza en casa aunque haga frío",
  "colecciona piedras de cada ciudad que visita",
  "dibuja pequeñas caras en los márgenes de los documentos",
  "cambia de ruta al trabajo cada semana",
  "nunca responde mensajes antes de las diez",
  "siempre tiene una bolsa de emergencia en el coche",
  "canta mal a propósito para evitar que le pidan cantar",
];

export const favorites: readonly string[] = [
  "el olor a lluvia sobre asfalto", "los desayunos que duran hasta la tarde",
  "las librerías de segunda mano", "los trenes nocturnos",
  "el sonido de una máquina de escribir", "las películas en blanco y negro",
  "los mercados de barrio", "la primera taza de café del día",
  "las estaciones de tren vacías", "los cuadernos nuevos",
  "el pan recién hecho", "los mapas dibujados a mano",
  "las noches de verano en la terraza", "las fotos movidas",
];

export const quotes: readonly string[] = [
  "«Si no está escrito, no pasó.»",
  "«Prefiero equivocarme por curiosidad que acertar por miedo.»",
  "«Todo el mundo tiene una historia; la mayoría no la cuenta.»",
  "«La suerte es una forma elegante de llamar a la constancia.»",
  "«No confío en quien no tiene una lista de canciones tristes.»",
  "«Las mejores ideas llegan caminando sin destino.»",
  "«El orden es una forma de pereza.»",
  "«Me gusta la gente que habla con las manos.»",
  "«Cada casa guarda un idioma que solo entienden sus paredes.»",
  "«Uno no elige su ciudad; la ciudad lo va eligiendo.»",
];

export const secrets: readonly string[] = [
  "guardó durante años una carta que nunca envió",
  "sabe tocar el piano pero lo niega en público",
  "una vez se inventó un hermano para evitar una boda",
  "tiene un blog anónimo con más de diez mil seguidores",
  "aprendió a nadar a los treinta y aún le da vergüenza contarlo",
  "guarda todas las entradas de los conciertos a los que ha ido",
  "fue vecino de un músico famoso y nunca lo menciona",
  "tiene una colección secreta de imanes de nevera robados",
  "sabe hablar algo de un idioma que dice no conocer",
  "donó una suma importante a una biblioteca de barrio sin firmar",
  "una vez cambió de nombre durante un verano entero",
  "sueña con dejar todo e irse a vivir a una isla sin internet",
];

export const savings: readonly string[] = [
  "una cuenta de ahorros que apenas toca",
  "un colchón escondido bajo la cama, literalmente",
  "tres monedas extranjeras y un billete antiguo",
  "un fondo para un viaje que nunca concreta",
  "una hucha de cerámica con forma de cerdito",
  "un sobre con dinero para emergencias que nunca usa",
  "inversiones pequeñas que revisa cada domingo",
  "cero ahorros y muchas suscripciones",
];

export const childhoodDetails: readonly string[] = [
  "siempre había música de fondo y algún mueble a medio restaurar",
  "las paredes estaban llenas de fotos sin marco",
  "se hablaban tres idiomas y ninguno del todo bien",
  "había más libros que muebles",
  "las plantas ocupaban cada ventana disponible",
  "nadie tiraba nada por si algún día servía",
  "los domingos se cocinaba para toda la cuadra",
  "las visitas entraban sin llamar y se quedaban a cenar",
];

export const childhoodActivities: readonly string[] = [
  "desmontar aparatos viejos para ver qué había dentro",
  "dibujar mapas de países que no existían",
  "coleccionar piedras y clasificarlas por color",
  "inventar historias para los desconocidos del autobús",
  "leer a escondidas con una linterna",
  "construir fuertes con mantas y sillas",
  "grabar programas de radio con una grabadora vieja",
  "hacer preguntas que nadie sabía responder",
];

export const childhoodTraits: readonly string[] = [
  "ya mostraba una curiosidad difícil de manejar",
  "prefería observar antes que participar",
  "era la persona a la que todos contaban sus secretos",
  "no soportaba las despedidas",
  "tenía una capacidad notable para perderse",
  "ya coleccionaba cosas que nadie más entendía",
];

export const turningEvents: readonly string[] = [
  "perdió un tren y conoció a quien cambiaría su manera de ver las cosas",
  "se mudó a otra ciudad con dos maletas y ninguna dirección fija",
  "abandonó una carrera que no era la suya a mitad de curso",
  "encontró un cuaderno olvidado en un banco del parque",
  "aceptó un trabajo por el que nadie apostaba",
  "sobrevivió a una ruptura que le reordenó las prioridades",
  "se apuntó a un taller por error y se quedó diez años",
  "recibió una carta de una persona que creía desaparecida",
];

export const turningResults: readonly string[] = [
  "reconstruir su vida desde cero, con más preguntas que respuestas",
  "aprender un oficio que no estaba en ningún plan",
  "mudarse a un barrio donde no conocía a nadie",
  "empezar a escribir todo lo que antes callaba",
  "cambiar de rumbo sin pedir permiso",
  "volver a estudiar mientras trabajaba de noche",
  "decir que sí a la primera cosa que le dio miedo",
  "guardar silencio hasta encontrar sus propias palabras",
];

export const presentDetails: readonly string[] = [
  "Últimamente dedica los domingos a un proyecto que no piensa enseñar a nadie.",
  "Tiene una rutina que parece tranquila hasta que se mira de cerca.",
  "Está aprendiendo a decir que no sin pedir disculpas.",
  "Guarda un billete de tren sin usar en la cartera desde hace años.",
  "Cada mes prueba una receta nueva y anota el resultado en un cuaderno.",
  "Dice que no cree en las casualidades, pero colecciona coincidencias.",
  "Tiene una lista de lugares a los que irá «algún día» y la revisa cada enero.",
  "Ha empezado a coleccionar historias de desconocidos en el transporte público.",
];

export const livingWith: readonly string[] = [
  "una planta que sobrevive por milagro",
  "su pareja y un gato que manda en la casa",
  "dos compañeros de piso y un calendario de tareas que nadie respeta",
  "un perro que duerme en el sofá como si fuera suyo",
  "una colección de tazas que no usa nadie más",
  "su familia y una nevera siempre llena",
  "una ventana que da a un patio lleno de macetas",
];

export const timelineTitles: readonly string[] = [
  "El principio", "Una mudanza", "El giro", "Un año raro", "La decisión",
  "Un encuentro", "La mudanza", "El proyecto", "La pérdida", "El regreso",
];

export const cardBrands: readonly {
  name: string;
  tier: string;
  gradient: string;
  accent: string;
}[] = [
  {
    name: "NOVA",
    tier: "Black",
    gradient: "linear-gradient(135deg, #0f172a 0%, #312e81 45%, #7c3aed 100%)",
    accent: "#c4b5fd",
  },
  {
    name: "ÓRBITA",
    tier: "Platinum",
    gradient: "linear-gradient(135deg, #052e2b 0%, #0f766e 50%, #22d3ee 100%)",
    accent: "#a5f3fc",
  },
  {
    name: "VELVET",
    tier: "Signature",
    gradient: "linear-gradient(135deg, #3b0764 0%, #9d174d 50%, #f472b6 100%)",
    accent: "#fbcfe8",
  },
  {
    name: "HELIX",
    tier: "Infinite",
    gradient: "linear-gradient(135deg, #431407 0%, #b45309 50%, #fbbf24 100%)",
    accent: "#fde68a",
  },
  {
    name: "PULSO",
    tier: "Prisma",
    gradient: "linear-gradient(135deg, #111827 0%, #1e40af 50%, #60a5fa 100%)",
    accent: "#bfdbfe",
  },
  {
    name: "AURUM",
    tier: "Élite",
    gradient: "linear-gradient(135deg, #1c1917 0%, #57534e 45%, #d6d3d1 100%)",
    accent: "#e7e5e4",
  },
];

export const emailDomains: readonly string[] = [
  "example.com", "example.net", "example.org",
];
