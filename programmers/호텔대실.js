function solution(book_time) {
  // 최소한의 객실만을 사용
  // 퇴실시간 + 10분 청소 후 수용가능

  function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  let timeline = [];

  for (let [start, end] of book_time) {
    let startMin = timeToMinutes(start);
    let endMin = timeToMinutes(end) + 10;
    timeline.push([startMin, 'start']);
    timeline.push([endMin, 'end']);
  }

  timeline.sort((a, b) => a[0] - b[0] || (a[1] === 'end' ? -1 : 1));

  let maxRooms = 0;
  let currentRooms = 0;

  for (let [time, type] of timeline) {
    if (type === 'start') {
      currentRooms += 1;
      maxRooms = Math.max(maxRooms, currentRooms);
    } else {
      currentRooms -= 1;
    }
  }
  return maxRooms;
}

const book_time1 = [["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]]
const book_time2 = [["09:10", "10:10"], ["10:20", "12:20"]]
const book_time3 = [["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]]

console.log(solution(book_time1))
console.log(solution(book_time2))
console.log(solution(book_time3))

//Others
function makeMinStamp(time) {
  const [hour, min] = time.split(":").map(v => Number(v));
  return hour * 60 + min;
}

function solution(book_time) {
  const timeArr = Array.from({ length: makeMinStamp('23:59') + 10 }, () => 0);

  book_time.forEach((time, i) => {
    const [s, e] = time;
    let start = makeMinStamp(s);
    const end = makeMinStamp(e) + 9;

    for (start; start <= end; start++) {
      timeArr[start]++;
    }
  });

  return Math.max(...timeArr);
}
