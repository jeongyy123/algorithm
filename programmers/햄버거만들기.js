//https://school.programmers.co.kr/learn/courses/30/lessons/133502#
//햄버거만들기
// function solution (arr) {
//     //arr 배열 => 문자 변경
//     let changeArr = arr.join("");
//     //"1231"을 먼저 찾아서 빼내기
//     let answer = 0;

//     for(let i = 0; i<changeArr.length; i++) { //0~8 : 9번 반복
//         if(changeArr.includes("1231")){ //true
//             changeArr = changeArr.replace("1231","")
//             answer++
//         }
//     }
//     return answer
// }

//실패함
let answer = [];
function solution(arr) {
    //Array.prototype.map()
    turn(arr);
    return answer.length;
}
function turn(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            if (arr[i + 1] === 2) {
                if (arr[i + 2] === 3) {
                    if (arr[i + 3] === 1) {
                        answer.push("1231");
                        delete arr[i]
                        delete arr[i + 1]
                        delete arr[i + 2]
                        delete arr[i + 3]
                        arr.filter((item) => item !== null && item !== undefined && item !== '');
                        console.log(arr)
                        turn(arr);
                    }
                }
            }
        }
    }
}

//다른 사람 코드 (성공)
function solution(ingredient) {
    let count = 0;

    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient.slice(i, i + 4).join('') === '1231') {
            count++;
            ingredient.splice(i, 4);
            i -= 3;
        }
    }

    return count;
}

//splice : 시간복잡도 O(N)


let arr1 = [2, 1, 1, 2, 3, 1, 2, 3, 1];
let arr2 = [1, 3, 2, 1, 2, 1, 3, 1, 2];
let arr3 = [1, 2, 3, 5, 7, 2, 3, 1, 3, 4, 1, 2, 3, 1];
let arr4 = [1, 2, 3, 2, 1, 2, 3, 1, 2, 3, 3, 2, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1];


// console.log(solution(arr1)); //2
// console.log(solution(arr2)); //0
console.log(solution(arr3)); //1
console.log(solution(arr4)); //3

// let changeArr = "1231231"
// let reg = /1231/;
// console.log(changeArr.match(reg))//g를 안넣으면 배열로 반환 [ '1231', index: 0, input: '1231231', groups: undefined ]