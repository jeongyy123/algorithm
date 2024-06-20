function solution(str_list) {
  let answer = [];
  for (const str of str_list) {
    if (str === "l") {
      answer = str_list.filter((val, idx) => idx < str_list.indexOf(str))
      break;
    } else if (str === "r") {
      answer = str_list.filter((val, idx) => idx > str_list.indexOf(str))
      break;
    } else {
      answer = []
    }
  }
  return answer;
}