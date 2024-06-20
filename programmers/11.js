//https://school.programmers.co.kr/learn/courses/30/lessons/12947
//하샤드 수

//문자풀이
// function solution(x){
//     var n = (x+"").split("").reduce((acc, cur) => acc+cur*1, 0)//x의 자릿수들을 다 더한 값

//     if (x % n === 0) {
//         return true; //하샤드 수
//     } else {
//         return false;
//     }
// }

//숫자풀이 
function solution(x){
    var n = 0; //x의 자릿수들을 다 더한 값
    var originX = x; //do-while을 통해 나온 x는 변질됨. -> 원본유지를 위해 만든 변수.

    do{
        n += (x%10);
        x = Math.floor(x/10);
    } while(x>0)
    
    if (originX % n === 0) {
        return true; //하샤드 수
    } else {
        return false;
    }
}

var x1 = 10;
var x2 = 12;
var x3 = 11;
var x4 = 13;
var x5 = 100;
var x6 = 131;

console.log(solution(x1)); //true
console.log(solution(x2)); //true
console.log(solution(x3)); //false
console.log(solution(x4)); //false
console.log(solution(x5)); //true
console.log(solution(x6)); //false