//자릿수 더하기
function solution () {
    var answer = 0;
    var newN = String(n);

    for (var i = 0; i < newN.length; i++) {
        answer += Number(newN[i]);
    }
    return answer;
}
