const d = document
const w = window

const palo = d.querySelector('#scorer-3-main-tick');
const paloRPM = d.querySelector('#scorer-2-main-tick');
const gasolina = d.querySelector('.gasolina__imagen');
const cuentakm = d.querySelector('.cuentatitulo');

const barra = d.querySelector('#inputBarra');

/*     Botones flechas*/
const btnarrowright = d.querySelector('#btnarrow-right')
const btnarrowstay = d.querySelector('#btnarrow-stay')
const btnarrowleft = d.querySelector('#btnarrow-left')
const arrows = d.querySelector('.buttonarr')
const uiFlechas = d.querySelector('.intermittent')

d.addEventListener("click", (e) => {


    /*     Botones flechas*/
    if (e.target === btnarrowright) {
        uiFlechas.innerHTML = `<img class="intermittent__imagen1" src="./Images/arrowbiggergreen.png">`;

    } else if (e.target === btnarrowstay) {
        uiFlechas.innerHTML = ``
    } else if (e.target === btnarrowleft) {
        uiFlechas.innerHTML = `<img class="intermittent__imagen2" src="./Images/arrowbiggergreen.png">`;
    }

})



//to se the first bar
var slider = document.getElementById("myRange");


// Update the current slider value (each time you drag the slider handle)
var numeroValor = 0;
slider.oninput = function() {

    var valor = this.value;
    numeroValor = parseInt(valor);
    numeroValor = numeroValor - 40;
    if (numeroValor < -40) {
        numeroValor = -40;
    }
    if (numeroValor > 220) {
        numeroValor = 220;
    }
    palo.style.transform = `rotate(${numeroValor}deg)`;

}




//The second bar
//For the fuel
let gasoil = d.querySelector('#battlevel');
let sliderFuel = d.getElementById("myRangeFuel");

sliderFuel.oninput = function() {
    let valor = this.value;
    let numeroValorFuel = parseInt(valor);
    let tamaño = numeroValorFuel;
    gasoil.style.width = tamaño + "%";

    if (numeroValorFuel < 30) {
        gasolina.setAttribute("src", "./Images/gasrojo.png");
    } else {
        gasolina.setAttribute("src", "./Images/gasblanco.png");
    }
}





//For the Odometer
let kmcoche = 344333
cuentakm.innerText = `${kmcoche} km`;
const odometer = document.querySelector('#odometer');
const botonodometro = document.querySelector('#enviarodometer');

d.addEventListener("click", (e) => {
    if (e.target === botonodometro) {
        let kmcoche = odometer.value;
        cuentakm.innerText = `${kmcoche} km`;
    }
})



//Intermittents

let inrigth1 = d.querySelector('.intermittent__imagen1');
let inrigth2 = d.querySelector('.intermittent__imagen2');


function goright() {
    inrigth1.setAttribute("src", "./Images/arrowbiggergreen.png");
    inrigth2.setAttribute("src", "./Images/arrowbiggerblack.png");
}

function goleft() {
    inrigth2.setAttribute("src", "./Images/arrowbiggergreen.png");
    inrigth1.setAttribute("src", "./Images/arrowbiggerblack.png");
}

function stay() {
    inrigth1.setAttribute("src", "./Images/arrowbiggerblack.png");
    inrigth2.setAttribute("src", "./Images/arrowbiggerblack.png");
}



//RPM value
let slider2 = document.getElementById("myRangeRPM");
let numeroValor2 = 0;
slider2.oninput = function() {
    var valor2 = this.value;
    numeroValor2 = parseInt(valor2);
    numeroValor2 = numeroValor2 - 60;
    if (numeroValor2 < -60) {
        numeroValor2 = -60;
    }
    if (numeroValor2 > 120) {
        numeroValor2 = 120;
    }

    paloRPM.style.transform = `rotate(${numeroValor2}deg)`;

}





/* Hour */
const clock = document.querySelector(".clock");

window.addEventListener("load", time);


function time() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    m = check(m);
    s = check(s);
    clock.textContent = `${h}:${m}:${s}`;
    setTimeout(time, 1000);
}

function check(t) {
    if (t < 10) return '0' + t;
    return t;
}