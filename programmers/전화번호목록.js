function solution(phone_book) {
  // phone_book을 반복문 돌려
  //다음요소[0] ~ 다음요소[val.length] === 첫번째 요소 ? false : true
  // for (let i = 0; i < phone_book.length; i++) {
  //   phone_book[i] === phone_book[i + 1].slice(0, phone_book.lenght + 1) ? false : true
  // }

  // String.prototype.startsWith() 메소드 이용

  //phone_book 정렬
  phone_book.sort()

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false
    }
  }
  return true
}

const phone_book1 = ["119", "97674223", "1195524421"]
const phone_book2 = ["123", "456", "789"]
const phone_book3 = ["12", "123", "1235", "567", "88"]
const phone_book4 = ["123", "13", "134"]

console.log(solution(phone_book1))
console.log(solution(phone_book2))
console.log(solution(phone_book3))
console.log(solution(phone_book4)) // false