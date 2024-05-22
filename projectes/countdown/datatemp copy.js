/*El contador sera manejable*/

let horaContador = 0;
let minutosContador = 0;
let segundosContador = 0;

window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".setContador").addEventListener("click", (event) => {
        horaContador = document.querySelector(".contadorHora").value;
        minutosContador = document.querySelector(".contadorMinutos").value;
        segundosContador = document.querySelector(".contadorSegundos").value;
        startContador();
    })
});

function startContador(hora) {
    if (horaContador > 0) {
        const horaInterval = setInterval(() => {
            document.querySelector(".contadorHora").value = horaContador;
            horaContador --;
        }, 3600000)
        if (horaContador == 0 && minutosContador == 0 && segundosContador == 0) {
            clearInterval(horaInterval)
        }
    }
    if (minutosContador > 0) {
        setInterval(() => {
            document.querySelector(".contadorMinutos").value = horaContador;
            minutosContador --;
        }, 60000)
    }
    if (segundosContador > 0) {
        const segInterval = setInterval(() => {
            document.querySelector(".contadorSegundos").value = segundosContador;
            segundosContador --;
            if (horaContador < 0 && minutosContador < 0 && segundosContador < 0) {
                clearInterval(segInterval)
            }
        }, 1000)
    }
};

function stopContador() {
    clearInterval(segInterval)
}