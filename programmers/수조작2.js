function solution(numLog) {
  let answer = [];
  for (let i = 1; i < numLog.length; i++) {
    if (numLog[i] - numLog[i - 1] === 1) {
      answer.push("w")
    } else if (numLog[i] - numLog[i - 1] === -1) {
      answer.push("s")
    } else if (numLog[i] - numLog[i - 1] === 10) {
      answer.push("d")
    } else {
      answer.push("a")
    }
  }
  return answer.join("");
}