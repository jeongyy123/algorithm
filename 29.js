//https://school.programmers.co.kr/learn/courses/30/lessons/12940
//최대공약수와 최소공배수

// function solution(n, m) {
//     var answer = [];
//     //최대 공약수 => answer[0] = 최대공약수
//     //두 수를 나눴을 때의 큰 값
//     let greatNum = [];
//     for (let i =1; i < Math.max(n,m); i++) {
//         ( n % i === 0 && m % i === 0) ? greatNum.push(i) : 1 
//     }
//     answer[0] = Math.max(...greatNum)

//     //최소 공배수 => answer[1] = 최소공배수
//     // 서로의 값을 나눴을 때 0으로 떨어지면 그 수가 최소공배수/ 혹은 두 수를 곱한 수
//     let lowerNum = [];
//     (n % m === 0) ? lowerNum.push(m) : (( m % n === 0) ? lowerNum.push(n) : lowerNum.push(n*m)) // (3,12), (2,5)의 경우 해당. (20, 30)의 경우 해당X
//     answer[1] = Math.min(...lowerNum);

//     return answer;
// }

// function solution(n, m) {
//     var answer = [];
//     //최대 공약수 => answer[0] = 최대공약수
//     //두 수를 나눴을 때의 큰 값
//     for (let i =1; i < Math.max(n,m); i++) {
//         ( n % i === 0 && m % i === 0) ? answer[0] = i : 0 
//     }

//     //최소 공배수 => answer[1] = 최소공배수
//     //두 자연수의 곱 / 최대공약수
//     answer[1] = ( n * m ) / answer[0];
//     return answer;
// }

//다시 시작
//answer[0] = 최대공약수 answer[1]= 최소공배수
//최대공약수 = 두 수를 동시에 나눌 수 있는 수 중 가장 큰 수
//  최소공배수 = 두 수의 공통된 배수 중 가장 작은 수
//  최소공배수 = 두 자연수의 곱 / 최대공약수

// function solution(n, m) {
//     let answer = [];
//     let gcd = 1;
//     for (let i = 1; i < Math.max(n,m);i++){
//         if (n % i ===0 && m % i === 0) {
//             gcd = i
//         }
//     }
//     let lcm = (n*m) / gcd

//     answer[0] = gcd;
//     answer[1] = lcm;
//     return answer;
// }

function solution(n, m) {
    //최대 공약수 => answer[0] = 최대공약수
    //유클리드 호제법 함수 정의
    //2개의 자연수 또는 정식(整式)의 최대공약수를 구하는 알고리즘의 하나이다. 호제법이란 말은 두 수가 서로(互) 상대방 수를 나누어(除)서 결국 원하는 수를 얻는 알고리
    let getAlgorithm = function(n, m) {
        if (Math.max(n,m) % Math.min(n,m) === 0){
            return m;
        } else {
            return getAlgorithm(m, n % m);
        }
    }; 

    let answer = [];
    answer[0] = getAlgorithm(n,m)
    
    //최소 공배수 => answer[1] = 최소공배수
    //두 자연수의 곱 / 최대공약수
    answer[1] = ( n * m ) / answer[0];
    return answer;
}


let n1 = 2304;
let n2 = 2;
let n3 = 20;

let m1 = 1440;
let m2 = 5;
let m3 = 30;

console.log(solution(n1, m1)); //[ 288, 11520 ]
console.log(solution(n2, m2)); //[ 1, 10 ]
console.log(solution(n3, m3)); //[ 10, 60 ]
