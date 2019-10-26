const getSeconds = document.querySelector(".second");
const getMinutes = document.querySelector(".minute");
const getHours = document.querySelector(".hour");
const time = document.querySelector(".time");
function setTime() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const secondDegrees = (seconds / 60) * 360 + 90;
  getSeconds.style.transform = `rotate(${secondDegrees}deg)`;
  const minuteDegrees = (minutes / 60) * 360 + 90 + secondDegrees / 60;
  getMinutes.style.transform = `rotate(${minuteDegrees}deg)`;
  const hourDegrees = (hours / 12) * 360 + 90 + minuteDegrees / 60;
  getHours.style.transform = `rotate(${hourDegrees}deg)`;
  if (time.style.transform === `rotate(438deg)` || time.style.transform === `rotate(444deg)` ) {
  time.classList.add('noTransition');
  } else {
  time.style.transition = `all 0.5s`;
}
}
setInterval(setTime, 1000);
setTime();
