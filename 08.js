//https://school.programmers.co.kr/learn/courses/30/lessons/12925
//문자열을 정수로 바꾸기
//Number()이용
function solution(s) {
    return Number(s);
}


//다른 사람 코드( 문자/숫자 = 숫자 )
// function solution(s) {
//     return s/1;
// }
var s1 = "1234"; //1234
var s2 = "-1234" //-1234

console.log(solution(s1));
console.log(solution(s2));
