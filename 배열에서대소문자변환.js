function solution(strArr) {
  let answer = [];
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 === 0) {
      answer[i] = strArr[i].toLowerCase()
    } else {
      answer[i] = strArr[i].toUpperCase()
    }
  }
  return answer;
}