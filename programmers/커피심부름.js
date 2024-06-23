function solution(order) {
  let answer = 0;
  let i = 0;

  while (i < order.length) {
    if (order[i].includes("americano") || order[i] === 'anything') {
      answer += 4500
      i++;
    } else {
      answer += 5000
      i++;
    }
  }
  return answer;
}

const order1 = ["cafelatte", "americanoice", "hotcafelatte", "anything"];
const order2 = ["americanoice", "americano", "iceamericano"];

console.log(solution(order1))
console.log(solution(order2))