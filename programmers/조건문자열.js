function solution(ineq, eq, n, m) {
  if (ineq === "<" && eq === "=") {
    n <= m ? 1 : 0
  } else if (ineq === ">" && eq === "=") {
    n >= m ? 1 : 0
  } else if (ineq === "<" && eq === "!") {
    n > m ? 1 : 0
  } else if (ineq === ">" && eq === "!") {
    n < m ? 1 : 0
  }
}


const ineq = "<";
const eq = "="
const n = 20;
const m = 50;

solution(ineq, eq, n, m)