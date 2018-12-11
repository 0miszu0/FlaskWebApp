window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const alexa = new SpeechRecognition();
let buton = document.querySelector("input")

function slukaj(e) {
    console.log("Dialam")
    console.dir(e)
}

alexa.addEventListener("result", slukaj)
buton.addEventListener("click", () =>alexa.start() )