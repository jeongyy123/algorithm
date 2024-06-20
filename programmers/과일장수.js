//score를 내림차로 정렬 => slice로 m개씩 잘라
//자른게 length가 m이면 => Math.min()으로 최저가격 찾아 m을 곱해 => answer에 합해
//자른게 length가 m이면 break;
//시간 초과
function solution(k, m, score) {
    let answer = 0;
    let sortedSc = score.sort((a, b) => b - a);
    while (sortedSc.length >= m) {
        answer += Math.min(...sortedSc.slice(0, m)) * m
        sortedSc.splice(0, m)
    }
    return answer;
}

//시간개선
function solution(k, m, score) {
    let answer = 0;
    let sortedSc = score.sort((a, b) => b - a);
    if (score)
    while (sortedSc.length >= m) {
        answer += Math.min(...sortedSc.slice(0, m)) * m
        sortedSc.splice(0, m)
    }
    return answer;
}


let k1 = 3;
let k2 = 4;

let m1 = 4;
let m2 = 3;

let score1 = [1, 2, 3, 1, 2, 3, 1];
let score2 = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

console.log(solution(k1, m1, score1)); //8
console.log(solution(k2, m2, score2));//33

