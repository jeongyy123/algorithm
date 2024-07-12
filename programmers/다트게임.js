function solution(dartResult) {
  let answer = [];
  const regex = /(\d+)([SDT])([*#]?)/g;
  let matches;

  while (matches = regex.exec(dartResult)) {
    let [_, score, bonus, option] = matches;

    score = parseInt(score);

    switch (bonus) {
      case 'S':
        score **= 1
        break;
      case 'D':
        score **= 2
        break;
      case 'T':
        score **= 3
        break;
    }

    if (option === '*') {
      score *= 2;
      if (answer.length > 0) {
        answer[answer.length - 1] *= 2;
      }
    } else if (option === '#') {
      score *= -1;
    }

    answer.push(score)
  }
  return answer.reduce((a, c) => a + c, 0);
}

const dartResult1 = '1S2D*3T'
const dartResult2 = '1D2S#10S'
const dartResult3 = '1D2S0T'
const dartResult4 = '1S*2T*3S'
const dartResult5 = '1D#2S*3S'
const dartResult6 = '1T2D3D#'
const dartResult7 = '1D2S3T*'

// console.log(solution(dartResult1))
console.log(solution(dartResult2))
// console.log(solution(dartResult3))
// console.log(solution(dartResult4))
// console.log(solution(dartResult5))
// console.log(solution(dartResult6))
// console.log(solution(dartResult7))

// [2, 8, 27]
//[-2, 4, 3]
