//https://school.programmers.co.kr/learn/courses/30/lessons/12950
//행렬의 덧셈
function solution(arr1, arr2) {
    let answer = JSON.parse(JSON.stringify(arr1));
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++){
            answer[i][j] = arr1[i][j]+arr2[i][j];
        }
    }
    return answer;
}

const arr1_1 = [[1,2],[2,3]];
const arr1_2 = [[1],[2]];

const arr2_1 = [[3,4],[5,6]];
const arr2_2 = 	[[3],[4]];

console.log(solution(arr1_1, arr2_1));
console.log(solution(arr1_2, arr2_2));