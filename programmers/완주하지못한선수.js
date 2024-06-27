// function solution(participant, completion) {
//   return participant.filter((val) => !completion.includes(val))
// }
// 동명이인 처리 불가


function solution(participant, completion) {
  const participantCount = {};
  const completionCount = {};

  participant.forEach(name => {
    participantCount[name] = (participantCount[name] || 0) + 1
  });

  completion.forEach(name => {
    completionCount[name] = (completionCount[name] || 0) + 1
  });

  for (let name in participantCount) {
    if (participantCount[name] !== completionCount[name]) {
      return name;
    }
  }
}


const participant1 = ["leo", "kiki", "eden"]
const participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"]
const participant3 = ["mislav", "stanko", "mislav", "ana"]

const completion1 = ["eden", "kiki"]
const completion2 = ["josipa", "filipa", "marina", "nikola"]
const completion3 = ["stanko", "ana", "mislav"]


console.log(solution(participant1, completion1))
console.log(solution(participant2, completion2))
console.log(solution(participant3, completion3))


//Others
//1. 
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return 'nothing';
}

//2. participant = _ , completion = $
var solution = (_, $) => _.find(_ => !$[_]--, $.map(_ => $[_] = ($[_] | 0) + 1))