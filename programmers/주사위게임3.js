// function solution(a, b, c, d) {
//   let answer = 0;

//   let arr = [a, b, c, d];

//   // 순서없고, 중복 미허용 자료구조 set
//   const set = new Set(arr);
//   const spreadedSet = [...set]

//   const counts = {};
//   // 주사위 값의 빈도수 계산
//   for (let num of arr) {
//     counts[num] = (counts[num] || 0) + 1;
//     console.log('num', num)
//     console.log('count[num]', counts[num])
//   }

//   if (set.size === 1) {
//     answer = spreadedSet[0] * 1111
//   } else if (set.size === 2) {
//     answer = (10 * spreadedSet[0] * spreadedSet[1]) ** 2
//   } else if (set.size === 2) {
//     answer = (spreadedSet[0] + spreadedSet[1]) * Math.abs(spreadedSet[0] - spreadedSet[1])
//   } else if (set.size === 3) {
//     answer = spreadedSet[1] * spreadedSet[2]
//   } else {
//     answer = spreadedSet[0]
//   }
//   return answer;
// }

function solution(a, b, c, d) {
  let arr = [a, b, c, d];
  let set = new Set(arr);
  const spreadedSet = [...set];
  const counts = {};

  // 주사위 값의 빈도수 계산
  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  if (set.size === 1) {
    // 네 개의 주사위 숫자가 모두 같은 경우
    return spreadedSet[0] * 1111;
  } else if (set.size === 2) {
    let [first, second] = spreadedSet;
    if (counts[first] === 3 || counts[second] === 3) {
      // 세 개의 숫자가 같은 경우
      let p = counts[first] === 3 ? first : second;
      let q = counts[first] === 1 ? first : second;
      return (10 * p + q) ** 2;
    } else {
      // 두 개씩 같은 숫자가 있는 경우
      let p = first;
      let q = second;
      return (p + q) * Math.abs(p - q);
    }
  } else if (set.size === 3) {
    let p, q, r;
    for (let key in counts) {
      if (counts[key] === 2) p = parseInt(key);
      else if (counts[key] === 1) {
        if (q === undefined) q = parseInt(key);
        else r = parseInt(key);
      }
    }
    return q * r;
  } else {
    // 네 개의 주사위 숫자가 모두 다른 경우
    return Math.min(...spreadedSet);
  }
}


console.log('이게 답', solution(2, 4, 2, 5))