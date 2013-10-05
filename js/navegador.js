
$(document).ready(function(){
var isOpera = (navigator.userAgent.indexOf("Opera") != -1);
var isChrome = (navigator.userAgent.indexOf("Chrome") != -1);
var isFirefox = (navigator.userAgent.indexOf("Firefox") != -1);
var isMIE = (navigator.userAgent.indexOf("MSIE") != -1);

if (isOpera)
  alert("Estás usando Opera");

if (isChrome)
  alert("Estás usando Chrome");

if (isFirefox)
  alert("Estás usando Firefox");

if (isMIE)
  alert("Estás usando Internet Explorer");
});

