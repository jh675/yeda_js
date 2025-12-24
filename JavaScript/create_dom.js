// create_dom.js

// form에 submit 이벤트를 등록
// 이벤트가 전파 차단(e.stopPropagation());
// 상위 -> 하위 : 캡처링
// 하위 -> 상위 : 버블링
document
  .querySelector('form[name="addForm"]')
  .addEventListener("submit", (e) => {
    e.preventDefault(); // submit를 차단.

    //li 추가
    let liTag = document.createElement("li"); // li태그 생성해서 저장
    let spTag = document.createElement("span"); // span태그 생성해서 저장
    let txt = document.querySelector("#subject").value.trim(); // subject 아이디의 내용을 저장.
    if (!txt) {
      // 아무것도 입력되어있지 않은 경우 실행
      alert("값을 입력해주세요.");
      document.querySelector("#subject").value = "";
      document.querySelector("#subject").focus();
      return; // 이하의 함수를 실행하지 않는다는 뜻.
    }
    spTag.textContent = txt; // span 태그에 txt 담기.
    // li태그에 자식태그로 span 추가
    liTag.appendChild(spTag);
    // let txtNode = document.createTextNode(txt); // textNode에 txt를 노드로 만들어서 저장.
    // input은 문자열이기 때문에 TextNode가 먹히지 않는다. (value도 지정할 수 없다.)
    // liTag.innerText = txt; // 담기.(26번 라인과 결과는 동일하다. 아무거나.)
    // liTag.appendChild(txtNode) // 담기.(25번 라인과 결과는 동일하다. 단, 11번 라인을 썻을때만 이용가능.)
    // appendChild는 노드에 적용할 수 있기 때문에 appendChild를 할 경우,
    // txt를 노드로 만들어줘야한다. (22번 라인 참고)

    //ul태그에 자식태그로 li 추가
    document.querySelector("ul#itemList").appendChild(liTag);

    // 초기화
    document.querySelector("#subject").value = "";
    document.querySelector("#subject").focus();

    //버튼 추가
    let delBtn = document.createElement("button"); // 태그를 생성
    let btnTxt = document.createTextNode("삭제"); // 태그 내에 쓸 내용 생성
    delBtn.appendChild(btnTxt); // 태그 내에 내용 입력

    //li태그에 버튼 추가
    liTag.appendChild(delBtn); // li 태그 안에 버튼 태그를 자식태그로 넣기.

    // 삭제 명령 수행
    delBtn.addEventListener("click", (e) => {
      //버튼 클릭했을 때 실행
      e.target.parentElement.remove();
      // e.target은 버튼이기에 e.target.remove()를 하면 버튼만 삭제됨.
      // 부모태그인 li를 삭제하는 것이 목적이기 때문에 부모 요소인 parentElement를 가져온다.
    });

    // 클래스 집어넣기
    liTag.addEventListener("click", (e) => {
      console.log(e.target.tagName);
      e.stopPropagation(); // 이벤트 전파 차단
      // li 태그 클릭했을 때 실행
      e.target.classList.toggle("cancel"); // 이벤트 ON/OFF
      //  // e.target.setAttribute("class", "cancel light standard");
      //   if (e.target.classList.contains("cancel")) {
      //     // 요소의 클래스목록(classList), 클래스가 있는지 확인(contains)
      //     e.target.classList.remove("cancel");
      //   } else {
      //     e.target.classList.add("cancel");
      //   }

      // 누른 텍스트를 input에 던져주기.
      let txt = document.querySelector("#subject").value;
      if (!txt) {
        document.querySelector("#subject").value =
          liTag.querySelector("span").textContent;
      } else {
        document.querySelector("#subject").value = "";
        document.querySelector("#subject").focus();
      }
    });

    // 버블링 학습용 코드(삭제 항목 주석화 필요)
    // liTag.addEventListener("click", (e) => {
    //   console.log(e.target.tagName);
    //   let target = e.target;
    //   if (e.target.tagName == "BUTTON") {
    //     target = e.target.parentElement;
    //   }
    //   // e.stopPropagation(); // 이벤트 전파 차단
    //   // li 태그 클릭했을 때 실행
    //   target.classList.toggle("cancel"); // 이벤트 ON/OFF
    //   // e.target.setAttribute("class", "cancel light standard");
    //   // if (target.classList.contains("cancel")) {
    //   //   // 요소의 클래스목록(classList), 클래스가 있는지 확인(contains)
    //   //   target.classList.remove("cancel");
    //   // } else {
    //   //   target.classList.add("cancel");
    //   // }
    // });
  });
