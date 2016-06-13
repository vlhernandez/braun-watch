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
    angle = angle - step;
  }
}

function placeNumbers(){
  var circle = document.querySelector(".number-wrapper")
  var listElements = document.querySelectorAll("ul.o-clock > li");
  var len = listElements.length;
  var diam = parseInt( window.getComputedStyle(circle).getPropertyValue('width'));
  var radius = diam / 2;
  var imgW = listElements[0].getBoundingClientRect().width;
  var radius2 = radius - imgW;
  var angle = Math.PI / 2;
  var corner = 2 * Math.PI / len;


  for (var i = 0; i < len ; i++) {
    var element = listElements[i];
    element.style.left = parseInt( (radius - imgW / 2) +  (radius2 * Math.cos(angle)))+'px';
    element.style.top = parseInt( (radius - imgW / 2) -  (radius2 * Math.sin(angle)))+'px';

    angle = angle - corner;
  }
}

placeTicks();
placeNumbers();
