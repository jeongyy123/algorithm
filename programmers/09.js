//https://school.programmers.co.kr/learn/courses/30/lessons/12934
//정수 제곱근 판별

function solution(n) {
    var x = ~~Math.sqrt(n);
    if (x**2 === n ){
        return (x+1)**2
    } else {
        return -1;
    }
}


var n1 = 121;
var n2 = 3;

console.log(solution(n1));
console.log(solution(n2));