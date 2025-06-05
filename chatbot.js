document.addEventListener("DOMContentLoaded", function () {
    const chatInput = document.getElementById("chat-input");
    const chatLog = document.getElementById("chat-log");
    const sendBtn = document.getElementById("send-btn");

    function addMessage(sender, text) {
        const msg = document.createElement("div");
        msg.className = sender;
        msg.innerText = text;
        chatLog.appendChild(msg);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function botResponse(userMsg) {
        const msg = userMsg.toLowerCase();
        if (msg.includes("hola")) {
            return "¡Hola! ¿En qué puedo ayudarte con tus cultivos?";
        } else if (msg.includes("riego")) {
            return "Recuerda regar temprano en la mañana o al atardecer para evitar evaporación.";
        } else if (msg.includes("fertilizante")) {
            return "Te recomiendo usar fertilizantes orgánicos si es posible. ¿Qué cultivo estás tratando?";
        } else {
            return "Lo siento, aún estoy aprendiendo. Intenta preguntarme sobre riego, fertilizantes o salud del cultivo.";
        }
    }

    sendBtn.addEventListener("click", function () {
        const userMsg = chatInput.value.trim();
        if (!userMsg) return;

        addMessage("user", "Tú: " + userMsg);
        const response = botResponse(userMsg);
        setTimeout(() => addMessage("bot", "Bot: " + response), 500);

        chatInput.value = "";
    });
});
