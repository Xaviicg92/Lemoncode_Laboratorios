/**
 * AUTHOR : JAVIER CAMBÓN GANDARIAS
 */

var Person = {
    name: "Javier",
    surname: "Cambón",
    country: "España"
}


// APARTADO A

// PRIMERA FORMA

function clone(source) {
    let clone = {...source};
    return clone;
  }
  console.log("Resultado apartado a: ", clone(Person));

// SEGUNDA FORMA

// function clone(source) {
//     var clone;
//     clone = (typeof source === "object") ? Object.assign({}, source) : "No has introducido un objeto";
//     return clone;
//   }

// var number = 2;
// console.log(clone(number));
// console.log(clone(Person));


// TERCERA FORMA

// function clone(source) {
//     var clone = {};
//     for (const property in source) {
//         clone[property] = source[property];
//     }
//     clone = (typeof source === "object") ? clone : "No has introducido un objeto";
//     return clone;
// }



// var number = 2;
// console.log(clone(number));
// console.log("Resultado apartado a: ", clone( Person));


// APARTADO B

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
    var sourceObj = clone(source);
    var targetObj = clone(target)
    var merge = Object.assign(sourceObj, targetObj);
    return merge;
  }

 var result = merge(b,a);
 console.log ("Resultado apartado b: ", result);
