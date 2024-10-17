let p = document.querySelector('#p')
let input = document.querySelector('#input')
let b = document.querySelector('#b')
let h1 = document.querySelector('#h1')

let p2 = document.querySelector('#p2')
let input2 = document.querySelector('#input2')
let b2 = document.querySelector('#b2')
let h2 = document.querySelector('#h2')


b.onclick = function () {

    if (input.value == '¿Cómo estás?') {
    p.textContent = 'Bien y vos?'
    } else {
        p.textContent = 'No entiendo la pregunta'
    }
}



let alumnos = []

b2.onclick = function () { 
    alumnos.push(' ' + input2.value )
    p2.textContent = alumnos
}

