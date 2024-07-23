function solution(spell, dic) {
  const pattern = spell.map(char => `(?=.*${char})`).join('');
  const regex = new RegExp(`^${pattern}.*$`);

  return dic.some(word => regex.test(word)) ? 1 : 2;
}

const spell1 = ["p", "o", "s"]
const spell2 = ["z", "d", "x"]
const spell3 = ["s", "o", "m", "d"]
const spell4 = ["a", "f", "z"];
const spell5 = ["p", "o", "s"]

const dic1 = ["sod", "eocd", "qixm", "adio", "soo"]
const dic2 = ["def", "dww", "dzx", "loveaw"]
const dic3 = ["moos", "dzx", "smm", "sunmmo", "som"]
const dic4 = ["acfz"]
const dic5 = ["ppooss"]

console.log(solution(spell1, dic1))
console.log(solution(spell2, dic2))
console.log(solution(spell3, dic3))
console.log(solution(spell4, dic4)) // 1
console.log(solution(spell5, dic5)) // 1