//https://school.programmers.co.kr/learn/courses/30/lessons/76501
//음양 더하기

function solution (a, b) {
    let answer = 0;
    for (let i = 0; i < b.length; i++){
        (b[i]) ? answer += a[i] : answer -= a[i];
    }
    return answer;
}

//reduce 이용
// function solution (a, b) {
//     return a.reduce((acc, cur, idx) =>  acc + (cur * (b[idx] ? 1: -1)), 0);
// }

// const a1 = [4,7,12];
// const a2 = [1,2,3];

// const s1 = [true,false,true];
// const s2 = [false,false,true];

// console.log(solution(a1, s1))
// console.log(solution(a2, s2))
