//https://school.programmers.co.kr/learn/courses/30/lessons/70128
//내적
// function solution(a, b) {
//     let answer = 0;
//     let i = 0;
//     while (i < a.length) {
//         answer += a[i]*b[i]
//         i++;
//     }
//     return answer;
// }

function solution (a,b) {
    return a.reduce((acc, _, idx) => acc += a[idx]*b[idx], 0)
}

const a1 = [1,2,3,4];
const a2 = [-1,0,1];

const b1 = [-3,-1,0,2];
const b2 = [1,0,-1];

console.log(solution(a1, b1)); // 3
console.log(solution(a2, b2));// -1