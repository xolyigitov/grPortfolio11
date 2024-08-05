const alarm = document.querySelector("audio")
let playAlarm = document.querySelector(".play-alarm");
let stopAlarm = document.querySelector(".stop-alarm");
const TIME = "budilnik vaqti ...";
setTimeout(() => {
    let date = new Date();
    let time = date.toLocaleTimeString("it-IT");
    console.log(time);
    if (time === TIME) {
      alarm.play();
    }
  }, 500);
  
  playAlarm.addEventListener("click", () => {
    alarm.play();
  });
  
  stopAlarm.addEventListener("click", () => {
    alarm.pause();
  });
  