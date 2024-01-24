function solution(n, control) {
  for (const val of control) {
    if (val === "w") {
      n += 1
    } else if (val === "s") {
      n -= 1
    } else if (val === "d") {
      n += 10
    } else {
      n -= 10
    }
  }
  return n;
}