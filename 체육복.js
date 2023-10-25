//https://school.programmers.co.kr/learn/courses/30/lessons/42862
//체육복
//테스트케이스 실패
function solution(n, lost, reserve) {
    const arr = new Array(n).fill(1).map((val, idx) => val + 1 * idx); //[ 1, 2, 3, 4, 5 ]
    let answer = 0;
    for (let i = 0; i < lost.length; i++) { //lost = [2, 4] // lost.length = 2
        if (reserve.includes(lost[i] - 1) || reserve.includes(lost[i] + 1)) {
            if (reserve.length <= lost.length) {
                answer = n - lost.length + reserve.length;
            } else {
                answer = n;
            }
        } else {
            answer = n - lost.length;
        }
    }
    return answer;
}

const n1 = 5;
const n2 = 5;
const n3 = 3;
const n4 = 10;

const lost1 = [2, 4];
const lost2 = [2, 4];
const lost3 = [3];
const lost4 = [2,3,6,8];

const reserve1 = [1, 3, 5];
const reserve2 = [3];
const reserve3 = [1];
const reserve4 = [1,4,5,9,10];


console.log(solution(n1, lost1, reserve1)); //5
console.log(solution(n2, lost2, reserve2)); //4
console.log(solution(n3, lost3, reserve3)); //2
console.log(solution(n4, lost4, reserve4)); //2