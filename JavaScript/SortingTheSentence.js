/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {

    const arrS = s.split(" ").sort((a,b) => {
        const posA = parseInt(a.charAt(a.length-1));
        const posB = parseInt(b.charAt(b.length-1));

        return posA - posB;
    });


    return arrS.map( word => word.replace(/\d$/, "")).join(" ");
};