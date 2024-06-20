//https://school.programmers.co.kr/learn/courses/30/lessons/12954
//x만큼 간격이 있는 n개의 숫자
//반복문 사용 -1 
function solution(x, n) {
    var answer = [];
    //x부터 x만큼씩 늘어가는 숫자 n개의 배열 출력
    for(var i=0; i<n; i++){
        answer.push(x+x*i)
    }
    return answer;
}
//반복문 사용 -2 (반복문 내 조건변경)
function solution(x, n) {
    var answer = [];
    //x부터 x만큼씩 늘어가는 숫자 n개의 배열 출력
    for(var i=1; i<n+1; i++){
        answer.push(x*i)
    }
    return answer;
}

var x1 = 2;
var x2 = 4;
var x3 = -4;

var n1 = 5;
var n2 = 3;
var n3 = 2;

console.log(solution(x1, n1)); // [2,4,6,8,10]
console.log(solution(x2, n2)); // [4,8,12]
console.log(solution(x3, n3)); // [-4, -8]