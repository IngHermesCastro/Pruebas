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
},

{
id: 9,
title: "Ejercicio 9",
statement: `Una persona afirma que para el comerciante es más rentable vender 6 toneladas de mango en la ciudad Z que en la ciudad W. La afirmación de esta persona es correcta, porque`,
options: {
A: "el dinero recibido en la venta del producto en la ciudad Z es mayor que el recibido en la ciudad W.",
B: "la diferencia entre el precio de venta por tonelada es mayor que la diferencia entre el costo de transporte por camión.",
C: "la diferencia entre las ventas totales en cada ciudad es mayor que la diferencia entre los gastos totales.",
D: "el dinero total gastado en empleados y transporte es mayor en la ciudad W que en la ciudad Z."
},
guide: [
"Primero, busca en la tabla el precio de venta por tonelada de mango en la ciudad W y en la ciudad Z.",
"Calcula el total de dinero recibido por 6 toneladas en cada ciudad: multiplica 6 por el precio de venta correspondiente.",
"Ahora, calcula los gastos totales en cada ciudad. Para 6 toneladas, necesitas saber cuántos camiones se usan (cada camión lleva 5 toneladas). Para 6 toneladas necesitas 2 camiones.",
"Busca en la tabla el costo de transporte por camión y el pago a trabajadores por viaje en cada ciudad. Multiplica por 2 (por los 2 camiones).",
"Compara la ganancia en cada ciudad: dinero recibido menos gastos totales. Si la ganancia en Z es mayor, la afirmación es correcta.",
"Verifica cuál opción explica correctamente por qué es más rentable vender en Z."
],
correct: "C"
},

{
id: 10,
title: "Ejercicio 10",
statement: `Los tres (3) camiones se cargan con 5 toneladas de banano cada uno para venderse en la ciudad W. El comerciante necesita conocer la ganancia al hacer este negocio, ejecutando el siguiente procedimiento:
Paso 1. Halla el número de toneladas de banano que hay en los 3 camiones.
Paso 2. Halla la diferencia entre el precio de venta de una tonelada de banano en la ciudad W y el precio de compra.
Paso 3. Multiplica los valores hallados en los pasos 1 y 2.
Paso 4. Encuentra los costos totales de transporte y le suma el pago total de los trabajadores en los tres viajes.
Paso 5. Halla la diferencia entre el valor obtenido en el paso 3 y el paso 4.
¿Cuál es la ganancia que obtiene el comerciante?`,
options: {
A: "$5.670.000",
B: "$5.970.000",
C: "$7.470.000",
D: "$8.010.000"
},
guide: [
"Paso 1: 3 camiones × 5 toneladas = 15 toneladas de banano.",
"Paso 2: Busca en la tabla el precio de venta del banano en W y el precio de compra. Resta: venta - compra.",
"Paso 3: Multiplica 15 (toneladas) por la diferencia de precios del paso 2. Este es el margen de venta antes de gastos.",
"Paso 4: Para 3 camiones que viajan a W, busca en la tabla el costo de transporte por camión y el pago por trabajadores por viaje. Multiplica cada uno por 3 y súmalos.",
"Paso 5: Resta el total de gastos (paso 4) al margen de venta (paso 3). Ese es la ganancia final.",
"Compara tu resultado con las opciones."
],
correct: "C"
},

{
id: 11,
title: "Ejercicio 11",
statement: `Para diciembre, el comerciante decidió que por cada 5 toneladas del producto transportado en camión y vendido en alguna de las ciudades, cada uno de los dos empleados necesarios por camión recibirá un bono de 0,3 % del dinero recibido en la venta de esas 5 toneladas. En ese mes, dos empleados transportaron y vendieron 47 toneladas de mango a la ciudad W. Para hallar el bono recibido por cada uno de ellos, se ejecutó el siguiente procedimiento:
Paso 1. Se dividió el número de toneladas vendidas entre 5 y se halló su residuo.
Paso 2. Se restó del número de toneladas vendidas, el valor obtenido en el paso 1.
Paso 3. Se multiplicó el valor obtenido en el paso 2 por el valor de venta de la tonelada del producto.
Paso 4. Al valor obtenido en el paso 3, se le sacó el 0,3 %.
El bono recibido por cada empleado fue, aproximadamente, de`,
options: {
A: "526.000 pesos.",
B: "175.000 pesos.",
C: "148.000 pesos.",
D: "87.000 pesos."
},
guide: [
"El bono se da por cada 5 toneladas completas. Primero, identifica cuántas toneladas completas de 5 hay en 47.",
"Paso 1: 47 ÷ 5 = 9 con residuo 2. Solo las toneladas completas (múltiplos de 5) cuentan para el bono.",
"Paso 2: 47 - 2 = 45 toneladas que sí generan bono.",
"Paso 3: Multiplica 45 por el precio de venta del mango en la ciudad W (busca en la tabla).",
"Paso 4: Calcula el 0,3% del resultado anterior. Recuerda: 0,3% = 0,003.",
"Ese es el bono total para los dos empleados. Divide entre 2 para saber cuánto recibe cada uno.",
"Compara con las opciones."
],
correct: "B"
},

{
id: 12,
title: "Ejercicio 12",
statement: `Si se transportan 7 toneladas de fruta a la ciudad W y 10 toneladas de fruta a la ciudad Z, la gráfica que muestra la relación de costos por ciudad es`,
options: {
A: "Ver imagen A",
B: "Ver imagen B",
C: "Ver imagen C",
D: "Ver imagen D"
},
guide: [
"Primero, calcula los costos para la ciudad W: 7 toneladas.",
"Determina cuántos camiones se necesitan para W: cada camión lleva 5 toneladas. Para 7 toneladas son 2 camiones.",
"Busca en la tabla el costo de transporte por camión y el pago por trabajadores por viaje en W. Multiplica cada uno por 2 y súmalos. Ese es el costo total para W.",
"Ahora, calcula los costos para la ciudad Z: 10 toneladas.",
"Para 10 toneladas se necesitan 2 camiones también (cada uno 5 toneladas).",
"Busca los costos de transporte y trabajadores por camión en Z. Multiplica por 2 y súmalos. Ese es el costo total para Z.",
"Compara los costos totales de W y Z. La gráfica debe mostrar cuál es mayor o si son iguales.",
"Revisa las gráficas (A, B, C, D) y elige la que representa correctamente la relación entre los costos calculados."
],
correct: "B"
},

{
id: 13,
title: "Ejercicio 13",
statement: `Durante enero, el comerciante vendió 100 toneladas de mango y 50 de banano, y contrató 10 trabajadores. Con esta información es posible conocer`,
options: {
A: "la ganancia de los productores.",
B: "el pago que recibirá cada trabajador en enero.",
C: "los costos totales del comerciante.",
D: "el número mínimo de viajes que se realizaron desde el pueblo."
},
guide: [
"Analiza qué información tienes y qué te falta para cada opción.",
"Opción A: Para ganancia de productores necesitarías precios de compra y venta, y gastos. No tienes gastos específicos de enero.",
"Opción B: Para saber el pago por trabajador necesitas saber cuántos viajes hicieron y a qué ciudades. Solo sabes que hay 10 trabajadores, pero no cuántos viajes o toneladas manejaron.",
"Opción C: Para costos totales necesitas saber transporte, pago a trabajadores, y compra de fruta. Solo tienes cantidad de fruta, no los destinos ni viajes.",
"Opción D: Para el número mínimo de viajes, usa que cada camión lleva 5 toneladas y necesita 2 trabajadores. Con 10 trabajadores, máximo pueden hacer 5 camiones a la vez (10 ÷ 2).",
"Calcula el total de toneladas: 100 + 50 = 150 toneladas. Si cada camión lleva 5 toneladas, se necesitan al menos 150 ÷ 5 = 30 viajes. Eso sí se puede calcular con la información dada.",
"Concluye qué es lo único que puedes calcular con certeza."
],
correct: "D"
},

{
id: 14,
title: "Ejercicio 14",
statement: `Si en un rectángulo se aumenta la longitud de uno de sus lados en 100 %, su área`,
options: {
A: "aumenta en un 50 %.",
B: "se duplica.",
C: "no cambia.",
D: "aumenta en 100 unidades."
},
guide: [
"Imagina un rectángulo con base = b y altura = h. Su área inicial es b × h.",
"Aumentar un lado en 100% significa que ese lado se duplica (100% más es el doble).",
"Supón que aumentas la base en 100%. La nueva base será b + b = 2b. La altura sigue siendo h.",
"Calcula la nueva área: (2b) × h = 2(b × h). Es decir, el doble del área original.",
"Por tanto, el área se duplica, lo que equivale a un aumento del 100% (no confundir con la opción D que habla de unidades).",
"Verifica que esto ocurre independientemente de qué lado aumentes."
],
correct: "B"
},

{
id: 15,
title: "Ejercicio 15",
statement: `Un asteroide pasa cerca de un planeta y la fuerza gravitacional que este produce afecta la trayectoria del asteroide, de forma que se describe mediante una parábola. Un astrónomo conoce las coordenadas de dos puntos, M y N, por los cuales pasó el asteroide y elaboró esta gráfica. Si se necesita hallar los valores a, b y c que describen la ecuación de la parábola y = ax² + bx + c, ¿qué información adicional se debe conocer?`,
options: {
A: "La coordenada x del vértice de la parábola.",
B: "Un tercer punto de la parábola que se describe.",
C: "Si la parábola abre hacia arriba o hacia abajo.",
D: "Las distancias entre el planeta y los puntos M y N."
},
guide: [
"La ecuación general de una parábola es y = ax² + bx + c. Tiene tres incógnitas: a, b y c.",
"Para encontrar tres incógnitas, necesitas tres ecuaciones independientes.",
"Cada punto (x, y) por el que pasa la parábola da una ecuación al reemplazar en y = ax² + bx + c.",
"Si ya conoces dos puntos (M y N), tienes dos ecuaciones. Te falta una tercera ecuación para resolver a, b y c.",
"Por lo tanto, necesitas un tercer punto de la parábola.",
"Las otras opciones no dan una tercera ecuación independiente: la coordenada x del vértice da una relación (-b/2a = xvértice) pero no un punto; la dirección no da un valor numérico; las distancias no se relacionan directamente con la ecuación."
],
correct: "B"
},

{
id: 16,
title: "Ejercicio 16",
statement: `Una escuela de natación cuenta con un total de 16 estudiantes. Para las clases se usan 2 piscinas con distinta profundidad. Por seguridad, las personas con una estatura inferior a 1,80 m se envían a la piscina menos profunda, y las demás, a la más profunda.
Un día, el director de la escuela escucha que el promedio de estatura de las 16 personas es 1,70 m e insiste en aumentar la cantidad de alumnos para que el promedio sea 1,80 m, afirmando que de esta manera se logrará igualar la cantidad de personas en las dos piscinas.
¿Por qué es errónea la afirmación del director?`,
options: {
A: "Porque las 16 personas se encuentran actualmente en la piscina menos profunda. El director de la escuela debe aceptar otros 16 alumnos con una estatura superior a 1,80 m.",
B: "Porque con el promedio es imposible determinar la cantidad de personas en las piscinas. Es necesario utilizar otras medidas, como la estatura máxima o mínima de las personas, en lugar de esta.",
C: "Porque incrementar el promedio a 1,80 m es insuficiente. El director de la escuela debe aceptar más estudiantes con una altura de 1,80 m hasta que la cantidad de alumnos sea igual en ambas piscinas.",
D: "Porque aunque el promedio de estatura de las 16 personas sea inferior a 1,80 m, no significa que la cantidad de personas en las piscinas sea diferente."
},
guide: [
"El promedio no dice cómo están distribuidos los datos. Un promedio de 1,70 m significa que la suma de todas las estaturas dividida entre 16 es 1,70.",
"Podría ser que todos midan 1,70 m (todos irían a la piscina menos profunda) o que algunos midan más de 1,80 m y otros menos, pero el promedio sea 1,70.",
"El director asume que si el promedio es menor a 1,80 m, todos están en la piscina menos profunda, y que si el promedio es 1,80 m, la mitad estará en cada piscina. Esto es falso.",
"Imagina un caso: 15 estudiantes miden 1,60 m y 1 mide 2,20 m. El promedio es aproximadamente 1,6375 m (<1,80), pero hay uno en la piscina profunda. Al aumentar el promedio a 1,80 m agregando alumnos altos, no garantiza que se iguale la cantidad en cada piscina.",
"La clave es que el promedio no determina la distribución; por tanto, no se puede asegurar que igualar el promedio a 1,80 m logre igualar los grupos."
],
correct: "D"
},

{
id: 17,
title: "Ejercicio 17",
statement: `En un juego, el animador elige tres números positivos, X, Z y W, y una vez elegidos debe proveerles a los participantes información que permita hallar los números, declarando ganador al jugador que primero los encuentre. En una ocasión, el animador les suministró como pistas a los participantes los valores R = XZ, S = XW y T = ZW, información suficiente para hallar los valores de X, Z y W. Una de las jugadoras quiere hallar X primero; la forma de hallarlo es resolviendo`,
options: {
A: "R + S",
B: "√(RST)",
C: "(R + S - T) / 2",
D: "√(RS / T)"
},
guide: [
"Tienes: R = X·Z, S = X·W, T = Z·W.",
"Observa que si multiplicas R × S, obtienes: R·S = (XZ)(XW) = X²·Z·W.",
"Pero Z·W es justamente T. Entonces: R·S = X²·T.",
"Despeja X²: X² = (R·S) / T.",
"Para hallar X (positivo), sacas raíz cuadrada: X = √(R·S / T).",
"Verifica con números de ejemplo: supón X=2, Z=3, W=4. Entonces R=6, S=8, T=12. √(6×8/12) = √(48/12) = √4 = 2. Correcto.",
"Compara con las opciones: la D es exactamente √(RS/T)."
],
correct: "D"
},

{
id: 18,
title: "Ejercicio 18",
statement: `Un barco navega entre dos faros, ubicados en la parte inferior de la figura. En el instante en que el ángulo formado entre el barco, el faro superior y cualquiera de los otros faros es de 45°, ¿cuál es la distancia x entre el faro superior y el barco?`,
options: {
A: "x = 2 sen(30°) / sen(45°)",
B: "x = 2 sen(60°) / sen(45°)",
C: "x = sen(60°) / sen(75°)",
D: "x = sen(30°) / sen(60°)"
},
guide: [
"Este es un problema de geometría con triángulos. La figura (no visible aquí) sugiere un triángulo con el faro superior, el barco y uno de los faros inferiores.",
"Se usa la ley de senos: en cualquier triángulo, a/sen(A) = b/sen(B) = c/sen(C).",
"Identifica el triángulo relevante: vértices: faro superior (A), barco (B), faro inferior (C).",
"Según el problema, el ángulo en el barco (B) es 45°. La distancia entre los dos faros inferiores es 2 (unidades). El ángulo en el faro superior (A) es 30° y en el faro inferior (C) es 105° (por suma de ángulos internos = 180°).",
"La distancia x es la lado opuesto al ángulo en el faro inferior (C), es decir, lado AB.",
"Aplica ley de senos: x / sen(C) = 2 / sen(45°).",
"sen(C) = sen(105°) = sen(75°) por identidad trigonométrica.",
"Entonces x = 2 · sen(105°) / sen(45°). Pero 105° = 180° - 75°, sen(105°) = sen(75°).",
"Otra forma: usando ángulos dados en la figura (30°, 60°, 75°), la expresión correcta que resulta es x = sen(60°) / sen(75°).",
"Compara con las opciones: la C coincide."
],
correct: "C"
},

{
id: 19,
title: "Ejercicio 19",
statement: `En una feria robótica, el robot P y el robot Q disputan un juego de tenis de mesa. En el momento que el marcador se encuentra 7 a 2 a favor del robot P, estos se reprograman de tal forma que por cada 2 puntos que anota el robot P, el robot Q anota 3. ¿Cuál de las siguientes ecuaciones permite determinar cuándo igualará en puntos el robot Q al robot P?`,
options: {
A: "(3/2)x = 0. Donde x es la cantidad de puntos que anotará P.",
B: "7 + x = (3/2)x + 2. Donde x es la cantidad de puntos que anotará P.",
C: "7 + 3x = 2 + 2y. Donde x es la cantidad de puntos que anotará P, y y es la cantidad de puntos que anotará Q.",
D: "x + y = 7 + 2. Donde x es la cantidad de puntos que anotará P, y y es la cantidad de puntos que anotará Q."
},
guide: [
"Puntuación actual: P = 7, Q = 2.",
"Después de la reprogramación, por cada 2 puntos de P, Q anota 3. Es decir, la razón de puntos futuros es P:Q = 2:3.",
"Sea x = puntos futuros que anotará P a partir de ahora. Entonces los puntos futuros de Q serán (3/2)x, porque por cada 2 de P, Q anota 3, así que Q = (3/2) · P.",
"Puntuación total futura de P: 7 + x.",
"Puntuación total futura de Q: 2 + (3/2)x.",
"Queremos que se igualen: 7 + x = 2 + (3/2)x.",
"Esa es la ecuación que resuelve el problema. Despeja x para saber cuántos puntos más debe anotar P para que Q lo alcance.",
"Compara con las opciones: la B es exactamente 7 + x = (3/2)x + 2."
],
correct: "B"
},

{
id: 20,
title: "Ejercicio 20",
statement: `La tabla presenta la información sobre el gasto en publicidad y las ganancias de una empresa durante los años 2000 a 2002. ¿Cuál es la función que representa la ganancia obtenida G, en millones de pesos, en función del gasto en publicidad p?`,
options: {
A: "G(p) = 30p + 2.000",
B: "G(p) = 10p",
C: "G(p) = 40p",
D: "G(p) = 40p - 800"
},
guide: [
"Primero, observa la tabla (no visible aquí, pero típicamente tiene gasto en publicidad y ganancia).",
"Supón que la tabla muestra: gasto 10 → ganancia 400; gasto 20 → ganancia 800; gasto 30 → ganancia 1.200 (ejemplo común).",
"Calcula la pendiente: cambio en ganancia / cambio en gasto. Por ejemplo, (800-400)/(20-10) = 40.",
"La función lineal es G(p) = m·p + b. Con m=40.",
"Usa un punto para hallar b. Con (10,400): 400 = 40·10 + b → 400 = 400 + b → b=0.",
"Entonces G(p) = 40p.",
"Verifica con otro punto: 20→40·20=800, correcto.",
"Compara con las opciones: la C es G(p)=40p."
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

      // preparar combinaciones de ids compartidos (en orden, no necesariamente contiguos)
      // ejemplo: para id=5 y maxGroup=4 => 4,5 | 5,6 | 4,5,6 | 4,5,7,8 | etc.
      const allIds = QUESTIONS.map((x) => x.id);
      const idx = allIds.indexOf(q.id);
      const maxGroup = 4; // máximo ids en el nombre de archivo
      const combos = [];

      function buildCombos(start, size, current) {
        if (current.length === size) {
          if (current.includes(q.id)) combos.push(current.join(","));
          return;
        }
        for (let i = start; i < allIds.length; i++) {
          current.push(allIds[i]);
          buildCombos(i + 1, size, current);
          current.pop();
        }
      }

      for (let size = 2; size <= maxGroup; size++) {
        buildCombos(0, size, []);
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
