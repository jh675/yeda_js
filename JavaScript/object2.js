// object2.js
// 객체와 배열의 활용
// 학생 번호, 이름, 연락처, 점수

const studentAry = [{
    stdNo: '97-0401',
    stdNm: '김진환',
    stdTel: '010-****-8135',
    stdScore: 80
  },
  {
    stdNo: '97-0402',
    stdNm: '김현민',
    stdTel: '010-1795-****',
    stdScore: 85
  },
  {
    stdNo: '97-0403',
    stdNm: '이명진',
    stdTel: '010-****-8120',
    stdScore: 90
  }
]

console.log(studentAry[2].stdTel);

studentAry[3] = {
  stdNo:'97-0404',
  stdNm:'민윤기',
  stdTel:'010-7821-****',
  stdScore: 92
};

// let totalScore = studentAry[0].stdScore + studentAry[1].stdScore + studentAry[2].stdScore;

let totalScore = 0;
for(let Score of studentAry) {
   totalScore+= Score.stdScore;
}

console.log(`합계: ${totalScore}\n평균: ${totalScore/studentAry.length}`);

document.write("-------------------------------");
document.write("<ul>")
for(let StdName of studentAry) {
  document.write(`<li>${StdName.stdNm}</li>`)
}
document.write("</ul>")

document.write("-------------------------------");

let htmlListTag = "<ul>";
for(let StdName of studentAry) {
  htmlListTag += `<li>${StdName.stdNm}</li>`
}
htmlListTag += "</ul>"

document.write(htmlListTag);

document.write("-------------------------------");

htmlListTag = 0;
let sumScore = 0;

htmlListTag = "<ul>";
for(let stdName of studentAry) {
  htmlListTag += `<li>이름: ${stdName.stdNm}<br>점수: ${stdName.stdScore}</li>`
  sumScore += stdName.stdScore;
}
htmlListTag += "<li>" + sumScore + "</li></ul>"

document.write(htmlListTag);