//https://school.programmers.co.kr/learn/courses/30/lessons/77884
//약수의 개수와 덧셈

// function solution(left, right) {
//     //1. left ~ right 배열만들기
//     let arr = [];
//     for (let i = left; i < right + 1; i++) {
//         arr.push(i)
//     }
//     console.log(arr) //[ 13, 14, 15, 16, 17 ]
//     //----------------------------------------------------
//     //2. 1에서 나온 수들의 약수 구하기
//     let answer = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 1; j < arr[i] + 1; j++) {
//             if (arr[i] % j === 0) { //약수 찾는 조건문
//                 count++ //약수의 개수
//                 console.log("--------------")
//                 console.log(`${arr[i]}의 약수: ${j}`)
//             } else {
//                 continue;
//             }
//         }
//         console.log("count의 합계", count);
//         if (count % 2 !== 0) {
//             console.log("홀수arr[i]", arr[i])
//             answer -= arr[i]
//             console.log("홀수합계", answer)
//         } else {
//             console.log("짝수arr[i]", arr[i])
//             answer += arr[i];
//             console.log("짝수합계", answer)
//         }
//     }
//     return answer
// }

//답안
// function solution(left, right) {
//     let arr = [];
//     for (let i = left; i < right + 1; i++) {
//         arr.push(i)
//     } // [13,14,15,16,17]
//     let answer = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0; //2, 4, 4, 6, 2
//         for (let j = 1; j < arr[i] + 1; j++) {
//             if (arr[i] % j === 0) {
//                 count++;
//             } else {
//                 continue;
//             }
//         }
//         (count % 2 !== 0) ? answer -= arr[i] : answer += arr[i];
//     }
//     return answer
// }


//제곱근으로 풀기 : 🧠제곱근이 정수면 약수의 개수가 홀수.(천재만재)🧠
function solution (left, right) {
    let answer = 0;
    for (let i = left; i < right+1; i++){
        if (Number.isInteger(Math.sqrt(i))){
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

const left1 = 13;
const left2 = 24;

const right1 = 17;
const right2 = 27;

console.log(solution(left1, right1));
console.log(solution(left2, right2));