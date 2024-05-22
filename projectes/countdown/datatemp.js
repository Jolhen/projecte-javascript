let numMinutes = 0;
let numSeconds = 0;

window.addEventListener("DOMContentLoaded", event => {
    function loadSeconds() {
        let txtSeconds;
    
        numSeconds = document.querySelector("#setSeconds").value;
    
        if (numSeconds < 0 ) {
            numSeconds = 59;
        }
        
        if (numSeconds < 10) {
            txtSeconds = `0${numSeconds}`;
        } else {
            numSeconds = txtSeconds;
        }
        document.querySelector(".showSeconds").innerHTML = txtSeconds;
        numSeconds --;
    }
    
    document.getElementById("playTemp").addEventListener("click", event => {
        setInterval(loadSeconds(), 1000);
    })

    function loadMinutes() {
        if (document.querySelector("#setMinutes").value != "") {
            numSeconds = document.querySelector("#setMinutes").value;
            document.querySelector(".showMinutes").innerHTML = numSeconds;
        }
    }
    console.log("algo")
})
