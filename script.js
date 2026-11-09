// === Efecto de máquina de escribir ===
const textToType = "✔  Sistema operativo... OK\n✔  HTML, CSS y JS cargados... OK\n✔  Ganas de aprender... ilimitadas";
const typedEl = document.getElementById("typedText");

let i = 0;
function typeChar() {
    if (i < textToType.length) {
        typedEl.textContent += textToType.charAt(i);
        i++;
        setTimeout(typeChar, 40);
    }
}
typeChar();

// === Botón de test ===
const btn = document.getElementById("testBtn");
const output = document.getElementById("output");

const mensajes = [
    "> Ejecutando tests...",
    "> 5/5 tests superados ✅",
    "> 0 errores. 0 warnings. Muy sospechoso... 👀",
    "> Volviendo a ejecutar por si acaso...",
    "> Todo correcto. Puedes hacer el commit tranquilamente. 🚀"
];

let idx = 0;
btn.addEventListener("click", () => {
    output.textContent = mensajes[idx % mensajes.length];
    idx++;

    if (idx >= mensajes.length) {
        btn.textContent = "./test.sh (reset)";
        btn.addEventListener("click", () => { idx = 0; }, { once: true });
    }
});

// === Easter egg en la consola ===
console.log("%c👋 ¡Hola, curioso/a!", "color: #00ff88; font-size: 16px; font-weight: bold;");
console.log("%cSi has abierto la consola, ya eres de los míos.", "color: #8b949e;");