//https://school.programmers.co.kr/learn/courses/30/lessons/12943
//콜라츠 추측
// 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 

function solution(num) {
    let count = 0;
    while (num > 1) {
        if ( num % 2 === 0) {
            num = num / 2;
            count++;
        } else {
            num = num*3 + 1;
            count++;
        }
    }
    return (count > 500)? -1 : count;
}


const n1 = 6;
const n2 = 16;
const n3 = 626331;

console.log(solution(n1));
console.log(solution(n2));
console.log(solution(n3));