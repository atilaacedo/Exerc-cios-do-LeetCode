/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function(n, languages, friendships) {
    
    const set = new Set();
    
    for(let i  = 0; i < friendships.length; i++){
        const [user1, user2] = friendships[i];

        const langs1 = new Set(languages[user1 -1]);
        const langs2 = new  Set(languages[user2 -1]);
        
        let canCommunicate = false;
        for(const lang of langs1){
            if(langs2.has(lang)){
                canCommunicate = true;
                break;
            }
        }

        if(!canCommunicate){
            set.add(user1 - 1);
            set.add(user2 - 1);
        }
    }

    let max = 0;

    const count = new Array(n + 1).fill(0);
    for(const user of set){
        for(const lang of languages[user]){
            count[lang]++;
            max = Math.max(max, count[lang]);
        }
    }



    return set.size - max;
};