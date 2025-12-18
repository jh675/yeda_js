// function2.js

// sum함수

let result1 = 10; // 전역 변수. 어디서든 쓸 수 있는 변수.

function sum(a, b) {
  console.log(result1); // 지역변수가 선언되기 전에 불러냈기 때문에 전역변수를 불러온다.
  let result = a + b; // result는 지역변수. => 특정 코드 블록 안에서 선언된 변수.
  console.log(result); // 동일한 변수명을 가진 전역변수와 지역변수가 있는 경우
  //                      가까운 지역 변수를 불러온다. 
} // 지역변수는 함수가 끝나면 사라진다.

let a = 10,
  b = 15;
sum(a, b);

console.log(result1);

sum(1, 2);
console.log(`전역: ${result1}`);
result1 = 20;

{
  let result1 = 20; // 블록단위에서만 쓰임
  console.log(result1);
}; // 지역변수와는 다르게 코드 블록이 닫혀도 값이 그대로 유지된다.

console.log(result1);

// gugudan, 4단 콘솔 출력
// 매개변수 있는 경우
function gugudan(x) {
  console.log(`${x}단`);
  for (let i = 1; i < 10; i++) {
    console.log(`${x} * ${i} = ${x*i}`);
  };
};

let x;

x = 4; // 값을 지정해줄때
// x = prompt("값을 입력해주세요.");// 임의의 값을 지정했을 때
gugudan(x);

console.log("-----------------------------");
// 매개변수가 없는 경우
function gugudan2() {
  for (let i = 1; i < 10; i++) {
    console.log(`4 * ${i} = ${4 * i}`);
  };
};

gugudan2();