function solution(number) {
  const arr = number.split("");
  const sum = arr.reduce((acc, cur) => +acc + +cur)
  return sum % 9
}