// student.js

// 학생정보가 담긴 배열을 선언
let stdInfo = [
  { stdNo: "250101", stdNm: "KJH", stdSc: 90, nn: "" },
  { stdNo: "250102", stdNm: "YHJ", stdSc: 97, nn: "" },
  { stdNo: "250103", stdNm: "PSW", stdSc: 95, nn: "" },
];

// 변수 선언
const target = document.querySelector("div.list tbody");
const btnIns = document.querySelector("button[class$='ess']"); // 등록버튼
const btnUpd = document.querySelector("button[class$='primary']"); // 수정버튼
const btnUpdCom = document.querySelector("#updCom"); // 수정완료버튼
const btnReset = document.querySelector("button[class$='secondary']"); // 취소버튼

// tbody의 html을 삭제
target.innerHTML = ""; // ""와 같이 따옴표 혹은 쌍따옴표만으로 되어있으면 삭제를 의미

makeList(); // makeList를 따라간다.

/*************************************** 이벤트 ***************************************/

// 학생 등록버튼
btnIns.addEventListener("click", (e) => {
  const stdNo = document.querySelector("#stdNo").value.trim();
  const stdNm = document.querySelector("#stdNm").value.trim();
  const stdSc = document.querySelector("#stdSc").value.trim();
  // 항목 입력하지 않을 경우 실행방지
  if (!(stdNo && stdNm && stdSc)) {
    alert("내용입력 필수");
    return;
  }
  stdInfo.push({ stdNo, stdNm, stdSc });
  makeList();
  // target.appendChild(makeRows({ stdNo, stdNm, stdSc })); // 속성과 변수가 같으면 줄여서 쓸 수 있다.

  // 중복체크
  // for (let std of stdInfo) { // stdInfo에 있는 객체정보들을 std에 하나씩 저장한다
  //   if (std.stdNo == stdNo) { // std의
  //     alert("이미 등록된 학생입니다");
  //     document.querySelector("#stdNo").value = "";
  //     document.querySelector("#stdNm").value = "";
  //     document.querySelector("#stdSc").value = "0";
  //     return;
  //   }
  // }
  let exits = stdInfo.some((ele) => ele.stdNo == stdNo); // some 메서드는 특정조건을 만족하는지를 확인하는 메서드.
  // some((element, index, array) => 조건) ※filter랑 거의 동일. 단, 차이점은 some는 true, false를 반환
  if (exits) {
    // exits값이 true라면 1, false라면 0을 반환함.
    alert("이미 등록된 학생입니다.");
    document.querySelector("#stdNo").value = "";
    document.querySelector("#stdNm").value = "";
    document.querySelector("#stdSc").value = "0";
    return;
  }
});

// 학생 취소버튼
btnReset.addEventListener("click", (e) => {
  console.log(e);
  document.querySelector("#stdNo").value = "";
  document.querySelector("#stdNm").value = "";
  document.querySelector("#stdSc").value = "0";
});

// 수정완료 버튼
btnUpdCom.addEventListener("click", (e) => {
  // 해당 학생번호가 있는 행의 값들 수정.
  // 수정완료를 누르면 input 값들 초기화.
});
/*************************************** 함수 ***************************************/

// 배열 => 화면에 출력.
function makeList() {
  target.innerHTML = ""; // 그리기 전에 기존 목록이 있으면 삭제
  // 학생 수만큼 생성
  for (let i = 0; i < stdInfo.length; i++) {
    // 길이만큼 반복
    let data = makeRows(stdInfo[i]); // i번째 stdInfo정보를 makeRows로 넘겨주고 반환된 값을 data에 담는다.
    target.appendChild(data);
  } // end of for
} // end of makeList

// 학생정보 -> tr 그리기.
function makeRows(std = {}) {
  // tr 생성
  const tr = document.createElement("tr"); // tr 생성
  // for (let p in std) {
  //   // 객체를 가지고 반복한 반복문
  //   // 프로퍼티 갯수만큼 반복
  //   // 객체의 프로퍼티 수만큼 반복.
  //x  const td = document.createElement("td"); // td 생성
  //   td.innerText = std[p]; // td 안에 내용 담기.
  //   tr.appendChild(td); // td를 tr의 자식태그로 만들기.
  // } // end of for property
  for (let p of ["stdNo", "stdNm", "stdSc"]) {
    // 배열 수만큼 반복
    const td = document.createElement("td"); // td 생성
    td.innerText = std[p]; // td 안에 내용 담기.
    tr.appendChild(td);
  } // end of for property
  // 삭제 버튼 생성
  const td = document.createElement("td"); // 삭제 버튼을 넣을 td 생성
  const btnDel = document.createElement("button"); // 삭제버튼 생성
  const btnUpd = document.createElement("button"); // 수정버튼 생성
  btnDel.classList.add("btn", "btn-danger"); // 삭제버튼 클래스 지정
  btnDel.innerText = "삭제"; // 버튼 내 내용 넣기
  btnDel.setAttribute("id", std.stdNo); // 버튼 태그에 해당 속성을 넣겠다는 뜻.
  btnUpd.classList.add("btn", "btn-primary"); // 수정버튼 클래스 지정
  btnUpd.innerText = "수정"; // 버튼 내 내용 넣기
  td.appendChild(btnDel); // button을 td의 자식태그로 넣기
  td.appendChild(btnUpd); // button을 td의 자식태그로 넣기
  tr.appendChild(td); // td를 tr의 자식태그로 넣기
  btnDel.addEventListener("click", btnDelFnc);
  btnUpd.addEventListener("click", (e) => {
    // 수정완료 버튼을 노출시키고 등록 버튼을 숨기기.
    // 해당 tr의 td값들을 위쪽 테이블의 input으로 전달.
  });
  //만들어진 tr을 반환
  return tr;
} // end of makeRows

// btnDel에 이벤트 지정
function btnDelFnc(e) {
  // btnDel.closest("tr").remove();
  let delNo = this.id;
  // console.log(delNo);
  stdInfo = stdInfo.filter((elem) => elem.stdNo != delNo); // 조건에 만족하는 것만 새로 담아서 저장
  makeList();
}
