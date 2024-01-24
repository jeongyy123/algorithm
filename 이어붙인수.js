function solution(num_list) {
  let evenNum = "";
  let oddNum = "";

  num_list.forEach((val) => {
    val % 2 === 0 ? evenNum += val : oddNum += val
  })

  return +evenNum + +oddNum;
}