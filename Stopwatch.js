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

function runTime(){
  count++;
  if(count == 1){
  interval = setInterval(function(){
    ms++;
    msElem.innerHTML = ms * 4;
    if(ms == 250){
      ms = 0;
      msElem.innerHTML = ms;
      second++;
      secondElem.innerHTML = second;
	  if(second == 60){
      second = 0;
      secondElem.innerHTML = second;
      minute++;
      minuteElem.innerHTML = minute;
    }
    }
  }, 1);  
  }
  else{
    count = 0;
    clearInterval(interval);

  }
}

function resetTime(){
  count = 0;
  ms = 0;
  second  = 0;
  minute = 0;
  msElem.innerHTML = ms;
  secondElem.innerHTML = second;
  minuteElem.innerHTML = minute;
  clearInterval(interval);
  document.getElementById("list").innerHTML = "";
}

function takeTime(){
  if(ms > 0 || second > 0){
    var list = document.getElementById("list");
  list.innerHTML += `<p>${minute}:${second}:${ms * 4}</p>`;  
  }
}