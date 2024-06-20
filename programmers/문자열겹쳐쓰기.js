function solution(my_string, overwrite_string, s) {
  const arr = my_string.split("")
  arr.splice(s, overwrite_string.length, overwrite_string);
  return arr.join("");
}

// function solution(my_string, overwrite_string, s) {
//   const myStr = [...my_string]
//   myStr.splice(s, overwrite_string.length, overwrite_string)
//   return myStr.join("")
// }


const my_string = "aaaaaa"
const overwrite_string = "bbb"
const s = 3;

// const my_string = "He11oWor1d"
// const overwrite_string = "lloWorl"
// const s = 2;

//"aaabbb"
solution(my_string, overwrite_string, s)