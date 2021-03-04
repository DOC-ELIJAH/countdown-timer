setTimeout(myFunc, 4000);
function myFunc() {
  document.getElementById("countdown-text").innerHTML = "THE COUNTDOWN!";
  document.getElementById("countdown-text").style.padding = "5rem";
}

//set time to the countdown date
let countDownDate = new Date("Dec 25, 2021 00:00:00").getTime();

//make the timer function update every second
let countDown = setInterval(function () {
  //calculate the remaining time left
  let now = new Date().getTime();
  let timeLeft = countDownDate - now;
  //Calculate the remaining time in days, hours, minutes and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  //display output
  document.getElementById("days").innerHTML = days + "";
  document.getElementById("hours").innerHTML = hours + "";
  document.getElementById("minutes").innerHTML = minutes + "";
  document.getElementById("seconds").innerHTML = seconds + "";

  //display message when countdown is over
  if (timeLeft < 0) {
    clearInterval(countDown);
    document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "";
    document.getElementById("end").innerHTML = "TIME'S UP!!";
  }
}, 1000);
