/*El contador sera manejable*/

let horaContador = 0;
let minutosContador = 0;
let segundosContador = 0;

let intervalSeg = setInterval(() => {
    document.querySelector(".contadorSegundos").value = segundosContador;
    segundosContador --;
}, 1000);

console.log(intervalSeg)

document.querySelector(".setContador").addEventListener("click", event => {
    horaContador = document.querySelector(".contadorHora").value;
    minutosContador = document.querySelector(".contadorMinutos").value;
    segundosContador = document.querySelector(".contadorSegundos").value;
})

function startContador() {
    let horaContador = document.querySelector(".contadorHora").value;
    let minutosContador = document.querySelector(".contadorMinutos").value;
    let segundosContador = document.querySelector(".contadorSegundos").value;
    if (horaContador > 0) {
        setInterval(() => {
            document.querySelector(".contadorHora").value = horaContador;
            horaContador --;
        }, 3600000)
    }
    if (minutosContador > 0) {
        setInterval(() => {
            document.querySelector(".contadorMinutos").value = horaContador;
            minutosContador --;
        }, 60000)
    }
    let intervalSeg = setInterval(() => {
        document.querySelector(".contadorSegundos").value = segundosContador;
        segundosContador --;
    }, 1000);
    /*let intervalo = 60;
    setInterval(() => {
    console.log(intervalo);
    intervalo --;
    }, 1000)*/
};

function stopContador() {
    clearInterval(intervalSeg)
}

/*let ti = 60;
while (ti >= 0) {
    setTimeout(() => {
        --ti
        console.log(ti);
    }, 1000);
}*/

/*let someDate = new Date(2024, 4, 20, 11, 30, 0)

console.log(someDate)*/