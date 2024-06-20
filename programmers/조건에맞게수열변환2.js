function solution(arrs) {
    let answer = 0;
        for (const arr of arrs) {
            if(arr >= 50 && arr %2 ===0) {
                arr = arr / 2;
                answer ++
            } else {
                arr = arr * 2 + 1;
                answer++
            }
        }
    return answer;
}

