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

function printCalendar(yyyy, mm) {
  const firstDay = new Date(yyyy, mm - 1, 1),
    lastDay = new Date(yyyy, mm, 0).getDate(),
    space = firstDay.getDay();
  console.log(firstDay + '/' + lastDay + '/' + space);
  let html = `<table border = 2 style=width:400px><thead><caption>${yyyy} - ${String(mm).padStart(2, "0")}</caption><tr>`;
  for (let d of ds) {
    // 요일 적어주기
    html += `<th>${d}</th>`;
  }
  html += "</tr></thead><tbody style=text-align:right><tr>";
  for (let s = 0; s < space; s++) {
    // 공란 넣어주기
    html += `<td></td>`;
  }
  for (let d = 1; d <= lastDay; d++) {
    html += `<td>${d}</td>`;
    if ((d + space) % 7 == 0) {
      html += "</tr><tr>";
    }
  }
  html += `</tr></tbody></table>`;

  document.writeln(html);
}

const year = prompt("년도를 입력하세요.", 2025);
const mon = prompt("월을 입력해주세요");

printCalendar(year, mon);