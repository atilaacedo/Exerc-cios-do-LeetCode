/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

    let arrSorted = [...arr].map((n, i) => {
        return {
            index: i,
            num : n
        }
    }).sort((a,b) => b.num-a.num);
    console.log(arrSorted);
    for(let i = 0; i < arr.length; i++){
        if(i === arr.length -1){
           
            arr[i] = -1;
            break;
        }

        let j = 0;
        while(true){
            if(i < arrSorted[j].index){
               
                arr[i] = arrSorted[j].num;
                break;
            }else{
                j++;
            }
        }
    }


    return arr;
};