//Ejercicio 1

//1. Crea un programa que pregunte al usuario un número.
//Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
/*
let numeroDado = prompt("Ingresa un número aleatorio");
parseInt(numeroDado);
let i = 1;


do {
    if (i % 5 === 0) {
        console.log(i)
    }
    i++
} while (i <= numeroDado)
*/

// Ejercicio 2
// Crea un programa que solicite al usuario 2 números entre 1 y 50.
// Posteriormente mostrar en consola los números del 1 hasta el 50,
//pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
/*
let numeroRifa1 = parseInt(prompt("Escoge números para la rifa. Primer número:"))
let numeroRifa2 = parseInt(prompt("Escoge números para la rifa. Segundo número:"))

for (var i = 1; i <= 50; i++) {
    if (i == numeroRifa1 || i == numeroRifa2) {
        console.log(i, "¡LOTERÍAAAAAAA!")
    }

    console.log(i);
}
*/

//Ejercicio 3
// 3. Crea un programa que solicite al usuario números,
// si lo que este introduce es un número guardarlo en un arreglo.
// Para terminar el capturar el usuario debe ingresar el número 0.
// Finalmente mostrar la lista de números capturados en pantalla o en la consola.
/*
var nuevoDato;
var nuevoNumero;
var arreglo = [];

do {
    var nuevoDato = prompt("Introduce nuevos números. Para terminar ingresa 0");
    var nuevoNumero = parseInt(nuevoDato);

    if (nuevoNumero > 0) {
        arreglo.push(nuevoNumero);

    }
} while (nuevoNumero != 0)

console.log("Este es su arreglo", arreglo);
*/

// Ejercicio 4
// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado.
// Para terminar de capturar el usuario no debe escribir valor alguno.
//Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

/*
var array = [];

do {
    var ingresaDatos = prompt("Ingresa letras o números")
    if (ingresaDatos != "") {
        array.push(ingresaDatos);
    }
} while (ingresaDatos != "")

console.log(array)
*/

// Ejercicio 5
// 5. Crea un programa que solicite al usuario un día de la semana
//(ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado
//para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario
//introducir otro día. En caso de que el día introducido sea domingo mostrar
//al usuario el mensaje “Ve a descansar” y terminar la captura de información.

/*
do {
    var ingresaDia = prompt("Ingresa un día de la semana")
    if (ingresaDia === "lunes") {
        alert("Buen comienzo de semana")
    } else if (ingresaDia === "martes") {
        alert("Martes de frutas y verduras")
    } else if (ingresaDia === "miércoles") {
        alert("Hay dos por uno en Eladios")
    } else if (ingresaDia === "jueves") {
        alert("Casi viernes")
    } else if (ingresaDia === "viernes") {
        alert("Bebiernes")
    } else if (ingresaDia === "sábado") {
        alert("Toca descansito")
    }

} while (ingresaDia !== "domingo")

alert("Ve a descansar")
*/