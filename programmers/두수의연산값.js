function solution(a, b) {

  const addAB = String(a) + String(b);
  const squar2AB = 2 * a * b;

  if (+addAB >= +squar2AB) {
    return +addAB
  } else {
    return +squar2AB
  }
}