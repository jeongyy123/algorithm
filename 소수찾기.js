//https://school.programmers.co.kr/learn/courses/30/lessons/12921
//소수 찾기
//시간초과
function solution(n) {
    //소수: 1과 자신의 숫자로만 나누어지는 수
    //1은 소수가 아님
    const arr = [];
    
    for (let i = 1; i < n+1; i++) {
        let count = 0;
        for (let j = 1; j < n+1; j++) {
            if ( i % j === 0) count++;
        }
        if (count === 2 ) arr.push(i);
    }
    return arr.length;
}

let n1 = 10;
let n2 = 5;

console.log(solution(n1));
console.log(solution(n2));