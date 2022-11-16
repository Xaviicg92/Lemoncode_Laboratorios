/**
 * AUTHOR : JAVIER CAMBÓN GANDARIAS
 */

 var myArray = [5,6,8,2,1,4,7];

// APARTADO A

 const head = ([_first]) => _first; 

 console.log("head: ", head(myArray));


// APARTADO B

const tail = ([, ...nums]) => nums;
console.log("tail: " , tail(myArray));


// APARTADO C

const init = (array) => array.slice(0,(array.length-1));
console.log("init: ", init(myArray));




// // APARTADO D

const last = (array) => array.slice(-1).shift();
//const last = (array) => array.slice(-1).toString(); //Otra forma
console.log("last: ", last(myArray)); 
