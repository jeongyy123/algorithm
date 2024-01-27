function solution(n, slicer, num_list) {
  let answer = [];
  switch (n) {
    case 1:
      answer = num_list.slice(0, slicer[1])
      break;
    case 2:
      answer = num_list.slice(slicer[0])
      break;
    case 3:
      answer = num_list.slice(slicer[0], slicer[1])
      break;
    case 4:
      answer = num_list.map((val, idx) => {
        for (let idx = slicer[0]; idx <= slicer[1]; idx += slicer[2]) {
          answer.push(val[idx])
          break;
        }
      })
      return answer;
  }
}

const n = 3;
const slicer = [1, 5, 2]
const num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(n, slicer, num_list))