const QUESTIONS = [
{
id: 1,
title: "Ejercicio 1",
statement: `Un sistema de transporte masivo tiene varias estaciones (E_1, E_2, \dots) sobre una avenida. En condiciones normales, entre dos estaciones consecutivas, un bus se demora 4 minutos y en cada parada, 30 segundos. En la figura, los círculos sombreados representan las paradas de cada ruta (R_1, R_2, \dots). Un usuario que desea ir de E_1 a E_{10} en el menor tiempo, determinó, con base en la figura, que la ruta que más le convenía tomar era R_2 y estimó el tiempo que tardaría viajando en el bus así:
I. Contó la cantidad de tramos entre estaciones consecutivas que había en su recorrido: 10.
II. Multiplicó el número obtenido en I (10) por la cantidad de minutos (4) que tardará entre dos estaciones consecutivas: 40 minutos.
III. Al resultado anterior le sumó 30 segundos por la parada que hará en E_6: 40,5 minutos.
Este procedimiento es incorrecto en el(los) paso(s)`,
options: {
A: "I solamente.",
B: "I y II solamente.",
C: "II solamente.",
D: "II y III solamente."
},
guide: [
"Analiza cuántos tramos de 4 minutos existen realmente entre la estación 1 y la estación 10.",
"Piensa si para llegar a la décima estación se deben recorrer 10 tramos o si la cantidad es diferente partiendo desde la primera.",
"Revisa en la descripción de la ruta cuántas paradas obligatorias realiza el bus además de la mencionada en el paso III.",
"Verifica si el cálculo del tiempo total debe incluir todas las paradas intermedias donde el bus se detiene según la gráfica de rutas."
],
correct: "A"
},

{
id: 2,
title: "Ejercicio 2",
statement: `Una persona que vive en Colombia tiene inversiones en dólares en Estados Unidos, y sabe que la tasa de cambio del dólar respecto al peso colombiano se mantendrá constante este mes, siendo 1 dólar equivalente a 2.000 pesos colombianos y que su inversión, en dólares, le dará ganancias del 3 % en el mismo periodo. Un amigo le asegura que en pesos sus ganancias también serán del 3 %. La afirmación de su amigo es`,
options: {
A: "correcta, pues, sin importar las variaciones en la tasa de cambio, la proporción en que aumenta la inversión en dólares es la misma que en pesos.",
B: "incorrecta, pues debería conocerse el valor exacto de la inversión para poder calcular la cantidad de dinero que ganará.",
C: "correcta, pues el 3 % representa una proporción fija en cualquiera de las dos monedas, puesto que la tasa de cambio permanecerá constante.",
D: "incorrecta, pues el 3 % representa un incremento, que será mayor en pesos colombianos, pues en esta moneda cada dólar representa un valor 2.000 veces mayor."
},
guide: [
"Plantea un ejemplo con un valor hipotético (por ejemplo, 100 dólares).",
"Calcula el 3% de esa inversión en dólares y luego convierte ese resultado a pesos usando la tasa de 2.000.",
"Toma la inversión inicial, conviértela primero a pesos y luego calcula el 3% sobre ese valor total en pesos.",
"Compara ambos resultados para determinar si el porcentaje de ganancia se mantiene igual independientemente de la moneda cuando la tasa de cambio es fija."
],
correct: "C"
},

{
id: 3,
title: "Ejercicio 3",
statement: `Las directivas de un colegio tienen que organizar un viaje a un museo con 140 estudiantes, quienes deben dividirse en 3 grupos. Cada grupo irá en una franja diferente. (Basado en la tabla de horarios y precios del documento). Con el fin de que todos los estudiantes asistan y paguen el menor precio, las directivas eligieron las franjas 1, 3 y 4. ¿Esta elección garantiza que asistan todos los estudiantes al menor precio posible?`,
options: {
A: "Sí, porque esas franjas suman exactamente 140 estudiantes.",
B: "No, porque es posible obtener un precio menor eligiendo las franjas 2, 3 y 4.",
C: "Sí, porque se incluyó la franja 4 que es la de menor precio por estudiante.",
D: "No, porque los precios de las franjas 1 y 3 son muy elevados."
},
guide: [
"Suma la capacidad máxima de estudiantes de las franjas elegidas (1, 3 y 4) para verificar si pueden ir los 140 alumnos.",
"Calcula el costo total sumando el precio de entrada de cada una de las franjas propuestas.",
"Busca otras combinaciones de tres franjas que también sumen al menos 140 estudiantes.",
"Compara los costos totales de las diferentes combinaciones para identificar cuál es realmente la más económica."
],
correct: "B"
},

{
id: 4,
title: "Ejercicio 4",
statement: `La empresa pagará $4.200.000 por capacitar a los trabajadores de la dependencia “Insumos” en el módulo I; esto quiere decir que la dependencia tiene entre`,
options: {
A: "20 y 30 trabajadores.",
B: "41 y 60 trabajadores.",
C: "61 y 90 trabajadores.",
D: "80 y 120 trabajadores."
},
guide: [
"Ubica en la tabla de costos el valor unitario por trabajador para el 'Módulo I'.",
"Divide el monto total pagado ($4.200.000) entre el costo de la capacitación por persona de ese módulo.",
"Identifica en qué rango de las opciones se encuentra el número de trabajadores resultante."
],
correct: "C"
},

{
id: 5,
title: "Ejercicio 5",
statement: `Si se les cobrara a los 50 trabajadores de la dependencia “Recursos Humanos” la capacitación del módulo II, y todos pagaran el mismo valor, ¿cuánto debería pagar cada uno por esa capacitación?`,
options: {
A: "$18.000",
B: "$36.000",
C: "$450.000",
D: "$900.000"
},
guide: [
"Busca en la tabla el costo total que la empresa debe pagar para una capacitación del 'Módulo II' cuando el grupo es de 50 personas.",
"Una vez tengas el costo total para ese grupo, divídelo entre la cantidad de trabajadores (50).",
"El resultado indicará el aporte individual necesario para cubrir el costo total."
],
correct: "B"
},

{
id: 6,
title: "Ejercicio 6",
statement: `La empresa paga $900.000 por la capacitación de los 40 funcionarios de la dependencia “Importaciones”. De acuerdo con el valor pagado, la capacitación corresponde al módulo`,
options: {
A: "I.",
B: "II.",
C: "III.",
D: "IV."
},
guide: [
"Identifica en la tabla la fila correspondiente a '40 funcionarios'.",
"Revisa horizontalmente los costos de los módulos I, II, III y IV para esa cantidad de personas.",
"Encuentra cuál de los módulos tiene exactamente el valor de $900.000 para ese número de trabajadores."
],
correct: "D"
},

{
id: 7,
title: "Ejercicio 7",
statement: `La figura muestra el portalápices de Eliécer. Él sabe que es posible colocar un caucho de 18 cm de perímetro alrededor de la base sin estirarlo, pero a medida que sube el caucho por el portalápices, este se estira hasta que, en la boca del portalápices, su perímetro es 24 cm. "Como las longitudes de la base y la boca del portalápices están en relación 18/24 = 3/4, el área de la base debe ser también tres cuartas partes del área de la boca del portalápices”. ¿Es verdadera esta afirmación?`,
options: {
A: "Sí, porque la relación entre las áreas de figuras semejantes es igual a la relación entre sus perímetros.",
B: "No, porque la relación entre las áreas de figuras semejantes es igual al cuadrado de la relación entre sus longitudes.",
C: "Sí, porque la escala de la figura aumenta de manera lineal.",
D: "No, porque la relación entre las áreas depende de la altura del portalápices."
},
guide: [
"Recuerda la propiedad matemática que relaciona las áreas de dos figuras semejantes cuando conoces la razón de sus longitudes lineales.",
"Si la razón lineal es k, piensa si la razón de las áreas es también k o si es k^2.",
"Calcula el cuadrado de 3/4 y verifica si eso daría el mismo valor que la relación simple."
],
correct: "C"
},

{
id: 8,
title: "Ejercicio 8",
statement: `Un grupo de montañistas sabe que cada vez que aumenta la altitud en 100 m, la temperatura disminuye en 1 °C. Si el grupo se encuentra a una altitud de 1.000 m, donde la temperatura es de 20 °C, ¿cuál de las siguientes expresiones les permite determinar la temperatura que habrá cuando se encuentren a 4.000 m de altitud?`,
options: {
A: "Temperatura = Altitud/100 + 10",
B: "Temperatura = -Altitud × 100 + 30",
C: "Temperatura = -Altitud/100 + 30",
D: "Temperatura = Altitud/100 - 30"
},
guide: [
"Identifica la temperatura inicial (20 °C) a la altura base (1.000 m).",
"Determina cuántas veces aumenta la altura en grupos de 100 m.",
"Plantea una ecuación donde la temperatura baje 1 por cada unidad de 100 m.",
"Verifica que al reemplazar 1.000 dé 20."
],
correct: "C"
}

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

    // Intento cargar imagen asociada a la pregunta.
    // Comportamiento:
    // - Si `q.image` existe, se prueba esa ruta.
    // - Si no, se prueban `images/<id>.<ext>` y luego combinaciones con otros ids
    //   (ej. `images/1,2.png`) usando las ids presentes en `QUESTIONS`.
    const exts = ["png", "jpg", "jpeg", "webp", "svg"];
    const candidates = [];
    if (q.image) {
      candidates.push(q.image);
    } else {
      // agregar candidatos simples images/<id>.<ext>
      for (const ext of exts) candidates.push(`images/${q.id}.${ext}`);

      // preparar combinaciones de ids compartidos (contiguos y en orden)
      // ejemplo: para id=5 y maxGroup=3 => 4,5 | 5,6 | 4,5,6
      const allIds = QUESTIONS.map((x) => x.id);
      const idx = allIds.indexOf(q.id);
      const maxGroup = 3; // máximo ids en el nombre de archivo
      const combos = [];

      for (let size = 2; size <= maxGroup; size++) {
        for (let start = idx - (size - 1); start <= idx; start++) {
          if (start < 0) continue;
          const slice = allIds.slice(start, start + size);
          if (slice.length !== size) continue;
          // asegurar contigüidad numérica
          let contiguous = true;
          for (let i = 1; i < slice.length; i++) {
            if (slice[i] !== slice[i - 1] + 1) {
              contiguous = false;
              break;
            }
          }
          if (!contiguous) continue;
          if (!slice.includes(q.id)) continue;
          combos.push(slice.join(","));
        }
      }

      for (const ext of exts) {
        for (const combo of combos) {
          candidates.push(`images/${combo}.${ext}`);
        }
      }
    }

    // eliminar duplicados manteniendo orden
    const seen = new Set();
    const uniq = [];
    for (const c of candidates) {
      if (!seen.has(c)) {
        seen.add(c);
        uniq.push(c);
      }
    }
    candidates.length = 0;
    candidates.push(...uniq);

    const img = document.createElement("img");
    img.className = "qImage";
    img.alt = q.title || "Imagen";
    img.loading = "lazy";

    // Intentar candidatos secuencialmente; si ninguno carga, no mostrar nada.
    const failed = [];
    function tryNext() {
      if (candidates.length === 0) {
        img.remove();
        return;
      }
      const next = candidates.shift();
      img.src = next;
    }

    img.addEventListener("error", (e) => {
      // guardar la fuente fallida y probar la siguiente
      failed.push(img.src || "(src vacío)");
      tryNext();
    });
    img.addEventListener("load", () => {
      // carga exitosa
    });

    tryNext();
    body.appendChild(img);
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
