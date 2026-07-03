function convertTemperature() {

    let temperature = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    // Check if input is empty
    if (isNaN(temperature)) {
        result.innerHTML = "Please enter a valid temperature.";
        result.style.color = "red";
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {

        if (temperature < -273.15) {
            result.innerHTML = "Temperature cannot be below Absolute Zero (-273.15°C).";
            result.style.color = "red";
            return;
        }

        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;

    } else if (unit === "fahrenheit") {

        if (temperature < -459.67) {
            result.innerHTML = "Temperature cannot be below Absolute Zero (-459.67°F).";
            result.style.color = "red";
            return;
        }

        celsius = (temperature - 32) * 5 / 9;
        fahrenheit = temperature;
        kelvin = celsius + 273.15;

    } else {

        if (temperature < 0) {
            result.innerHTML = "Temperature cannot be below Absolute Zero (0 K).";
            result.style.color = "red";
            return;
        }

        kelvin = temperature;
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    result.style.color = "green";

    result.innerHTML =
        `<p><strong>Celsius:</strong> ${celsius.toFixed(2)} °C</p>
         <p><strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
         <p><strong>Kelvin:</strong> ${kelvin.toFixed(2)} K</p>`;
}