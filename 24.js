//https://school.programmers.co.kr/learn/courses/30/lessons/12917
//문자열 내림차순으로 배치하기

function solution(s) {
    return s.split("").sort((a,b) => a<b ? 1:-1).join("");
}

//이건 왜 안되는거지?
// function solution(s) {
//     return s.split("").sort((a,b) => b-a).join("");
// }

// console.log(solution(s1));

let s1 = "Zbcdefg";
console.log(s1.split("").sort(function(a,b) {
    return b-a;
}));