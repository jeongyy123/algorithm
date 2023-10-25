
//Set -> 베열 -> 정렬
function solution(numbers) {
    //numbers의 배열을 돌려서 두 개를 더하기 => answer 배열에 값 넣기
    //중복값이 없도록.(answer를 set으로 만들자)_set을 Array.from()으로 변경 후 오름차정렬
    let answer = new Set();
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.add(numbers[i] + numbers[j])
        }
    }
    return Array.from(answer).sort((a, b) => a - b);
}

//다른사람: 배열 -> Set -> 배열 -> 정렬
// function solution(numbers) {
//     const temp = []
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             temp.push(numbers[i] + numbers[j])
//         }
//     }
//     const answer = [...new Set(temp)] //spread operator 사용
//     return answer.sort((a, b) => a - b)
// }

const numbers1 = [2, 1, 3, 4, 1];
const numbers2 = [5, 0, 2, 7];

console.log(solution(numbers1));
console.log(solution(numbers2));
