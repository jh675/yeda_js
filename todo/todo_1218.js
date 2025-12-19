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
//   console.log("반복할 횟수가 정해진 경우");
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
//   console.log("--------------------------------------");
// };

// scoreInfo();

// sum = 0;
// cnt = 0;
// avg = 0;
// max = 0;

// function scoreInfo2(x) {
//   console.log("반복할 횟수를 임의의 값으로 준 경우");
//   for (let i = 0; i < x; i++) {
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

// x = prompt("반복할 횟수를 입력하시오.");

// scoreInfo2(x);

// 복습(1219)

// 1~10까지의 정수를 누적

sum = 0;
let oddSum = 0,
  evenSum = 0;

for (let i = 0; i < 11; i++) {
  sum += i;
  if (i % 2 == 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log(`1부터 10까지 정수의 합은 ${sum}.`);
console.log(`1부터 10까지 홀수의 합은 ${oddSum}.`);
console.log(`1부터 10까지 짝수의 합은 ${evenSum}.`);

x = prompt("값을 입력하세요.");
y = 0;
if (isNaN(Number(x))) {
  y = true;
}

while (y) {
  x = prompt("값을 입력하세요");
  if (!isNaN(Number(x))) {
    y = false;
  }
}
console.log("입력된 값은 " + x + "입니다");

sum = 0;

for (let i = 0; i <= x; i++) {
  sum += i;
}

console.log(`1부터 ${x}까지의 합은 ${sum}.`);

console.log("---------------------------------------");

sum = 0;
oddSum = 0;
evenSum = 0;

function fun_Sum(x) {
  for (let i = 0; i <= x; i++) {
    if (i % 2 == 1) {
      oddSum += i;
    } else {
      evenSum += i;
    }
  }
}

fun_Sum(x);

console.log(`oddSum: ${oddSum}`);
console.log(`evenSum: ${evenSum}`);

// 1부터 5를 누적하고 반환하기. => 누적된 값은 result에 반환.

let result = 0;

function sumUp() {
  for (let i = 0; i < 6; i++) {
    result += i;
  }
  return result;
}

sumUp();

console.log(result);

result = 0; // result를 초기화

function xSumUp(x) {
  for (let i = 0; i <= x; i++) {
    result += i;
  }
  return result;
}

xSumUp(x);

console.log(result);

// 문자배열의 위치에 따라 아스키코드값들 출력하기.

// let sc = 0;

// function fun_StrAc(x, y) {
//   for (let i = 0; i < y; i++) {
//     sc = x.charCodeAt(i);
//     console.log(`x[${i}]번째의 문자는 ${x[i]}로, 아스키코드 값은 ${sc}입니다.`);
//   };
// };

// let str = prompt("문자를 입력하세요.");
// console.log(str);
// let strLen = str.length;
// console.log(strLen);

// fun_StrAc(str, strLen);
