function solution(my_string, queries) {
  let mystringArr = my_string.split('')
  for (const query of queries) {
    const reversedArr = mystringArr.slice(query[0], query[1] + 1).reverse();
    mystringArr.splice(query[0], reversedArr.length, ...reversedArr)
  }
  return mystringArr.join("");
}

const my_string = "rermgorpsam";
const queries = [[2, 3], [0, 7], [5, 9], [6, 10]];

console.log(solution(my_string, queries))