function solution(land) {
  const firstIdx = land[0].indexOf(Math.max(...land[0]))
  const firstVal = Math.max(...land[0])

  const answer = new Array([firstIdx, firstVal]);


  for (let i = 1; i < land.length; i++) {

    if (land[i].indexOf(Math.max(...land[i])) === land[i - 1].indexOf(Math.max(...land[i - 1]))) {
      const arr = land[i].filter(val => val !== Math.max(...land[i]))

      answer.push([arr.indexOf(Math.max(...arr)), Math.max(...arr)])

    } else {
      answer.push([land[i].indexOf(Math.max(...land[i])), Math.max(...land[i])])
    }
  }
  let result = 0;
  for (let i = 0; i < answer.length; i++) {
    result += answer[i][1]
  }
  return result
}

const land = [[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]
// const land = [[3, 5, 6, 7], [3, 5, 6, 7], [3, 5, 6, 7]] // 7+6+7 = 20

console.log(solution(land))
