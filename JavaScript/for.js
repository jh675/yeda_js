// for.js

let sum = 0; // 값을 누적할 변수선언 및 초기값 지정.

sum += 1;
sum += 2;
sum += 3;
sum += 4;
sum += 5;

console.log(sum);

console.log('-------------------------------');

sum = 0; // 위에서 일일이 계산했으니까 다시 초기화

console.log('for문을 반복하면')

// for문

/*for(초기값; 조건; 증감) {
    실행할 구문;
  } */

for (let i = 0; i < 6; i++) { // i의 값이 6미만인 경우 값을 계속 누적. for문을 한번 할때마다 i값을 1씩 증가.
  if (i % 2 == 0) {
    document.write(`i값은 ${i}로 짝수입니다.<br>`);
  }
  console.log('i = ' + i);
  console.log(`sum(${sum}) + i(${i}) = sum(${sum += i})`);
}

console.log(`최종값은 ${sum}이다.`);

console.log('-------------------------------');

let oddSum = 0;
let evenSum = 0;

for (let i = 0; i <= 100; i++) { // i가 100이하인 동안에 반복
  if (i % 2 == 1) { // 홀수일때만 실행
    oddSum += i; // if의 조건이 충족되었을 떄(홀수)에만 oddSum에 i값을 누적.
  } else { // 홀수가 아닐 때, 즉 짝수일때만 실행
    evenSum += i; // if의 조건이 충족되지 않았을 때(짝수)에만 evenSum에 i값을 누적
  };
};
console.log(`1부터 100까지 홀수의 합은 \'${oddSum}\'입니다.\n1부터 100까지 짝수의 합은 \'${evenSum}\'입니다.`);

// evenSum = 0;

// for (let i = 0; i < 101; i++) { // 101 미만(100이하)인 동안에만 반복
//   if (i % 2 == 0) { // i를 2로 나눠서 나머지가 0인 경우에만 실행
//     evenSum += i; // 조건을 충족하면 evenSum에 i값을 누적
//   };
// };

// console.log(`1부터 100까지 짝수의 합은 \'${evenSum}\'입니다.`);

let multiple = 0;

// 이중 for문
for (let i = 2; i < 10; i++) {
  console.log(`------------${i}단------------`);
  for (let j = 2; j < 10; j++) {
    multiple = i * j;
    console.log(`${i} * ${j} = ${multiple}`);
  };
  multiple = 0;
};

let supSum = 0;
console.log(`---------------제곱의 누적----------------`);
for (let i = 1; i <= 100; i++) {
  supSum = i * i;
  console.log(`${supSum} = ${i} * ${i}`);
};
