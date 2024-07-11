// Ejercicio 1

let numeroA = 5
if (numeroA >= 3) {
    console.log ("es mayor que b");
}

// Ejercicio 2
let num1 = 5;
let num2 = 5;

if (num1 === num2) {
    console.log("Los números son iguales  (" + num2 + ").");
} else {
    console.log("Los números son diferentes (" + num2 + ").");
   }

// Ejercicio 3
let num3 = 5;
let num4 = 2;

if (num3 > num4) {
    console.log("El primer número (" + num3 + ") es el más grande.");
} else if (num3 > num4) {
    console.log("El segundo número (" + num4 + ") es el más grande.");
} else {
    console.log("Los números son iguales (" + num3 + ").");
}


// Ejercicio 4

let num5 = 50
let num6 = 30
let num7 = 51
if (num5 < num6 && num5 < num7) {
    alert(num5 + " es el número más pequeño");
} else if (num6 < num5 && num6 < num7) {
    alert(num6 + " es el número más pequeño");
} else {
    alert(num7 + " es el número más pequeño");
}



   

// Ejercicio 5

let persona1 = {
    nombre: prompt("Introduce el nombre de la primera persona"),
    edad: parseInt(prompt("Introduce la edad de la primera persona:")),
    altura: parseFloat(prompt("Introduce la altura de la primera persona"))
};
let persona2 = {
    nombre: prompt("Introduce el nombre de la segunda persona"),
    edad: parseInt(prompt("Introduce la edad de la segunda persona:")),
    altura: parseFloat(prompt("Introduce la altura de la segunda persona"))
};

let masAlta, mayorEdad;

console.log("El nombre de la primera persona es: " + persona1.nombre);

if (persona1.altura > persona2.altura) {
    masAlta = persona1.nombre;
    console.log(masAlta + " es más alto.");
} else if (persona1.altura < persona2.altura) {
    masAlta = persona2.nombre;
    console.log(masAlta + " es más alto.");
} else {
    console.log("Ambas personas tienen la misma altura.");
}

if (persona1.edad > persona2.edad) {
    mayorEdad = persona1.nombre;
    console.log(mayorEdad + " tiene mayor edad.");
} else if (persona1.edad < persona2.edad) {
    mayorEdad = persona2.nombre;
    console.log(mayorEdad + " tiene mayor edad.");
} else {
    console.log("Ambas personas tienen la misma edad.");
}


// Ejercicio 6

let nombre = prompt("Ingresa tu nombre:");
let edad = parseInt(prompt("Ingresa tu edad:"));
let altura = parseFloat(prompt("Ingresa tu altura en cm:"));
let vision = parseFloat(prompt("Ingresa tu visión en una escala de 10:"));


if (edad >= 18 && altura > 1.50 && vision >= 8) {
    console.log(nombre + ", estás capacitado para conducir.");
} else {
    console.log(nombre + ", no estás capacitado para conducir.");
}


// Ejercicio 7

let myName = "stiven"; 


let nombre = prompt("Ingrese su nombre:");
let pase = prompt("¿Tiene pase? (vip o normal):");
let poseeEntrada = prompt("¿Posee entrada? (si, no, s, n, true, false):");


if (nombre === myName || pase === "vip" || pase === "VIP") {
    console.log("¡Bienvenido!");
} else {
    
    if (poseeEntrada === "si" || poseeEntrada === "s" || poseeEntrada === "true" || poseeEntrada === "SI" || poseeEntrada === "S" || poseeEntrada === "TRUE") {
        let usarEntrada = prompt("¿Desea utilizar su entrada? (si o no, s o n)");
        if (usarEntrada === "si" || usarEntrada === "s") {
            console.log("¡Bienvenido!");
        } else {
            console.log("Gracias, disfrute su día.");
        }
    } else {
      
        let comprarEntrada = prompt("¿Desea comprar una entrada? (si o no, s o n)");
        if (comprarEntrada === "si" || comprarEntrada === "s") {
            var dineroDisponible = parseFloat(prompt("Ingrese su dinero disponible:"));
            if (dineroDisponible >= 1000) {
                console.log("Venta de entrada exitosa. ¡Bienvenido!");
            } else {
                console.log("Dinero insuficiente. Venta de entrada rechazada.");
            }
        } else {
          console.log("Gracias, que tenga un buen día.");
        }
    }
}


 // Ejercicio 8

let numeroIncognita = 8;

 let numeroIngresado = parseInt(prompt("Ingresa un número entre 1 y 10:"));

    if (numeroIngresado === numeroIncognita) {
        alert("¡Ganaste, has adivinado el número!");
    } else {
        if (numeroIngresado < numeroIncognita) {

            alert("El número ingresado es menor, vuelve a intentarlo.");
        } else {
            alert("El número ingresado es mayor, vuelve a intentarlo.");
            
        }
    }


    



 numeroIngresado = parseInt(prompt("Ingresa un número entre 1 y 10:"));

    if (numeroIngresado === numeroIncognita) {
        alert("¡Ganaste, has adivinado el número!");
    } else {
        if (numeroIngresado < numeroIncognita) {

            alert("El número ingresado es menor, vuelve a intentarlo.");
        } else {
            alert("El número ingresado es mayor, vuelve a intentarlo.");
            
        }
    }
        
    numeroIngresado = parseInt(prompt("Ingresa un número entre 1 y 10:"));

    if (numeroIngresado === numeroIncognita) {
        alert("¡Ganaste, has adivinado el número!");
    } else {
        alert("Lo sentimos, has perdido")
    }
     

            
        
    



// Ejercicio 9

let edad = parseInt(prompt("Ingresa tu edad:"));


if (edad >= 0 && edad <= 12) {
    console.log("Eres un infante.");
} else if (edad >= 13 && edad <= 18) {
    console.log("Eres un adolescente.");
} else if (edad >= 19 && edad <= 45) {
    console.log("Eres un mayor joven.");
} else if (edad > 45 && edad <= 100) {
    console.log("Eres un anciano.");
} else if (edad > 100) {
    console.log("¿En realidad tienes esa edad?");
} else {
    console.log("Edad no válida.");
}

// Ejercicio 10

let opcionJugador1 = prompt("Jugador 1: Ingresa 'PIEDRA', 'PAPEL' o 'TIJERAS':");
let opcionJugador2 = prompt("Jugador 2: Ingresa 'PIEDRA', 'PAPEL' o 'TIJERAS':");


opcionJugador1 = opcionJugador1 === 'piedra' ? 'PIEDRA' :
                 opcionJugador1 === 'papel' ? 'PAPEL' :
                 opcionJugador1 === 'tijeras' ? 'TIJERAS' : '';

opcionJugador2 = opcionJugador2 === 'piedra' ? 'PIEDRA' :
                 opcionJugador2 === 'papel' ? 'PAPEL' :
                 opcionJugador2 === 'tijeras' ? 'TIJERAS' : '';


let opcionesValidas = false;
if ((opcionJugador1 === 'PIEDRA' || opcionJugador1 === 'PAPEL' || opcionJugador1 === 'TIJERAS') &&
    (opcionJugador2 === 'PIEDRA' || opcionJugador2 === 'PAPEL' || opcionJugador2 === 'TIJERAS')) {
    opcionesValidas = true;
}

if (!opcionesValidas) {
    console.log("Uno de los jugadores ha hecho trampa.");
} else {
    let resultado;

 
    if (opcionJugador1 === opcionJugador2) {
        resultado = "Empate";
    } else if (
        (opcionJugador1 === 'PIEDRA' && opcionJugador2 === 'TIJERAS') ||
        (opcionJugador1 === 'PAPEL' && opcionJugador2 === 'PIEDRA') ||
        (opcionJugador1 === 'TIJERAS' && opcionJugador2 === 'PAPEL')
    ) {
        resultado = "Jugador 1 gana";
    } else {
        resultado = "Jugador 2 gana";
    }

    
    console.log(resultado);
}

// Ejercicio 11
let color = prompt("Ingresa un color:");


switch (color) {
    case 'Blanco':
    case 'Negro':
        console.log("Falta de color");
        break;
    case 'Verde':
        console.log("El color de la naturaleza");
        break;
    case 'Azul':
        console.log("El color del agua");
        break;
    case 'Amarillo':
        console.log("El color del sol");
        break;
    case 'Rojo':
        console.log("El color del fuego");
        break;
    case 'Marrón':
        console.log("El color de la tierra");
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado.");
        break;
}

// Ejercicio 12

let valor1 = parseFloat(prompt("Ingresa el primer valor numérico:"));
let valor2 = parseFloat(prompt("Ingresa el segundo valor numérico:"));
let operacion = prompt("Ingresa la operación (suma, resta, multiplicación, división):");


let resultado;

switch (operacion) {
    case 'suma':
    case 'Suma':
    case 'SUMA':
        resultado = valor1 + valor2;
        console.log("El resultado de la suma es: " + resultado);
        break;
    case 'resta':
    case 'Resta':
    case 'RESTA':
        resultado = valor1 - valor2;
        console.log("El resultado de la resta es: " + resultado);
        break;
    case 'multiplicación':
    case 'Multiplicación':
    case 'MULTIPLICACIÓN':
        resultado = valor1 * valor2;
        console.log("El resultado de la multiplicación es: " + resultado);
        break;
    case 'división':
    case 'División':
    case 'DIVISIÓN':
        if (valor2 === 0) {
            console.log("ERROR: No se puede dividir por cero.");
        } else {
            resultado = valor1 / valor2;
            console.log("El resultado de la división es: " + resultado);
        }
        break;
    default:
        console.log("Operación no válida. Por favor, ingresa suma, resta, multiplicación o división.");
        break;
}

// Ejercicio 13

let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");
let numeroDocumento = prompt("Ingresa tu número de documento:");
let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (DD/MM/YYYY):");
let direccion = prompt("Ingresa tu dirección:");
let ciudad = prompt("Ingresa tu ciudad:");
let pais = prompt("Ingresa tu país:");


let datosConfirmacion = `Los datos ingresados son:
Nombre: ${nombre}
Apellido: ${apellido}
Número de Documento: ${numeroDocumento}
Fecha de Nacimiento: ${fechaNacimiento}
Ciudad: ${ciudad}
País: ${pais}


¿Son correctos? (sí/no)`;

let confirmacion = prompt(datosConfirmacion).toLowerCase();


if (confirmacion === 'sí' || confirmacion === 'si') {

    let dni = {
        Nombre: nombre,
        Apellido: apellido,
        NumeroDocumento: numeroDocumento,
        FechaNacimiento: fechaNacimiento,
        Ciudad: ciudad,
        Pais: pais
       
    };


    console.table(dni);
    console.log("Registro exitoso");
} else {
    console.log("Vuelva a intentarlo en 1 mes.");
}