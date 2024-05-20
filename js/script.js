


const hoursContainer = document.getElementsByClassName("hours")[0];
const minutesContainer = document.getElementsByClassName("minutes")[0];
const secondsContainer = document.getElementsByClassName("seconds")[0];
const amPm = document.getElementsByClassName("amPM")[0];

setInterval(()=>{
const date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if (hours > 12) {
	hours = hours - 12;
	amPm.innerText = "PM";
}

if (hours < 10) {
	hours = "0" + hours;
}

if (minutes < 10) {
	minutes = "0" + minutes;
}

if (seconds < 10) {
	seconds = "0" + seconds;
}

hoursContainer.innerText = hours;
minutesContainer.innerText = minutes;
secondsContainer.innerText = seconds;

}, 1000);
