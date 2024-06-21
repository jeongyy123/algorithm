// function solution(my_string, indices) {
//   let arr = my_string.split('')

//   for (let i = 0; i < indices.length; i++) {
//     arr[indices[i]] = '';
//   }
//   return arr.join('');
// }

const my_string = "apporoograpemmemprs"
const indices = [1, 16, 6, 15, 0, 10, 11, 3]

console.log(solution(my_string, indices))


//Others
function solution(my_string, indices) {
  let answer = '';

  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) answer += my_string[i]
  }
  return answer;
}