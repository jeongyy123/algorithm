//https://school.programmers.co.kr/learn/courses/30/lessons/87389
//나머지가 1이 되는 수 찾기

function solution(n) {
	var x = [];
	for(var i =0; i<n+1; i++){
		if (n % i === 1) {
			x.push(i);
		}
	}
    return x[0];
}