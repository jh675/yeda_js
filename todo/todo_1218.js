/* 2025-12-18 과제 */

/* ------------------------------------------------------------------------------- */
/* 과목과제 */
// Chapter17 읽기.
// 예제 있으면 예제 해보기.
// 585p 6번 및 586p 7번

// Math.random() 활용. 31 ~100 생성
let sum, cnt, avg, max, a, x;

// sum = 0;
// cnt = 0;
// avg = 0;
// max = 0;

// function scoreInfo() {
//   for (let i = 0; i < 5; i++) {
//     a = Math.ceil(Math.random() * 70) + 30;
//     console.log(`${i+1}번째 점수는 ${a}`);
//     sum += a;
//     console.log(`점수누적 ${sum}`);
//     cnt++;
//     if (max < a) {
//       max = a;
//     };
//   };
//   avg = sum / cnt;
//   console.log(`합계는 ${sum}, 평균 ${avg}, 최대 ${max}`);
// };

// scoreInfo();

sum = 0;
cnt = 0;
avg = 0;
max = 0;

function scoreInfo2(x) {
  for (let i = 0; i < x; i++) {
    a = Math.ceil(Math.random() * 70) + 30;
    console.log(`${i+1}번째 점수는 ${a}`);
    sum += a;
    console.log(`점수누적 ${sum}`);
    cnt++;
    if (max < a) {
      max = a;
    };
  };
  avg = sum / cnt;
  console.log(`합계는 ${sum}, 평균 ${avg}, 최대 ${max}`);
};

x = prompt("반복할 횟수를 입력하시오.");

scoreInfo2(x);