function solution(cacheSize, cities) {
  let stack = [];
  let time = 0;
  cities = cities.map((v) => v.toUpperCase())

  if (cacheSize === 0) return 5 * cities.length;

  for (let i = 0; i < cities.length; i++) {
    if (stack.length < cacheSize + 1) {
      if (stack.includes(cities[i])) {
        stack.splice(stack.lastIndexOf(cities[i]), 1)
        stack.unshift(cities[i]);
        time++;

      } else {
        stack.unshift(cities[i]);
        time += 5;
        if (stack.length > cacheSize) {
          stack.pop();
        }
      }
    } else {
      stack.pop()
      stack.unshift(cities[i]);
      time += 5;
    }
  }
  return time;
}

const cacheSize1 = 3
const cacheSize2 = 3
const cacheSize3 = 2
const cacheSize4 = 5
const cacheSize5 = 2
const cacheSize6 = 0
const cacheSize7 = 5
const cacheSize8 = 3
const cacheSize9 = 3

const cities1 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]

const cities2 = ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]
const cities3 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]
const cities4 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]
const cities5 = ["Jeju", "Pangyo", "NewYork", "newyork"]
const cities6 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
const cities7 = ["a", "b", "c", "b", "a"]
const cities8 = ["1", "2", "1", "1", "1", "1"]
const cities9 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "Pangyo", "Seoul", "NewYork", "Seoul"]

// 9, 11, 15,16,18,19,20

// console.log(solution(cacheSize1, cities1)) //50
// console.log(solution(cacheSize2, cities2)) //21
// console.log(solution(cacheSize3, cities3)) //60
// console.log(solution(cacheSize4, cities4)) //52
// console.log(solution(cacheSize5, cities5)) //16
// console.log(solution(cacheSize6, cities6)) //25
console.log(solution(cacheSize7, cities7)) //17
console.log(solution(cacheSize8, cities8)) //14
console.log(solution(cacheSize9, cities9)) //38

//Others
function solution(cacheSize, cities) {
  const MISS = 5, HIT = 1;

  if (cacheSize === 0) return MISS * cities.length;

  let answer = 0,
    cache = [];

  cities.forEach(city => {
    city = city.toUpperCase();

    let idx = cache.indexOf(city);

    if (idx > -1) {
      cache.splice(idx, 1);
      answer += HIT;
    } else {
      if (cache.length >= cacheSize) cache.shift();
      answer += MISS;
    }

    cache.push(city);
  });

  return answer;
}