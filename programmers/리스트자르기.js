function solution(n, slicer, num_list) {
  let answer = [];
  switch (n) {
    case 1:
      answer = num_list.slice(0, slicer[1] + 1)
      break;
    case 2:
      answer = num_list.slice(slicer[0])
      break;
    case 3:
      answer = num_list.slice(slicer[0], slicer[1] + 1)
      break;
    case 4:
      answer = num_list.slice(slicer[0], slicer[1] + 1).filter((_, i) => i % slicer[2] === 0)
  }
  return answer;
}

const n1 = 3;
const slicer1 = [1, 5, 2]
const num_list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const n2 = 4;
const slicer2 = [1, 5, 2]
const num_list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(n1, slicer1, num_list1))
console.log(solution(n2, slicer2, num_list2))


//Others

// 번거로울때는 구조객체할당
function solution(n, slicer, num_list) {
  let [a, b, c] = [...slicer];

  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
  }
}