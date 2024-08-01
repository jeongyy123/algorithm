function solution(people, limit) {
  let boat = 0;
  let weight = [];

  people.sort((a, b) => a - b);

  for (let i = 0; i < people.length; i++) {
    if (weight.length === 0) {
      weight.push(people[i]);
    } else {
      if (weight[0] + people[i] <= limit) {
        boat++;
        weight = [];
      } else {
        boat++;
        weight = [people[i]];
      }
    }
  }

  if (weight.length !== 0) boat++;

  return boat;
}



const people1 = [70, 50, 80, 50]
const people2 = [70, 80, 50]
const people3 = [40, 50, 40, 40, 60, 70, 80]
const people4 = [20, 20, 20, 20, 20, 100]

const limit1 = 100
const limit2 = 100
const limit3 = 120
const limit4 = 200

console.log(solution(people1, limit1))
console.log(solution(people2, limit2))
console.log(solution(people3, limit3))
console.log(solution(people4, limit4))

// 두 포인터 기법을 사용 : 정렬된 정렬에서 가장 가벼운 사람 + 가장 무거운 사람 짝지어 검사
function solution(people, limit) {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let boat = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      right--;
    }
    boat++;
  }
  return boat;
}