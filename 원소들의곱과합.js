function solution(num_list) {
  const squareNum = num_list.reduce((acc, cur) => acc * cur * 1);
  const sumNum = num_list.reduce((acc, cur) => acc + cur);
  let result = (squareNum < (sumNum ** 2)) ? 1 : 0
  return result
}

const num_list1 = [3, 4, 5, 6]
solution(num_list1)

const num_list2 = [3, 4, 5, 2, 1]
solution(num_list2)

const num_list3 = [5, 7, 8, 3]
solution(num_list3)