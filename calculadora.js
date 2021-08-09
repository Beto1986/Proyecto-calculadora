// Variables globales.
// Incializamos valores que se utilizaran para los cálculos.
let primerValor = 0;
let segundoValor = 0;
let operacion = 0;
let totales = []; // Arreglo para almacenamiento de cálculos en memoria 
let cont = 0; // Contador para el almacen de calculos en memoria

// Función en donde obtenemos todos los ids que componen la calculadora.
function inicializar() {
    const resultado = document.querySelector("#resultado");
    const porcentaje = document.querySelector("#porcentaje");
    const potencia = document.querySelector("#potencia");
    const raiz = document.querySelector("#raiz");
    const division = document.querySelector("#division");
    const siete = document.querySelector("#siete");
    const ocho = document.querySelector("#ocho");
    const nueve = document.querySelector("#nueve");
    const multiplicacion = document.querySelector("#multiplicacion");
    const cuatro = document.querySelector("#cuatro");
    const cinco = document.querySelector("#cinco");
    const seis = document.querySelector("#seis");
    const resta = document.querySelector("#resta");
    const uno = document.querySelector("#uno");
    const dos = document.querySelector("#dos");
    const tres = document.querySelector("#tres");
    const suma = document.querySelector("#suma");
    const borrar = document.querySelector("#borrar");
    const cero = document.querySelector("#cero");
    const coma = document.querySelector("#coma");
    const igual = document.querySelector("#igual");
    const memo = document.querySelector("#memo");

}

// Concatenamos los valores anteriores y le agregamos el valor del botón que cliqueamos.
const presionarBoton1 = () => resultado.innerText = resultado.innerText + "1";
const presionarBoton2 = () => resultado.innerText = resultado.innerText + "2";
const presionarBoton3 = () => resultado.innerText = resultado.innerText + "3";
const presionarBoton4 = () => resultado.innerText = resultado.innerText + "4";
const presionarBoton5 = () => resultado.innerText = resultado.innerText + "5";
const presionarBoton6 = () => resultado.innerText = resultado.innerText + "6";
const presionarBoton7 = () => resultado.innerText = resultado.innerText + "7";
const presionarBoton8 = () => resultado.innerText = resultado.innerText + "8";
const presionarBoton9 = () => resultado.innerText = resultado.innerText + "9";
const presionarBoton0 = () => resultado.innerText = resultado.innerText + "0";
const presionarBotonComa = () => resultado.innerText = resultado.innerText + ".";


// Invocamos cada id con su función que concatena el valor + el botón cliqueado.
uno.addEventListener("click", presionarBoton1);
dos.addEventListener("click", presionarBoton2);
tres.addEventListener("click", presionarBoton3);
cuatro.addEventListener("click", presionarBoton4);
cinco.addEventListener("click", presionarBoton5);
seis.addEventListener("click", presionarBoton6);
siete.addEventListener("click", presionarBoton7);
ocho.addEventListener("click", presionarBoton8);
nueve.addEventListener("click", presionarBoton9);
cero.addEventListener("click", presionarBoton0);
coma.addEventListener("click", presionarBotonComa);

const presionarBotonSuma = () => {
    primerValor = resultado.innerText;
    operacion = "+";
    limpiar();
}

const presionarBotonResta = () => {
    primerValor = resultado.innerText;
    operacion = "-";
    limpiar();
}

const presionarBotonMultiplicacion = () => {
    primerValor = resultado.innerText;
    operacion = "*";
    limpiar();
}

const presionarBotonDivision = () => {
    primerValor = resultado.innerText;
    operacion = "/";
    limpiar();
}

const presionarBotonPotencia = () => {
    primerValor = resultado.innerText;
    operacion = "x²";
    limpiar();
}

const presionarBotonRaiz = () => {
    primerValor = resultado.innerText;
    operacion = "&radic;";
    limpiar();
}

const presionarBotonPorcentaje = () => {
    primerValor = resultado.innerText;
    operacion = "%";
    limpiar();
}

// Borramos lo que tengamos en la pantalla de resultados.
const limpiar = () => resultado.innerText = "";

// Asignamos el primer valor ingresado y la operación.
suma.addEventListener("click", presionarBotonSuma);
resta.addEventListener("click", presionarBotonResta);
multiplicacion.addEventListener("click", presionarBotonMultiplicacion);
division.addEventListener("click", presionarBotonDivision);
potencia.addEventListener("click", presionarBotonPotencia);
raiz.addEventListener("click", presionarBotonRaiz);
porcentaje.addEventListener("click", presionarBotonPorcentaje);

const presionarBotonReset = () => {
    resultado.innerText = "";
    primerValor = 0;
    segundoValor = 0;
    operacion = "";
}

// Reinicializo el display y todas las otras variables que se utilizan para realizar una operación.
borrar.addEventListener("click", presionarBotonReset);

const presionarBotonIgual = () => {
    segundoValor = resultado.innerText;
    resolver();
}

// Asignamos el segundo valor ingresado y llamamos a la función para calcular la operación.
igual.addEventListener("click", presionarBotonIgual);

const resolver = () => {
    let total = 0;
    switch (operacion) {
        case '+':
            total = parseFloat(primerValor) + parseFloat(segundoValor);
            totales.push(`Cálculo ${cont = cont +1}: ${parseFloat(primerValor)} + ${parseFloat(segundoValor)} = ${total} \n`);
            break;
        case '-':
            total = parseFloat(primerValor) - parseFloat(segundoValor);
            totales.push(`Cálculo ${cont = cont +1}: ${parseFloat(primerValor)} - ${parseFloat(segundoValor)} = ${total} \n`);
            break;
        case '*':
            total = parseFloat(primerValor) * parseFloat(segundoValor);
            totales.push(`Cálculo ${cont = cont +1}: ${parseFloat(primerValor)} * ${parseFloat(segundoValor)} = ${total} \n`);
            break;
        case '/':
            if (parseFloat(segundoValor === 0)) {
                //alert("No se puede dividir por 0");
                total = "No se puede dividir por 0";
            } else {
                total = parseFloat(primerValor) / parseFloat(segundoValor);
                totales.push(`Cálculo ${cont = cont +1}: ${parseFloat(primerValor)} / ${parseFloat(segundoValor)} = ${total} \n`);
            }
            break;
        case 'x²':
            total = Math.pow(parseFloat(primerValor), parseFloat(segundoValor));
            totales.push(`Cálculo ${cont = cont +1}: La potencia de ${(parseFloat(primerValor))} elevado a la ${(parseFloat(segundoValor))} = ${Math.pow(parseFloat(primerValor), parseFloat(segundoValor))} \n`);
            break;
        case '&radic;':
            total = Math.sqrt(parseFloat(primerValor));
            totales.push(`Cálculo ${cont = cont +1}: La raíz cuadrada de: ${(parseFloat(primerValor))} = ${Math.sqrt(parseFloat(primerValor))} \n`);
            break;
            // Primero se ingresa el % que queremos obtener y luego la cantidad del valor que queremos calcular
        case '%':
            total = ((parseFloat(primerValor) / 100) * parseFloat(segundoValor));
            totales.push(`Cálculo ${cont = cont +1}: El ${(parseFloat(primerValor))}% de ${(parseFloat(segundoValor))} = ${((parseFloat(primerValor) / 100) * parseFloat(segundoValor))} \n`);
            break;
    }

    presionarBotonReset();
    resultado.innerText = total;

}

// Mostrar valores en memoria.
const presionarBotonMemoria = () => {
    alert(totales);
}

memo.addEventListener("click", presionarBotonMemoria);

// Agregado de sonido al cliquear sobre una tecla.
const boton = document.querySelectorAll(".reproductor")

boton.forEach(repro => {
    repro.addEventListener("click", function() {
        let etiquetaAudio = document.createElement("audio")
        etiquetaAudio.setAttribute("src", "sonido/click2.mp3")
        etiquetaAudio.play()
    })
})