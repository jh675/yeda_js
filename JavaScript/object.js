// object.js
// 객체 = [속성:값, 속성:값, 속성:값]
// 여러개의 속성과 각 속성별로 값을 갖고 있는 것.
// 589p 참고

// 객체 예시
// 객체:  1) 속성(프로퍼티): 값
//        2) 함수(메소드)
// 메소드 => 객체 내에 있는 함수(기능)를 일컫는 말.
const obj = {
  name: '김진환',
  stdNo: '97-0401',
  tel: '010-0350-8879',
  bloodType: 'A',
  showInfo: function () {
    console.log(`학번은 ${obj.stdNo}이고 이름은 ${obj.name}이다.`);
  },
  friend: ['있', '겠', '냐'],
};

console.log(obj);


// 변수명.속성(프로퍼티) = 값 OR 변수명['속성'] = 값으로 변수의 해당 속성 값을 변경 가능.
// 예시
obj.name = "석"
obj['tel'] = "010-1569-4123"
// []로 감싸는 경우 그냥 적으면 변수로 인식하기 때문에 '' 혹은 ""으로 감싸 속성임을 명시한다.
console.log(obj);

console.log(obj['friend'][0]);
obj.showInfo();

const numArray = [20, 17, 15, 90];
console.log(numArray[0]);
numArray[2] = 27;
console.log(numArray[2]);
console.log(numArray[1]);

console.log("----------------------------");

// 배열크기
console.log("배열크기");
console.log("배열크기: " + numArray.length);

console.log("----------------------------");
// 배열과 반복문의 조합
console.log("배열과 반복문의 조합");
for (let i = 0; i < numArray.length; i++) {
  console.log(`${i}번째 값은 ${numArray[i]}입니다.`);
};

// 홍길동, 박길동, 김길동 = nameAry
console.log("----------------------------");
const nameAry = ["홍길동", "박길동", "김길동"];
nameAry[3] = "류길동";

for (let i = 0; i < nameAry.length; i++) {
  console.log(`${i}번째 값은 ${nameAry[i]}입니다.`);
};
console.log("----------------------------");
// for ~ of 반복문 => 배열일때 사용하면 편리
// for ~ of 반복문의 양식
// for(let 변수 of 변수명) {
// 실행 내용
// }

// ex)
console.log("for ~ of 반복문");
for (let name of nameAry) { // nameAry의 크기 만큼 반복하면서 값들을 하나씩 name라는 변수에 담으라는 뜻.
  console.log(`${name}입니다.`);
}

obj.hobbis = ['게임', '독서', '번역', '자막']; // obj에 속성과 값을 추가.
// obj["hobbies"] 로 시작하는 것도 가능.

// 속성을 삭제하는 방법
delete obj.bloodType; // obj 객체의 bloodType라는 속성을 삭제.
 // 삭제 시에 obj.bloodType가 아닌 obj[bloodType]도 가능.

// for ~ in 반복문 => 객체일때 사용하면 편리
console.log("for ~ in 반복문");
for (let prop in obj) {
  console.log(`prop => ${prop}\nvalue => ${obj[prop]}`); 
  // 기본적으로 속성만 가져오는데 객체명[속성]을 하면 해당 속성의 값을 가져온다.
}


// let nameIns;

// while(true) {
//   nameIns = prompt("이름을 입력하세요.");
//   nameAry = nameIns;

//   if(nameIns == null)
// }