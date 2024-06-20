//https://school.programmers.co.kr/learn/courses/30/lessons/12926
//시저 암호

function solution(s, n) {
    let answer = "";
    let arr = s.split("") // ["A","B"]
    let arrAscii = arr.map((value) => value.charCodeAt())
    
    for (let i = 0; i < arrAscii.length; i++) {
        if (64 < arrAscii[i] && arrAscii[i] < 91 ) {
            arrAscii[i] += n;
            if (arrAscii[i] > 90) arrAscii[i] -= 26;
        } else if (96 < arrAscii[i] && arrAscii[i] < 123){
            arrAscii[i] += n;
            if (arrAscii[i] > 122) arrAscii[i] -= 26;
        }
    }
    answer = arrAscii.map(val => String.fromCharCode(val))
    return answer.join("")
}

let s1 = "AB";
let s2 = "z";
let s3 = "a B z"; 

let n1 = 1;
let n2 = 1;
let n3 = 4;


// console.log(solution(s1, n1)); //"BC"
// console.log(solution(s2, n2)); //"a"
console.log(solution(s3, n3)); //"e F d"

//문자 -> 아스키코드 : 문자.charCodeAt()
//아스키코드 -> 문자 : String.fromCharCode(문자)
// console.log(String.fromCharCode("A".charCodeAt()))