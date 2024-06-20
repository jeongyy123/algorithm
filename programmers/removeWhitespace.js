function solution (my_string) {
    let arr = my_string.trimStart().trimEnd();
    return arr.split(/ +/g);
}