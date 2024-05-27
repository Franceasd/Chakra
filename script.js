document.addEventListener("DOMContentLoaded", function() {
    const phrases = [
        "La vita è bella.",
        "Ogni giorno è un nuovo inizio.",
        "Non smettere mai di sognare.",
        "Sii il cambiamento che vuoi vedere nel mondo.",
        "La felicità non è una destinazione, è un modo di viaggiare.",
        "Ogni sfida è un'opportunità per crescere.",
        "Abbi fiducia in te stesso e segui i tuoi sogni.",
        "Il tempo è il bene più prezioso.",
        "L'amore è la forza più potente dell'universo.",
        "Vivi ogni giorno come se fosse l'ultimo."
    ];

    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];

    document.getElementById("random-phrase").textContent = randomPhrase;
});
