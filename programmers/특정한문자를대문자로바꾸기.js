function solution(my_string, alp) {

    return my_string.split('').map(val => val === alp ? val = val.toUpperCase() : val).join('')

}
const my_string = "programmers"
const alp = "p"

console.log(solution(my_string, alp))

//Others
const solution = (s, a) => s.replaceAll(a, a.toUpperCase())