var i = 0;
var txt = "";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("letter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
