var weight = document.querySelector(".weight");
var height = document.querySelector(".height");

document.querySelector(".btn").addEventListener("click", function() {
  animation()
  var bmi = Math.round(weight.value / Math.pow(height.value, 2));
  if (bmi <= 18.5) {
    document.querySelector(".condition").innerHTML = "Under Weight";
  } else if (bmi <= 24.9) {
    document.querySelector(".condition").innerHTML = "Normal";
  }

  if (bmi > 24.9) {
    document.querySelector(".condition").innerHTML = "Over Weight";
  }
});

function animation() {
  document.querySelector(".btn").classList.add("pressed");
  setTimeout(function() {
    document.querySelector(".btn").classList.remove("pressed");
  }, 350)
}
