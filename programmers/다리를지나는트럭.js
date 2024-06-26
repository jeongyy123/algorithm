function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = Array(bridge_length).fill(0); // 다리의 길이만큼 배열을 생성하고 0으로 초기화
  let bridge_total_weight = 0;

  while (bridge.length > 0) {
    time++;
    bridge_total_weight -= bridge.shift(); // 다리에서 트럭을 이동시키고 무게를 줄임

    if (truck_weights.length > 0) {
      if (bridge_total_weight + truck_weights[0] <= weight) {
        let truck = truck_weights.shift(); // 다음 트럭을 다리에 올림
        bridge.push(truck);
        bridge_total_weight += truck;
      } else {
        bridge.push(0); // 트럭이 다리에 오를 수 없으면 0을 추가
      }
    }
  }

  return time;
}

// function solution(bridge_length, weight, truck_weights) {

//   let bridge = [];
//   let time = 0;
//   let bridge_total_weight = 0;
//   let condition = bridge_total_weight <= weight && bridge.length <= bridge_length

//   for (let truck of truck_weights) {
//     if (condition) {
//       bridge.push(truck);
//       if (condition) {
//         bridge_total_weight = bridge.reduce((acc, cur) => acc + cur, 0);
//         time += bridge_length * bridge.length
//       }
//       bridge.pop()
//     } else {
//       time += bridge_length;
//     }
//     bridge.pop()
//   }
//   return time;
// }

// 다리 적재 하중 <= 다리 허용 하중 && 다리 적재 트럭 개수 <= 다리 길이
// true : 다리 더 적재해 (적재시 가능한지 확인 필요) -> weight 


// 1m 당 1초
const bridge_length1 = 2
const bridge_length2 = 100
const bridge_length3 = 100

const weight1 = 10
const weight2 = 100
const weight3 = 100

const truck_weights1 = [7, 4, 5, 6]
const truck_weights2 = [10]
const truck_weights3 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

console.log(solution(bridge_length1, weight1, truck_weights1))
console.log(solution(bridge_length2, weight2, truck_weights2))
console.log(solution(bridge_length3, weight3, truck_weights3))

//Others
function solution(bridge_length, weight, truck_weights) {
  // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
  let time = 0, qu = [[0, 0]], weightOnBridge = 0;

  // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
  while (qu.length > 0 || truck_weights.length > 0) {
    // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
    //    다리 위 트럭 무게 합에서 빼준다.
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면 
      //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
      //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
      //    참고: if 밖에서 1 더하기 때문에 -1 해줌
      if (qu[0]) time = qu[0][1] - 1;
    }
    // 시간 업데이트 해준다.
    time++;
  }
  return time;
}