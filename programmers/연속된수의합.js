function solution(num, total) {
  // total을 num으로 나눠 떨어질 때 result의 중간 숫자 나옴
  // 나누어 떨어지지않으면 내림과 올림 숫자가 result에 포함
  let result = new Array(num);
  let flooredNum = Math.floor(num / 2)

  if (total % num === 0) {
    result[flooredNum] = total / num
    for (let i = flooredNum + 1; i < num; i++) {
      result[i] = result[i - 1] + 1
      result[num - i - 1] = result[num - i] - 1
    }
  } else {
    result[flooredNum - 1] = Math.floor(total / num)
    result[flooredNum] = Math.ceil(total / num)
    for (let i = Math.floor(num / 2) + 1; i < num; i++) {
      result[i] = result[i - 1] + 1
      result[num - i - 1] = result[num - i] - 1
    }
  }
  return result
}

const num1 = 3;
const num2 = 5;
const num3 = 4;
const num4 = 5;

const total1 = 12;
const total2 = 15;
const total3 = 14;
const total4 = 5;

// console.log(solution(num1, total1))
// console.log(solution(num2, total2))
console.log(solution(num3, total3))
// console.log(solution(num4, total4))

//Others
function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2));
  var max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((el, i) => { return i + min; });
}