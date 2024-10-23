/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    if(k === 0)
        return code.fill(0);


    let orCode = [...code];

    let index = 1;
    for(let i = 0; i < code.length; i++){
        let count = 0;
        k > 0 ? index = i + 1: index = i -1;
        let sum = 0;
        while(count < Math.abs(k)){
            if(index > code.length -1 || index < 0){
                k > 0 ? index = 0 : index = code.length-1;
            }
            sum += orCode[index];
            count++;

            k> 0? index++ : index--;;
        }

        code[i] = sum;


    }

    return code;
};