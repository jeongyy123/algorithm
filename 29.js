//https://school.programmers.co.kr/learn/courses/30/lessons/12940
//최대공약수와 최소공배수

// function solution(n, m) {
//     var answer = [];
//     //최대 공약수 => answer[0] = 최대공약수
//     let greatNum = [];
//     for (let i =1; i < Math.max(n,m); i++) {
//         ( n % i === 0 && m % i === 0) ? greatNum.push(i) : 1 //i값 중 가장 큰 값을 구하는데에서 막힘!
//     }
//     answer[0] = Math.max(...greatNum)

//     //최소 공배수 => answer[1] = 최소공배수
//     let lowerNum = [];
//     (n % m === 0) ? lowerNum.push(n) : (( m % n === 0) ? lowerNum.push(m) : lowerNum.push(n*m))
//     answer[1] = Math.min(...lowerNum) || 1;

//     return answer;
// }

function solution(num1, num2) {
    // 최대공약수 찾는 방법 : 2부터 min(num1, num2)까지 모든 정수 나누기
    let answer = [];
    let gcd = 1; //최대 공약수
    for (let i = 2; i < Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 %i ===0 ){
            gcd = i;
        }
    }
    answer[0] = gcd
    console.log(answer)

    //최대공배수 찾는 방법 : lcm을 1부터 증가시켜 두 수를 lcm으로 나눴을때 나머지값이 0인지 비교
    let lcm = 1;
    while (true) {
        if (num1 % lcm === 0 && num2 % lcm === 0) {
            break;
        }
        lcm++
    }
    answer[1] = lcm
    console.log(answer)

}

let n1 = 3;
let n2 = 2;
let n3 = 20;

let m1 = 12;
let m2 = 5;
let m3 = 30;

console.log(solution(n1, m1));
console.log(solution(n2, m2));
console.log(solution(n3, m3)); //10, 60
