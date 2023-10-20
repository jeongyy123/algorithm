//https://school.programmers.co.kr/learn/courses/30/lessons/12932
//자연수 뒤집어 배열로 만들기

// function solution(n) {
//     //숫자 -> 문자 -> 배열 String().split("")
//     //문자를 배열 뒤집기 reverse()
//     var arr = String(n).split("")
//     return arr.map( i => Number(i)).reverse()
// }

//형변환( 문자*숫자 = 숫자 )
function solution(n) {
    var arr = String(n).split("")
    return arr.map(a => a*1).reverse()
}

//다른 사람 풀이 ( 문자+숫자 = 문자 )
// function solution(n) {
//     return (n+"").split("").reverse().map(v => parseInt(v));
// }

var n1 = 12345;

console.log(solution(n1));// [5,4,3,2,1]
