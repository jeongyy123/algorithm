function solution(my_string, indices) {
  let answer = my_string.split("")
  for (let i = 0; i < indices.length; i++) {
    answer.splice(indices[i], 1)
    console.log("answer", answer)
    return answer.join('');
  }
}

const my_string = "apporoograpemmemprs"
const indices = [1, 16, 6, 15, 0, 10, 11, 3]

console.log(solution(my_string, indices))