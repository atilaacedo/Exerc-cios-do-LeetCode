/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    
    const C = [];

    const mapA = new Set();
    const mapB = new Set();
    const commons = new Set();

   

    for(let i = 0; i < A.length; i++){
        mapA.add(A[i]);
        mapB.add(B[i]);

        if(A[i] === B[i]){
            commons.add(A[i]);
        }
       
        if(mapA.has(B[i])){    
            commons.add(B[i]);
        }
     
        if(mapB.has(A[i])){  
            commons.add(A[i]);
        }
       

        C.push(commons.size);

    }


    return C;
};