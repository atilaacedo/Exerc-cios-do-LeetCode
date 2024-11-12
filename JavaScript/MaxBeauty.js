/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {

    const beautyItems = [];

    items.sort((a,b) => b[1] - a[1]);


     queries.forEach((q) => {
        let iItem = items.findIndex((item) => item[0] <= q);

        if(iItem !== -1)
            beautyItems.push(items[iItem][1]);
        else
            beautyItems.push(0);
     })
    return beautyItems;
};