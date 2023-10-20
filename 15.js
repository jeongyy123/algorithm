//https://school.programmers.co.kr/learn/courses/30/lessons/12910
//나누어 떨어지는 숫자 배열

// function solution(arr, divisor) {
//     let answer = [];
//     for (let i =0; i<arr.length; i++){
//         if (arr[i] % divisor === 0){
//             answer.push(arr[i])
//         } else {
//             if(answer.length === 0){
//                 answer = [-1];
//             }
//         }
//     }
//     return answer.sort((a,b) => a-b);
// }

function solution(arr, divisor) {
    let answer = [];
    for (number of arr) {
        (number % divisor === 0) ? answer.push(number) : ((answer.length === 0)? answer = [-1] : answer)
    }
    return answer.sort((a,b) => a-b);
}


const arr1 = [5, 9, 7, 10];
const arr2 = [2, 36, 1, 3];
const arr3 = [3, 2, 6];

const divisor1 = 5;
const divisor2 = 1;
const divisor3 = 10;

console.log(solution(arr1, divisor1)); //[ 5, 10 ]
console.log(solution(arr2, divisor2)); //[ 1, 2, 3, 36 ]
console.log(solution(arr3, divisor3)); //[ -1 ]
