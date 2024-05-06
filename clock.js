function clock() {
    let today = new Date();
    let hour = today.getHours();
    let minute = Number(today.getMinutes());
    let sec = Number(today.getSeconds());

    
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }

    let timeElement = document.getElementById('time');
    timeElement.innerHTML = hour + " : " + minute + " : " + sec + "<br>";
  }
  