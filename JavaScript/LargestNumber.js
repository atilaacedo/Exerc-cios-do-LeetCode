/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    
    nums = nums.map((num) => num.toString());

    nums.sort((a,b) => (b+a) - (a+b));

   return nums[0] === '0' ? '0' : nums.join("");
};

//largestNumber([3,30,34,5,9]);
largestNumber([432,43243])

// /**
//  * @param {number[]} nums
//  * @return {string}
//  */
// var largestNumber = function(nums) {
    
//     let largestNum = "";

//     nums.sort((a, b) => {
//         let strNA = a.toString();
//         let strNB = b.toString();
        
//         let maxLength = Math.max(strNA.length, strNB.length);
//         strNA = strNA.split('').sort((a,b) => parseInt(b) - parseInt(a)).join("");
//         strNB = strNB.split('').sort((a,b) => parseInt(b) - parseInt(a)).join("");
        
//         let nA = parseInt(strNA.charAt(0));
//         let nB = parseInt(strNA.charAt(0));
        
//         let i = 0;
//         let j = 0 ;
       
//         while(nA == nB ){
//             nA = parseInt(strNA.charAt(i));
//             nB = parseInt(strNB.charAt(j));
          
//             if(strNA.length !== i+1 || strNA.length == maxLength)
//                 i++
            
//             if(strNB.length !== j+1 || strNB.length == maxLength)
//                 j++;
//             if((i || j) > maxLength)
//                 break;
            
//         }
  
//         return nB - nA;      
//     });

//     largestNum = nums.join("");
//     console.log(largestNum);
//     return largestNum;
// };
