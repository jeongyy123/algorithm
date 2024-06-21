function solution(n, k) {
    let answer = [];

    for (let i = 1; i <= n; i++) {
        if (i % k === 0) answer.push(i)
    }
    return answer;
}

const n1 = 10;
const n2 = 15

const k1 = 3;
const k2 = 5;

console.log(solution(n1, k1))
console.log(solution(n2, k2))