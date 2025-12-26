// array2.js

const nameAry = new Array();
nameAry.push("KJH");
nameAry.unshift("YMJ");
nameAry.splice(1, 0, "KCS", "JCS", "CHS", "KJH");

console.log(`원본: ${nameAry}`);

console.log("----화살표함수----");
nameAry.forEach((elem) => {
  console.log(elem);
});

console.log("----function-----");
nameAry.forEach(function (ele, idx) {
  idx < 3 ? console.log(nameAry[idx]) : console.log("x");
});

nameAry.sort(); // 이름 순 정렬
// console.log(nameAry);
nameAry.reverse(); // 역으로 정렬
// console.log(nameAry);

let idx = nameAry.indexOf("KJH"); // indexOf("값")을 하면 해당 값의 인덱스를 반환. 값이 없는 경우 -1을 출력.
// console.log(idx);

// 이름 입력받기
let nm = prompt("이름을 입력해주세요.");
console.log(nm);

// 인덱스 값 조사하기
let id = nameAry.indexOf(nm);
console.log(id);

// 배열에서 해당 인덱스의 값 삭제하기.
// if (id == -1) {
//   alert("값이 존재하지 않습니다");
// } else {
//   nameAry.splice(id, 1);
// }
// console.log(nameAry);

// Q. 중복된 값들이 있고, 중복된 값을 입력해서 삭제한다고 했을때 중복되는 모든 요소들을 삭제하는 방법은 없을까?
// forEach를 써서 요소값을 가져와 일치하는 것들을 전부 삭제?
// => 인덱스 값을 계속 받아오고 그 인덱스 값을 splice시킨다?
nameAry.forEach(function () {
  let fId = nameAry.indexOf(nm); // 입력받은 nm의 인덱스를 fId에 담는다.
  if (fId >= 0) {
    // fId가 0보다 큰지 확인한다.
    nameAry.splice(fId, 1); // splice 메서드에서 대체할 값을 비워 삭제하는 것으로 한다.
  }
});

console.log(nameAry);
