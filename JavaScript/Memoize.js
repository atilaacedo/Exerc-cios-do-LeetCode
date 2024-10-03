/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cacheFn = new Map();
    return function(...args) {
        const arrParams = JSON.stringify(args);

        if(cacheFn.has(arrParams)){
            return cacheFn.get(arrParams);
        }else{
            const result = fn(...args);
            cacheFn.set(arrParams, result);
           
            return result;
        }


    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */