var count = 0;
var ms = 0;
var second = 0;
var msElem = document.getElementById("ms");
var secondElem = document.getElementById("second");
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
    msElem.innerHTML = ms;
    if(ms == 100){
      ms = 0;
      msElem.innerHTML = ms;
      second++;
      secondElem.innerHTML = second;
    }
  }, 1);  
  }
  else{
    count = 0;
    clearInterval(interval);

  }
}

function resetTime(){
  ms = 0;
  second  = 0;
  msElem.innerHTML = ms;
  secondElem.innerHTML = second;
  clearInterval(interval);
  document.getElementById("list").innerHTML = "";
}

function takeTime(){
  if(ms > 0 || second > 0){
    var list = document.getElementById("list");
  list.innerHTML += `<p>${second}:${ms}</p>`;  
  }
}