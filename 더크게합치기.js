function solution(a, b) {

  const addAB = String(a) + String(b);
  const addBA = String(b) + String(a);

  if (+addAB >= +addBA) {
    return +addAB
  } else {
    return +addBA
  }
}