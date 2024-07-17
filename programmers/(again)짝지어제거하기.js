function solution(s) {

  do {
    pre = s;
    s = s.replace(/(.)\1/g, '');
  } while (s !== pre)
  return s === '' ? 1 : 0;
}

const s1 = 'baabaa'
const s2 = 'cbcb'

console.log(solution(s1))
console.log(solution(s2))