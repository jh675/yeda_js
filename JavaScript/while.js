// while.js

let i = 1;
let sum = 0;

for (i; i < 6; i++) {
  console.log(`${sum} + ${i} = ${(sum += i)}`);
}

// for문과 동일한 내용의 while문
i = 1;
sum = 0;
while (i < 6) {
  console.log(`${sum} + ${i} = ${(sum += i)}`);
  i++;
}

// while문은 몇번을 반복해야되는 지는 알 수 없으나 조건이 충족될 때까지 해야하는 경우에 쓰임.

// let num = 0;
// while (true) {
//   num = Math.floor(Math.random() * 1000000001);

//   if (num % 9 == 0) { // 반복문 종료 조건
//     break; // 반복문 종료
//   };

//   console.log(num);
// };

// console.log('while문 반복 중지 조건이 충족되었습니다.\nnum: ' + num);

// num = 0;

// while (true) {
//   let usr = prompt('숫자를 입력하세요.\n종료하고 싶을때는 quit를 입력해주세요.');
//   if (usr == 'quit') { // quit를 입력하면 실행
//     break;
//   };
//   num += parseInt(usr); // prompt는 기본적으로 문자형으로 들어오기 때문에 자료형을 숫자로 바꿔줘야한다.
//   // usr을 parseInt 혹은 Number로 감싼다.
// };

// console.log('입력된 값의 총 합: ' + num);

// Test
// let num1 = 0;
// for (let i = 1; i < 5; i++) {
//   num = 0;
//   while (true) {
//     num += i;
//     if(num > 20) {
//       break; // 실행중인 가장 안쪽의 반복문에서만 탈출한다.
//     }
//   };
// num1 +=num;
// console.log(num1);
// };

// num = 0;
// let m1 = 0;
// while (true) {
//   m1 = Math.ceil(Math.random() * 10); // Math.random() => 1~10까지의 값을 생성
//   console.log(`m1에 ${m1} 저장되었습니다.`);
//   num += m1;
//   if(m1 == 5) {
//     console.log(`m1에 ${m1}이 나와 종료 조건을 충족하였으므로 해당 반복문을 종료합니다.`);
//     break;
//   };
// };
// console.log(`합계: ${num}`);

// 학생의 점수 => quit 종료.
// 평균
let cnt = 0; // 학생의 수
let sumScore = 0; // 합계 점수
let avgScore = 0;
// while (true) {
//   let score = prompt("학생의 점수를 입력해주세요.\n종료 시에는 quit를 입력해주세요");
//   if (score == 'quit') { // 숫자가 아니면 실행
//     break;
//   };
//   cnt++;
//   sumScore += parseInt(score);
//   console.log(`${cnt}번째 학생의 점수는 ${score}입니다.\n현재까지 합계 점수는 ${sumScore}입니다.`);
// };
// avgScore = sumScore/cnt; // 평균 점수 구하기.

// Math.round(avgScore *= 10);

// avgScore /= 10;

// console.log(`${cnt}명의 점수 합계는 ${sumScore}점이며, 평균 점수는 ${avgScore}점 입니다.`);

// 평균2
cnt = 0;
sumScore = 0;
avgScore = 0;
let MaxScore = 0;
let MaxCnt = 0;
let MinScore = 0;
let MinCnt = 0;

while (true) {
  let score = prompt(
    "점수를 입력하시오.\n종료시에는 숫자가 아닌 문자를 입력해주세요."
  );
  if (isNaN(Number(score))) {
    // 숫자가 아닌 값을 입력받았을 때 실행
    break;
  }
  cnt++; // 학생 수 증가
  sumScore += Number(score); // 점수 누적
  if (MaxScore < score) {
    MaxScore = score;
    MaxCnt = cnt;
    console.log(
      `${MaxCnt}번째 학생이 최고점수를 갱신하였습니다.\n최고점수: ${MaxScore}`
    );
  }
  if (MinScore == 0) {
    MinScore = score;
    MinCnt = cnt;
    console.log(
      `${MinCnt}번째 학생이 최저점수를 갱신하였습니다.\n최저점수: ${MinScore}`
    );
  } else if (MinScore > score) {
    MinScore = score;
    MinCnt = cnt;
    console.log(
      `${MinCnt}번째 학생이 최저점수를 갱신하였습니다.\n최저점수: ${MinScore}`
    );
  }
  console.log(`------------------`);
  console.log(
    `${cnt}번째 학생의 점수는 ${score}입니다.\n현재까지 합계 점수는 ${sumScore}입니다.`
  );
  console.log(`------------------`);
}

console.log(`최고점수는 ${MaxScore}점이며, ${MaxCnt}번째 학생입니다.`);
console.log(`최저점수는 ${MinScore}점이며, ${MinCnt}번째 학생입니다.`);

avgScore = sumScore / cnt;
Math.floor((avgScore *= 10));
avgScore /= 10;

console.log(
  `${cnt}명의 점수 합계는 ${sumScore}점이며, 평균 점수는 ${avgScore}점 입니다.`
);

//문자를 받아와 입력한 문자들의 아스키 코드 값을 누적시키기.
let n = 0;
while (true) {
  let sc = prompt("문자 입력");
  for (let i = 0; i < sc.length; i++) {
    n += sc.charCodeAt(i);
  }
  console.log(n);
  if (sc == null) {
    break;
  }
}
