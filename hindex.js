function solution(citations) {
  citations = citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;

}

const a = [3, 0, 6, 1, 5];

console.log(solution(a))