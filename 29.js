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

function solution(n, m) {
    //최대 공약수 => answer[0] = 최대공약수
    //유클리드 호제법 함수 정의
    let getAlgorithm = function(n, m) {
        if (Math.max(n,m) % Math.min(n,m) === 0){
            return Math.min(n,m);
        } else {
            return getAlgorithm(Math.min(n,m), Math.max(n,m) % Math.min(n,m));
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
let m2 = 7;
let m3 = 30;

console.log(solution(n1, m1)); //[ 288, 11520 ]
console.log(solution(n2, m2)); //[ 1, 10 ]
console.log(solution(n3, m3)); //[ 10, 60 ]


//------------------------------------------------------
//https://school.programmers.co.kr/learn/courses/30/lessons/12953
//N개의 최소공배수
//두 수를 먼저 최대공약수를 구한 후 구해진 최대공약수와 남은 수의 최대공약수를 구하는...
// function solution(arr) {
//     let getAlgorithm = function(arr) {
//         if (Math.max(...arr) % Math.min(...arr) === 0){
//             return Math.min(...arr);
//         } else {
//             return getAlgorithm(Math.min(...arr), Math.max(...arr) % Math.min(...arr));
//         }
//     }; 

//     let answer = 0;
//     // let gcd = 1
//     let gcd = getAlgorithm(...arr)

//     answer = ( arr.reduce((acc,cur) => acc * cur, 1) ) / gcd;
//     return answer;
// }


// const arr1 = [2,6,8,14];
// const arr2 = [1,2,3];

// console.log(solution(arr1)); //168  
// console.log(solution(arr2)); //6
