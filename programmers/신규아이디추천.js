function solution(new_id) {
  // id : 3 <= id.length <= 15
  // id.includes(/[a-z-_.]/) %.%, 연속 사용 불가 .+ -> . 로 치환

  //(done) 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
  //(done) 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
  //       2-1. 정규표현식으로 알파벳 소문자, 숫자, 빼기, 밑줄 마침표만 필터링 하기
  //(done) 2-2. replace로 알파벳 소문자, 숫자 빼기 밑줄이 아닌거 대체
  //(done) 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  //(done) 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
  //(done) 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
  //(done) 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
  //      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
  //(done) 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  let answer = new_id.toLowerCase()
    .replaceAll(/[^a-z0-9\-\_\.]/g, '')
    .replaceAll(/\.{2,}/g, '.')
    .replaceAll(/^\.|\.$/g, '')

  if (answer.length === 0) {
    answer = 'a'
  }
  if (answer.length >= 16) {
    answer = answer.slice(0, 15).replaceAll(/\.$/g, '')
  }

  if (answer.length <= 2) {
    answer += answer[answer.length - 1].repeat(3 - answer.length)
  }

  return answer;
}

const new_id1 = "...!@BaT#*..y.abcdefghijklm" //"...bat..y.abcdefghijklm"
const new_id2 = "z-+.^."
const new_id3 = "=.="
const new_id4 = "123_.def"
const new_id5 = "abcdefghijklmn.p"

// console.log(solution(new_id1))
// console.log(solution(new_id2))
console.log(solution(new_id3))
// console.log(solution(new_id4))
// console.log(solution(new_id5))


//Others

function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, '') // 2
    .replace(/\.+/g, '.') // 3
    .replace(/^\.|\.$/g, '') // 4
    .replace(/^$/, 'a') // 5
    .slice(0, 15).replace(/\.$/, ''); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
