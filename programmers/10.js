//https://school.programmers.co.kr/learn/courses/30/lessons/12933
//정수 내림차순으로 배치하기
//숫자 -> 배열 -> 숫자
// function solution(n) {
//     //n을 배열만들기 (n+"").split("")
//     //n을 sort()이용 => 배열 정렬
//     //join: 배열 => 문자 변경
//     //1곱해서 숫자 만들기
//     return (n+"").split("")
//         .sort((a,b) => b-a)
//         .join("")*1
// }


//숫자이용
function solution(n) {
    var nums =[]; // [2,7,3,8,1,1] 숫자배열이니 문자배열보다 속도가 빠름
    do{
        nums.push(n%10);
        n=Math.floor(n/10);
    } while(n>0)
    return nums.sort((a,b)=>b-a).join('')*1;
}



var n1 = 118372;
console.log(solution(n1));