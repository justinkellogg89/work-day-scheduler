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
    $(this).addClass("present");
    $(this)
      .siblings() //targets all siblings to change color throughout entire row.
      .addClass("present");
  } else if (currentHour > elementHour) {
    $(this).addClass("past");
    $(this)
      .siblings() //targets all siblings to change color throughout entire row.
      .addClass("past");
  } else {
    $(this).addClass("future");
    $(this)
      .siblings() //targets all siblings to change color throughout entire row.
      .addClass("future");
  }
});

$(".saveBtn").on("click", function(e){
    e.preventDefault();
    var scheduledStuff = $(this).siblings(".col-8").val();
    localStorage.setItem("scheduledStuff", scheduledStuff);
});

function getScheduledStuff(){
    var show = localStorage.getItem("scheduledStuff");
    $("#0900").text(show);
    if (show !== null){
        return;
    }
}
getScheduledStuff();


