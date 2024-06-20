//자릿수 더하기
function solution (n) {
    var answer = 0;
    var newN = String(n);

    for (var i = 0; i < newN.length; i++) {
        answer += Number(newN[i]);
    }
    return answer;
}

//reduce 이용
// function solution (n) {
//     return String(n).split("").reduce((acc, cur) => acc + cur*1, 0);
// }

function solution (n) {
    var a = String(n).split("");
    console.log(a)
}

var n1 = 123
console.log(solution(n1));