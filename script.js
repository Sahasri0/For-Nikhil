// Get the current month based on the system date
var currentMonth = new Date().getMonth();

// Enable the buttons for the current month and previous months
for (var i = 0; i <= currentMonth; i++) {
  document.getElementById(getMonthId(i)).classList.add("unlocked");
}


function getMonthId(monthIndex) {
  var monthNames = ["may", /* add the remaining month names here */];
  return monthNames[monthIndex];
}