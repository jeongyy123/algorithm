function solution(letter) {
  const morse = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
    '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
    '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
    '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
    '-.--': 'y', '--..': 'z'
  };
  let answer = [];

  let string = letter.split(' ');
  for (let char of string) {
    answer.push(morse[char])
  }
  return answer.join('')
}

const letter1 = ".... . .-.. .-.. ---"
const letter2 = ".--. -.-- - .... --- -."

console.log(solution(letter1))
console.log(solution(letter2))