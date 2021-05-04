function myFunction() {
  getName();
  showTime();
}

function getName() {
  var text = prompt("Adınız Nedir?");

  document.getElementById("myName").innerHTML = text;
}

function showTime() {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var second = date.getSeconds();
  var day = date.getUTCDay();

  var dayName;

  switch (day) {
    case 0:
      dayName = "Pazar";
      break;
    case 1:
      dayName = "Pazartesi";
      break;

    case 2:
      dayName = "Salı";
      break;

    case 3:
      dayName = "Çarşamba";
      break;

    case 4:
      dayName = "Perşembe";
      break;

    case 5:
      dayName = "Cuma";
      break;

    case 6:
      dayName = "Cumartesi";
      break;

    default:
      break;
  }

  document.getElementById(
    "myClock"
  ).innerHTML = `${hour}:${minutes}:${second} ${dayName}`;
}
