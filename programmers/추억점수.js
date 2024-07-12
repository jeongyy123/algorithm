function solution(name, yearning, photo) {
  let answer = [];
  const missGrade = new Map()

  for (let i = 0; i < name.length; i++) {
    missGrade.set(name[i], yearning[i])
  }

  for (let i = 0; i < photo.length; i++) {
    let grade = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (missGrade.has(photo[i][j])) {
        grade += missGrade.get(photo[i][j])
      }
    }
    answer.push(grade)
  }

  return answer
}

const name1 = ["may", "kein", "kain", "radi"]
const name2 = ["kali", "mari", "don"]
const name3 = ["may", "kein", "kain", "radi"]

const yearning1 = [5, 10, 1, 3]
const yearning2 = [11, 1, 55]
const yearning3 = [5, 10, 1, 3]

const photo1 = [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
const photo2 = [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]
const photo3 = [["may"], ["kein", "deny", "may"], ["kon", "coni"]]


console.log(solution(name1, yearning1, photo1))
console.log(solution(name2, yearning2, photo2))
console.log(solution(name3, yearning3, photo3))

//Others
function solution(name, yearning, photo) {
  return photo.map((v) => v.reduce((a, c) => a += yearning[name.indexOf(c)] ?? 0, 0))
}
// ?? nullish coalescing opterator