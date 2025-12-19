// exe.js
// 가위바위보 게임
// 1 = 가위, 2 = 바위, 3 = 보

let com = Math.ceil(Math.random() * 3);
let me = prompt("1~3번 중에 값을 입력해주세요.\n1:가위, 2:바위, 3:보");

let m1, c1;

if (com == 1) {
  console.log("가위");
  c1 = "가위";
} else if (com == 2) {
  console.log("바위");
  c1 = "바위";
} else if (com == 1) {
  console.log("보");
  c1 = "보";
}

if (me == 1) {
  console.log("가위");
  m1 = "가위";
} else if (me == 2) {
  console.log("바위");
  m1 = "바위";
} else if (me == 1) {
  console.log("보");
  m1 = "보";
}

console.log("----------------------------------");

// if문으로 나오게 하기 1
if ((com == 3 && me == 1) || (com == 2 && me == 3) || (com == 1 && me == 2)) {
  console.log(`나는 ${m1}을 냈고 컴퓨터는 ${c1}을 냈으니까`);
  console.log("You win!");
} else if (
  (com == 1 && me == 3) ||
  (com == 3 && me == 2) ||
  (com == 2 && me == 3)
) {
  console.log(`나는 ${m1}을 냈고 컴퓨터는 ${c1}을 냈으니까`);
  console.log("You Lost!");
} else {
  console.log(`나는 ${m1}을 냈고 컴퓨터는 ${c1}을 냈으니까`);
  console.log("Same!");
}

console.log("----------------");

// if문으로 나오게 하기 2
let dif = com - me;
if (dif == -1 || dif == 2) {
  console.log(`나는 ${m1}을 냈고 컴퓨터는 ${c1}을 냈으니까\nYou win!`);
} else if (dif == -2 || dif == 1) {
  console.log(`나는 ${m1}을 냈고 컴퓨터는 ${c1}을 냈으니까\nYou Lost!`);
} else {
  console.log(`나는 ${m1}을 냈고 컴퓨터는 ${c1}을 냈으니까\nSame!`);
}
console.log("----------------------------------");
switch (com) {
  case 3:
    switch (me) {
      case "3":
        console.log(`나는 ${m1}을 냈고 컴퓨터는 ${c1}을 냈으니까\nSame!`);
        break;
      case "2":
        console.log(`나는 ${m1}을 냈고 컴퓨터는 ${c1}을 냈으니까\nYou Lost!`);
        break;
      case "1":
        console.log(`나는 ${m1}을 냈고 컴퓨터는 ${c1}을 냈으니까\nYou win!`);
        break;
    }
    break;
  case 2:
    switch (me) {
      case "3":
        console.log(`나는 ${m1}을 냈고 컴퓨터는 ${c1}을 냈으니까\nYou win!`);
        break;
      case "2":
        console.log(`나는 ${m1}을 냈고 컴퓨터는 ${c1}을 냈으니까\nSame!`);
        break;
      case "1":
        console.log(`나는 ${m1}을 냈고 컴퓨터는 ${c1}을 냈으니까\nYou Lost!`);
        break;
    }
    break;
  case 1:
    switch (me) {
      case "3":
        console.log(`나는 ${m1}을 냈고 컴퓨터는 ${c1}을 냈으니까\nYou Lost!`);
        break;
      case "2":
        console.log(`나는 ${m1}을 냈고 컴퓨터는 ${c1}을 냈으니까\nYou win!`);
        break;
      case "1":
        console.log(`나는 ${m1}을 냈고 컴퓨터는 ${c1}을 냈으니까\nSame!`);
        break;
    }
    break;
}
