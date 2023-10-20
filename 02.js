// function solution(arr) {
//     var answer = 0;
//     var i = 0;
//     while (i < arr.length) {
//         answer += arr[i];
//     }
//     return answer;
// }

function solution(arr) {
    var answer = 0;
    for (var i=0; i < arr.length; i++) {
        answer += arr[i];
    }
    return answer/arr.length;
}

var arr1 = [1, 2, 3, 4];
var arr2 = [5, 5];

console.log(solution(arr1))
console.log(solution(arr2))