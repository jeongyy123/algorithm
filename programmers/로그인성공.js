function solution(id_pw, db) {
  for (let i = 0; i < db.length; i++) {
    if (db[i][0] === id_pw[0]) {
      if (db[i][1] === id_pw[1]) {
        return 'login'
      }
      return 'wrong pw'
    }
  }
  return 'fail'
}

const id_pw1 = ["meosseugi", "1234"]
const id_pw2 = ["programmer01", "15789"]
const id_pw3 = ["rabbit04", "98761"]

const db1 = [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]
const db2 = [["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]
const db3 = [["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]

console.log(solution(id_pw1, db1))
console.log(solution(id_pw2, db2))
console.log(solution(id_pw3, db3))