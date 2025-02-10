/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    while (/\d/.test(s)) {
        const digitIndex = s.search(/\d/);

        let nonDigitIndex = -1;
        for (let i = digitIndex - 1; i >= 0; i--) {
            if (!/\d/.test(s[i])) {
                nonDigitIndex = i;
                break;
            }
        }

        if (nonDigitIndex !== -1) {
            s = s.slice(0, nonDigitIndex) + s.slice(digitIndex + 1);
        } else {
            s = s.slice(0, digitIndex) + s.slice(digitIndex + 1);
        }
    }

    return s;
};