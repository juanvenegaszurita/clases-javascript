let verdadero = true;
let falso = false;
let nombre = "Francisco";


if( verdadero === true && falso === false ) {
    console.log("la variable verdadeo es true");
} else {
    console.log("la variable verdadeo no es true");
}

if( verdadero === false || falso === false ) {
    console.log("la variable verdadeo es true");
} else {
    console.log("la variable verdadeo no es true");
}

if( (verdadero === false || falso === false) && nombre.toLowerCase() === "francisco" ) {
    console.log("la variable verdadeo es true");
} else {
    console.log("la variable verdadeo no es true");
}

// indice      0,1,2,3,4
// largo       1,2,3,4,5
let arreglo = [1,2,3,4,5];
if( arreglo.length > 4 ) {
    console.log("la variable verdadeo es true");
} else {
    console.log("la variable verdadeo no es true");
}
if( arreglo.includes(8) ) {
    console.log("la variable verdadeo es true");
} else {
    console.log("la variable verdadeo no es true");
}

let noDefinido = undefined;
let nulo = null;
let variableSinDefinir;

if( noDefinido === undefined && nulo === null && [null, undefined].includes(variableSinDefinir) ) {
    console.log("la variable verdadeo es true");
} else {
    console.log("la variable verdadeo no es true");
}
if( noDefinido && nulo && variableSinDefinir ) {
    console.log("la es distnto de undefined y null");
} else {
    console.log("es undefined o null");
}

// forma de asignar un valor a una variable en base a una condición
console.log("variableSinDefinir =>", variableSinDefinir)
//opción 1
if( variableSinDefinir === undefined || variableSinDefinir === null ) {
    variableSinDefinir = variableSinDefinir+" hola 1";
} else {
    variableSinDefinir = "3"
}
//opción 2
variableSinDefinir = !variableSinDefinir ? variableSinDefinir+" hola 2" : "1";
//opción 3
variableSinDefinir = variableSinDefinir || "2";
console.log("variableSinDefinir =>", variableSinDefinir)