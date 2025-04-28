    /**
     * @param {string} s
     * @return {number}
     */
    var lengthOfLongestSubstring = function(s) {
        
        let ans = "";
        let aux = "";

        let map = new Map();
        let iAux = 0;
        for(let i = 0; i < s.length; i++){
            c = s.charAt(i);
            aux += c;
            const index = map.get(c);
        
            if(index === undefined){
                map.set(c, iAux);
                iAux++;
            }else{
                aux = aux.substring(index+1, aux.length);

                const auxMap = new Map();
                for(let j = 0; j < aux.length; j++){
                    const ch = aux.charAt(j);
                    auxMap.set(ch, j);
                }
                iAux = aux.length;

                map = auxMap;
            }

            if(ans.length < aux.length){
                ans = aux;
            }
        }

        return ans.length;
    };