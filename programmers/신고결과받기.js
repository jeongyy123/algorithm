//https://school.programmers.co.kr/learn/courses/30/lessons/92334
//신고결과받기
//각 유저 당 한 번에 한 명 유저 신고가능
    //중복 x
    //한 유저 여러번 신고 가능하지만 내가 또 해도 1회로 처리
    //k번이상 신고받은 유저 : 이용정지 및 신고한 유저들한테 알람 => 한번에 몰아서 함
    //answer = []; 각 유저가 신고해서 정지된 유저들의 갯수
    //1. report를 객체로 바꿔
    //2. 유저id = id_list[i]
    //   report 유저 id별 신고한 id = report[id_list[i]] 
    //3. report 유저 id별 신고한 id 를 반복문을 돌려서 id_list의 인덱스와 동일하게 answer에다가 넣기. 같은 유저가 신고한거는 많이해도 1회처리
function solution(id_list, report, k) {
    
}



let id_list1 = ["muzi", "frodo", "apeach", "neo"];
let id_list2 = ["muzi", "frodo", "apeach", "neo"];

let report1 = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
let report2 = ["ryan con", "ryan con", "ryan con", "ryan con"];

let k1 = 2;
let k2 = 3;

console.log(solution(id_list1, report1, k1));
// console.log(solution(id_list2, report2, k2));
