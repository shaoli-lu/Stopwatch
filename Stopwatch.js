var count = 0;
var ms = 0;
var ms1 = 0;
var ms = 0;
var second = 0;
var minute = 0;
var msElem = document.getElementById("ms");
var secondElem = document.getElementById("second");
var minuteElem = document.getElementById("minute");
var interval;


window.addEventListener("keypress",function(event){
  switch(event.key.toLowerCase()){
    case 's': runTime();break;
    case 't': takeTime();break;
    case 'r': resetTime();break;
  }
});

var elapsedTime = 0;
var startTime;

function runTime() {
  if (count == 0) {
    startTime = Date.now();
    interval = setInterval(function() {
      var timeDiff = Date.now() - startTime;
      elapsedTime += timeDiff;
      ms = elapsedTime % 1000;
      second = Math.floor(elapsedTime / 1000) % 60;
      minute = Math.floor(elapsedTime / 60000);
      msElem.innerHTML = ms;
      secondElem.innerHTML = second;
      minuteElem.innerHTML = minute;
      startTime = Date.now();
    }, 10);
    count++;
  } else {
    var timeDiff = Date.now() - startTime;
    elapsedTime += timeDiff;
    clearInterval(interval);
    count = 0;
  }
}

function resetTime() {
  elapsedTime = 0;
  count = 0;
  ms = 0;
  second = 0;
  minute = 0;
  msElem.innerHTML = ms;
  secondElem.innerHTML = second;
  minuteElem.innerHTML = minute;
  clearInterval(interval);
  document.getElementById("list").innerHTML = "";
}


function takeTime(){
  if(ms > 0 || second > 0){
 // var date = new Date();
  //var formattedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  //console.log(formattedDate); 
var timestamp = Date.now();
var date = new Date(timestamp);
var hours = date.getHours();
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
hours = hours.toString().padStart(2, '0');
var minutes = date.getMinutes().toString().padStart(2, '0');
var seconds = date.getSeconds().toString().padStart(2, '0');
var milliseconds = date.getMilliseconds().toString().padStart(3, '0');
var formattedTime = `${hours}:${minutes}:${seconds}:${milliseconds} ${ampm}`;
console.log(formattedTime);
  var list = document.getElementById("list");
  list.innerHTML += `<p>${minute}:${second}:${ms} - (${formattedTime})</p>`;  
  }
}