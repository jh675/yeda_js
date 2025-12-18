// for.js

let sum = 0; // 값을 누적할 변수선언 및 초기값 지정.

sum += 1;
sum += 2;
sum += 3;
sum += 4;
sum += 5;

console.log(sum);

console.log('-------------------------------');

sum =0; // 위에서 일일이 계산했으니까 다시 초기화

console.log('for문을 반복하면')

// for문

/*for(초기값; 조건; 증감) {
    실행할 구문;
  } */

for (let i = 0; i < 101; i++) { // i의 값이 6미만인 경우 값을 계속 누적. for문을 한번 할때마다 i값을 1씩 증가.
  if(i % 2 == 0) {
    document.write(`i값은 ${i}로 짝수입니다.<br>`);
  }
  console.log('i = ' + i);
  console.log(`sum(${sum}) + i(${i}) = sum(${sum += i})`);
}

console.log(`최종값은 ${sum}이다.`);