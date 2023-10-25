//https://school.programmers.co.kr/learn/courses/30/lessons/42748
//K번째수
function solution(array, commands) {
    //commands의 i, j, k숫자빼기
    //array를 slice자르기 => 정렬하기 => k번째 숫자 answer에 넣기
    let answer = [];
    for (let idx =0; idx < commands.length; idx++){
        let i = commands[idx][0]
        let j = commands[idx][1]
        let k = commands[idx][2]
        answer.push(array.slice(i-1, j).sort((a,b) => a-b)[k-1])
    }
    return answer
}


//구조할당
// function solution(array, commands) {
//     return commands.map(command => {
//         const [sPosition, ePosition, position] = command
//         const newArray = array
//             .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
//             .sort((a,b) => a - b)    

//         return newArray[position - 1]
//     })
// }

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = 	[[2, 5, 3], [4, 4, 1], [1, 7, 3]];

console.log(solution(array, commands));