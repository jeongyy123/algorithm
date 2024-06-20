function solution(num_list) {
  let answerEven = 0;
  let answerOdd = 0;
  for (let i = 0; i < num_list.length; i++) {
    console.log(i)
    if (i % 2 === 0) {
      answerEven += num_list[i]
    } else if (i % 2 !== 0) {
      answerOdd += num_list[i]
    }
  }
  return Math.max(answerEven, answerOdd);
}

const num_list = [4, 2, 6, 1, 7, 6]
console.log(solution(num_list))