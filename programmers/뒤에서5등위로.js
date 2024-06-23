function solution(num_list) {
  return num_list.sort((a, b) => a - b).splice(5, num_list.length)
  // splice 문법     
  // array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

}

const num_list = [12, 4, 15, 46, 38, 1, 14, 56, 32, 10];

console.log(solution(num_list))