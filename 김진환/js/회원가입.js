// Join.js

const joinBtn = document.querySelector("button[type='submit']");

// form태그 새로고침 방지
document
  .querySelector("form[name='register']")
  .addEventListener("submit", (e) => {
    e.preventDefault(); // submit 차단(새로괴침 막기)

    joinBtn.addEventListener("click", (e) => {
      const userId = document.querySelector("#user-id"); // 값을 담기
      const idLength = userId.value.length; // 길이 담기
      // ID 길이 확인.
      if (!(idLength >= 4 && idLength <= 15)) {
        alert("4글자 이상 15자리 이하로 입력해주세요."); // 경고창 출력
        userId.select(); // ID 텍스트 전체선택
        return false;
      }

      //패스워드 확인
      const userPw = document.querySelector("#user-pw1"); // 비밀번호 값 담기
      const userPwRe = document.querySelector("#user-pw2"); // 비밀번호 확인 값 담기

      if (userPw.value.length < 8) {
        // 8자 미만인 경우 실행
        alert("패스워드는 8자리 이상으로 해주시기 바랍니다.");
        userPw.value = ""; // 값 초기화
        userPw.focus(); // 포커스 맞추기
        return false;
      } else {
        // 8자 이상인 경우 실행
        if (userPwRe.value != userPw.value) {
          // 비밀번호 값과 비밀번호 확인 값이 같은지를 비교해 일치하지 않은 경우에 실행
          alert("패스워드가 일치하지 않습니다. \n다시 입력해주세요");
          userPw.value = ""; // 비밀번호 값 초기화
          userPwRe.value = ""; // 비밀번호 확인 값 초기화
          userPw.focus(); // 비밀번호에 포커스 맞추기
        } else {
          return true;
        }
      }
    });
  });
