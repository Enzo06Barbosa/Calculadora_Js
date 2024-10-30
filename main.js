const display = document.querySelector(".numero");

function updateDisplay(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;
    if (buttonText === "=") {
      clearDisplay();
    } else {
      updateDisplay(buttonText);
    }
  });
});