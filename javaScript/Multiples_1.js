/* '''

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.


* Si listamos todos los número naturales por debajo de 10 que son multiplo sde 3 o 5,  tenemos 3,5,6,9
La suma de esos multiplos es 23, encontrar la suma de todos los multiplos por debajo de 1000

''' */

const multiples =[]
for(let step = 0; step<1001; step ++){
    /* console.log("Voy en el ...", step) */
    if (step%3 == 0 || step%5 == 0){
        multiples.push(step)
    }
}

const suma_multiples = multiples.reduce(function(a, multiples){
    return a +  multiples
})



function sumArray(a){
    var total = 0;
    for(let i in a){
        total += a[i];
    }
    return total;
}


/* Suma con funci{on} */
console.log(sumArray(multiples))

/*  Suma con reduce */
console.log(suma_multiples)