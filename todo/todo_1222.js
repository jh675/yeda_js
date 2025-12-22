// 객체
// 붕어빵틀 (클래스) -> 실체 -> 붕어빵 (인스턴스)
class People {
  // Instance
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 기능(Method)
  showInfo() {
    console.log(
      `이름은 ${this.name}, 나이는 ${this.age}`
    ); /* this는 '니가 무엇을 생각하고 있는건지는 모르겠지만 아무튼 니가 생각하는걸 가리키는 거'라고 이해하면 쉬움. */
  }
}
// 내장객체

// 문서객체모델(DOM => Document Object Model)

// 브라우저객체모델(BOM => Browser Object Model)

// 사용자 정의 객체

/****************************************************************************************/

// 숙제
// let year = 2025,
//   month = 2;

// today.setFullYear(year); // 2025년
// today.setMonth(month); // month가 2니까 계산되는 달은 3월
// today.setDate(0); // 0은 1-1이니까 전월의 마지막날
// today.getDay(); // 1일의 요일, 마지막 요일

const ds = ["일", "월", "화", "수", "목", "금", "토"];

function printCalendaer(yyyy, mm) {
  let today = new Date();
  today.setFullYear(yyyy);
  today.setMonth(mm); // 4월을 보게됨
  today.setDate(0); // 전월 마지막날로 들어가면서 3월
  const lastDay = today.getDate(); // 3월을 대입
  today.setMonth(mm - 1); // 3월로 설정
  today.setDate(1); // 1일로 지정
  console.log(lastDay);
  const space = today.getDay(), // 여백 공간
    firstDay = 1;
  let html = "<table border = 2><thead><tr>";
  for (let d of ds) {
    // 요일 적어주기
    html += `<th>${d}</th>`;
  }
  html += "</tr></thead><tbody><tr>";
  for (let s = 0; s < space; s++) {
    // 공란 넣어주기
    html += `<td></td>`;
  }
  for (let d = firstDay; d <= lastDay; d++) {
    html += `<td>${d}</td>`;
    if ((d + space) % 7 == 0) {
      html += "</tr><tr>";
    }
  }
  html += `</tr></tbody></table>`;

  document.writeln(html);
}
printCalendaer(2025, 3);
