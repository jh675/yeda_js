// exe3.js

const numAry = [10, 30, 50];

numAry[1] = 20; // 위치에 값이 있는 경우 modified를 진행한다.
numAry[numAry.length] = 30; // 제일 마지막에 값을 저장.
numAry[numAry.length] = 60; // 제일 마지막에 값을 저장.
numAry[numAry.length] = 90; // 제일 마지막에 값을 저장.

console.log(numAry);

// 값이 50보다 큰 값 구하기.
for (let i = 0; i < numAry.length; i++) {
  if (numAry[i] > 50) {
    console.log(`numAry[${i}] = ${numAry[i]}`);
  }
}

console.log("---------------------------------");

// 짝수번째 인덱스의 값 구하기
for (let i = 0; i < numAry.length; i++) {
  if (i % 2 == 0) {
    console.log(`numAry[${i}] = ${numAry[i]}`);
  }
}

console.log("---------------------------------");

// 홀수번쨰 인덱스의 값 구하기
for (let i = 0; i < numAry.length; i++) {
  if (i % 2 == 1) {
    console.log(`numAry[${i}] = ${numAry[i]}`);
  }
}

console.log("---------------------------------");

// 테스트
// for ~ of를 이용하여 값 구하기
for (let i in numAry) {
  //for ~ of는 기본적으로 value값을 가져온다. (index를 가져오는 건 없다고 봐야된다.)
  console.log(`numAry[${i}] = ${numAry[i]}`);
}

console.log("---------------------------------");

// 최댓값 구하기
let max = 0; // 최댓값을 저장할 변수

for (let i = 0; i < numAry.length; i++) {
  if (numAry[i] > max) {
    max = numAry[i];
  }
}
console.log(max);

console.log("---------------------------------");

// 테스트
// 배열 값 오름차순 및 내림차순으로 정렬
let swap = 0; // 임시 저장소
let main = 0; // 기존 값을 저장

// console.log("작성중...");

// 내림차순으로 정렬
// numAry = [10, 20, 50, 30, 60, 90]
// numAry = [90, 60, 50, 30, 20, 10]으로 정렬이 되어야 함.
for (let i = 0; i < numAry.length; i++) {
  for (let j = i + 1; j < numAry.length; j++) {
    if (numAry[i] < numAry[j]) {
      // 뒤의 값이 더 큰 경우 실행한다.
      // 앞에 저장된 값보다 큰 경우 값을 교체한다.
      swap = numAry[i]; // 작은 값을 저장한다.
      // console.log("swap: " + swap);
      numAry[i] = numAry[j]; // 큰값을 저장한다.
      numAry[j] = swap; // 큰값이 있던 위치에 작은 값을 저장한다.
      // console.log(`배열상태: ${numAry}\n-------------------`);
    }
  }
}
console.log(`배열 내림차순: ${numAry}`);

// 오름차순으로 정렬
// numAry = [10, 20, 50, 30, 60, 90]
// numAry = [10, 20, 30, 50, 60, 90]으로 정렬이 되어야 함.
for (let i = 0; i < numAry.length; i++) {
  for (let j = i + 1; j < numAry.length; j++) {
    if (numAry[i] > numAry[j]) {
      // 뒤의 값이 더 작은 경우 실행한다.
      // 앞에 저장된 값보다 작은 경우 값을 교체한다.
      swap = numAry[i]; // 큰 값을 저장한다.
      // console.log("swap: " + swap);
      numAry[i] = numAry[j]; // 작은값을 저장한다.
      numAry[j] = swap; // 작은 값이 있던 위치에 큰 값을 저장한다.
      // console.log(`배열상태: ${numAry}\n-------------------`);
    }
  }
}
console.log(`배열 오름차순: ${numAry}`);

console.log("---------------------------------");

// 회원정보
const memInfo = [
  {
    id: "user01",
    name: "JH",
    point: 800,
  },
  {
    id: "user02",
    name: "SI",
    point: 756,
  },
  {
    id: "user03",
    name: "CW",
    point: 980,
  },
];

const tableTh = ["아이디", "이름", "포인트"];

// 포인트 합계 : ?, 최고포인트: ?
let sumPt = 0,
  maxPt = 0;

for (let i in memInfo) {
  sumPt += memInfo[i].point;
  if (maxPt < memInfo[i].point) {
    maxPt = memInfo[i].point;
  }
}
console.log(`포인트합계: ${sumPt}, 최고포인트: ${maxPt}`);

let table1 =
  "<h3>회원목록</h3><table border=2><thead><tr><th>아이디</th><th>이름</th><th>포인트</th></tr></thead><tbody>";

for (let i of memInfo) {
  // tr 구하기. => 배열의 길이만큼 반복.
  table1 += "<tr>";
  for (let prop in i) {
    // td 구하기 => 객체의 길이만큼 반복.
    table1 += `<td>${i[prop]}</td>`;
  }
  table1 += "</tr>";
}

table1 += `<tr><td colspan=2>합계</td><td>${sumPt}</td></tbody></table>`;

document.write(table1);
