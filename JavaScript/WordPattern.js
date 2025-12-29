/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const arrS = s.split(' ');
  
  if (arrS.length != pattern.length) return false;
  
  const map = new Map();
  
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = arrS[i];
    
    if (!map.has(char)) {
      if (Array.from(map.values()).includes(word)) return false;
      map.set(char, word);
    } else if (map.get(char) !== word) return false;
  }
  
  return true;
};
