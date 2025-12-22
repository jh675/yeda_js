// date.js
let today = new Date();
console.log(today);

let day = new Date("2025-01-08T17:50:22");
console.log(day.getMonth()); // 0~11까지의 값을 가져온다.
// 날짜 표기는 1부터 시작이지만 컴퓨터는 0부터 시작한다.

switch (day.getDay()) {
  case 0:
    console.log("일요일");
    break;
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
}

// 객체, 메소드 =>
function printDay(now = new Date()) {
  // 콘솔에 요일정보를 출력하는 함수
  switch (now.getDay()) {
    case 0:
      console.log("일요일");
      break;
    case 1:
      console.log("월요일");
      break;
    case 2:
      console.log("화요일");
      break;
    case 3:
      console.log("수요일");
      break;
    case 4:
      console.log("목요일");
      break;
    case 5:
      console.log("금요일");
      break;
    case 6:
      console.log("토요일");
      break;
  }
}
printDay(today);

let y, m, d, da, h, mm, s;
const ds = ["일", "월", "화", "수", "목", "금", "토"];

// 뻘짓?
function dayToday(now = new Date()) {
  y = now.getFullYear() % 100;
  m = now.getMonth() + 1;
  d = now.getDay();
  da = ds[d];
  h = now.getHours();
  mm = now.getMinutes();
  s = now.getSeconds();

  console.log(
    `${y}년 ${String(m).padStart(2, "0")}월 ${String(d).padStart(
      2,
      "0"
    )}일 ${da} ${String(h).padStart(2, "0")}:${String(mm).padStart(
      2,
      "0"
    )}:${String(s).padStart(2, "0")}`
  );
}

dayToday(today);
/******************************************************************************************************/

today = new Date();
// today.setFullYear(1970);
// today.setMonth(0);
// today.setDate(0);
// today.setHours(0);
// today.setMinutes(0);
// today.setSeconds(0); // getTime() 기준
console.log(Math.floor(1766385276450 / 1000 / 60 / 60 / 24 / 365));

function newToday(now = new Date()) {
  y = now.getFullYear();
  m = now.getMonth() + 1;
  d = now.getDay();
  switch (now.getDay()) {
    case 0:
      da = "일요일";
      break;
    case 1:
      da = "월요일";
      break;
    case 2:
      da = "화요일";
      break;
    case 3:
      da = "수요일";
      break;
    case 4:
      da = "목요일";
      break;
    case 5:
      da = "금요일";
      break;
    case 6:
      da = "토요일";
      break;
  }
  h = now.getHours();
  mm = now.getMinutes();
  s = now.getSeconds();

  console.log(
    `${y}년 ${String(m).padStart(2, "0")}월 ${String(d).padStart(
      2,
      "0"
    )}일 ${da} ${String(h).padStart(2, "0")}:${String(mm).padStart(
      2,
      "0"
    )}:${String(s).padStart(2, "0")}`
  );
}

newToday(today);

/******************************************************************************************************/

const aday = new Date("Mon Dec 21 2025 08:38:17 GMT+0900");
console.log(aday);
const tts = today - aday; // msec 차이
console.log(tts);
const tSec = Math.floor(tts / 1000);
console.log(tSec);
const ts = Math.floor(tSec % 60);
console.log(ts);
const tm = Math.floor((tSec / 60) % 60);
console.log(tm);
const th = Math.floor((tSec / 3600) % 24);
console.log(th);
const td = Math.floor(tSec / 3600 / 24);
console.log(td);

console.log(`${td}일 ${th}시간 ${tm}분 ${ts}초 만큼 차이가 발생`);

/******************************************************************************************************/

function Calendar() {
  // 1일 화요일
  const spaces = 6;
  // 31일 마지막날
  const lastDay = 31;
  // 요일 지정
  let html = "<table border=2 width=500px><thead><tr>";
  for (let d of ds) {
    html += `<th>${d}</th>`;
  }
  html += "</tr></thead><tbody style=text-align:right><tr>";
  // 날짜 넣기
  // for (let d = 1; d <= lastDay + spaces; d++) {
  //   html += `<td>${d - spaces > 0 ? d - spaces : ""}</td>`;
  //   if (d % 7 == 0) {
  //     html += "</tr><tr>";
  //   }
  // }
  for (let s = 0; s < spaces; s++) {
    html += "<td></td>";
  }
  for (let d = 1; d <= lastDay; d++) {
    html += `<td>${d}</td>`;
    if ((d + spaces) % 7 == 0) {
      html += "</tr><tr>";
    }
  }
  html += "</tr></tbody></table>";
  document.writeln(html);
}

Calendar();
