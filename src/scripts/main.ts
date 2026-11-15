// --- 1. Tema claro / oscuro ---
// Oscuro es el tema principal; el claro se guarda si el usuario lo elige.
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

function syncToggleLabel() {
  const isLight = root.getAttribute("data-theme") === "light";
  // Los textos vienen traducidos en data-label-* (ver Header.astro).
  const label = isLight ? toggle?.dataset.labelDark : toggle?.dataset.labelLight;
  if (label) toggle?.setAttribute("aria-label", label);
}

toggle?.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  if (isLight) root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", "light");
  try {
    localStorage.setItem("theme", isLight ? "dark" : "light");
  } catch {
    // Sin almacenamiento: el tema dura lo que dure la visita.
  }
  syncToggleLabel();
});
syncToggleLabel();

// --- 2. Demo de entrenamiento de la portada ---
const demo = document.getElementById("demo");

if (demo) {
  const sets = Array.from(demo.querySelectorAll<HTMLElement>(".set"));
  const overline = demo.querySelector<HTMLElement>("#demo-overline")!;
  const kg = demo.querySelector<HTMLElement>("#demo-kg")!;
  const reps = demo.querySelector<HTMLElement>("#demo-reps")!;
  const end = demo.querySelector<HTMLElement>("#demo-end")!;
  const next = demo.querySelector<HTMLButtonElement>("#demo-next")!;
  const reset = demo.querySelector<HTMLButtonElement>("#demo-reset")!;

  // Textos traducidos que pone SetDemo.astro: "Serie {n} de {total}", etc.
  const labels = demo.dataset;
  const fill = (text = "", n = 0) =>
    text.replaceAll("{n}", String(n)).replaceAll("{total}", String(sets.length));

  let done = Number(labels.done ?? 0);

  const render = () => {
    const finished = done >= sets.length;

    sets.forEach((set, i) => {
      const state = i < done ? "done" : i === done ? "current" : "pending";
      set.dataset.state = state;
      const label = set.querySelector(".set__state");
      if (label) {
        label.textContent = (state === "done" ? labels.labelDone : labels.labelPending) ?? "";
      }
    });

    // La cifra protagonista es la serie en curso (o la última, al acabar).
    const shown = sets[Math.min(done, sets.length - 1)];
    kg.textContent = shown.dataset.kg ?? "";
    reps.textContent = `× ${shown.dataset.reps ?? ""}`;

    overline.textContent = finished
      ? fill(labels.labelAll)
      : fill(labels.labelSet, done + 1);

    end.hidden = !finished;
    next.hidden = finished;
    reset.hidden = !finished;
  };

  next.addEventListener("click", () => {
    done = Math.min(done + 1, sets.length);
    render();
    if (done >= sets.length) reset.focus();
  });

  reset.addEventListener("click", () => {
    done = 0;
    render();
    next.focus();
  });

  render();
}
