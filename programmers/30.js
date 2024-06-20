//https://school.programmers.co.kr/learn/courses/30/lessons/68935
//3진법 뒤집기

function solution(n) {
    let a = n.toString(3).split("").reverse().join("");
    return Number.parseInt(a, 3);
}

let n1 = 45;
let n2 = 125;

console.log(solution(n1));
console.log(solution(n2));

