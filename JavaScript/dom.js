// dom.js

console.log(document.querySelectorAll("div#detail > ul > li"));
// ex) <li id="first">Apple</li>
// 1. element node => li태그
// 2. text node => 태그 안의 내용
// 3. attribute node => li 태그 안의 속성(id, class 등)
// element node를 만드는 메소드 : createElement()
/***********************************************************************/
// document.createElement("li"); // <li></li>를 만든 것.
let liTag = document.createElement("li"); // <li></li>를 만들어서 liTag라는 변수에 저장.
// document.createTextNode("Multi Network"); // 텍스트 작성
let txt = document.createTextNode("Multi Network"); // 텍스트를 작성해 txt라는 변수에 저장.
liTag.appendChild(txt); // liTag 안에 자식요소로 txt가 추가됨.
// liTag.innerText("Multi Network"); // liTag.appendChild(txt)와 동일.
console.log(liTag);

// 만들어진 태그를 ul태그에 담기
document.querySelector("#detail>ul").appendChild(liTag); //<ul>..<li>Multi Network</li></ul>
