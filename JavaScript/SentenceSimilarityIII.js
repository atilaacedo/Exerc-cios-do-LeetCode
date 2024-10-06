/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {

   let arrSentence1 = sentence1.split(" ");
   let arrSentence2 = sentence2.split(" ");

   if(arrSentence1.length < arrSentence2.length)
        [arrSentence1, arrSentence2] = [arrSentence2, arrSentence1];

   let i = 0;
   let j = 0;

   while(i < arrSentence2.length && arrSentence1[i] === arrSentence2[i]){
        i++;
   }

   while(j < arrSentence2.length && arrSentence1[arrSentence1.length - j - 1] === arrSentence2[arrSentence2.length - j - 1]){
        j++;    
   }


   return i + j >= arrSentence2.length;


};