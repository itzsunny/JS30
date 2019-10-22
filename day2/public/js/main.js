const getSeconds = document.querySelector(".second");
const getMinutes = document.querySelector(".minute");
const getHours = document.querySelector(".hour");
function setTime() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const secondDegrees = (((seconds / 60) * 360 )+ 90);
  getSeconds.style.transform = `rotate(${secondDegrees}deg)`;
  const minuteDegrees = (((minutes / 60) * 360 )+ 90);
  getMinutes.style.transform = `rotate(${minuteDegrees}deg)`;
  const hourDegrees = (((minutes / 24) * 360 )+ 90);
  getHours.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setTime, 1000);
