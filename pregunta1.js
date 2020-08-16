
/**
 * 
 * @param {number[]} integers 
 */
function findOutlier(integers) {
    // Verificacion de que el arreglo tenga 3 elementos minimo
    if(integers.length < 3) { return false }

    const pares = []
    const impares = []

    // Se compara cada elemento del arreglo
    // El numero se movera depeniendo si el resto de la division sea cero (par)
    integers.forEach(numero => {
        if (numero % 2 == 0) { pares.push(numero) }
        else { impares.push(numero) }
    });

    // Se comparan ambos arreglos para ver cual de ellos solo tiene 1 elemento que corresponde al 'outlier'
    // Si ambos no tienen solo 1 elemento el 'outlier' no existe en el arreglo original
    if(pares.length == 1) { return pares[0] }
    else if(impares.length == 1) {  return impares[0] }
    
    return false
}


const test1 = [2, 4, 0, 100, 4, 11, 2602, 36]
const test2 = [160, 3, 1719, 19, 11, 13, -21]

console.assert(findOutlier(test1) == 11)
console.assert(findOutlier(test2) == 160)
