//https://school.programmers.co.kr/learn/courses/30/lessons/12930
//이상한 문자 만들기
//다른 사람꺼
function solution1() {
    const changeUpperLowerCase = (idx, string) => {
        return idx % 2 === 0 ? string.toUpperCase() : string.toLowerCase()
    }

    const answer = s.split(' ') //['try', 'hello', 'world']
        .map(sentence => sentence.split('').map((string, idx) => changeUpperLowerCase(idx, string)).join('')).join(' ')
    return answer;
}

//다른 사람꺼 보고 만들어봄
function solution(s) {
    //각 단어마다 잘라서 인덱스 확인
    return s.split(" ") // ['try', 'hello', 'world']
            .map(word => word.split('') // [['T','r','Y' ], ['H','e','L','l','O'], ['W','o','R','l','D']]
            .map((string, idx) => ((idx%2 === 0) ? string.toUpperCase() : string.toLowerCase())).join("")).join(" ")
}

const s = "try hello world" //15
const s1 = "  TRy HElLo  WORLD " //19

console.log(solution(s));
console.log(solution(s).length);
console.log(solution(s1));
console.log(solution(s1).length);