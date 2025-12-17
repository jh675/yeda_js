/* 2025-12-17 과제 */
/* ------------------------------------------------------------------------------- */
/* 과목과제 */
// 15-2, 15-3 정독.(490 ~ 501p)


/* 실습과제 */
// git 설치
// Dev/Yedam_JavaScript = git clone https://github.com/jh675/yeda_js.git

// 이름, 연락처, 주소 정보를 입력하면 Console에 출력.
// 예시
// "이름은 홍길동, 전화번호는 012-3456-7890, 주소는 대구 중구 100번지"

// 깃 명령어
// git add *
// git commit -m "12-17 숙제완료"
// git push origin main

let name = prompt('이름을 입력해주세요.');
let tel = prompt('연락처를 입력해주세요.');
let adr = prompt('주소를 입력해주세요.');

console.log(`\"이름은 ${name}, 전화번호는 ${tel}, 주소는 ${adr}\"`);