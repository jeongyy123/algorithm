//https://school.programmers.co.kr/learn/courses/30/lessons/12919
//서울에서 김서방 찾기

function solution(seoul) {
    return `김서방은 ${seoul.indexOf("Kim")}에 있다`
}

const seoul = ["Jane", "Kim", "Kim"]; //indexOf는 첫번째 요소의 인덱스만 반환

console.log(solution(seoul));