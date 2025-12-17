// if.js
// Math.random() => 0 '이상' 1 '미만' 범위에 해당하는 임의의 값 생성.

// 1 ~ 10 => Math.random() * 10 => x에 저장
let x = Math.floor(Math.random() * 10) + 1; // Math.ceil(Math.random()*10)와 Math.floor(Math.random()*10)+1은 출력범위가 똑같다.
console.log(x);

/* if 조건문
  if(조건) {
  조건이 참일 때 결과
  } else {
    조건이 거짓일 때 결과
  }
*/

if (x % 2 == 0) {
  console.log('짝수입니다.');
  // alert("짝수입니다.");
} else {
  console.log('홀수입니다');
  // alert("짝수입니다.");
}
// x의 값이 홀수이면서 5보다 크거나 같으면 => 조건을 만족합니다 출력.
// 거짓일 경우 조건을 만족하지 않습니다 출력.

if (x >= 5 && x % 2 == 1) {
  console.log('조건을 만족합니다.');
} else {
  console.log('조건을 만족하지 않습니다.');
};

// 삼항 연산식.
// 구성: 조건문 ? 참일 때의 결과값 : 거짓일 때의 결과값
(x % 2 == 1 && x >= 5) ? console.log("조건을 만족합니다."): console.log("조건을 만족하지 않습니다");

console.log('--------------------------------------------------------------------------');

// 학생성적 출력. 점수의 범위는 0 ~ 100으로 지정.
/* if는 계속 연결하는 것이 가능하다.
************************************
  if(조건 1) {
    조건 1이 참일 때 결과
  } else if(조건 2) { => 조건 1은 이미 거짓.
    조건 2가 참일 때 결과
  } else if(조건 3) { => 조건 2는 이미 거짓.
    조건 3이 참일 때 결과
  } else {
    조건 3이 거짓일 때
  } */

// for (let i = 0; i < 100; i++) {
x = Math.floor(Math.random() * 101); // 0이상 101미만의 값을 출력하는데 Math.floor로 버림을 함으로서 0 ~ 100까지 출력가능. 
// Math.ceil(Math.random()*101)-1을 하면 1~101을 출력하는데 -1을 해서 0~100까지 출력 가능.
console.log(x); // 점수 확인.

if (x >= 90) {
  // 90점 이상 A
  console.log('A학점');
} else if (x >= 80) {
  // 80점 이상 90점 미만 B
  console.log('B학점');
} else if (x >= 70) {
  // 70점 이상 80점 미만 C
  console.log('C학점');
} else if (x >= 60) {
  // 60점 이상 70점 미만 D
  console.log('D학점');
} else {
  // 60점 미만 F
  console.log('F학점');
}
// 구분선
console.log('--------------------------------------------------------------------------');

if (x >= 90) {
  // 90점 이상 A
  (x >= 95) ? console.log('A+학점'): console.log('A학점');
} else if (x >= 80) {
  // 80점 이상 90점 미만 B
  (x >= 85) ? console.log('B+학점'): console.log('B학점');
} else if (x >= 70) {
  // 70점 이상 80점 미만 C
  (x >= 75) ? console.log('C+학점'): console.log('C학점');
} else if (x >= 60) {
  // 60점 이상 70점 미만 D
  (x >= 65) ? console.log('D+학점'): console.log('D학점');
} else {
  // 60점 미만 F
  console.log('F학점');
}
// }