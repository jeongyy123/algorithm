function solution(n, words) {
  let doneWords = []; // 끝말잇기 나온 단어들

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const lastWord = doneWords[doneWords.length - 1];

    // 끝말잇기가 되는지 확인
    if (lastWord && !lastWord.endsWith(currentWord[0])) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    // 중복인지 확인
    if (doneWords.includes(currentWord)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    // doneWords에 현재 단어 추가
    doneWords.push(currentWord);
  }

  return [0, 0];
}

// 탈락하는 사람 번호, 몇번째 턴에 탈락하는지

const n1 = 3
const n2 = 5
const n3 = 2

const words1 = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]
const words2 = ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]
const words3 = ["hello", "one", "even", "never", "now", "world", "draw"]

console.log(solution(n1, words1))
console.log(solution(n2, words2))
console.log(solution(n3, words3))

//Others
function solution(n, words) {
  let answer = 0;
  words.reduce((prev, now, idx) => {
    answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
    return now[now.length - 1];
  }, "")

  return answer ? [answer % n + 1, Math.floor(answer / n) + 1] : [0, 0];
}