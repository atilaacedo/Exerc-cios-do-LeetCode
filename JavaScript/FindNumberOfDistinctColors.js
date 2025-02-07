/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
   
    const result = [];
    const colorsMap = new Map();
    const colorCount = new Map();
    const distinctColors = new Set();


    for(const [ball, color] of queries){
        if(colorsMap.has(ball)){
            const targetColor = colorsMap.get(ball);

            colorCount.set(targetColor, colorCount.get(targetColor) - 1);

            if(colorCount.get(targetColor) === 0)
                distinctColors.delete(targetColor);
        }

        colorsMap.set(ball, color);
        colorCount.set(color, (colorCount.get(color) || 0) + 1);
        distinctColors.add(color);

        result.push(distinctColors.size);
    }

  

    return result;
}; 