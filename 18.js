//https://school.programmers.co.kr/learn/courses/30/lessons/86051
//없는 숫자 더하기
//반복문 사용
// function solution(numbers) {
//     let answer = 0;
//     for (let i =0; i<10; i++){
//         if (numbers.includes(i)){
//             continue;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }

//reduce (0~9의 합계에서 리스트안에 있는 숫자의 합 빼주기)
function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc+cur, 0);
}

const n1 = [1,2,3,4,6,7,8,0];
const n2 = [5,8,4,0,6,7,9];

console.log(solution(n1));
console.log(solution(n2));