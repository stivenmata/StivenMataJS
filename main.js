let numeroA = 5

if (numeroA >= 3) {
    console.log ("es mayor que b");
}

let num1 = 5;
let num2 = 5;

if (num1 === num2) {
    console.log("Los números son iguales  (" + num1 + ").");
} else {
    console.log("Los números son diferentes (" + num1 + ").");
   }


let num3 = 5;
let num4 = 2;

if (num3 > num4) {
    console.log("El primer número (" + num3 + ") es el más grande.");
} else if (num3 > num4) {
    console.log("El segundo número (" + num4 + ") es el más grande.");
} else {
    console.log("Los números son iguales (" + num3 + ").");
}




let num5 = parseFloat(prompt("Introduce el primer número:"));
let num6 = parseFloat(prompt("Introduce el segundo número:"));
let num7 = parseFloat(prompt("Introduce el tercer número:"));


if (num5 < num6 && num5 < num7) {
    console.log(num5 + " es el número más pequeño");
} else if (num6 < num5 && num6 < num7) {
    console.log(num6 + " es el número más pequeño");
} else {
    console.log(num7 + " es el número más pequeño");
}


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

let nombre = prompt("Ingresa tu nombre:");
let edad = parseInt(prompt("Ingresa tu edad:"));
let altura = parseFloat(prompt("Ingresa tu altura en cm:"));
let vision = parseFloat(prompt("Ingresa tu visión en una escala de 10:"));


if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log(nombre + ", estás capacitado para conducir.");
} else {
    console.log(nombre + ", no estás capacitado para conducir.");
}



let nombreUsuario = prompt("Ingresa tu nombre:");
let pase = prompt("Ingresa tu pase (vip o normal):");
let poseeEntrada = prompt("¿Posees entrada? (si/no, s/n, true/false):");


let nombreReferencia = "stiven";


if (nombreUsuario === nombreReferencia || pase === "vip" || poseeEntrada === "si" || poseeEntrada === "s" || poseeEntrada === "true") {
    if (poseeEntrada === "si" || poseeEntrada === "s" || poseeEntrada === "true") {
        let deseaUsarEntrada = prompt("¿Deseas utilizar tu entrada? (si/no):");
        if (deseaUsarEntrada === "si" || deseaUsarEntrada === "s") {
            console.log("Bienvenido " + nombreUsuario + "!");
        } else {
            console.log("No se ha utilizado la entrada.");
        }
    } else {
        console.log("Bienvenido " + nombreUsuario + "!");
    }
} else {
    let deseaComprarEntrada = prompt("¿Deseas comprar una entrada? (si/no):");
    if (deseaComprarEntrada === "si" || deseaComprarEntrada === "s") {
        let dineroDisponible = parseFloat(prompt("¿Cuánto dinero tienes disponible?"));
        if (dineroDisponible >= 1000) {
            console.log("Entrada vendida. Bienvenido " + nombreUsuario + "!");
        } else {
            console.log("No tienes suficiente dinero para comprar una entrada.");
        }
    } else {
        console.log("Gracias por tu visita, " + nombreUsuario + ".");
    }
}

let numeroIncognita;
let numeroBase = 1;
let intervalo = 10;
let incremento = 1;
let numeroGenerado = 0;

for (let i = 0; i < intervalo; i++) {
    if (numeroGenerado === i) {
        numeroIncognita = numeroBase + i;
        break;
    }
    incremento++;
    if (incremento > intervalo) {
        incremento = 1;
    }
}


let intentos = 3;


for (let i = 0; i < intentos; i++) {

    let numeroIngresado = parseInt(prompt("Ingresa un número entre 1 y 10:"));


    if (numeroIngresado === numeroIncognita) {
        console.log("¡Ganaste, has adivinado el número!");

    } else if (numeroIngresado > numeroIncognita) {
        console.log("El número ingresado es mayor, vuelve a intentarlo.");
    } else if (numeroIngresado < numeroIncognita) {
        console.log("El número ingresado es menor, vuelve a intentarlo.");
    }


    if (i === intentos - 1) {
        console.log("Lo siento, has agotado todos tus intentos. El número era " + numeroIncognita + ".");
    }
}

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

let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");
let numeroDocumento = prompt("Ingresa tu número de documento:");
let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (DD/MM/YYYY):");
let direccion = prompt("Ingresa tu dirección:");
let ciudad = prompt("Ingresa tu ciudad:");
let pais = prompt("Ingresa tu país:");

// Mostrar los datos ingresados y preguntar si están correctos
let datosConfirmacion = `Los datos ingresados son:
Nombre: ${nombre}
Apellido: ${apellido}
Número de Documento: ${numeroDocumento}
Fecha de Nacimiento: ${fechaNacimiento}
Dirección: ${direccion}
Ciudad: ${ciudad}
País: ${pais}

¿Son correctos? (sí/no)`;

let confirmacion = prompt(datosConfirmacion).toLowerCase();

// Verificar la confirmación del usuario
if (confirmacion === 'sí' || confirmacion === 'si') {
    // Crear el objeto dni con los datos ingresados
    let dni = {
        Nombre: nombre,
        Apellido: apellido,
        NumeroDocumento: numeroDocumento,
        FechaNacimiento: fechaNacimiento,
        Direccion: direccion,
        Ciudad: ciudad,
        Pais: pais
    };

    // Mostrar el objeto en la consola con console.table()
    console.table(dni);
    console.log("Registro exitoso");
} else {
    console.log("Vuelva a intentarlo en 1 mes.");
}