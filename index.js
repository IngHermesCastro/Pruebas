const QUESTIONS = [
  {
    id: 2,
    title: "Pregunta 2",
    statement: `Una persona que vive en Colombia tiene inversiones en dólares en Estados Unidos, y sabe
que la tasa de cambio del dólar respecto al peso colombiano se mantendrá constante este
mes, siendo 1 dólar equivalente a 2.000 pesos colombianos y que su inversión, en dólares,
le dará ganancias del 3 % en el mismo periodo. Un amigo le asegura que en pesos sus
ganancias también serán del 3 %.
La afirmación de su amigo es:`,
    options: {
      A: "correcta...",
      B: "incorrecta...",
      C: "correcta...",
      D: "incorrecta...",
    },
    guide: [
      "Recuerda que un porcentaje representa una proporción, no una cantidad fija.",
      "Analiza qué ocurre cuando multiplicas por 1,03.",
      "Usa un valor ejemplo como 100 dólares.",
    ],
    correct: "C",
  },
  {
    id: 14,
    title: "Pregunta 14",
    statement: `Si en un rectángulo se aumenta la longitud de uno de sus lados en 100 %, su área...`,
    options: {
      A: "aumenta en un 50 %.",
      B: "se duplica.",
      C: "no cambia.",
      D: "aumenta en 100 unidades.",
    },
    guide: ["Usa A = base × altura.", "Duplica un lado y compara áreas."],
    correct: "B",
  },
  {
    id: 24,
    title: "Pregunta 24",
    statement: `A partir de un conjunto de números S...`,
    options: {
      A: "9 y 3.",
      B: "9 y 7.",
      C: "13 y 3.",
      D: "13 y 7.",
    },
    guide: [
      "Sumar una constante a todos los datos desplaza el promedio.",
      "La desviación estándar no cambia.",
    ],
    correct: "C",
  },
  {
    id: 25,
    title: "Pregunta 25",
    statement: `El sistema utiliza los dígitos 2,3,4,5...`,
    options: {
      A: "24",
      B: "56",
      C: "120",
      D: "256",
    },
    guide: ["Es una permutación de 4 elementos distintos: 4!."],
    correct: "A",
  },
  {
    id: 27,
    title: "Pregunta 27",
    statement: `Récord mundial 10,49 s y olímpico 10,50 s...`,
    options: {
      A: "...",
      B: "...",
      C: "...",
      D: "...",
    },
    guide: ["Entre dos números reales siempre existen infinitos valores."],
    correct: "A",
  },
  {
    id: 35,
    title: "Pregunta 35",
    statement: `Descuentos sucesivos del 10 %...`,
    options: {
      A: "...",
      B: "...",
      C: "...",
      D: "...",
    },
    guide: ["Cada descuento del 10 % equivale a multiplicar por 0,9."],
    correct: "D",
  },
  {
    id: 41,
    title: "Pregunta 41",
    statement: `Triángulo con lados 7,7 y 18...`,
    options: {
      A: "...",
      B: "...",
      C: "...",
      D: "...",
    },
    guide: ["Aplica la desigualdad triangular."],
    correct: "B",
  },
  {
    id: 45,
    title: "Pregunta 45",
    statement: `Escoger 2 de décimo y 3 de undécimo...`,
    options: {
      A: "9",
      B: "14",
      C: "20",
      D: "40",
    },
    guide: ["Usa combinaciones y multiplica resultados."],
    correct: "C",
  },
  {
    id: 47,
    title: "Pregunta 47",
    statement: `Expresión 10³...`,
    options: {
      A: "...",
      B: "...",
      C: "...",
      D: "...",
    },
    guide: ["10³ representa multiplicar por 10 tres veces."],
    correct: "D",
  },
  {
    id: 49,
    title: "Pregunta 49",
    statement: `Valorización anual del 5 %...`,
    options: {
      A: "...",
      B: "...",
      C: "...",
      D: "...",
    },
    guide: ["Usa crecimiento exponencial: Valor × (1+r)^n."],
    correct: "D",
  },
];

const state = new Map(); // qid -> { selected, guideIndex, revealed }
const elApp = document.getElementById("app");
const elProgress = document.getElementById("progress");
const elAnswers = document.getElementById("answers");

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getQState(id) {
  if (!state.has(id)) {
    state.set(id, { selected: null, guideIndex: -1, revealed: false });
  }
  return state.get(id);
}

function setSelected(id, opt) {
  const st = getQState(id);
  st.selected = opt;
  // auto start guide (primer paso activo)
  if (st.guideIndex < 0) st.guideIndex = 0;
  render();
  // pequeño scroll a resultado (suave en móvil)
  const res = document.querySelector(`[data-result="${id}"]`);
  if (res) res.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function nextStep(id) {
  const q = QUESTIONS.find((x) => x.id === id);
  const st = getQState(id);
  st.guideIndex = Math.min(st.guideIndex + 1, q.guide.length - 1);
  render();
}

function prevStep(id) {
  const st = getQState(id);
  st.guideIndex = Math.max(st.guideIndex - 1, 0);
  render();
}

function resetOne(id) {
  state.set(id, { selected: null, guideIndex: -1, revealed: false });
  render();
}

function resetAll() {
  state.clear();
  render();
}

function toggleRevealAll() {
  const shouldReveal = ![...state.values()].some((v) => v.revealed === true);
  for (const q of QUESTIONS) {
    const st = getQState(q.id);
    st.revealed = shouldReveal;
  }
  render();
}

function renderProgress() {
  let solved = 0;
  for (const q of QUESTIONS) {
    const st = getQState(q.id);
    if (st.selected) solved++;
  }
  elProgress.textContent = `${solved}/${QUESTIONS.length} resueltas`;
}

function renderAnswers() {
  elAnswers.innerHTML = "";
  for (const q of QUESTIONS) {
    const box = document.createElement("div");
    box.className = "ans";
    box.innerHTML = `<b>${q.id}.</b> <code>${q.correct}</code>`;
    elAnswers.appendChild(box);
  }
}

function render() {
  elApp.innerHTML = "";
  for (const q of QUESTIONS) {
    const st = getQState(q.id);
    const isAnswered = !!st.selected;
    const isCorrect = isAnswered && st.selected === q.correct;

    const card = document.createElement("section");
    card.className = "card";

    // Head
    const head = document.createElement("div");
    head.className = "cardHead";
    head.innerHTML = `
          <div>
            <div class="qTitle">${escapeHtml(q.title)}</div>
            <div class="qTag">ID: ${q.id}</div>
          </div>
          <div class="btnRow">
            <button class="primary" type="button" data-action="focus" data-id="${
              q.id
            }">Ir</button>
            <button class="danger" type="button" data-action="resetOne" data-id="${
              q.id
            }">Reiniciar</button>
          </div>
        `;
    card.appendChild(head);

    // Body
    const body = document.createElement("div");
    body.className = "cardBody";

    const statement = document.createElement("div");
    statement.className = "statement";
    statement.textContent = q.statement;
    body.appendChild(statement);

    // Options
    const opts = document.createElement("div");
    opts.className = "opts";

    for (const key of ["A", "B", "C", "D"]) {
      const optLabel = document.createElement("label");
      optLabel.className = "opt";
      optLabel.innerHTML = `
            <input type="radio" name="q_${q.id}" value="${key}" ${
        st.selected === key ? "checked" : ""
      } />
            <div class="optCode">${key}</div>
            <div class="optText">${escapeHtml(q.options[key])}</div>
          `;
      optLabel.addEventListener("click", (e) => {
        // Evitar doble toggle raro en mobile
        e.preventDefault();
        setSelected(q.id, key);
      });
      opts.appendChild(optLabel);
    }

    body.appendChild(opts);

    // Result
    const result = document.createElement("div");
    result.className = "result" + (isAnswered ? " show" : "");
    result.setAttribute("data-result", String(q.id));
    if (isAnswered) {
      const badgeClass = isCorrect ? "ok" : "bad";
      const badgeText = isCorrect ? "Correcta" : "Incorrecta";
      const extra = isCorrect
        ? `Elegiste <b>${st.selected}</b>. ✅`
        : `Elegiste <b>${st.selected}</b>. La correcta es <b>${q.correct}</b>.`;
      result.innerHTML = `
            <div class="badge ${badgeClass}">${badgeText}</div>
            <div class="resultText">${extra}</div>
          `;
    }
    body.appendChild(result);

    // Guide
    const guide = document.createElement("div");
    guide.className = "guide";

    const guideTop = document.createElement("div");
    guideTop.className = "guideTop";

    const isReveal = st.revealed === true;
    const currentIdx = Math.max(0, st.guideIndex);
    const maxIdx = q.guide.length - 1;

    guideTop.innerHTML = `
          <div class="guideTitle"><span class="spark"></span>Guía para resolverla (paso a paso)</div>
          <div class="btnRow">
            <button type="button" data-action="prev" data-id="${q.id}" ${
      !isAnswered || currentIdx <= 0 ? "disabled" : ""
    }>◀</button>
            <button class="primary" type="button" data-action="next" data-id="${
              q.id
            }" ${
      !isAnswered || currentIdx >= maxIdx ? "disabled" : ""
    }>Siguiente</button>
            <button type="button" data-action="toggleReveal" data-id="${
              q.id
            }" ${!isAnswered ? "disabled" : ""}>${
      isReveal ? "Ocultar" : "Ver todo"
    }</button>
          </div>
        `;
    guide.appendChild(guideTop);

    const steps = document.createElement("div");
    steps.className = "steps";

    q.guide.forEach((txt, idx) => {
      const step = document.createElement("div");
      const active = !isAnswered ? false : isReveal ? true : idx <= currentIdx;
      step.className = "step" + (active ? " active" : "");
      step.innerHTML = `
            <div class="num">${idx + 1}</div>
            <div class="stepText">• ${escapeHtml(txt)}</div>
          `;
      steps.appendChild(step);
    });

    // Hint when not answered
    if (!isAnswered) {
      const hint = document.createElement("div");
      hint.className = "step active";
      hint.style.borderColor = "rgba(255,204,102,.28)";
      hint.innerHTML = `
            <div class="num" style="color:var(--warn);border-color:rgba(255,204,102,.35);background:rgba(255,204,102,.12)">!</div>
            <div class="stepText" style="color:var(--muted)">Selecciona una opción para activar la guía paso a paso.</div>
          `;
      steps.prepend(hint);
    }

    guide.appendChild(steps);
    body.appendChild(guide);

    card.appendChild(body);
    elApp.appendChild(card);

    // Wire head buttons
    head
      .querySelector(`[data-action="resetOne"]`)
      ?.addEventListener("click", () => resetOne(q.id));
    head
      .querySelector(`[data-action="focus"]`)
      ?.addEventListener("click", () => {
        card.scrollIntoView({ behavior: "smooth", block: "start" });
      });

    // Wire guide buttons
    guideTop
      .querySelector(`[data-action="next"]`)
      ?.addEventListener("click", () => nextStep(q.id));
    guideTop
      .querySelector(`[data-action="prev"]`)
      ?.addEventListener("click", () => prevStep(q.id));
    guideTop
      .querySelector(`[data-action="toggleReveal"]`)
      ?.addEventListener("click", () => {
        const st2 = getQState(q.id);
        st2.revealed = !st2.revealed;
        render();
      });
  }

  renderProgress();
  renderAnswers();
}

// Footer buttons
document.getElementById("btnResetAll").addEventListener("click", resetAll);
document
  .getElementById("btnShowAll")
  .addEventListener("click", toggleRevealAll);

render();
