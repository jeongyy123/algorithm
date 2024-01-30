function solution(my_string, alp) {
    let answer = [];
    for(const idx in my_string) {
        if(my_string[idx] === alp) {
            answer.push(Number(idx));
        }
    }

    for(let i =0; i<answer.length; i++){
        my_string[answer[i]].toUpperCase();
    }
    return my_string;
}
const my_string = "programmers"
const alp = "p"

console.log(solution(my_string, alp))