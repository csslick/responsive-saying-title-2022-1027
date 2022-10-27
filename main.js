// main.js

let dayEl = document.getElementById('day'); // 요일
let monthEl = document.getElementById('month'); // 월
let dateEl = document.getElementById('date'); // 일

// 시간객체 생성
let d = new Date();

// 요일
let today = d.getDay();

// 요일 판단
if(today == 0) {
  dayEl.innerHTML = "일요일";
} else if (today == 1) {
  dayEl.innerHTML = "월요일";
} else if (today == 2) {
  dayEl.innerHTML = "화요일";
} else if (today == 3) {
  dayEl.innerHTML = "수요일";
} else if (today == 4) {
  dayEl.innerHTML = "목요일";
} else if (today == 5) {
  dayEl.innerHTML = "금요일";
} else if (today == 6) {
  dayEl.innerHTML = "토요일";
}

// 월/일
let month = d.getMonth() + 1; // 보정값 +1
let date = d.getDate();

// 월/일 출력
monthEl.innerHTML = month;
dateEl.innerHTML = date;


// 명언 데이터
let textData = [
  '절대 어제를 후회하지 마라. 인생은 오늘의  내 안에 있고 내일은 스스로 만드는것이다. - L론허바드',

  '그대 자신의 영혼을 탐구하라.다른 누구에게도 의지하지 말고 오직 그대 혼자의 힘으로 하라. 그대의 여정에 다른 이들이 끼어들지 못하게 하라. 이 길은 그대만의 길이요,  그대 혼자 가야할 길임을 명심하라.  비록 다른 이들과 함께 걸을 수는 있으나 다른 그 어느 누구도 그대가 선택한 길을 대신 가줄 수 없음을 알라. -인디언 속담',

  '문제는 목적지에 얼마나 빨리 가느냐가 아니라 그 목적지가 어디냐는 것이다. - 메이벨 뉴컴버'
];


// 텍스트 재생
let count = 0; // 배열값

setInterval(function(){
  let textInfoEl = document.getElementById('text-info');

  count++; //count = count + 1;
  // 마지막 배열이면 처음으로


  textInfoEl.innerHTML = textData[count];
  console.log(textData[count])
}, 5000);