//https://school.programmers.co.kr/learn/courses/30/lessons/82612
//부족한 금액 계산하기
// function solution(price, money, count) {
//     let newPrice = 0;
//     for (let i = 1; i < count+1; i++){
//         newPrice += price*i
//     }
//     return (money - newPrice < 0) ? Math.abs(money - newPrice) : 0
// }

//삼항연산자 더 가볍게 만들기
function solution(price, money, count) {
    let newPrice = 0;
    for (let i = 1; i < count+1; i++){
        newPrice += price*i
    }
    return (money < newPrice) ? newPrice-money : 0;
}

const price1 = 3;
const money1 = 20;
const count1 = 4;

console.log(solution(price1, money1, count1))//10
