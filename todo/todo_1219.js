// 화살표함수(ES6)

// 데이터유형(객체, 배열)

// 이벤트
// 화면영역에서 키보드 마우스 => 동작 - 이벤트 발생 -> 이벤트핸들러가 존재해야 이벤트에 맞춰 함수 실행.

// 친구(이름(fNm), 연락처(fTel), 생일(fBirth): '08-20-12', 키(fHei): 168.12) -> 4명 생성. friend 배열.
// 친구 키 평균 구하기(avgHei) / 제일 큰 키(이름) (maxHei(fNm))
// 테이블 태그를 이용해서 document.write로 그리기

const friend = [{
    fNm: "JH",
    fTel: "010-1111-2222",
    fBirth: "97-04-01",
    fHei: "180.22",
  },
  {
    fNm: "CW",
    fTel: "010-3333-4444",
    fBirth: "97-09-11",
    fHei: "182.48",
  },
  {
    fNm: "JM",
    fTel: "010-5555-6666",
    fBirth: "98-11-15",
    fHei: "186.25",
  },
  {
    fNm: "JS",
    fTel: "010-7777-8888",
    fBirth: "96-08-14",
    fHei: "179.13",
  },
];

let avgHei = 0, // 평균 키
  maxHei = 0, // 제일 큰 키
  amxFnm = 0;
console.log(friend.length);

let html = "<hr><table border = 2><thead><tr><th>이름</th><th>연락처</th><th>생일</th><th>키</th></tr></thead><tbody>"
for (let f of friend) {
  html += `<tr>`; // 행 생성
  for (let h in f) {
    html += `<td>${f[h]}</td>` // 데이터 입력
  }
  avgHei += Number((f.fHei)); // 키 더하기.
  if (f.fHei > maxHei) {
    maxHei = f.fHei;
    maxFnm = f.fNm;
  };
  html += `</tr>`; // 행 종료
}
html += `<tr><td>평균키</td><td>${avgHei/friend.length}</td><td>최대키</td><td>${maxHei}(${maxFnm})</td></tr></tbody></table>`;

document.write(html);