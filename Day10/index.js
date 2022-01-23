const clockTitle = document.querySelector('.js-clock');

const dday = new Date("December 25, 2022, 0:00:00").getTime();
setInterval(function() {
  var today = new Date().getTime();
  var gap = dday - today;
  var day = Math.floor(gap / (1000 * 60 * 60 * 24));
  var hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((gap % (1000 * 60)) / 1000);
  clockTitle.innerHTML = day + "일 " + hour + "시간 " + min + "분 " + sec + "초 남았습니다.";
}, 1000);

