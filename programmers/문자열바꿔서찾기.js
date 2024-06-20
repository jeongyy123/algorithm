function solution(myString, pat) {
  let answer = [];
  for (let i = 0; i < myString.length; i++) {
    myString[i] === "A" ? answer.push("B") : answer.push("A");

  }
  if (answer.join("").includes(pat)) {
    return 1;
  }
  return 0;
}

const myString = "ABBAA"
const pat = "AABB"

console.log(solution(myString, pat))