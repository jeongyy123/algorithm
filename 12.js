//https://school.programmers.co.kr/learn/courses/30/lessons/12912
//두 정수 사이의 합
function solution(a, b) {
    let answer = 0;
    if (a < b) {
        for (let i=a; i<b+1; i++){
            answer += i;
        }
    } else {
        for (let i=b; i<a+1; i++){
            answer += i;
        }
    }
    return answer;
}

// 등차수열의 합 (a1 + b1) * |a1-b1+1| / 2 
// function solution(a,b){
//     return (a+b) * (Math.abs(a-b)+1) / 2;
// };

const a1 = 3;
const a2 = 3;
const a3 = 5;

const b1=5;
const b2=3;
const b3=3;

console.log(solution(a1, b1));
console.log(solution(a2, b2));
console.log(solution(a3, b3));