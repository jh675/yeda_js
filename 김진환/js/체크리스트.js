// checkList.js

const button = document.querySelector("button#add");

// 추가버튼을 눌렀을 때 실행
button.addEventListener("click", (e) => {
  e.preventDefault();

  const ulTag = document.createElement("ul"); // ul태그
  // li 및 input 텍스트 태그 추가
  let liTag = document.createElement("li"); // li태그 // <li></li>
  const spTag = document.createElement("span"); // span 태그
  const txtTag = document.querySelector("#item").value.trim();
  spTag.setAttribute("class", "close");
  spTag.innerText = "X";

  // 빈값이 입력되면 알림창으로 메세지 출력.
  if (!txtTag) {
    alert("값이 입력되지 않았습니다.");
    document.querySelector("#item").focus();
    return;
  }
  // 중복확인
  const listitems = ulTag.querySelectorAll("li");
  let tf = false;
  console.log("fdasf");
  for (let i = 0; i < listitems.length; i++) {
    if (txtTag == listitems[i].innerText) {
      tf = true;
      break;
    }
  }

  if (tf) {
    alert("중복");
    return false;
  }

  liTag.textContent = txtTag; // txtTag의 값을 liTag의 값으로 입력.
  liTag.appendChild(spTag);
  ulTag.appendChild(liTag); // li태그를 ul태그의 자식으로 등록.

  // 초기화
  document.querySelector("#item").value = "";
  document.querySelector("#item").focus();

  document.querySelector("#itemList").appendChild(ulTag);

  spTag.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
});
