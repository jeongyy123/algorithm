function solution(str1, str2) {
  return str2.includes(str1) ? 1 : 0
}

const str11 = 'abc';
const str12 = 'tbt';

const str21 = 'aabcc';
const str22 = 'tbbttb';


console.log(solution(str11, str21))