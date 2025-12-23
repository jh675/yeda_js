// math.js

// 51 ~ 100

function numberGame() {
  console.log("1라운드(51 ~ 100)");
  let randomNumber = Math.floor(Math.random() * 50) + 51;
  while (true) {
    let userNumber = prompt("값을 입력해주세요.");
    if (userNumber == randomNumber) {
      console.log(`End of Game!\nYou win!\n${randomNumber}`);
      break;
    } else if (userNumber > randomNumber) {
      console.log("큰데?");
    } else {
      console.log("작은데?");
    }
  }
  console.log(
    "---------------------------------------------------\n2라운드(51 ~ 100 맞추고 인덱스 맞추기"
  );
  let randomNumberAry = new Array(); // 값들을 담을 배열 선언.
  for (let i = 0; i < 10; i++) {
    // 배열에 담기. 단, 담기 전에 값을 받아온적이 있는지 확인하기.
    let rn = Math.floor(Math.random() * 50) + 51; // 중복값이 없는지 체크하기 위해 임시값을 담을 변수를 선언하고 값을 저장.
    while (true) {
      if (randomNumberAry.indexOf(rn) == -1) {
        randomNumberAry[i] = rn;
        break; // 값이 없는걸 확인되면 값을 담고 while문을 탈출.
      }
      rn = Math.floor(Math.random() * 50) + 51; // 값을 재할당.
    }
  }
  // console.log(randomNumberAry);
  while (true) {
    let userNumber = Number(prompt("값을 입력하세요.")); // 사용자가 값을 입력한다.
    if (randomNumberAry.indexOf(userNumber) >= 0) {
      // 사용자가 입력한 값이 randomNumberAry에 있는지 확인.
      alert("값이 존재한다.");
      while (true) {
        let userIdxNo = Number(prompt("몇번째 인덱스에 있을까?")); // 인덱스를 입력한다.
        if (userIdxNo == randomNumberAry.indexOf(userNumber)) {
          // 인덱스 값과 일치하는지 확인.
          break; // 일치하니까 while문을 탈출
        } else {
          // 값은 있는데 다른 배열인 경우
          userIdxNo > randomNumberAry.indexOf(userNumber)
            ? console.log("큰데?")
            : console.log("작은데?");
        }
      }
      break; // while문을 완전히 탈출
    } else {
      alert("값이 존재하지 않는다.");
    }
  }
  console.log(`End of Game\nYou Win\ 이걸 맞추네 미친놈..`);
}

numberGame();
