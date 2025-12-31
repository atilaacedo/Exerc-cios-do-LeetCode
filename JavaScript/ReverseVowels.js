/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let reverseS = "";
  
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
  const vowelInStr = [];
  
  for (let i = 0; i < s.length; i++){
    if(vowels.includes(s.charAt(i))){
      vowelInStr.push(s.charAt(i));
    }
  }
  
  let j = vowelInStr.length - 1;
  for (let i = 0; i < s.length; i++){
    if(vowels.includes(s.charAt(i))){
      reverseS += vowelInStr[j--];
      continue;
    }
    reverseS += s.charAt(i);
  }
  
  return reverseS;
};
