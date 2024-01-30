function solution(myString) {
    let answer = '';
    for(const char of myString) {
        if(char === "A" || char === "a") {
            answer+= char.toUpperCase();
        } else {
            answer += char.toLowerCase();
        }
    }
    return answer;
}