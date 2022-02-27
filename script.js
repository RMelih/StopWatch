//load function whenever the web page is loaded
window.onload = function () {
  //variable for the seconds and miliSeconds
  let seconds = 00;
  let milliseconds = 00;

  //variable for adding seconds and miliSeconds
  let addMilliSeconds = document.getElementById("tens");
  let addSeconds = document.getElementById("seconds");

  //buttons
  const buttonStart = document.getElementById("button-start");
  const buttonStop = document.getElementById("button-stop");
  const buttonReset = document.getElementById("button-reset");
    
  //variable for the time passed
  let timeGap;

  //button start function
  buttonStart.onclick = function () {
    clearInterval(timeGap);
    timeGap = setInterval(startTimer, 10);
  };

  //button stop function
  buttonStop.onclick = function () {
    clearInterval(timeGap);
  };

  //button rest function
  buttonReset.onclick = function () {
    clearInterval(timeGap);
    milliseconds  = "00";
    seconds = "00";
    addMilliSeconds.innerHTML = milliseconds ;
    addSeconds.innerHTML = seconds;
  };

  //function startTimer
  function startTimer() {
    milliseconds ++;

    if (milliseconds  <= 9) {
      addMilliSeconds.innerHTML = "0" + milliseconds ;
    }

    if (milliseconds  > 9) {
      addMilliSeconds.innerHTML = milliseconds ;
    }

    if (milliseconds  > 99) {
      console.log("seconds");
      seconds++;
      addSeconds.innerHTML = "0" + seconds;
      milliseconds  = 0;
      addMilliSeconds.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      addSeconds.innerHTML = seconds;
    }
  }
};
