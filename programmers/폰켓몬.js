function solution(nums) {
  const monster = new Map()

  for (let num of nums) {
    if (!monster.has(num)) {
      monster.set(num, 1)
    } else {
      monster.set(num, monster.get(num) + 1)
    }
  }

  return monster.size <= Math.round(nums.length / 2) ? monster.size : Math.round(nums.length / 2)

}

// 방법 1. arr 만들어서 그 안에 같은 것이 있다면 안넣고, 없으면 넣기를 반복 -> arr.length 구하기 ( arr.length가 nums.length 이하가 되도록 반복을 해야한다.) => 뭔가 이상...
// 방법 2. map 만들어서 map에 nums의 키값이 있으면 갯수 비교

const nums1 = [3, 1, 2, 3]
const nums2 = [3, 3, 3, 2, 2, 4]
const nums3 = [3, 3, 3, 2, 2, 2]

console.log(solution(nums1))
console.log(solution(nums2))
console.log(solution(nums3))

// Others
function solution(nums) {
  const max = nums.length / 2;
  const arr = new Set(nums)

  return arr.size > max ? max : arr.size
}