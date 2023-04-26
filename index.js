let arrayVacio = [];

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayNumerosPares = [0, 2, 4, 6, 8];

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

function suma(a, b) {
    let result = a + b;
    return result;
}

function potenciacion(a, b) {
    let result = a**b;
    return result;
}

/*
7.- Crea la función separarPalabras que acepte como argumento un string 
y devuelva un array de palabras 'hola mundo' => [hola, mundo]
*/

function separarPalabras(string){
    let words= string.split(" "); 
    return words;

}

/*
8.- Crea la función repetirString que acepte como argumento un string y un número 
y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces
*/

function repetirString(string, a){
    let repeated= string.repeat (a);
    return repeated;
}

/*
9.- Crea la función esPrimo que acepte como argumento un número 
y devuelva true si es primo y false si no lo es
*/

function esPrimo(num) {
    for (i = (num - 1); i > 1; i--){
    if (num % i == 0) {
    return false;
    }
    }
    return true;
}

/*
10.- Crear la función ordenarArray que acepta como argumento un array de números 
y devuelva un array ordenado de menor a mayor
*/

function ordenarArray(nums){
    const sortAsc = (a, b) => a - b;
    nums.sort(sortAsc);
    return nums;

}

/*
11.- Crear la función obtenerPares que acepta como argumento un array de números
 y devuelva un array con los elementos pares
*/

function obtenerPares (numbers){
    const evenNumbers = numbers.filter((number) => number % 2 === 0);
    return(evenNumbers);
}

/*
12.- Crear la función pintarArray que acepte como argumento un array y devuelva 
una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'
*/

function pintarArray (strArray){
    return "["+strArray.join(", ")+"]";
       
}


/*
13.- Crear la función arrayMapi que acepte como argumento un Array y una función 
y devuelva un array en el que se haya aplicado la función a cada elemento del array
ESTÁ MAL - REPASAR!!!
*/

function arrayMapi(array, funcion) {
    result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(funcion(array[i]));
    }
    return result;
}

/*
14.- Crear la función eliminarDuplicados que acepte como argumento un array 
y devuelva un array en el que se hayan eliminado los duplicados
*/

function eliminarDuplicados (array){
    let newArray=array.filter((element, index) => {
        if (array.indexOf(element) === index){
            return element;
        };
    });
    return newArray;

}

/*
15.- Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
*/

let arrayNumerosNeg= [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];

/*
16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
*/

let holaMundo=["Hola", "Mundo"];

/*
17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
*/

let loGuardoTodo= ['hola', 'que', 23, 42.33 , 'tal'];

/*
18.- Crear variable de nombre arrayDeArrays declarada 
con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
*/

let arrayDeArrays= [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

/*
19.- Crea la función multiplicacion que acepte como argumento dos números
 y devuelva el resultado de su multiplicación
*/

function multiplicacion(a, b) {
    let result = a*b;
    return result;
}

/*
20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division
*/

function division(a, b) {
    let result = a/b;
    return result;
}

/*
21.- Crea la función esPar que acepte como argumento un número 
y devuelva true si es par y false si es impar
*/

function esPar(num) {
    
    if (num % 2 == 0) {
    return true;
    }else{
        return false;
    }
    }

/*
22.- Crea el array arrayFunciones que tenga como valor
 las funciones: suma, resta y multiplicación 
 (todas aceptan 2 números como argumento y devuelve el resultado de su operación)
*/

function resta(a, b) {
    let result = a - b;
    return result;
}

let arrayFunciones=[suma, resta, multiplicacion];


/*
23.- Crear la función ordenarArray2 que acepta como argumento un array de números
  y devuelva un array ordenado de mayor a menor
*/

function ordenarArray2(nums){
    const sortAsc = (a, b) => b - a;
    nums.sort(sortAsc);
    return nums;

}

/*
24.- Crear la función obtenerImpares que acepta como argumento un array de números
 y devuelva un array con los elementos impares
*/


function obtenerImpares (numbers){
    const oddNumbers = numbers.filter((number) => number % 2 !== 0);
    return(oddNumbers);
}

/*
25.- Crear la función sumarArray que acepte como argumento un array numérico 
y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
*/

function sumarArray(numbers){
let total=0;
for(let i = 0; i < numbers.length; i++) total+=numbers[i];
return(total);
}

/*
26.- Crear la función multiplicarArray que acepte como argumento un array numérico
 y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24 
*/

function multiplicarArray(numbers){
    let total=1;
    for(let i = 0; i < numbers.length; i++) total*=numbers[i];
    return(total);
    }
