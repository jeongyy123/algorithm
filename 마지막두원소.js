function solution(num_list) {
  let addNum;
  if (num_list[num_list.length - 1] > num_list[num_list.length - 2]) {
    addNum = num_list[num_list.length - 1] - num_list[num_list.length - 2]
    num_list.push(addNum)
  } else {
    addNum = num_list[num_list.length - 1] * 2
    num_list.push(addNum)
  }
  return num_list;
}

const num_list1 = [2, 1, 6];
const num_list2 = [5, 2, 1, 7, 5];

solution(num_list1);
solution(num_list2);