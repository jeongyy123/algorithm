function solution(babbling) {
  const canSpeakSound = ["aya", "ye", "woo", "ma"];
  let count = 0;

  babbling.forEach(word => {
    let temp = word;
    canSpeakSound.forEach(sound => {
      temp = temp.split(sound).join(' ');
    });
    if (temp.trim() === '') {
      count++;
    }
  });

  return count;
}


const babbling1 = ["aya", "yee", "u", "maa", "wyeoo"]
const babbling2 = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]

console.log(solution(babbling1))
console.log(solution(babbling2))

// Others
// 문자열 비교는 무조건 정규표현식
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach(word => {
    if (regex.test(word)) answer++;
  })

  return answer;
}