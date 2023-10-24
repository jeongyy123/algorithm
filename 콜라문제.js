//https://school.programmers.co.kr/learn/courses/30/lessons/132267
//콜라 문제
// function solution(a, b, n) {
//     let cola = Math.floor((n - (n % (b / a)))) // n개에서 골라 바꿀 콜라
//     let changeCola = Math.floor(cola / a)
//     let countCola = 0;
//     let remainCola = n - cola + changeCola;

//     for (let i = 0; i < Math.floor(changeCola / 2) + 1; i++) {
//         if (remainCola > a) {
//             countCola += changeCola;
//             n = n - cola + changeCola;
//             return solution(a, b, n - cola + changeCola);
//         } else {
//             break;
//         }
//     }
//     return countCola;
// }
// function solution(a, b, n) {
//     //바꾼 콜라의 갯수 changeCola
//     //회당 바꿀 콜라의 갯수 : originCola = n-(n%(b/a))
//     //바꾼 콜라의 갯수 : changeCola = originCola / a => 누계(count)를 구하면 됨 countCola += changeCola
//     //바꾸고 남은 콜라의 갯수(다음회의 n) : n - (바꿀 콜라의 갯수) + (바꾼 콜라의 갯수) : n2 = n - originCola + changeCola 
//     //1회: n = n
//     //2회~마지막회: n = n - (바꿀 콜라의 갯수) + (바꾼 콜라의 갯수)
//     let countCola = 0;
//     while (n >= a) {
//         let originCola = (n - (n % a)); //5-(5%2))
//         let changeCola = Math.floor(originCola * (b/a));
//         countCola += changeCola;
//         n = n - originCola + changeCola //5-5+2
//         let remainCola = n;
//         console.log("------------------------------")
//         console.log(`originCola : ${originCola}`)
//         console.log(`changeCola : ${changeCola}`)
//         console.log(`countCola(반복문) : ${countCola}`)
//         console.log(`n : ${n}`)
//         console.log(`remainCola : ${remainCola}`)

//     }
//     return countCola;
// }

//위의코드 주석, console 지운 함수 => 테스트케이스 2개 미통과
function solution(a, b, n) {
    let countCola = 0;
    while (n >= a) {
        let originCola = (n - (n % a)); 
        let changeCola = Math.floor(originCola * (b/a));
        countCola += changeCola;
        n = n - originCola + changeCola 
    }
    return countCola;
}


const a1 = 3;
const a2 = 3;

const b1 = 2;
const b2 = 1;

const n1 = 10;
const n2 = 20;

console.log(solution(a1, b1, n1)); 
console.log(solution(a2, b2, n2)); // 9