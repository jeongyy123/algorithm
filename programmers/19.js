//https://school.programmers.co.kr/learn/courses/30/lessons/12935
//제일 작은 수 제거하기
//반복문, 조건문 사용
// function solution(arr) {
//     //배열에서 가장 작은 수 찾기
//     let minNum = Math.min(...arr)
//     //배열에서 가장 작은 수 제거하기
//     let exceptMin = arr.filter((val, idx) => {
//         return val > minNum;
//     }) 
//     //빈배열인지 확인하기
//     if ( exceptMin.length === 0 ) {
//         return exceptMin = [-1];
//     }
//     return exceptMin;
// }

//위의 코드 => 삼항연산자
function solution (arr) {
    let exceptMin = arr.filter((val, idx) => val > Math.min(...arr))
    return ( exceptMin.length === 0 ) ? exceptMin = [-1] : exceptMin;
}

const arr1 = [4,3,2,1];
const arr2 = [10];

console.log(solution(arr1));
console.log(solution(arr2));
