function solution(myString) {
    splitedString = myString.split("x").filter((val) => val !== "");
    return splitedString.sort()
}