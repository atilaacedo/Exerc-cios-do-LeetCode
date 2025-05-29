    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    var addStrings = function(num1, num2) {
        
        let ans = [];

        const maxLength = Math.max(num1.length, num2.length);
       
        num1 = num1.padStart(maxLength, '0');
        num2 = num2.padStart(maxLength, '0');

        let carry = 0;
       
        for(let i = maxLength-1; i >= 0 ; i--){
            
            const sum =  (parseInt(num1.charAt(i)) + parseInt(num2.charAt(i)) + carry).toString();
            carry = 0;
            if(sum.length > 1){
                ans.push(sum.charAt(1));
                carry++;

                continue;
            }


            ans.push(sum);
            
        }

        if(carry == 1)
            ans.push(carry);



        return ans.reverse().join('');
    };