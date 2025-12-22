// array.js

const numAry = [10, 20, 30]; // new Array(); => 기본적으로는 new를 써서 하는 것이며 이번과 같은 경우는 기본값을 같이 줄 때 하는 것.
//첫글자가 대문자이면 무조건 클래스. 간혹 클래스인데 첫글자가 대문자가 아니면 개발자가 잘못된거.
// const str = "hello";
const chrAry = ["a", "b", "c"];
/*******************************************************/

// 추가&삭제&수정

// 추가
// push 메서드
numAry.push(40); // 제일 뒤에 추가하는 메서드.
console.log(numAry);
// unshift 메서드
numAry.unshift(0); // 제일 앞에 추가하는 메서드. 기존의 배열 인덱스들이 뒤로 밀리는 형식.
console.log(numAry);

// 삭제
// pop 메서드
numAry.pop(); // 제일 뒤부터 삭제후 반영.
console.log(numAry);
// shift 메서드
numAry.shift(); // 제일 앞에서부터 삭제후 반영.
console.log(numAry);

// 수정
// splice 메서드
numAry.splice(0, 1, 50); // splice(위치, 수정할 대상 크기, 대체할 값). => 대체할 값을 안넣으면 값이 삭제됨.
// 수정할 대상 크기를 0이라고 하면 맨 앞에 추가됨(unshift와 동일해짐)
// [10, 20, 30] => [50, 20, 30]으로 교체한다는 의미.
// slice 메서드
console.log(numAry.slice(1, 3)); // slice(시작 인덱스, 마지막 인덱스). => 마지막 인덱스를 안넣으면 끝까지라는 뜻. 원본 배열에는 반영되지 않는다.
// 인덱스 값 1이상 3미만의 값을 출력하라는 의미.
console.log(numAry);
// forEach 메서드
numAry.forEach(function () {
  // 매개변수가 없는 경우.
  // forEach(함수) => 배열의 요소들을 가지고 안에 있는 함수를 실행하라는 뜻으로 배열의 개수만큼 진행.
  console.log("hello");
});
numAry.forEach(function (ele, idx, ary) {
  // 매개변수가 있는 경우.
  // forEach(function (element, index, array) {}) 구성.
  console.log(ele, idx, ary);
});
numAry.forEach((ele, idx, ary) => {
  // 화살표함수를 사용한 경우.
  console.log(`첫번째: ${ele}, 두번째: ${idx}, 세번째: ${ary}`);
});

/********************예제********************/
// forEach 예제

const numArray = [1, 2, 3, 4, 5, 17, 12];

// 짝수 값만 가져오시오.
numArray.forEach(function (ele) {
  if (ele % 2 == 0) {
    console.log(ele);
  }
});
// 3번째 인덱스 값까지만 가져오시오.
numArray.forEach((ele, idx) => {
  if (idx < 3) {
    console.log(numArray[idx]);
  }
});

/*******************************************************/

// concat 메서드
const newAry = numAry.concat(chrAry); // numAry 뒤에 chrAry 배열의 인덱스를 넣은 것을 newAry에 담으라는 뜻.
console.log(`newAry => ${newAry}`);
console.log(`newAry => ${newAry.join("/")}`); // 배열요소를 문자열로 만든다. join("구분자")을 하면 콤마(,)를 대신해서 넣어준다.
// 디폴트 값이 콤마(,)이기 때문에 그냥 join()이나 join(",") 출력은 똑같다.
