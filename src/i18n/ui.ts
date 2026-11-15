// Textos de la web en los tres idiomas. Inglés es el idioma principal (sin prefijo);
// español y catalán van en /es/ y /ca/.
export const languages = {
  en: { label: "EN", name: "English", locale: "en-GB", og: "en_GB" },
  es: { label: "ES", name: "Español", locale: "es-ES", og: "es_ES" },
  ca: { label: "CA", name: "Català", locale: "ca-ES", og: "ca_ES" },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

// En GitHub Pages sin dominio propio la web cuelga de /<repo>/: todas las rutas
// internas pasan por withBase para llevar ese prefijo.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Ruta interna con el prefijo de la web: withBase("/favicon.svg"). */
export function withBase(path: string) {
  return `${base}${path}`;
}

/** Ruta de una página en un idioma: localePath("es", "/") -> "/es/". */
export function localePath(lang: Lang, path = "/") {
  return withBase(lang === defaultLang ? path : `/${lang}${path}`);
}

const es = {
  "site.tagline": "Nunca entrenas solo.",
  "site.title": "Spotter: Nunca entrenas solo.",
  "site.description":
    "Spotter es una app de gimnasio para crear tus rutinas, entrenar con ellas y ver tu progreso.",

  "a11y.skip": "Saltar al contenido",
  "a11y.home": "Spotter, inicio",
  "a11y.sections": "Secciones",
  "a11y.language": "Idioma",
  "theme.toLight": "Cambiar a tema claro",
  "theme.toDark": "Cambiar a tema oscuro",

  "nav.about": "Qué es",
  "nav.features": "Funciones",
  "nav.platforms": "App y web",
  "nav.forum": "Foro",

  "cta.webApp": "Abrir la web app",
  "cta.features": "Ver qué hace",
  "cta.code": "Ver el código",
  "soon.all": "App y web app, muy pronto",
  "soon.webApp": "Web app, muy pronto",
  "soon.app": "App para el móvil, muy pronto",

  "hero.title": "Nunca entrenas solo",
  "hero.lead":
    "Spotter es la app de gimnasio para crear tus rutinas, entrenar con ellas y ver cómo progresas.",

  "demo.exercise": "Press de banca",
  "demo.set": "Serie {n} de {total}",
  "demo.allSets": "{total} de {total} series",
  "demo.next": "Serie hecha",
  "demo.reset": "Repetir",
  "demo.record": "Nuevo récord: {value}",
  "demo.saved": "Entrenamiento guardado",
  "demo.hint": "Es una demostración: prueba a marcar las series.",
  "demo.done": "hecha",
  "demo.pending": "pendiente",

  "about.title": "Qué es Spotter",
  "about.p1":
    "Un spotter es quien se pone detrás de ti en el press de banca. No levanta por ti, pero está ahí.",
  "about.p2":
    "La app hace lo mismo con tus entrenamientos: guarda tus rutinas, apunta cada serie mientras entrenas y te enseña cómo vas.",

  "features.title": "Lo que hace",
  "features.lead": "Cuatro cosas, las que usas en el gimnasio.",
  "features.routines.title": "Mis rutinas",
  "features.routines.text":
    "Crea tus rutinas con ejercicios del catálogo. Ordénalos y pon las series y las repeticiones de cada uno.",
  "features.calendar.title": "Calendario",
  "features.calendar.text":
    "Pon una rutina a cada día de la semana y abre la app sabiendo qué toca.",
  "features.train.title": "Entrenar",
  "features.train.text":
    "Dale al play y apunta el peso y las repeticiones de cada serie. Al terminar, el entrenamiento queda guardado.",
  "features.progress.title": "Progreso",
  "features.progress.text":
    "Mira cómo sube cada ejercicio con el tiempo, entrenamiento a entrenamiento.",

  "sample.legs": "Día de pierna",
  "sample.push": "Empuje",
  "sample.pull": "Tirón",
  "sample.exercises": "{n} ejercicios",
  "sample.today": "Hoy toca empuje",
  "sample.weekdays": "L M X J V S D",
  "sample.todayRoutine": "La rutina de hoy",
  "sample.otherRoutine": "Otra rutina",
  "sample.empty": "Entrenamiento vacío",

  "platforms.title": "App y web",
  "platforms.lead":
    "Prepara tus rutinas en el ordenador y entrena con el móvil. La misma cuenta en los dos sitios.",
  "platforms.feature": "Función",
  "platforms.app": "App",
  "platforms.web": "Web",
  "platforms.account": "Cuenta y perfil",
  "platforms.yes": "Sí",
  "platforms.no": "No",

  "closing.text": "Tus rutinas, tus series y tu progreso, en un solo sitio.",

  "footer.webApp": "Web app",

  "notfound.title": "Esta página no existe",
  "notfound.text": "Puede que el enlace esté mal escrito o que la página ya no esté.",
  "notfound.back": "Volver al inicio",
};

type Key = keyof typeof es;

const ca: Record<Key, string> = {
  "site.tagline": "Mai entrenes sol.",
  "site.title": "Spotter: Mai entrenes sol.",
  "site.description":
    "Spotter és una app de gimnàs per crear les teves rutines, entrenar amb elles i veure el teu progrés.",

  "a11y.skip": "Salta al contingut",
  "a11y.home": "Spotter, inici",
  "a11y.sections": "Seccions",
  "a11y.language": "Idioma",
  "theme.toLight": "Canvia a tema clar",
  "theme.toDark": "Canvia a tema fosc",

  "nav.about": "Què és",
  "nav.features": "Funcions",
  "nav.platforms": "App i web",
  "nav.forum": "Fòrum",

  "cta.webApp": "Obre la web app",
  "cta.features": "Mira què fa",
  "cta.code": "Mira el codi",
  "soon.all": "App i web app, molt aviat",
  "soon.webApp": "Web app, molt aviat",
  "soon.app": "App per al mòbil, molt aviat",

  "hero.title": "Mai entrenes sol",
  "hero.lead":
    "Spotter és l'app de gimnàs per crear les teves rutines, entrenar amb elles i veure com progresses.",

  "demo.exercise": "Press de banca",
  "demo.set": "Sèrie {n} de {total}",
  "demo.allSets": "{total} de {total} sèries",
  "demo.next": "Sèrie feta",
  "demo.reset": "Repeteix",
  "demo.record": "Nou rècord: {value}",
  "demo.saved": "Entrenament desat",
  "demo.hint": "És una demostració: prova de marcar les sèries.",
  "demo.done": "feta",
  "demo.pending": "pendent",

  "about.title": "Què és Spotter",
  "about.p1":
    "Un spotter és qui es posa darrere teu al press de banca. No aixeca per tu, però hi és.",
  "about.p2":
    "L'app fa el mateix amb els teus entrenaments: desa les teves rutines, apunta cada sèrie mentre entrenes i t'ensenya com vas.",

  "features.title": "El que fa",
  "features.lead": "Quatre coses, les que fas servir al gimnàs.",
  "features.routines.title": "Les meves rutines",
  "features.routines.text":
    "Crea les teves rutines amb exercicis del catàleg. Ordena'ls i posa les sèries i les repeticions de cadascun.",
  "features.calendar.title": "Calendari",
  "features.calendar.text":
    "Posa una rutina a cada dia de la setmana i obre l'app sabent què toca.",
  "features.train.title": "Entrenar",
  "features.train.text":
    "Prem el play i apunta el pes i les repeticions de cada sèrie. En acabar, l'entrenament queda desat.",
  "features.progress.title": "Progrés",
  "features.progress.text":
    "Mira com puja cada exercici amb el temps, entrenament a entrenament.",

  "sample.legs": "Dia de cama",
  "sample.push": "Empenta",
  "sample.pull": "Tracció",
  "sample.exercises": "{n} exercicis",
  "sample.today": "Avui toca empenta",
  "sample.weekdays": "Dl Dt Dc Dj Dv Ds Dg",
  "sample.todayRoutine": "La rutina d'avui",
  "sample.otherRoutine": "Una altra rutina",
  "sample.empty": "Entrenament buit",

  "platforms.title": "App i web",
  "platforms.lead":
    "Prepara les teves rutines a l'ordinador i entrena amb el mòbil. El mateix compte als dos llocs.",
  "platforms.feature": "Funció",
  "platforms.app": "App",
  "platforms.web": "Web",
  "platforms.account": "Compte i perfil",
  "platforms.yes": "Sí",
  "platforms.no": "No",

  "closing.text": "Les teves rutines, les teves sèries i el teu progrés, en un sol lloc.",

  "footer.webApp": "Web app",

  "notfound.title": "Aquesta pàgina no existeix",
  "notfound.text": "Potser l'enllaç està mal escrit o la pàgina ja no hi és.",
  "notfound.back": "Torna a l'inici",
};

const en: Record<Key, string> = {
  "site.tagline": "Never train alone.",
  "site.title": "Spotter: Never train alone.",
  "site.description":
    "Spotter is a gym app for building your routines, training with them and seeing your progress.",

  "a11y.skip": "Skip to content",
  "a11y.home": "Spotter, home",
  "a11y.sections": "Sections",
  "a11y.language": "Language",
  "theme.toLight": "Switch to light theme",
  "theme.toDark": "Switch to dark theme",

  "nav.about": "What it is",
  "nav.features": "Features",
  "nav.platforms": "App and web",
  "nav.forum": "Forum",

  "cta.webApp": "Open the web app",
  "cta.features": "See what it does",
  "cta.code": "See the code",
  "soon.all": "App and web app coming soon",
  "soon.webApp": "Web app coming soon",
  "soon.app": "Mobile app coming soon",

  "hero.title": "Never train alone",
  "hero.lead":
    "Spotter is the gym app for building your routines, training with them and seeing your progress.",

  "demo.exercise": "Bench press",
  "demo.set": "Set {n} of {total}",
  "demo.allSets": "{total} of {total} sets",
  "demo.next": "Set done",
  "demo.reset": "Start again",
  "demo.record": "New record: {value}",
  "demo.saved": "Workout saved",
  "demo.hint": "This is a demo: try ticking off the sets.",
  "demo.done": "done",
  "demo.pending": "to do",

  "about.title": "What Spotter is",
  "about.p1":
    "A spotter is the person who stands behind you on the bench press. They don't lift for you, but they're there.",
  "about.p2":
    "The app does the same for your training: it keeps your routines, logs every set while you train and shows you how you're doing.",

  "features.title": "What it does",
  "features.lead": "Four things, the ones you use at the gym.",
  "features.routines.title": "My routines",
  "features.routines.text":
    "Build your routines with exercises from the catalogue. Put them in order and set the sets and reps for each one.",
  "features.calendar.title": "Calendar",
  "features.calendar.text":
    "Give each day of the week a routine and open the app knowing what's on.",
  "features.train.title": "Train",
  "features.train.text":
    "Hit play and log the weight and reps of every set. When you finish, the workout is saved.",
  "features.progress.title": "Progress",
  "features.progress.text": "See how each exercise goes up over time, workout by workout.",

  "sample.legs": "Leg day",
  "sample.push": "Push",
  "sample.pull": "Pull",
  "sample.exercises": "{n} exercises",
  "sample.today": "Today is push",
  "sample.weekdays": "M T W T F S S",
  "sample.todayRoutine": "Today's routine",
  "sample.otherRoutine": "Another routine",
  "sample.empty": "Empty workout",

  "platforms.title": "App and web",
  "platforms.lead":
    "Set up your routines on your computer and train with your phone. The same account on both.",
  "platforms.feature": "Feature",
  "platforms.app": "App",
  "platforms.web": "Web",
  "platforms.account": "Account and profile",
  "platforms.yes": "Yes",
  "platforms.no": "No",

  "closing.text": "Your routines, your sets and your progress, in one place.",

  "footer.webApp": "Web app",

  "notfound.title": "This page doesn't exist",
  "notfound.text": "The link may be mistyped, or the page may be gone.",
  "notfound.back": "Back to home",
};

export const ui = { en, es, ca } as const;

/** t("demo.set", { n: 3, total: 5 }) -> "Set 3 of 5" */
export function useTranslations(lang: Lang) {
  return (key: Key, vars: Record<string, string | number> = {}) =>
    Object.entries(vars).reduce(
      (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
      ui[lang][key],
    );
}

/** Cifras con el decimal de cada idioma: 82,5 en español y catalán; 82.5 en inglés. */
export function formatNumber(lang: Lang, value: number) {
  return value.toLocaleString(languages[lang].locale);
}
