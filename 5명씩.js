function solution(names) {
  return names.filter((val, idx) => idx % 5 === 0)
}