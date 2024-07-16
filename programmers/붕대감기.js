function solution(bandage, health, attacks) {
  const time = attacks[attacks.length - 1][0]
  let conSuccess = 0;
  let
  for (let i = 0; i <= time; i++) {
    for (let j = 0; j < attacks.length; j++) {
      health -= attacks[j][1]

    }
  }
}

const bandage1 = [5, 1, 5]
const bandage2 = [3, 2, 7]
const bandage3 = [4, 2, 7]
const bandage4 = [1, 1, 1]

const health1 = 30
const health2 = 20
const health3 = 20
const health4 = 5

const attacks1 = [[2, 10], [9, 15], [10, 5], [11, 5]]
const attacks2 = [[1, 15], [5, 16], [8, 6]]
const attacks3 = [[1, 15], [5, 16], [8, 6]]
const attacks4 = [[1, 2], [3, 2]]


console.log(solution(bandage1, health1, attacks1))
// console.log(solution(bandage2, health2, attacks2))
// console.log(solution(bandage3, health3, attacks3))
// console.log(solution(bandage4, health4, attacks4))