//https://school.programmers.co.kr/learn/courses/30/lessons/12918
//문자열 다루기 기본
//Number() : s에 숫자만 있으면 숫자, 아니면 NaN.
//Number.isInteger : NaN은 false, 숫자는 true
//isNaN : Not a Number. 숫자면 false / 아니면 true

function solution(s) {
    let arr = s.split("")
    let answer = "";
    if (arr.length === 4 || arr.length === 6) {
        for (let i = 0; i < arr.length; i++) {
            if ( isNaN(arr[i])) {
                answer = false;
                break;
            } else { 
                answer = true;
            }
        }
    } else {
        answer = false;
    }
    return answer;
}
// 배열의 길이가 4 또는 6이어야한다.
// 배열 중 하나라도 문자가 있으면 false



// Number.isInteger(parseInt(val)) ? true : false
let s1 = "a234";
let s2 = "1234";
let s3 = "12329874";
let s4 = "0x16"; 
let s5 = "4A"; 
let s6 = "0bA"; 
let s7 = "4567";

console.log(solution(s1)); //false
console.log(solution(s2)); //true
console.log(solution(s3)); //flase
console.log(solution(s4)); // flase
console.log(solution(s5)); // false
console.log(solution(s6)); // false
console.log(solution(s7)); // true