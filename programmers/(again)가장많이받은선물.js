// function solution(friends, gifts) {
//   // giver : a > b => b -> a 선물 하나 줘야함 
//   // giver : a = b || nothing -> 선물지수 큰 사람이 작은 사람한테 선물 줘야함.
//   // 선물지수 = 이번달까지 선물 준 수 - 받은 선물
//   // return 값 : 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수를 return 하도록 solution 함수를 완성해 주세요.

//   let giversList2 = new Map();
//   let takersList = new Map();
//   let giftScore = new Map();

//   giversList2 = makeGiverList(giversList2, friends, gifts)
//   takersList = makeTakerList(takersList, friends, gifts)

//   // giverList Map(4) { 'muzi' => 2, 'ryan' => 3, 'frodo' => 2, 'neo' => 1 }
//   // takerList Map(4) { 'muzi' => 5, 'ryan' => 1, 'frodo' => 2, 'neo' => 0 }
//   // giftScore Map(4) { 'muzi' => -3, 'ryan' => 2, 'frodo' => 0, 'neo' => 1 }

//   for (let giver of giversList2.keys()) {
//     giftScore.set(giver, giversList2.get(giver) - takersList.get(giver))
//   }


//   //---------------------------------------------------------------------

//   let giversList = new Map();
//   //Map(5) {
//   // 'muzi frodo' => 2,
//   // 'ryan muzi' => 3,
//   // 'frodo muzi' => 1,
//   // 'frodo ryan' => 1,
//   // 'neo muzi' => 1
//   // }

//   for (let i = 0; i < gifts.length; i++) {
//     giversList.set(gifts[i], 0)
//   }
//   for (let i = 0; i < gifts.length; i++) {
//     giversList.set(gifts[i], giversList.get(gifts[i]) + 1)
//   }

//   for (let i = 0; i < friends.length; i++) {
//     for (let j = i + 1; j < friends.length; j++) {
//       if (giversList.has(friends[i] + ' ' + friends[j]) && giversList.has(friends[j] + ' ' + friends[i])) {
//         if (giversList.get(friends[i] + ' ' + friends[j]) > giversList.get(friends[j] + ' ' + friends[i])) {
//           giversList.set(friends[j] + ' ' + friends[i], giversList.get(friends[j] + ' ' + friends[i]) + 1)
//         } else {
//           if (giftScore.get(friends[i]) > giftScore.get(friends[j])) {
//             giversList.set(friends[j] + ' ' + friends[i], giversList.get(friends[j] + ' ' + friends[i]) + 1)
//           } else if (giftScore.get(friends[i]) < giftScore.get(friends[j])) {
//             giversList.set(friends[i] + ' ' + friends[j], giversList.get(friends[i] + ' ' + friends[j]) + 1)
//           }
//         }
//       }


//     }
//   }
//   console.log(giversList)
//   console.log(...giversList.values())
//   return Math.max(...giversList.values())
// }

// function makeGiverList(giversList, friends, gifts) {
//   for (let i = 0; i < friends.length; i++) {
//     giversList.set(friends[i], 0)
//   }

//   gifts.forEach(i => {
//     const firstPerson = i.split(' ')[0];
//     if (giversList.has(firstPerson)) {
//       giversList.set(firstPerson, giversList.get(firstPerson) + 1);
//     }
//   });

//   return giversList;
// }

// function makeTakerList(takersList, friends, gifts) {
//   for (let i = 0; i < friends.length; i++) {
//     takersList.set(friends[i], 0)
//   }

//   gifts.forEach(i => {
//     const lastPerson = i.split(' ')[1];
//     if (takersList.has(lastPerson)) {
//       takersList.set(lastPerson, takersList.get(lastPerson) + 1);
//     }
//   });
//   return takersList;
// }
function solution(friends, gifts) {
  // 각 친구가 준 선물과 받은 선물을 기록할 맵
  let giftsGiven = new Map();
  let giftsReceived = new Map();
  let giftScores = new Map();
  let nextMonthGifts = new Map();

  // 초기화
  friends.forEach(friend => {
    giftsGiven.set(friend, 0);
    giftsReceived.set(friend, 0);
    nextMonthGifts.set(friend, 0);
  });

  // 준 선물과 받은 선물 기록
  gifts.forEach(gift => {
    const [giver, receiver] = gift.split(' ');
    giftsGiven.set(giver, giftsGiven.get(giver) + 1);
    giftsReceived.set(receiver, giftsReceived.get(receiver) + 1);
  });

  // 선물 지수를 계산하기 위해 각 친구의 선물 지수를 기록할 맵
  friends.forEach(friend => {
    const score = giftsGiven.get(friend) - giftsReceived.get(friend);
    giftScores.set(friend, score);
  });

  // 다음 달에 주고받을 선물 결정
  friends.forEach(friend1 => {
    friends.forEach(friend2 => {
      if (friend1 !== friend2) {
        const giftsFrom1To2 = gifts.filter(gift => gift === `${friend1} ${friend2}`).length;
        const giftsFrom2To1 = gifts.filter(gift => gift === `${friend2} ${friend1}`).length;

        if (giftsFrom1To2 > giftsFrom2To1) {
          nextMonthGifts.set(friend1, nextMonthGifts.get(friend1) + 1);
        } else if (giftsFrom1To2 < giftsFrom2To1) {
          nextMonthGifts.set(friend2, nextMonthGifts.get(friend2) + 1);
        } else {
          const score1 = giftScores.get(friend1);
          const score2 = giftScores.get(friend2);

          if (score1 > score2) {
            nextMonthGifts.set(friend2, nextMonthGifts.get(friend2) + 1);
          } else if (score1 < score2) {
            nextMonthGifts.set(friend1, nextMonthGifts.get(friend1) + 1);
          }
        }
      }
    });
  });

  // 가장 많은 선물을 받을 친구가 받을 선물의 수 반환
  return Math.max(...nextMonthGifts.values());
}

const friends1 = ["muzi", "ryan", "frodo", "neo"]
const friends2 = ["joy", "brad", "alessandro", "conan", "david"]
const friends3 = ["a", "b", "c"]

const gifts1 = ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]
const gifts2 = ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]
const gifts3 = ["a b", "b a", "c a", "a c", "a c", "c a"]

console.log(solution(friends1, gifts1))
console.log(solution(friends2, gifts2))
console.log(solution(friends3, gifts3))