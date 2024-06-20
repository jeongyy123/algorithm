function solution(str1, str2) {
  const answer = [];
  const arrStr1 = str1.split("")
  const arrStr2 = str2.split("")
  answer[0] = arrStr1[0];
  answer[1] = arrStr2[0];
  for (let i = 1; i < arrStr1.length; i++) {
    answer[i * 2] = arrStr1[i]
    answer[i * 2 + 1] = arrStr2[i]
  }
  return answer.join("");
}

const str1 = "aaaaa"
const str2 = "bbbbb"
solution(str1, str2)
