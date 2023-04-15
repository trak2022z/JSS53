function changeColor(newColor) {
  const elem = document.getElementById("control1");
  elem.style.color = newColor; 
}

function changeColor2(newColor2) {
  const elem = document.querySelector(".control2");
  elem.style.color = newColor2; 
}

function changeColor3(newColor3) {
  const elem = document.querySelectorAll("p.controlAll");

  for (i = 0; i < elem.length; i++) {
    elem[i].style.backgroundColor = newColor3;
  }
}