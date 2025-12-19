// event.js
// 이벤트 - 이벤트 핸들러

// 버튼(클릭) >> 이벤트핸들러 등록

// document.querySelecto('선택자') => 화면요소를 찾아서 반환.

// 이벤트핸들러(this는 이벤트를 받는 대상)
console.dir(document.querySelector("button"));
document
  .querySelector("button") //
  .addEventListener("click", function () {
    // console.log("클릭됨");
    console.log(this);
    this.style.backgroundColor = "red";
    this.style.color = "yellow";
    this.innerHTML = "Event";
  }); // 1)이벤트유형 2)이벤트핸들러(함수)

// 이벤트핸들러(this는 Window 객체)
document
  .querySelector("button") //
  .addEventListener("mouseover", (e) => {
    // console.log("마우스 감지");
    console.log(e);
    e.target.style.color = "blue";
    e.target.innerHTML = "이벤트";
  });

function liClickFn(e) {
  e.target.innerHTML = "Food";
}

function MouseOverFn(e) {
  console.log(e);
  e.target.style.backgroundColor = "#aaa";
}

function MouseOutFn(e) {
  e.target.style.backgroundColor = "";
  e.target.style.innerHTML = "";
}
document
  .querySelector("button") //
  .addEventListener("mouseout", (e) => {
    e.target.style.color = "";
    e.target.style.backgroundColor = "";
    e.target.innerHTML = "이벤트";
  });

let allList = document.querySelectorAll("ul>li");

console.log(allList);

for (let i = 0; i < allList.length; i++) {
  allList[i].addEventListener("click", liClickFn);
  allList[i].addEventListener("mouseover", MouseOverFn);
  allList[i].addEventListener("mouseout", MouseOutFn);
  // allList[i] = addEventListener("mouseover", MouseOverFn);
}

// document.querySelector("button").addEventListener("mouseover", () => {

// })
