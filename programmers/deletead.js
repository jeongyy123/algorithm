function solution(strArr) {
    let answer = [];
    for(const str of strArr) {
        str.includes("ad") ? 0 : answer.push(str);
    }
    return answer;
}