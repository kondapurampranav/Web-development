const button = document.getElementById("button");

button.addEventListener("click", function () {
  const inputs = document.querySelectorAll(".box");
  const message = document.getElementById("box2");

  for (let input of inputs) {
    if (input.value.trim() === "") {
      alert("Please fill all fields");
      return;
    }
  }

  if (message.value.trim() === "") {
    alert("Please fill all fields");
    return;
  }

  alert("Form submitted successfully!");

  // clear values
  inputs.forEach(input => input.value = "");
  message.value = "";
});

