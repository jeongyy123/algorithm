//https://school.programmers.co.kr/learn/courses/30/lessons/12918
//문자열 다루기 기본

function solution(s) {
    //Number() : s에 숫자만 있으면 숫자, 아니면 NaN. 
    //Number.isInteger : NaN은 false, 숫자는 true 
    // 1. 길이가 4이거나 6인거 true 
    // 2. s가 숫자로만 이루어져있으면 true
    // console.log(`${s}의 길이 :${s.length}`); 
    if ( s.length === 4 || s.length ===6 ){
        if (Number.isInteger(parseInt(s))) {
            return true;
        } else {
            return false;
        }
    } else {
        false;
    }
}

let s1 = "a234";
let s2 = "1234";
let s3 = "12329874";
let s4 = "0xA"; //16진수
let s5 = "4A"; //16진수
let s6 = "0bA"; //2진수
let s7 = "A"; //아스키코드

console.log(solution(s1)); //false
console.log(solution(s2)); //true
console.log(solution(s3)); //true
console.log(solution(s4)); // flase
console.log(solution(s5)); // false
console.log(solution(s6)); // false
console.log(solution(s7)); // false