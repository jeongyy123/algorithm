//https://school.programmers.co.kr/learn/courses/30/lessons/155652
//둘만의 암호

function solution(s, skip, index) {
    //1. s, skip를 아스키코드로 변경 => index만큼 이동
    let arrS = s.split("").map((value) => value.charCodeAt()) //[ 97, 117, 107, 107, 115 ]
    let arrSkip = skip.split("").map((value) => value.charCodeAt()) //[ 119, 98, 113, 100 ]
    //2. 아스키코드를 변경하되 소문자를 벗어나는 것 숫자 조절
    //소문자 아스키코드 범위: 97(a)~122(z)
    let arrSSkip = arrS.map(val => val + index > 122 ? val + index - 26 : val + index) //[ 102, 122, 112, 112, 120 ] // f, z, p, p, x

    //3. arrS ~ arrSSkip 범위 안에 skip 번호가 있으면 count 배열에 하나씩 넣어 // 여기서부터 문제
    let count = new Array(arrS.length).fill(0)
    for (let i = 0; i < arrS.length; i++) {
        for (let j = 0; j < arrSkip.length; j++) {
            if (arrS[i] <= arrSkip[j] && arrSkip[j] <= arrSSkip[i]) {
                count[i] += 1;
            }
        };
    };

    // 4.count를 arrSSkip에서 더해서 아스키코드 -> 문자 
    let answer = ""
    for (let i = 0; i < arrSSkip.length; i++) {
        if ( 96 > arrSSkip[i]+count[i]) {
            answer += String.fromCharCode(arrSSkip[i]+count[i]+26);
        } else if ( arrSSkip[i]+count[i] > 122){
            answer += String.fromCharCode(arrSSkip[i]+count[i]-26);
        } else {
            answer += String.fromCharCode(arrSSkip[i]+count[i]);
        }
    }
    return answer;
}

//문자 -> 아스키코드 : 문자.charCodeAt()
//아스키코드 -> 문자 : String.fromCharCode(문자)

let s = "aukks";
let skip = "wbqd";
let index = 5;

console.log(solution(s, skip, index)) //[ 104, 97, 112, 112, 121 ]

//104=> d(100), 121 => w (119) 