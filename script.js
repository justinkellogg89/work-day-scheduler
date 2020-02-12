var $bannerDate = document.querySelector("#banner-date");
var $middleColumn = document.querySelector(".col-6")

//Refreshes the time on the scheduler every second
setTime(); //calls on page load
var interval = setInterval(setTime, 1000); //refreshes every second
function setTime(){
    var date = new Date();
    $bannerDate.innerHTML = date;
}
//Used to check the hour so the background can be changed
var hourCheck = new Date();
var hour = hourCheck.getHours();




