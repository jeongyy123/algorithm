function solution(i, j, k) {
  let arr = []
  for (let u = i; u < j + 1; u++) {
    arr.push(...u.toString().split(''))
  }

  const regex = new RegExp(k);
  return arr.filter(v => regex.test(v)).length
}

const i = 1

const j = 13

const k = 1
console.log(solution(i, j, k))

//Others
function solution(i, j, k) {
  let a = '';
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}