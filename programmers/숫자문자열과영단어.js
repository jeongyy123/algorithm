//https://school.programmers.co.kr/learn/courses/30/lessons/81301
//숫자문자열과영단어

// function solution(s) {
//     
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "z" && s[i + 1] === "e") {
//             s.replace(i,i+4, "0")
//         } else if (s[i] === "o" && s[i + 1] === "n") {
//             s.replace(i,i+3, "1")
//         } else if (s[i] === "t" && s[i + 1] === "w") {
//             s.replace(i,i+3, "2")
//         } else if (s[i] === "t" && s[i + 1] === "h") {
//             s.replace(i,i+5, "3")
//         } else if (s[i] === "f" && s[i + 1] === "o") {
//             s.replace(i,i+4, "4")
//         } else if (s[i] === "f" && s[i + 1] === "i") {
//             s.replace(i,i+4, "5")
//         } else if (s[i] === "s" && s[i + 1] === "i") {
//             s.replace(i,i+3, "6")
//         } else if (s[i] === "s" && s[i + 1] === "e") {
//             s.replace(i,i+5, "7")
//         } else if (s[i] === "e" && s[i + 1] === "i") {
//             s.replace(i,i+5, "8")
//         } else if (s[i] === "n" && s[i + 1] === "i") {
//             s.replace(i,i+4, "9")
//         }
//     }
//     return s
// }


function solution (s) {
    //영어+숫자, 숫자+영어, 영어+영어, 숫자+숫자 골라서 자르기
    
}


const s1 = "one4seveneight";
const s2 = "23four5six7";
const s3 = "2three45sixseven";
const s4 = "123";


console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));


// let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
// let numbers = ["ze", "on", "tw", "th","fo","fi","si","se","ei", "ni"];
//4 3 3 5 4 4 3 5 5 4
// for (const number of numbers) { //for~in : 인덱스가 나옴, for of : 요소가 나옴
//     console.log(number)
// }


