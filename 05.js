function solution(n) {
	var x = [];
	for(var i =0; i<n+1; i++){
		if (n % i === 1) {
			x.push(i);
		}
	}
    return x[0];
}