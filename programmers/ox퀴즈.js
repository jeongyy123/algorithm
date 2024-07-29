function solution(quiz) {
  let answer = [];

  for (let num of quiz) {
    num = num.split(' ');
    let amount = Number(num[0]);

    for (let i = 0; i < 5; i++) {
      if (num[i - 1] === '+') {
        if (!isNaN(Number(num[i]))) {
          amount += Number(num[i]);

        }
      } else if (num[i - 1] === '-') {
        if (!isNaN(Number(num[i]))) {
          amount -= Number(num[i]);
        }
      }
      if (num[i - 1] === '=') {
        amount === Number(num[i]) ? answer.push('O') : answer.push('X')
      }

    }
  }
  return answer;
}

const quiz1 = ["3 - 4 = -3", "5 + 6 = 11"]
const quiz2 = ["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]


console.log(solution(quiz1))
console.log(solution(quiz2))

//Others
function solution(quiz) {

  return quiz.map(t => {
    const [calc, result] = t.split(' = ');
    const sign = calc.includes('+') ? 1 : -1
    const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

    return +a + (+b * sign) === +result ? 'O' : 'X'
  });
}