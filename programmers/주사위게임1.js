function solution(a, b) {
  let answer = 0;

  if (a % 2 !== 0 && b % 2 !== 0) {
    answer = (a * a) + (b * b);
  } else if (a % 2 !== 0 || b % 2 !== 0) {
    answer = 2 * (a + b);
  } else {
    answer = Math.abs(a - b);
  }
  return answer;
}

function solution2(a, b) {
  return (a % 2 === 0) ? ((b % 2 === 0) ? Math.abs(a - b) : 2 * (a + b)) : ((b % 2 !== 0) ? (a * a) + (b * b) : 2 * (a + b))
}




const a1 = 3;
const a2 = 6;
const a3 = 2;

const b1 = 5;
const b2 = 1;
const b3 = 4;


console.log(solution2(a1, b1));
console.log(solution2(a2, b2));
console.log(solution2(a3, b3));


// Others 
function solution(a, b) {
  const isOdd = (num) => num % 2 === 1;

  return isOdd(a) && isOdd(b)
    ? a ** 2 + b ** 2
    : isOdd(a) || isOdd(b)
      ? 2 * (a + b)
      : Math.abs(a - b);
}
