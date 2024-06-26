// function solution(n) {
//   let answer = [];
//   for (let row = 0; row < n; row++) {
//     for (let col = 0; col < n; col++) {
//       if (row === 0 || row % 2 === 0) {

//       }
//     }
//   }
// }

// answer[0][0] = 1;
// answer[0][1] = 2;
// answer[0][2] = 3;
// answer[0][3] = 4;
// answer[0][4] = 5;
// answer[0][4] = 5;



const n1 = 4;
const n2 = 5;

console.log(solution(n1))
console.log(solution(n2))



// Others
function solution(n) {
  const result = Array.from(Array(n), () => Array(n).fill(0)); // n x n 배열 생성

  let num = 1; // 시작 숫자
  let row = 0; // 행의 시작 인덱스
  let col = 0; // 열의 시작 인덱스

  for (let i = n; i > 0; i -= 2) {
    // 오른쪽으로 이동
    for (let j = 0; j < i; j++) {
      result[row][col] = num++;
      col++;
    }
    col--;
    row++;

    // 아래로 이동
    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      row++;
    }
    row--;
    col--;

    // 왼쪽으로 이동
    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      col--;
    }
    col++;
    row--;

    // 위로 이동
    for (let j = 0; j < i - 2; j++) {
      result[row][col] = num++;
      row--;
    }
    row++;
    col++;
  }

  return result;
}
