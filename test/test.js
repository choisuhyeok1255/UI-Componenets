var frame = document.getElementById("frame");
var frameDoc = frame.contentDocument;
var info = document.getElementById("info");

var target = frameDoc.getElementById("overview");
frameDoc.scrollingElement.scrollTop = target.offsetTop;

info.innerText = "스크롤 후 Y축 차이: " +
  frame.contentWindow.pageYOffset + " 픽셀";