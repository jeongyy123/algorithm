//https://school.programmers.co.kr/learn/courses/30/lessons/12903
//가운데 글자 가져오기

function solution(s) {
    let idx = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? (s.substring(idx-1, idx+1)) : (s[idx]); //substring써보고싶었음. 간단하게 s[idx-1]+s[idx]해도됨.
}

const s1 = "abcde"; // 5
const s2 = "qwer"; // 4

console.log(solution(s1));
console.log(solution(s2));