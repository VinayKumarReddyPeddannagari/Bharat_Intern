let celsiusInput = document.getElementById("celciusvalue");
let fahrenheitInput = document.getElementById("fahrenheitvalue");
let kelvinInput = document.getElementById("kelvinvalue");
let clearButtonEl = document.getElementById("clearButton");

function roundNumber(number) {
    return (Math.round(number * 100) / 100);
}

kelvinInput.addEventListener("input", function() {
    let kelvin = parseFloat(kelvinInput.value);
    celsiusInput.value = roundNumber(kelvin - 273.15);
    fahrenheitInput.value = roundNumber((kelvin * 9 / 5) - 459.67);
});

fahrenheitInput.addEventListener("input", function() {
    let fahrenheit = parseFloat(fahrenheitInput.value);
    celsiusInput.value = roundNumber((fahrenheit - 32) * 5 / 9);
    kelvinInput.value = roundNumber((fahrenheit + 459.67) * 5 / 9);
});

celsiusInput.addEventListener("input", function() {
    let celsius = parseFloat(celsiusInput.value);
    fahrenheitInput.value = roundNumber((celsius * (9 / 5)) + 32);
    kelvinInput.value = roundNumber(celsius + 273.15);
});

clearButtonEl.addEventListener("click", function() {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
});