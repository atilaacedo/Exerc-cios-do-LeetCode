/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {

  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const a = s.substring(0, s.length/2);
  const b = s.substring(s.length/2, s.length);

  let vowelsA = 0;
  let vowelsB = 0;

  for(let i =0; i < a.length; i++){
    if(vowels.includes(a.charAt(i)))
        vowelsA++;

    if(vowels.includes(b.charAt(i)))
        vowelsB++;
  }


  return vowelsA === vowelsB
};


console.log(halvesAreAlike('book'))