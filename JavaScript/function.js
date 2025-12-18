// function.js

// 두 개의 값을 비교해 큰 값을 출력하는 함수
// 함수명(매개변수) {
// 함수 내용
// }
function Max(a, b) { // (a, b)의 a와 b를 매개변수(parameter)라고 한다.
  if (a > b) {
    console.log(`큰 값은 a로 ${a}이다.`);
  } else {
    console.log(`큰 값은 b로 ${b}이다.`);
  };
}; // end of Max(a, b)

let n1 = 50,
  n2 = 30;

// 함수 호출
Max(n1, n2); // 함수명(매개값1, 매개값2 ...) 방식으로 사용한다.
// 매개값과 매개변수의 갯수, 함수명 전부 동일해야 한다.0

let n3 = 50,
  n4 = 65;

Max(n3, n4); // 함수명(n1, n2)의 n1과 n2를 매개값(argument)이라고 한다.


let result = 0;
// 매개변수 2개, 2개의 곱을 콘솔에 출력. 함수명은 getMulti.
function getMulti(c, d) {
  result = c * d;
  // console.log(`c(${c})와 d(${d})의 곱 연산 결과는 ${result}입니다.`);

  return result; // 반환
}; // end of getMutli(c, d)

let a = prompt("숫자를 입력하시오.");
let b = prompt("숫자를 입력하시오.");

getMulti(a, b);

console.log(`a(${a})와 b(${b})의 곱 연산 결과는 ${result}입니다.`);