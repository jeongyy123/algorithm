function solution(myString) {
  return myString.split('').map(val => val < 'l' ? val = 'l' : val).join('')
}

const myString1 = "abcdevwxyz"
const myString2 = "jjnnllkkmm";

console.log(solution(myString1))
console.log(solution(myString2))

//Others
//정규표현식

const solution = myString => myString.replace(/[a-k]/g, 'l')