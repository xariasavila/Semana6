// funcion que retorne 2 numeros

const suma = (a, b) => console.log(a + b);
suma(5, 5);

// nombreArreglo.forEach(otrafuncion) ((elementoRecorrer)=> {operacion});

const arregloNumeros0 = [1, 2, 3, 4, 5, 6, 7];
arregloNumeros0.forEach((numero) => {
   console.log(numero * 10);
});

//ESTE ES UNDEFINED
const arregloNumeros = [1, 2, 3, 4, 5, 6, 7];
const foreach = arregloNumeros.forEach((numero) => numero * 10);

//RECORRE ARREGLO Y RETORNA UNO NUEVO SIN MODIFICAR EL ORIGINAL
const arregloNumeros2 = [1, 2, 3, 4, 5, 6, 7];
const map = arregloNumeros2.map((numero) => numero * 5);

//agrega

//FILTER CREA UN NUEVO ARREGLO, PERO DEBE EJECUTAR UNA CONDICION(IF)RETORNA BOLEAN
//     || OR    && AND    RETORNA TODO LO QUE CUMPLE LA CONDIICION
// SI NO EXOSTE LO DEVUELVE VACIO
const arregloNumerosFilter = [1, 2, 3, 4, 5, 6, 7];
const filter = arregloNumerosFilter.filter((numero) => numero > 1);

//FIND retrona EL PRIMER elemento, NO ARREGLO, que cumple la condicion
// SI NO CUMPLE LA CONDICION ENVIA UNDEFINED
const arregloNumerosFind = [1, 2, 3, 4, 5, 6, 7];
const find = arregloNumerosFilter.find((numero) => numero == 1 || numero == 3);

// REDUCE CADA ELEMENTO DE UN ARRAY DEVOLVIENDO UN VALOR UNICO
let initialValue = 0;
const reduce = pokemones.reduce(
  (acumulador, next) => acumulador + next.hp,initialValue
 
);





//LLAMADA FUNCION
console.log(foreach);
console.log(map);
console.log(filter);
console.log(find);

