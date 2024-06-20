

// let str = "aBcDeFg";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === lowerCase) {

//   } else {
//     console.log("혹은?")
//     str[i] = str[i].toUpperCase();
//   }
// }
// console.log(str)

let str = "aBcDeFg";
let arr = [];
str.split('').forEach((k) => {
  arr.push(k === k.toUpperCase() ? k.toLowerCase() : k.toUpperCase())
})
console.log(arr.join(''))