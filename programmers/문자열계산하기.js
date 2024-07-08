function solution(my_string) {
  const arr = my_string.split(' ');
  let answer = Number(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '+') {
      answer += Number(arr[i + 1]);
    } else if (arr[i] === '-') {
      answer -= Number(arr[i + 1]);
    }
  }
  return answer;
}

const my_string1 = "3 + 4"

console.log(solution(my_string1))



