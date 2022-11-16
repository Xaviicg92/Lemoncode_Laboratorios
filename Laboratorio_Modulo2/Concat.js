/**
 * AUTHOR : JAVIER CAMBÓN GANDARIAS
 */


let array1 = [1, 2, 3];
let array2 = [3, 5, 7];
let array3 = [9, 5, 6];
let array4 = [7, 2, 10, 8, 23, 8];



// APARTADO A
const concat = (a, b) => [...a, ...b]; 
console.log("Resultado apartado A: ", concat(array1, array2));



// APARTADO B

const concatBetter = (...num) => {
    let resultado = [];
    for (const arg of num) {
        for (const element of arg){
            resultado.push(element);
        }
      }

      return resultado;
};

console.log ("Resultado apartado B: ", concatBetter(array1, array2, array3, array4));






