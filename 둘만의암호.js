//https://school.programmers.co.kr/learn/courses/30/lessons/155652
//둘만의 암호

function solution(s, skip, index) {
    //1. s, skip를 아스키코드로 변경 => index만큼 이동
    let arrS = s.split("").map((value) => value.charCodeAt()) //[ 97, 117, 107, 107, 115 ]
    let arrSkip = skip.split("").map((value) => value.charCodeAt())

    //2. 아스키코드를 변경하되 소문자를 벗어나는 것 숫자 조절
    //소문자 아스키코드 범위: 97(a)~122(z)
    let arrSSkip = arrS.map(val => val+ index > 122 ? val+index - 26 : val+index) //[ 102, 122, 112, 112, 120 ]

    //3. s ~ arrSSkip 범위 안에 skip(짧을수있어) 있으면 index+갯수
    for (let i = 0; i < arrS.length; i++) {
        console.log(`arrS: ${arrS[i]}, arrSkip: ${arrSkip[i]}, arrSSkip: ${arrSSkip[i]}`)
        if( arrS[i] < arrSkip[i] && arrSkip[i] <= arrSSkip[i]) {
            console.log("잘되나요?")
        }
    }
}

//문자 -> 아스키코드 : 문자.charCodeAt()
//아스키코드 -> 문자 : String.fromCharCode(문자)

let s = "aukks";
let skip = "wbqd";
let index = 5;

console.log(solution(s, skip, index)) //[ 104, 97, 112, 112, 121 ]

