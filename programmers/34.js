//https://school.programmers.co.kr/learn/courses/30/lessons/86491
//최소직사각형
//객체를 만들어서 사용; 
function solution(arr) {
    //이중 배열 안의 숫자끼리 비교해서 큰건 앞에, 작은건 뒤에 스위치 변수에 담아서 바꾸기
    //인덱스[0] 중 큰 값 * 인덱스 [0] 중 작은 값
    const arr1 = JSON.parse(JSON.stringify(arr));
    const arr2 = JSON.parse(JSON.stringify(arr));
    
    let bigNum = arr1.map((val, idx) => (val[0]>val[1]) ? val[0]=val[0] : val[0]=val[1]);
    let smallNum = arr2.map((val, idx) => (val[0]>val[1]) ? val[1]=val[1]: val[1]=val[0]);
    
    return Math.max(...bigNum) * Math.max(...smallNum)
}

//다른 사람의 코드 (큰 수 앞으로, 작은 수 뒤로 switch) 훨씬 깔끔함.
function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })
    return maxSize[0]*maxSize[1];
}

const sizes1 = [[60, 50], [30, 70], [60, 30], [80, 40]];
const sizes2 = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];
const sizes3 = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]];

console.log(solution(sizes1));
console.log(solution(sizes2));
console.log(solution(sizes3));
