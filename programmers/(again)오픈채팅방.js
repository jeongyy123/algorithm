function solution(records) {
  let answer = [];
  let arr = records.map(record => record.split(' '));
  
  arr.forEach((val, idx) => {
    if (val[0] === 'Enter') {
      for (let i = 0; i < idx; i++) {
        if(val[1] === arr[idx][1]) {
          answer[i].splice(0, 1, val[2])
        }
      }
      answer.push([`${val[2]}님이`, '들어왔습니다.'])
      console.log('answer1', answer)
    } else if (val[0] === 'Leave') {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === val[1]) {
          answer.push([`${arr[i][2]}님이`, '나갔습니다.'])
          console.log('answer2', answer)
        }
      }
    } else if (val[0] === 'Change') {
      // records의 uid기준으로 record 배열에서 
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === val[1]) {
          answer[i].splice(0, 1, val[2])
          console.log('answer3', answer)
        }
      }
    }
  });
  return answer;
}

// 닉네임 수정 후 들어오면 기존 닉네임기록까지 변경됨


const record1 = [
                "Enter uid1234 Muzi", 
                "Enter uid4567 Prodo", 
                "Leave uid1234", 
                "Enter uid1234 Prodo", 
                "Change uid4567 Ryan"
                ]

console.log(solution(record1))

 // records.map(record => record.split(' ')).forEach((val, idx) => {
  //   if (records[idx][0] === 'Enter') {
  //     answer.push([`${records[idx][2]}님이`, '들어왔습니다.'])
  //     console.log('answer1', answer)
  //   } else if (records[idx][0] === 'Leave') {
  //     answer.push([`${records[idx][2]}님이`, '나갔습니다.'])
  //     console.log('answer2', answer)
  //   } else if (records[idx][0] === 'Change') {
  //     // records의 uid기준으로 record 배열에서 
  //     for (let i = 0; i < records.length; i++) {
  //       if (records[i][1] === records[idx][1]) {
  //         answer[i].splice(0, 1, records[idx][1])
  //         console.log('answer3', answer)
  //       }
  //     }
  //   }
  // });
  // return answer;