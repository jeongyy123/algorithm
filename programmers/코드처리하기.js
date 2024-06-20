function solution(code) {
  let ret = '';
  let mode = 0;
  for (let i = 0; i < code.length; i++) {
    if (mode === 0) {
      if (code[i] !== "1") {
        if (i % 2 === 0) {
          ret += code[i]
        }
      } else if (code[i] === "1") {
        mode = 1;
      }
    } else if (mode === 1) {
      if (code[i] !== "1") {
        if (i % 2 !== 0) {
          ret += code[i]
        }
      } else if (code[i] === "1") {
        mode = 0;
      }
    }
  }
  if (ret === "") {
    return "EMPTY"
  }
  return ret;
}

const code = "abc1abc1abc"
solution(code); //"acbac"