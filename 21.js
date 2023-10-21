//https://school.programmers.co.kr/learn/courses/30/lessons/12922
//수박수박수박수박수박수?

// function solution(n) {
//     //수, 박 하나씩 선언
//     const su = "수";
//     const bak = "박";
//     let answer = su;
//     //n번씩 수,박 번갈아 반복하기
//     let i = 2; // 3번
//     while (i < n+1) {
//         if ( i % 2 === 0) {
//             answer += bak;
//         } else {
//             answer += su;
//         }
//         i++;
//     }
//     return answer;
// }


//repeat, substring
//String.prototype.substring()
function solution (n) {
    const watermelon = "수박".repeat(5000);
    return watermelon.substring(0, n);
}


const n1 = 3;
const n2 = 4;

console.log(solution(n1));
console.log(solution(n2));