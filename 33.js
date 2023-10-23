//https://school.programmers.co.kr/learn/courses/30/lessons/147355
//크기가 작은 부분문자열

function solution(t, p) {
    //p.length
    //t에서 p.length 만큼씩 새로운 배열만들어
    //반복문 0~2, 1~3 ...
    let arr = [];
    let answer = 0;
    for(let i =0; i < t.length-p.length+1; i++){
        arr.push(t.substring(i,i+p.length))
    }
    //새배열과 p와 숫자로 변형 후 비교해 count로 세서 반환
    for(let i =0; i<arr.length; i++){
        if (arr[i] <= p) {
            answer++
        }
    }
    return answer;
    // return arr.forEach(val => (val <= p) ? answer++ : answer )
}

let t1 = "3141592"; //7개. 5번 돌아
let t2 = "500220839878"; //12개. 12번
let t3 = "10203";//5개. 4번

let p1 = "271"; //3개
let p2 = "7";//1개
let p3 = "15";//2개

console.log(solution(t1, p1));
console.log(solution(t2, p2));
console.log(solution(t3, p3));
