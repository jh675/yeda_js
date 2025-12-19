// object3.js

const studentAry = [
  {
    stdNo: "97-0401",
    stdNm: "김진환",
    stdTel: "010-****-8135",
    stdScore: 80,
  },
  {
    stdNo: "97-0402",
    stdNm: "김현민",
    stdTel: "010-1795-****",
    stdScore: 85,
  },
  {
    stdNo: "97-0403",
    stdNm: "이명진",
    stdTel: "010-****-8120",
    stdScore: 90,
  },
  {
    stdNo: "97-0404",
    stdNm: "민윤기",
    stdTel: "010-7821-****",
    stdScore: 92,
  },
];

let table =
  "<table border=2><thead><tr><th>학번</th><th>이름</th><th>연락처</th><th>점수</th></tr></thead><tbody>";
for (let student of studentAry) {
  table += `<tr><td>${student.stdNo}</td><td>${student.stdNm}</td><td>${student.stdTel}</td><td>${student.stdScore}</td></tr>`;
}
table += "</tbody></table>";

document.write(table + "<hr>");

let table1 =
  "<table border=2><thead><tr><th>학번</th><th>이름</th><th>연락처</th><th>점수</th></tr></thead><tbody>";

for (let i of studentAry) {
  // tr 구하기. => 배열의 길이만큼 반복.
  table1 += "<tr>";
  for (let prop in i) {
    // td 구하기 => 객체의 길이만큼 반복.
    table1 += `<td>${i[prop]}</td>`;
  }
  table1 += "</tr>";
}

table1 += "</tbody></table>";

document.write(table1);
