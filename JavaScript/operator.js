// operator.js
console.log('hello, operator.js');


console.log('----------비교 연산자----------');
// 비교 연산자
let result = 10 > 5;
console.log(result);

result = 10 == 11;
console.log(result);

let num1 = 10;
let num2 = 15;
let str1 = '10';
let str2 = '15';

result = num1 >= num2;
console.log(result);

result = num1 == str1; // data type을 다 빼고 value만 비교한다.
console.log(result);

result = num2 === str2; // data type와 value 모두를 비교한다.( === 은 JavaScript만 있으며, 다른 프로그래밍 언어는 ==를 했을때 값과 자료형 둘다 비교한다.)
console.log(result);

result = num1 != num2;
console.log(result);

result = num1 != str1;
console.log(result);

console.log('----------논리 연산자----------');

// 논리 연산자
result = num1 > num2 || num1 == str1; // OR 연산자. 둘 중 하나라도 true면 true가 출력된다. (둘다 false여야만 false가 출력된다.)
console.log(result);

result = num1 > num2 && num1 == str1; // AND 연산자. 둘 중 하나라도 false면 false가 출력된다. (둘다 true여야만 true가 출력된다.)
console.log(result);

result = !(num1 > num2 && num1 == str1); // NOT 연산자. 피연산자의 결과값의 반댓값을 나타낸다.
console.log(result);

result = !result;
console.log(result);

result = !result;
console.log(result);

console.log('----------문자와 숫자 단순비교----------');

let a = 'h';
let b = 10;

result = a > b;
console.log(result);

result = a < b;
console.log(result);

result = a >= b;
console.log(result);

result = a <= b;
console.log(result);

console.log('----------문자 비교?----------');

a = 'A';
b = 'a';

result = a > b;
console.log(result);

result = a < b;
console.log(result);

result = a >= b;
console.log(result);

result = a <= b;
console.log(result);

console.log('---------문자와 숫자 값 (문자를 아스키 코드로)치환해서 비교---------');

a = 'h';
b = 10;

result = a.charCodeAt(0) > b;
console.log(result);