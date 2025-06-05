document.addEventListener("DOMContentLoaded", function () {
    const chatInput = document.getElementById("chat-input");
    const chatLog = document.getElementById("chat-log");
    const sendBtn = document.getElementById("send-btn");

    // ✅ Mensaje de bienvenida automático
    addMessage("bot", "Bot: ¡Hola! Soy tu asistente agrícola. Pregúntame sobre riego o fertilizantes.");

    // ✅ Enviar con tecla Enter
    chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") sendBtn.click();
    });

    // Aquí sigue el resto de tu código, por ejemplo:
    sendBtn.addEventListener("click", function () {
        const userInput = chatInput.value;
        if (userInput.trim() !== "") {
            addMessage("user", "Tú: " + userInput);
            getBotResponse(userInput);
            chatInput.value = "";
        }
    });

    function addMessage(sender, text) {
        const message = document.createElement("div");
        message.classList.add(sender);
        message.textContent = text;
        chatLog.appendChild(message);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function getBotResponse(input) {
        let response = "";

        // Aquí va tu lógica del bot
        if (input.toLowerCase().includes("riego")) {
            response = "Bot: El riego debe realizarse temprano en la mañana o al atardecer.";
        } else if (input.toLowerCase().includes("fertilizante")) {
            response = "Bot: Usa fertilizante orgánico cada 15 días para mejores resultados.";
        } else {
            response = "Bot: No entiendo tu pregunta. ¿Puedes reformularla?";
        }

        addMessage("bot", response);
    }
});
