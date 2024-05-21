let contador = 0;

function aumNum() {
    contador++;
    document.querySelector(".numCount").innerHTML = contador;
};

function disNum() {
    contador--;
    document.querySelector(".numCount").innerHTML = contador;
};

function resetNum() {
    contador = 0;
    document.querySelector(".numCount").innerHTML = contador;
};