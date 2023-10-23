//https://school.programmers.co.kr/learn/courses/30/lessons/12969
//직사각형 별찍기

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" "); //입력받은 숫자 배열화
//     const a = Number(n[0]), b = Number(n[1]);
//     let i = 0;
//     while ( i < b){
//         console.log(("*".repeat(a)))
//         i++;
//     }
// });


//반복문보다 이게 훨씬 빠름!
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); //입력받은 숫자 배열화
    const a = Number(n[0]), b = Number(n[1]);
    
    const star = `${"*".repeat(a)}\n`
    return console.log(star.repeat(b));
});



