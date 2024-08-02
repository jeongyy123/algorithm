function solution(number, k) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    const current = number[i];

    while (count < k && stack.length > 0 && stack[stack.length - 1] < current) {
      stack.pop();
      count++;
    }

    stack.push(current);
  }

  // k개의 수를 제거한 상태이므로, stack의 길이는 number.length - k여야 합니다.
  // 경우에 따라서는 while문을 통해서 k번 다 못지우고 끝날 수 있기 때문에, 그 부분을 고려해서 slice 해줍니다.
  return stack.join('').slice(0, number.length - k);
}


const number1 = "1924"
const number2 = "1231234"
const number3 = "4177252841"

const k1 = 2
const k2 = 3
const k3 = 4

console.log(solution(number1, k1))
console.log(solution(number2, k2))
console.log(solution(number3, k3))