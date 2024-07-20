function solution(num, k) {
  num = ('' + num).split('')
  for (let i = 0; i < num.length; i++) {
    if (num[i] === String(k)) {
      return i + 1;
    }
  }
  return -1;
}

const num = 29183
const k = 1
console.log(solution(num, k))

//Others
function solution(num, k) {
  return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
}

function solution(num, k) {
  let ind = ('' + num).indexOf(k);
  return ind === -1 ? -1 : ind + 1;
}