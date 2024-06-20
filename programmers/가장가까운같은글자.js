//https://school.programmers.co.kr/learn/courses/30/lessons/142086
//가장 가까운 같은 글자

function solution(s) {
    //반복문을 돌면서 해당 인덱스의 요소가 앞에 있는지 여부확인
    //없다면 -1 를 answer에 입력
    //있다면 해당 인덱스에서 가까운 요소까지의 거리 산출
    //문제1: 해당 인덱스에서 가까운지 어떻게 확인? => 일단 slice로 잘라
    //문제2: 거리를 어떻게 산출? => slice로 잘라서 뒤에서 부터 찾아 인덱스값 도출하여 i에서 빼기
    let answer = [-1];
    let arr = s.split("") // ['f','o','o','b','a','r']
    for (let i = 1; i < arr.length; i++) { //i = 2
        if (arr.slice(0, i).includes(arr[i])) { // arr.slice(0,2) = ['f', 'o'].includes("o")
            answer.push(i - arr.slice(0, i).lastIndexOf(arr[i])) // i =3
        } else {
            answer.push(-1)
        }
    }
    return answer;
}

let s1 = "banana";
let s2 = "foobar";

console.log(solution(s1)); //[-1, -1, -1, 2, 2, 2]
console.log(solution(s2)); //[-1, -1, 1, -1, -1, -1]