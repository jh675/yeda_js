// jsBasic.js

// 변수 선언, 연산자 활용
// 이름을 저장하기 위한 변수 선언 => 이름 저장.
let name = "Kim JinHwan";
let nameKr = "김진환";

// 혈액형을 저장하기 위한 변수 선언 => 혈액형 저장.
let bloodType = "A";

// 키와 몸무게를 저장하기 위한 변수 선언 => 각각 키와 몸무게 저장.
let myHeight = 180;
let myWeight = 82;

// 성인여부 구분.
let isAdult = true // false

let sum = 10 + 20; // 숫자 간의 더하기 => 더한 값을 sum이라는 변수에 저장.
console.log('sum 값은 \'' + sum + '\' 이다.');

// My name is Kim JinHwan.
console.log('My name is ' + name + '.');
console.log('내 이름은 ' + nameKr + '입니다.');

// 사칙연산, %
// 사칙연산
let num1, num2;
num1 = 18;
num2 = 7;
let result = 0;
console.log('num1의 초기값은 ' + num1 + '이고, num2의 초기값은 ' + num2 + '입니다. result의 초기값은 ' + result + '입니다.');
// 더하기
result = num1 + num2;
console.log(`${num1} + ${num2} = ${result} 입니다.`);
// 빼기
result = num1 - num2;
console.log(`${num1} - ${num2} = ${result} 입니다.`);
// 곱하기
result = num1 * num2;
console.log(`${num1} * ${num2} = ${result} 입니다.`);
// 나누기
result = parseInt(num1 / num2);
console.log(`${num1} / ${num2} = ${result} 입니다.`);

// 나머지(%)
result = parseInt(num1 % num2);
console.log(`${num1} % ${num2} = ${result} 입니다.`);

// 증감식
result++; // result에 result+1 한 값을 대입하겠다.
// 단, ++이 뒤에 있고 앞에 실행해야될 내용이 있을 경우 실행한 다음 증감식 진행.
// ++가 앞에 있는 경우 증감식을 먼전.
console.log(`result++을 하면 result에 result+1을 더한 값을 저장한다는 의미로, ${result - 1}에서 ${result}로(으로) 됩니다.`);
result--; // result에 result-1 한 값을 대입하겠다.
// 단, --가 뒤에 있고 앞에 실행해야될 내용이 있을 경우 실행한 다음 증감식 진행.
// --가 앞에 있는 경우 증감식을 먼저.

// 할당
result = 0; // result에 값을 재할당.
result += 9; // result = result + 3을 의미.
console.log(`현재 result 값은 ${result}이다.`);
result -= 1; // result = result - 2를 의미.
console.log(`현재 result 값은 ${result}이다.`);
result *= 4; // result = result * 4를 의미.
console.log(`현재 result 값은 ${result}이다.`);
result /= 2; // result = result / 2를 의미.
console.log(`현재 result 값은 ${result}이다.`);
result %= 6; // result = result % 4를 의미.
console.log(`현재 result 값은 ${result}이다.`);

// boolean
result = result < 10; // true
// true는 기본적으로 값을 1을 가져간다.
console.log(`현재 result 값은 ${result}이다.`);
result += 3; // Java에서는 NaN을 출력한다.(JavaScript에서는 true를 1로 계산해서 처리하는 듯)
console.log(`현재 result 값은 ${result}이다.`);
result = result > 10; // false
// false는 기본적으로 값을 0으로 가져간다.
console.log(`현재 result 값은 ${result}이다.`);
result += 3; // Java에서는 NaN을 출력한다.(JavaScript에서는 false를 1로 계산해서 처리하는 듯)
console.log(`현재 result 값은 ${result}이다.`);

result = 'Hello'; // 값을 재할당
result -= 3; // Hello에서 3을 뺀다. => 값을 뺄 수가 없어 NaN(Not a Number)을 출력한다.