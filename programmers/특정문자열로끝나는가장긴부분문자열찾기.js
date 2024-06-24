function solution(myString, pat) {
  return myString.slice(0, myString.lastIndexOf(pat) + pat.length)
}

const myString1 = "AbCdEFG"
const myString2 = "AAAAaaaa"


const pat1 = "dE"
const pat2 = 'a'

console.log(solution(myString1, pat1))
console.log(solution(myString2, pat2))
