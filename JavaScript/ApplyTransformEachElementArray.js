/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const arrAux = [];


    arr.forEach((element, i) =>{
        arrAux.push(fn(element, i));
    })

    return arrAux
};