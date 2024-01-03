/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let totalBeams = 0;
    let rowBef = 0;

    for(var i = 0; i < bank.length; i++){
        let securityDevice = 0;
        bank[i].split('').forEach((j) => {
            securityDevice += parseInt(j);
        })

        if(securityDevice === 0)
            continue;

        totalBeams += securityDevice * rowBef;
        rowBef = securityDevice;
    }


    return totalBeams;
};

console.log(numberOfBeams(["011001","000000","010100","001000"]))