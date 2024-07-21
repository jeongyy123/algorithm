function solution(array) {
  let str = '';

  for (let num of array) {
    str += num.toString();
  }
  return str.split('7').length - 1;
}

const array = [7, 77, 17]

console.log(solution(array))

//Others
function solution(array) {
  return array.join('').split('7').length - 1;
}