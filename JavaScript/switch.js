// switch.js
let msg = prompt('A, B, C 중 값을 입력하시오.');
let y = true;

while (y) {
  switch (msg) {
    case 'A':
      console.log(msg);
      y = false;
      break;
    case 'B':
      console.log(msg);
      y = false;
      break;
    case 'C':
      console.log(msg);
      y = false;
      break;
    default:
      alert('A, B, C 중에 입력하라고');
      msg = prompt('A, B, C 중 값을 입력하시오.');
  }
}