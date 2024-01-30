function solution(binomial) {
  let answer = 0;
  const arr = binomial.split(" ")

  switch (arr[1]) {
    case "+":
      answer = Number(arr[0]) + Number(arr[2])
      break;

    case "-":
      answer = Number(arr[0]) - Number(arr[2])
      break;

    case "*":
      answer = Number(arr[0]) * Number(arr[2])
      break;
  }
  return answer;
}

const binomial = "43 + 12"

console.log(solution(binomial))