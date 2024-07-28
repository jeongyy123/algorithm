function solution(polynomial) {
  let answer = [0, 0];

  let arr = polynomial.split(' ');

  for (let num of arr) {
    if (num.includes('x')) {
      answer[0] += Number(num.match(/(\d*)x/)[1]) || 1
    } else if (!isNaN(Number(num))) {
      answer[1] += Number(num)
    }
  }

  if (answer[0] !== 0 && answer[1] !== 0) {
    return `${answer[0] === 1 ? 'x' : answer[0] + 'x'} + ${answer[1]}`

  } else if (answer[0] !== 0 && answer[1] === 0) {
    return `${answer[0] === 1 ? 'x' : answer[0] + 'x'}`

  } else {
    return `${answer[1]}`
  }
}

const polynomial1 = "7 + 5"

console.log(solution(polynomial1))