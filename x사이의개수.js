function solution(myString) {
    let answer = [];
    myString = myString.split("x")
    myString.map((val) => answer.push(val.length) )
return answer
}