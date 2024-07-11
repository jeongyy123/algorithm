function solution(name, yearning, photo) {
  let answer = [];
  let grade = [];
  const missGradeKeyToValue = new Map()
  const missGradeValueToKey = new Map()

  for (let i = 0; i < name.length; i++) {
    missGradeKeyToValue.set(name[i], yearning[i])
    missGradeValueToKey.set(yearning[i], name[i])
  }

  for (let i = 0; i < photo.length; i++) {
    for (let j = 0; j < photo[i].length; j++) {
      if (missGradeKeyToValue.has(photo[i][j])) {
        // 만약 값이 missGrade에 있다면 -> missGrade key에 맞는 값을 grade에 저장.
        grade.push(missGradeKeyToValue.get(photo[i][j]))
      }
    }

  }

  console.log('grade', grade)
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
// console.log(solution(name2, yearning2, photo2))
// console.log(solution(name3, yearning3, photo3))