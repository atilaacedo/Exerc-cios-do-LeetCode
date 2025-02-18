/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    const ans = [];
    const stack = [];
    let num = 1;

    for(let i = 0; i <= pattern.length; i++){
        stack.push(num);
        num++;

        if(i === pattern.length || pattern[i] === 'I'){
            while(stack.length > 0){
                ans.push(stack.pop());
            }
        }
    }
    return ans.join('');
};