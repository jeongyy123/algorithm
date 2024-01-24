function solution(arr, queries) {
  let answer = [];
  for (const query of queries) {
    for (let i = query[0]; i <= query[1]; i++) {
      // console.log(`i >>>> ${i}`)
      // console.log(`arr[i] >>>> ${arr[i]}`)
      // console.log(`query[2] >>>> ${query[2]}`)
      arr[i] >= query[2]
      answer.push(arr[i])
      // console.log(`answer>>>> ${answer}`)
      // console.log(`-----------------------`)
    }
  }
  return answer;
}


const arr = [0, 1, 2, 4, 3];
const queries = [[0, 4, 2], [0, 3, 2], [0, 2, 2]];

solution(arr, queries)