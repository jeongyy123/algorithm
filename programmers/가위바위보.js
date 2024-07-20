function solution(rsp) {
  let answer = '';
  for (let num of rsp) {
    if (num === '2') {
      answer += '0'
    } else if (num === '0') {
      answer += '5'
    } else {
      answer += '2'
    }
  }
  return answer
}

const rsp = "205"
console.log(solution(rsp))

//Others
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2
  };
  var answer = [...rsp].map(v => arr[v]).join("");
  return answer;
}