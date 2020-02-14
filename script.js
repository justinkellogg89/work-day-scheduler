var $currentDay = document.querySelector("#currentDay");
// var $hour = document.querySelector(".hour");

//Refreshes the time on the scheduler every second
setTime(); //calls on page load
var interval = setInterval(setTime, 1000); //refreshes every second
function setTime() {
  var date = moment().format("dddd, MMMM Do YYYY, k:mm:ss");
  $currentDay.innerHTML = date;
}
//Used to check the hour so the background can be changed
//for the past, active, and future time blocks.
$(".hour").each(function() {
  $(this)
  .removeClass("active")
  .removeClass("past")
  .removeClass("future");
  var currentHour = moment().hours();
  var elementHour = this.innerHTML;
  if (currentHour == elementHour) {
    $(this)
    .siblings() //targets all siblings to change color throughout entire row.
    .addClass("present");
  } else if (currentHour > elementHour) {
    $(this)
    .siblings() //targets all siblings to change color throughout entire row.
    .addClass("past");
  } else {
    $(this)
    .siblings() //targets all siblings to change color throughout entire row.
    .addClass("future");
  }
});

$(".saveBtn").on("click", function(e) {
  e.preventDefault();
  var val = $(this)
  .siblings(".col-8")
  .val();
  var id = $(this)
    .siblings(".hour")
    .text();
  var show = getScheduledStuff();
  show[id] = val;
  localStorage.setItem("scheduledStuff", JSON.stringify(show));
});


function getScheduledStuff() {
  var show = localStorage.getItem("scheduledStuff");
  if (show) {
    show = JSON.parse(show);
  } else {
    show = {};
  }
  
  return show;
}

function populateText() {
  var show = getScheduledStuff();
  for (let key in show) {
    $("#" + key).val(show[key]); 
  }
}

populateText();
