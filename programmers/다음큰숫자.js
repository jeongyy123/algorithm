function solution(n) {
  let answer = [];
  let binString = new Array(6)
  binString = n.toString(2).split('')
  if (binString.length !== 6) {
    binString.unshift('0')
  }
  // while(binString.length <= 6) {
  //   binString.unshift('0')
  // }
  // console.log(binString)

  for (let i = 0; i < binString.length; i++) {
    let lastNum = binString.splice(binString.length - 1);
    binString.unshift(...lastNum)
    // console.log(lastNum)

    if (parseInt(binString.join(''), 2) > n) {
      answer.push(parseInt(binString.join(''), 2))
    }
  }
  console.log(answer)
  // return Math.min(...answer)
}

const n1 = 78
const n2 = 15

// console.log(solution(n1))
// console.log(solution(n2))

let num = 1000000
console.log(num.toString(2))