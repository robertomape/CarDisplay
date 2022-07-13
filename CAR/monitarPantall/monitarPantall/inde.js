let btnMenu1 = document.querySelector('.btnMenu-1');
let btnMenu2 = document.querySelector('.btnMenu-2');
let btnMenu3 = document.querySelector('.btnMenu-3');
let btnMenu4 = document.querySelector('.btnMenu-4');
let btnMenu5 = document.querySelector('.btnMenu-5');
// Cada componenete
let componente_1 = document.querySelector('.componente_1')
let componente_2 = document.querySelector('.componente_2')
let componente_3 = document.querySelector('.componente_3')
let componente_4 = document.querySelector('.componente_4')
let componente_5 = document.querySelector('.componente_5')


let pantalla = document.querySelector('.pantalla')
let reproductor = document.querySelector('#miReproductor')

// Boton Imagen
let btnPlay = document.querySelector('#btnPlay')
let bIquierda = document.querySelector('#bDerecha')
let bDerecha = document.querySelector('#bIquierda')

// Sliders
let lineaTiempo = document.querySelector('#lineaTiempo')
let lineaVolumen = document.querySelector('#lineaVolumen')
    // Reproductor de musica
let contador = 0
let nCancion = 2
    // Contardor del volumen

/* reproductor.onloadeddata = () =>{
    console.log(reproductor.duration);
}; */



document.addEventListener('click', (e) => {
        if (e.target === btnMenu1) {
            componente_1.classList.remove('esconder')
            componente_2.classList.add('esconder')
            componente_3.classList.add('esconder')
            componente_4.classList.add('esconder')
            componente_5.classList.add('esconder')
        }
        if (e.target === btnMenu2) {
            componente_2.classList.remove('esconder')
            componente_1.classList.add('esconder')
            componente_3.classList.add('esconder')
            componente_4.classList.add('esconder')
            componente_5.classList.add('esconder')
        }
        if (e.target === btnPlay) {
            lineaTiempo.max = reproductor.duration

            contador++
            if (contador === 1) {
                reproductor.play()
                btnPlay.src = 'assets/pause.png'


            }
            if (contador === 2) {
                reproductor.pause()
                btnPlay.src = 'assets/play.png'
                contador = 0

            }
        }
        if (e.target === bIquierda) {
            nCancion--
            if (nCancion === 0) {
                nCancion = 3
            }
            reproductor.src = `./assets/audio${nCancion}.m4a`
            reproductor.autoplay = true
            contador = 1
        }
        if (e.target === bDerecha) {
            nCancion++
            if (nCancion === 4) {
                nCancion = 1
            }
            reproductor.src = `./assets/audio${nCancion}.m4a`
            reproductor.autoplay = true
            contador = 1
        }
        if (e.target === btnMenu3) {
            componente_3.classList.remove('esconder')
            componente_1.classList.add('esconder')
            componente_2.classList.add('esconder')
            componente_4.classList.add('esconder')
            componente_5.classList.add('esconder')
        }
        if (e.target === btnMenu4) {
            componente_4.classList.remove('esconder')
            componente_1.classList.add('esconder')
            componente_2.classList.add('esconder')
            componente_3.classList.add('esconder')
            componente_5.classList.add('esconder')
        }
        if (e.target === btnMenu5) {
            componente_5.classList.remove('esconder')
            componente_1.classList.add('esconder')
            componente_2.classList.add('esconder')
            componente_3.classList.add('esconder')
            componente_4.classList.add('esconder')

        }





    })
    /* Barra de duarcion de la musica */
reproductor.addEventListener('timeupdate', () => {
    if (lineaTiempo.value === reproductor.duration) {
        lineaTiempo.value = `${reproductor.duration}`
    }
    lineaTiempo.value = `${reproductor.currentTime}`
})

lineaTiempo.addEventListener('click', () => {
    reproductor.currentTime = lineaTiempo.value
})

lineaVolumen.addEventListener('click', () => {
    // ! El ranger solo permite valores enteros no decimales
    reproductor.volume = (lineaVolumen.value / 100)
    console.log(reproductor.volume)
})






// temperatur 
const cuentakm = document.querySelector('.cuentatitulo');

let kmcoche = 0
cuentakm.innerText = `${kmcoche}º`;
const odometer = document.querySelector('#odometer');
const botonodometro = document.querySelector('#enviarodometer');

document.addEventListener("click", (e) => {
    if (e.target === botonodometro) {
        let kmcoche = odometer.value;
        cuentakm.innerText = `${kmcoche}º`;
    }
})