// function solution(x, y, n) {
//   let answer = -1
//   const stack = [{ num: y, tried: 0 }]
//   while (stack.length !== 0) {
//     const { num, tried } = stack.shift()

//     if (num === x) {
//       answer = tried
//       break;
//     }

//     if (num % 2 === 0) {
//       stack.push({ num: num / 2, tried: tried + 1 })
//     }
//     if (num % 3 === 0) {
//       stack.push({ num: num / 3, tried: tried + 1 })
//     }
//     if (num - n >= x) {
//       stack.push({ num: num - n, tried: tried + 1 })
//     }
//   }
//   return answer
// }

// const x1 = 10;
// const x2 = 10;
// const x3 = 2;

// const y1 = 40;
// const y2 = 40;
// const y3 = 5;

// const n1 = 5;
// const n2 = 30;
// const n3 = 4;

// console.log(solution(x1, y1, n1))
// console.log(solution(x2, y2, n2))
// console.log(solution(x3, y3, n3))

//스택만들기
class Stack {
  constructor() {
    this.top = -1;
    this.dataStore = [];
  }

  push(e) {
    this.top++;
    this.dataStore[this.top] = e;
  };

  pop() {
    if (this.top > -1) {
      let val = this.dataStore[this.top];
      this.top--;
      return val;
    }
  }
  peek() {
    return this.dataStore[this.top]
  }
  get length() {
    return this.top + 1;
  }
  clear() {
    this.top = 0;
    this.dataStore = [];
  }
}
const stack = new Stack();
stack.push("jeong")
stack.push("yooon")
stack.push("young")
console.log(stack.peek())
