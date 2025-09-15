const tempInput = document.getElementById('tempInput');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    let temp = parseFloat(tempInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (isNaN(temp)) {
        resultDiv.textContent = "Please enter a valid number!";
        resultDiv.style.color = "red";
        return;
    }

    let tempInCelsius;

    // Convert from source unit to Celsius
    if (from === "celsius") {
        tempInCelsius = temp;
    } else if (from === "fahrenheit") {
        tempInCelsius = (temp - 32) * 5/9;
    } else if (from === "kelvin") {
        tempInCelsius = temp - 273.15;
    }

    let convertedTemp;

    // Convert from Celsius to target unit
    if (to === "celsius") {
        convertedTemp = tempInCelsius;
    } else if (to === "fahrenheit") {
        convertedTemp = (tempInCelsius * 9/5) + 32;
    } else if (to === "kelvin") {
        convertedTemp = tempInCelsius + 273.15;
    }

    resultDiv.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${to.charAt(0).toUpperCase()}`;
    resultDiv.style.color = "black";
});
