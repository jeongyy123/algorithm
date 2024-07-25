function solution(chicken) {
  let serviceChicken = 0;

  let i = 0;

  while (chicken >= 10) {
    serviceChicken += ~~(chicken / 10)
    chicken = ~~(chicken / 10) + (chicken % 10)
    i++;
  }
  return serviceChicken;
}

const chicken1 = 100;
const chicken2 = 1081;

console.log(solution(chicken1))
console.log(solution(chicken2))

//Others
function solution(chicken) {
  var answer = parseInt((chicken - 1) / 9);
  return answer;
}