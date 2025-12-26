// string.js
// productPage.js 전에 하는 연습.

let str = "hello, javaScript";

// substring() 메소드
// 양식: substring(start_index, end_index)
// end_index는 생략이 가능하다.=> substring(start_index); => 끝까지 반환.
"hello, javaScript".substring(1, 3); // == str.substring(1,3); => str에 해당 문자를 저장했기 때문에 결과는 동일.
console.log("hello, javaScript".substring(1, 3));

// indexOf() 메소드
// ~~.indexOf(str)
// 사용예시는 array2.js 참고(33번 라인)
// 괄호안의 문자가 변수 내에 여러 개가 있는 경우 가장 처음에 나오는 것만 반환시켜준다.
str.indexOf(","); //해당 값이 있는 인덱스의 값을 반환.
console.log(str.indexOf(","));
console.log(
  str.substring(
    0,
    str.indexOf(",") //0번째부터 ,가 있는 인덱스 값까지
  ) //문자를 날라내서 출력
); // ,가 5이므로 0번부터 5번 인덱스까지의 문자를 출력하기에 Hello가 출력.

// trim() 메소드
// 양식: ~~.trim()
// 공백제거. 단, 문자열 사이에 있는 공백은 제거x.
// ex) '    Hr    ' => 'Hr'로 줄여지지만, 'H  r' => 'H  r' 그대로 반환.
console.log(" Hello, javaScript              ".trim()); // Hello, javaScript를 출력

// replace() 메소드
// 양식: replace(a, b) => a문자열을 b문자열로 변경.
console.log("Hello, javaScript".replace("j", "J")); // Hello, JavaScript를 출력

// split() 메소드
// 양식: split(str)
// 괄호안의 문자를 기준으로 잘라서 배열로 만들어 반환.
let Ary = "apple, banana, cherry".split(", "); // ', '를 기준으로 잘라낸다.
console.log(Ary); // ['apple', 'banana', 'cherry']를 출력

// charAt()메소드
// 양식: ~~.charAt(index)
// 해당 문자열의 해당 인덱스 위치에 있는 문자를 반환.
console.log("Welcome, Home".charAt(1)); // 인덱스 값 1의 위치에 있든 e가 출력.

// 예제
// '980503-1453212', '030505-4567123'
function checkGender(f) {
  let gender;
  let gen; // yn의 값에 따라 값을 저장.

  // 인덱스로 확인
  let yn = f.indexOf("-"); // -이 있는지 없는지 확인하기 위해 인덱스 값 저장

  // if를 이용해 -의 확인
  // if (yn == -1) { //없는 경우
  //   gen = f.charAt(6);
  // } else { //-이 있는 경우
  //   gen = f.charAt(7);
  // }

  // 삼항 연산자를 이용해 -의 확인
  yn == -1 ? (gen = f.charAt(6)) : (gen = f.charAt(7));

  // console.log(yn);

  // if문을 이용한 성별 출력
  console.log("------------------if문을 이용한 출력------------------");
  if (gen % 2 == 1) {
    gender = "남자";
  } else {
    gender = "여자";
  }

  console.log(`${gender}입니다`);

  // switch문을 이용한 성별 출력
  console.log("------------------switch문을 이용한 출력------------------");
  switch (gen % 2) {
    case 1:
    case 3:
      gender = "남자";
      break;
    case 2:
    case 4:
      gender = "여자";
      break;
  }

  console.log(`${gender}입니다`);
}

checkGender("0305054567123");

//Search Sample
["LG 노트북", "삼성노트북", "모니터", "마우스"].forEach((e) => {
  if (e.indexOf("노트북") >= 0) {
    console.log(e);
  }
});
