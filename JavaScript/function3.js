// function3.js

// 함수표현식
const sum = function (a, b) {
  return a + b;
}

console.log(sum);
let result = sum(19, 5);
console.log(result);

const plus = sum;
result = plus(3, 4);
console.log(result);

result = (function (x, y) {
  return x > y ? x : y;
})(17, 50);

console.log(result);

// 화살표함수
// (매개변수) => { 기능 }

// ex)
// const hi = function () {
//   return 'hello!';
// };
// --->
const hi = () => {
  return 'Hello, JavaScript!';
};

console.log(hi());

// 매개변수가 있는 경우
const hj = (name) =>  `Hello, ${name}`; // 중괄호 {}는 함수가 한줄로 끝날때에는 생략이 가능.

console.log(hj("Kim Jin Hwan"));

//단, 다음과 같은 경우는 불가능.
// --------------------------
// const hj = (name) =>
//   `Hello, ${name}`;
// --------------------------
