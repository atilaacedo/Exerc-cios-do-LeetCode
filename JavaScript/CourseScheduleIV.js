/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    const mapPrerrequisites = new Map();

    for (const prerequisite of prerequisites) {

        const m1 = prerequisite[0];
        const m2 = prerequisite[1];

        if (!mapPrerrequisites.has(m1)) {
            mapPrerrequisites.set(m1, new Array());
        }

        mapPrerrequisites.get(m1).push(m2);
    }

    const ans = [];

    for (const querie of queries) {
        const visited = [];

        ans.push(isPrerrequisite(mapPrerrequisites, visited, querie[0], querie[1]));
    }

    return ans;
};

const isPrerrequisite = (mapPrerrequisites, visited, m1, m2) => {
    visited[m1] = true;

    if (m1 === m2)
        return true;

    let ans = false;

    let neighbors = [];
    if (mapPrerrequisites.has(m1))
        neighbors = mapPrerrequisites.get(m1);



    for (const adj of neighbors) {
        if (!visited[adj]) {
            ans = ans || isPrerrequisite(mapPrerrequisites, visited, m1, m2);
        }
    }

    return ans;
}