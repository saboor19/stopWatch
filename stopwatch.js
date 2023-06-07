window.onload = function() {
    var seconds = 0;
    var tens = 0;
    var lapTimes = [];
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var buttonLap = document.getElementById("button-lap");
    var lapTimesList = document.getElementById("lap-times");
  
    var interval;
  
    buttonStart.onclick = function() {
      clearInterval(interval);
      interval = setInterval(startTimer, 10);
    };
  
    buttonStop.onclick = function() {
      clearInterval(interval);
      storeLapTime();
    };
  
    buttonReset.onclick = function() {
      clearInterval(interval);
      tens = 0;
      seconds = 0;
      lapTimes = [];
      appendTens.innerHTML = "00";
      appendSeconds.innerHTML = "00";
      lapTimesList.innerHTML = "";
    };
  
    buttonLap.onclick = function() {
      storeLapTime();
    };
  
    function startTimer() {
      tens++;
  
      if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
      }
  
      if (tens > 9) {
        appendTens.innerHTML = tens;
      }
  
      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + tens;
      }
  
      if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
      }
    }
  
    function storeLapTime() {
      var lapTime = {
        seconds: seconds,
        tens: tens
      };
      lapTimes.push(lapTime);
  
      var lapItem = document.createElement("li");
      lapItem.innerHTML =
        lapTimes.length +
        ". " +
        lapTime.seconds +
        ":" +
        padZero(lapTime.tens);
      lapTimesList.appendChild(lapItem);
    }
  
    function padZero(value) {
      return value.toString().padStart(2, "0");
    }
  };
  