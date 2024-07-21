function solution(n) {
  let i = 1;
  while (n > 0) {
    n = parseInt(n / i)
    i++;
  }
  return i - 2;
}

const n1 = 3628800;
const n2 = 7;
const n3 = 23;
const n4 = 5;


console.log(solution(n1))
console.log(solution(n2))
console.log(solution(n3))
console.log(solution(n4))

// 1) 1부터 몫  2) 1부터 나머지
//  7 / 1 = 7
//  7 / 2 = 3
//  3 / 3 = 1
//  1 / 4 = 0

// 23 / 1 = 23
// 23 / 2 = 11
// 11 / 3 = 3
// 3 / 4 = 0

//Others
function solution(n) {
  let i = 1;
  let f = 1;
  while (f * i < n) f *= ++i;
  return i;
}

//반복문을 이렇게 사용할 수도..!
function solution(n) {
  for (let i = 1, v = 1; true; v *= ++i) if (v > n) return --i;
}