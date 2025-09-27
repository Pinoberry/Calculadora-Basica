let display = document.getElementById("result");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let expression = display.value.replace(/×/g, "*");
    display.value = new Function("return " + expression)();
  } catch (error) {
    display.value = "Error";
    setTimeout(() => {
      clearDisplay();
    }, 1000);
  }
}

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/[0-9+\-*/.()]/.test(key)) {
    appendToDisplay(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
  } else if (key === "Escape") {
    clearDisplay();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "/") {
    event.preventDefault();
    appendToDisplay("/");
  } else if (key === ".") {
    appendToDisplay(".");
  }
});
