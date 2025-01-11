/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a-b);

    let minAbs = Math.abs(arr[0] - arr[1]);

    const ans = [];
    ans.push([arr[0], arr[1]]);

    if(arr.length === 2)
        return ans;

    for(let i = 1; i < arr.length-1; i++ ){
        const diff = Math.abs(arr[i] - arr[i+1]);
       

        if(diff < minAbs){
            ans = [];
            minAbs = diff;
            ans.push([arr[i], arr[i+1]]);
        }else if(diff === minAbs){
            ans.push([arr[i], arr[i+1]]);
        }

    }


    return ans;
};