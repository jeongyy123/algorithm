function solution(numbers) {
  let answer = '';
  for (let i = 0; i < numbers.length; i++) {
    switch (numbers[i] + numbers[i + 1]) {
      case 'ze':
        answer += 0
        break;
      case 'on':
        answer += 1
        break;
      case 'tw':
        answer += 2
        break;
      case 'th':
        answer += 3
        break;
      case 'fo':
        answer += 4
        break;
      case 'fi':
        answer += 5
        break;
      case 'si':
        answer += 6
        break;
      case 'se':
        answer += 7
        break;
      case 'ei':
        answer += 8
        break;
      case 'ni':
        answer += 9
        break;
    }
  }
  return +answer;
}

const numbers1 = "onetwothreefourfivesixseveneightnine"
const numbers2 = "onefourzerosixseven"

console.log(solution(numbers1))
console.log(solution(numbers2))


// one 3
// two 3
// three 5
// four 4
// five 4
// six 6
// seven 5
// eight 5
// nine 4


//Others
function solution(numbers) {
  const obj = {
    zero: 0, one: 1, two: 2, three: 3, four: 4,
    five: 5, six: 6, seven: 7, eight: 8, nine: 9
  };

  const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
    return obj[v];
  });

  return Number(num);
}