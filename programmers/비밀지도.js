function solution(n, arr1, arr2) {
  let arrBin = [];
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    if ((arr1[i] | arr2[i]).toString(2).length === n) {
      arrBin.push((arr1[i] | arr2[i]).toString(2))
    } else {
      arrBin.push('0'.repeat(n - (arr1[i] | arr2[i]).toString(2).length) + (arr1[i] | arr2[i]).toString(2))
    }
  }

  for (let i = 0; i < arrBin.length; i++) {
    answer[i] = arrBin[i].split('').map((v) => v === '1' ? '#' : ' ').join('')
  }

  return answer;
}

const n1 = 5;
const arr11 = [9, 20, 28, 18, 11]
const arr21 = [30, 1, 21, 17, 28]


const n2 = 6;
const arr12 = [46, 33, 33, 22, 31, 50]
const arr22 = [27, 56, 19, 14, 14, 10]

// console.log(solution(n1, arr11, arr21))
console.log(solution(n2, arr12, arr22))

//Others
function solution(n, arr1, arr2) {
  return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
  return '0'.repeat(n - s.length) + s;
}