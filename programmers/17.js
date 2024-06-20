//https://school.programmers.co.kr/learn/courses/30/lessons/12948
//핸드폰 번호 가리기
//1. 번호를 돌면서 숫자가 4개가 남으면 반복문 중지
//2. 뒤로 가면서 인덱스 4개까지는 continue. 그다음은 *로 바꾸기
function solution(phone_number) {
    let newPN = phone_number.split("")

    for (let i = 0; i<newPN.length; i++){
        if ( i < newPN.length-4) {
            newPN[i] = "*";
        } else {
            continue;
        }
    }
    return newPN.join("");
}
function solution1 (phone_number) {
    let arr = phone_number.split("")
    return arr.forEach((val, idx) => {
        ( idx < arr.length-4) ? arr[idx] = "*" : val;
    });
}


let phone_number1 = "01033334444"; //0~11 11-4 = 7
let phone_number2 = "027778888"; //0~9 10개

console.log(solution1(phone_number1));
console.log(solution1(phone_number2));