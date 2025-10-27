/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let totalBeams = 0;
    let rowBef = 0;

    for(var i = 0; i < bank.length; i++){
        let securityDevice = bank[i].split('').reduce((acc, curr) => curr === '1' ? acc + 1: acc, 0 );

        if(securityDevice === 0)
            continue;

        totalBeams += securityDevice * rowBef;
        rowBef = securityDevice;
    }

    return totalBeams;
};
