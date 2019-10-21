function playAudio(event) {

  console.log(event.keyCode);
  const audio = document.querySelector(`audio[data-key= "${event.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`.key[data-key= "${event.keyCode}"]`);
  key.classList.add("transition");
}

function removeTransition(event) {
  if (event.propertyName === "transform") return this.classList.remove("transition");
  else return;
}

const key = document.querySelectorAll(`.key`);
key.forEach(element => {
  element.addEventListener("transitionend", removeTransition);
});
document.addEventListener("keydown", playAudio);
