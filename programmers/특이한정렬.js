function solution(numlist, n) {
  // 차이를 기준으로 정렬

  return numlist.sort((a, b) => {
    let distanceA = Math.abs(a - n);
    let distanceB = Math.abs(b - n);

    if (distanceA === distanceB) {
      return b - a;
    }
    return distanceA - distanceB;
  })
}

const numlist1 = [1, 2, 3, 4, 5, 6]
const numlist2 = [10000, 20, 36, 47, 40, 6, 10, 7000]

const n1 = 4
const n2 = 30

console.log(solution(numlist1, n1))
console.log(solution(numlist2, n2))


//Others
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

// sort안에 a -n로 할 생각을 못함!
