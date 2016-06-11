var date = new Date();
var num = date.getDate();
var min = date.getMinutes();
var sec = date.getSeconds();
var hr = date.getHours();
document.querySelector(".day").innerHTML = num;

function placeTicks(){
  var listElements = document.querySelectorAll("ul.ticks > li");
  var step = (2 * Math.PI)/listElements.length;
  var angle = 0;
  var circleCenterX = 240;
  var circleCenterY = 215;
  var radius = 135 / 2*Math.PI;

  for (var i = 0; i < listElements.length; i++) {
    var element = listElements[i];
    var liLeft = Number(Math.round(circleCenterX + radius * Math.cos(angle)));
    var liTop = Number(Math.round(circleCenterY + radius * Math.sin(angle)));
    element.style.left = liLeft+"px";
    element.style.top = liTop+"px";
    angle += step;
  }
}

function placeNumbers(){
  var listElements = document.querySelectorAll("ul.o-clock > li");
  var step = (2 * Math.PI)/listElements.length;
  var angle = 0;
  var circleCenterX = 205;
  var circleCenterY = 180;
  var radius = 115 / 2*Math.PI;

  for (var i = 0; i < listElements.length; i++) {
    var element = listElements[i];
    var liLeft = Number(Math.round(circleCenterX + radius * Math.cos(angle)));
    var liTop = Number(Math.round(circleCenterY + radius * Math.sin(angle)));
    element.style.left = liLeft+"px";
    element.style.top = liTop+"px";
    angle += step;
  }
}

placeTicks();
placeNumbers();
