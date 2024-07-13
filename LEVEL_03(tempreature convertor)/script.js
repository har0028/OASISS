const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertButton = document.getElementById('convert');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', (e) => {
  e.preventDefault();
  convertTemperature();
});

function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  if (isNaN(temperature)) {
    resultDiv.innerHTML = 'Please enter a valid temperature';
    return;
  }

  let convertedTemperature;
  let convertedUnit;

  switch (unit) {
    case 'celsius':
      if (temperature < -273.15) {
        resultDiv.innerHTML = 'Temperature cannot be lower than absolute zero';
        return;
      }
      convertedTemperature = temperature * 9/5 + 32;
      convertedUnit = 'Fahrenheit';
      break;
    case 'fahrenheit':
      if (temperature < -459.67) {
        resultDiv.innerHTML = 'Temperature cannot be lower than absolute zero';
        return;
      }
      convertedTemperature = (temperature - 32) * 5/9;
      convertedUnit = 'Celsius';
      break;
    case 'kelvin':
      if (temperature < 0) {
        resultDiv.innerHTML = 'Temperature cannot be lower than absolute zero';
        return;
      }
      convertedTemperature = temperature - 273.15;
      convertedUnit = 'Celsius';
      break;
  }

  resultDiv.innerHTML = `The converted temperature is ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}

// Add event listener to unit select to update result when unit changes
unitSelect.addEventListener('change', () => {
  convertTemperature();
});