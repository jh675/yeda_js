// array3.js
// 배열.filter() => true 반환해주는 요소를 새로운 배열에 추가.
let filterAry = [10, 20, 30, 40, 50].filter((ele) => ele >= 20);
console.log(filterAry);

const friends = ["박상원", "장수연", "육성수", "정찬우", "안형주"];

// 삭제할 친구 이름 입력 => 제거 / 없으면 warning 알림창 띄우기.

let nm = prompt("삭제할 이름을 입력해주세요"); // 값 받아오기
let id = friends.indexOf(nm); // index값을 가져온다.

const filterFriends = friends.filter((ele, id) => {
  if (id >= 0) {
    if (ele != nm) {
      return true;
    }
  } else {
    alert("Warning");
  }
}); // if를 두번쓰고 해야되니 그다지 좋은 코드는 아님;

console.log(filterFriends);

if (id == -1) {
  alert("Warning");
} else {
  const fFriend = friends.filter((ele) => {
    return ele != nm;
  });
  console.log(fFriend);
}

const filFrineds = friends.filter((ele) => ele != nm);
console.log(filFrineds);
