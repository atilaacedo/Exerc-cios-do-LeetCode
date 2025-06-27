/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function (s, k) {

    let ans = "";

    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        ans += c;


        const dec = parseInt(ans, 2);

        if (dec > k) {
            ans = ans.replace("1", "");
            continue;
        }

        longest = Math.max(ans.length, longest);
    }



    return longest;
};

