function generateColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var color = "rgb(" + r + ", " + g + ", " + b + ")";
  return color;
}
var buttonSet = document.querySelectorAll(".colourButton");
var numberOfColors = buttonSet.length;


var colorSet = new Array(numberOfColors); // numberOfColors = 6 in this case
for (var i = 0; i < numberOfColors; i++) {
  colorSet[i] = generateColor();
}


for (var j = 0; j < numberOfColors; j++) {
  document.querySelectorAll(".colourButton")[j].style.backgroundColor = colorSet[j];
}

var correctIndex = Math.floor(Math.random() * numberOfColors);
document.querySelector("#colourValue").innerHTML = colorSet[correctIndex];

var answer = document.getElementById("answer");
for (var i = 0; i < numberOfColors; i++) {
  document.querySelectorAll(".colourButton")[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === colorSet[correctIndex]) {
      answer.innerHTML = "Correct answer!";
      changeColors();
    } else {
      var colorNumber = correctIndex + 1;
      answer.innerHTML = "Oops! That's wrong";
      this.style.visibility = "hidden";
    }
  });
}

function changeColors() {
  for (var j = 0; j < numberOfColors; j++) {
    document.querySelectorAll(".colourButton")[j].style.backgroundColor = colorSet[correctIndex];
    document.querySelector("#colourValue").style.color = colorSet[correctIndex];
  }
}
