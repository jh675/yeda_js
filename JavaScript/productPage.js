// productPage.js

console.log(products);

const target = document.querySelector("#list"); // tbody의 dom 정보

// 기본적으로 전체를 출력
productList(products);

// category 중복제거
let categories = [];

for (let p = 0; p < products.length; p++) {
  if (categories.indexOf(products[p].category) == -1) {
    // 카테고리가 해당 배열 안에 없을 때 추가.
    categories.push(products[p].category); // categories에 해당 값을 추가.
  }
}

console.log(categories);

// select 선언
const selectCategory = document.querySelector("select.categories");

// category 추가
categories.forEach((e) => {
  let opt = document.createElement("option"); //태그 선언
  opt.innerText = e;
  opt.setAttribute("value", e); // value 속성에 e의 값 선언
  selectCategory.appendChild(opt);
});

/****************************이벤트*****************************/
selectCategory.addEventListener("change", (e) => {
  // 기존 목록 제거
  target.innerHTML = "";
  const selectValue = e.target.value; // 사용자가 선택한 값
  // 카테고리 값이 같은 상품만 배열에 저장.
  const filterProduct = products.filter((e) => e.category == selectValue);
  //함수 호출
  productList(filterProduct);
});

// 조회버튼 이벤트
const button = document.querySelector("div.search button");
// filter 메소드 활용해 목록 가져와 productList 함수를 활용해 출력
button.addEventListener("click", (e) => {
  target.innerHTML = "";
  let searchStr = document.querySelector("div.search input").value; // 클래스가 search인 div 밑에 input태그 값을 저장
  console.log(`searchStr: ${searchStr}`);
  const searchProduct = products.filter((ele) => {
    return ele.productName.indexOf(searchStr) >= 0;
  });
  // 함수를 호출한다/
  productList(searchProduct);
});
/****************************함수*****************************/

function productList(pAry = []) {
  // list
  pAry.forEach((e) => {
    // e.productCode, e.productName ...
    const tr = document.createElement("tr");
    ["productCode", "productName", "purchasePrice", "category"] //
      .forEach((field) => {
        // 해당 배열 안에서 값을 하나씩 가져와 field에 저장한다.
        const td = document.createElement("td");
        td.innerText = e[field]; // e.['productCode'] => 51번 라인의 배열에서 순서대로 값을 가지고와 동적으로 움직임
        tr.appendChild(td); // tr의 자식요소로 등록.
      });
    target.appendChild(tr); // 두번째 반복문을 탈출하면 그동안 td가 쌓인 tr을 tbody의 자식요소로 등록.
  });
}
