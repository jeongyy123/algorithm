// function solution(picture, k) {
//   let answer = [];
//   for (let i = 0; i < picture.length; i++) {
//     let pic = '';
//     for (let j = 0; j < picture[i].length; j++) {
//       pic += picture[i][j].repeat(k)
//     }
//     for (let u = 0; u < k; u++) {
//       answer.push(pic)
//     }
//   }
//   return answer;
// }

const picture1 = [".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."];
const picture2 = ["x.x", ".x.", "x.x"];

const k1 = 2;
const k2 = 3;

console.log(solution(picture1, k1))
console.log(solution(picture2, k2))


//Others
function solution(picture, k) {
  var answer = [];

  picture.forEach((line) => {
    const expanded = [...line].reduce((acc, cur) => acc + cur.repeat(k), '');

    for (let i = 0; i < k; i++) answer.push(expanded);
  });

  return answer;
}

