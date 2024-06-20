//https://school.programmers.co.kr/learn/courses/30/lessons/131705
//삼총사
// 한 배열의 세 요소를 더해서 0이 나오는 갯수 확인 count
// 3번의 반복문
// function solution(numbers) {


//     let count = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             for (let k = j + 1; k < numbers.length; k++) {
//                 numbers[i] + numbers[j] + numbers[k] === 0 ? count++ : 0
//             }
//         }
//     }
//     return count
// }

//다른 사람 방법 => 이해가 안간다..!
function solution(number) {
    let result = 0;

    const combination = (current, start) => { 
        if (current.length === 3) {
            result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
            return;
        }

        for (let i = start; i < number.length; i++) { // i =4
            combination([...current, number[i]], i + 1);  // com([-2,3], 5)
        }
    }
    combination([], 0);
    return result;
}


const number1 = [-2, 3, 0, 2, -5];
const number2 = [-3, -2, -1, 0, 1, 2, 3];
const number3 = [-1, 1, -1, 1];

console.log(solution(number1));
console.log(solution(number2));
console.log(solution(number3));
