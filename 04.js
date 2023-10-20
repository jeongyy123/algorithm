function solution(n) {
    var answer = 0;
    var i = 1;
    for (var i =0; i < n+1; i++) {
        if (n % i === 0) {
            answer += i
        } else {
            continue;
        }
    }
    return answer;
}