/**
 * @param {string} date
 * @return {number}
 */

var dayOfYear = function(date) {
    const daysOfMonths = [
        {mes: 1, dias: 31}, 
        {mes: 2, dias: 28}, 
        {mes: 3, dias: 31}, 
        {mes: 4, dias: 30}, 
        {mes: 5, dias: 31}, 
        {mes: 6, dias: 30}, 
        {mes: 7, dias: 31}, 
        {mes: 8, dias: 31}, 
        {mes: 9, dias: 30}, 
        {mes: 10, dias: 31}, 
        {mes: 11, dias: 30},
        {mes: 12, dias: 31} 
    ];
    const dateFormat = date.split('-');
    const year = parseInt(dateFormat[0]);
    let days = 0;
    const month = parseInt(dateFormat[1]);
    for(let i = 0; i < month; i++){
        if(i === (month - 1)){
            days += parseInt(dateFormat[2]);
            break;
        }
        days += daysOfMonths[i].dias;
    }

    if((year % 4 === 0) && month > 2){
        if(year % 100 === 0){
            if(year % 400 === 0){
                days++;
            }
        }else{
            days++;
        }
    }


    return days;
};


console.log(dayOfYear("1992-09-14"))
console.log(dayOfYear("2012-01-02"))
console.log(dayOfYear("1900-05-02"))


