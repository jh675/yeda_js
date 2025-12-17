// exe1.js
// Math.random() 함수. 0 <= x < 1 사이의 값이 나온다.
// Math.ceil(): 4.58945614895121 => 5
// Math.floor(): 4.565418523 => 4

let x = Math.random() * 10;

console.log(x);
console.log(Math.ceil(x));
console.log(Math.floor(x));

// 임의의 값이 5보다 크면 true, 작으면 false.

let y = x > 5;

// if문을 이용한 경우
if (y) {
  console.log(`${Math.floor(x)}는 5보다 크므로 ${y}다.`);
} else {
  console.log(`${Math.floor(x)}는 5보다 크므로 ${y}다.`);
}

// 그냥 만든 경우
console.log(`${Math.floor(x)}는 ${y}다.`);

// 임의의 값이 짝수면 true, 홀수면 false

y = Math.floor(x) % 2 == 0;

// if문을 이용한경우
if (y) {
  console.log(`${Math.floor(x)}는 짝수이므로 ${y}다.`);
} else {
  console.log(`${Math.floor(x)}는 홀수이므로 ${y}다.`);
}

// 그냥 만든 경우
console.log(`${Math.floor(x)}는 ${y}다.`);