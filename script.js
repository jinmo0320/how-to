function but(write) {
  var but = document.querySelectorAll(".but");
  var i = 0;
  while (i < but.length) {
    but[i].style.display = write;
    i = i + 1;
  }
}
function display(left, right) {
  document.querySelector(left).style.display = right;
}
function backgroundColor(left, right) {
  document.querySelector(left).style.backgroundColor = right;
}

function init() {
  display(".title", "none");
  display(".bt", "none");
  display(".b", "block");
  but("inline-block");
  backgroundColor(".container", "rgba(3, 3, 3, 0.74)");
}
function init2() {
  display(".title", "block");
  display(".bt", "block");
  display(".b", "none");
  but("none");
  backgroundColor(".container", "transparent");
}
