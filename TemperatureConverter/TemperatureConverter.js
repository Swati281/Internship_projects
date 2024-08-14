function convert() {
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;
    let Temperature = parseFloat(document.getElementById('Temperature').value);
    let convertValue;
    let resultUnit;
    //Perform conversion
    switch (fromUnit) {
        //Convert from Celsius to other measurements
        case 'Cel':
            if (toUnit === 'Fahren') {
                convertValue = (Temperature * 1.8) + 32;
                resultUnit = 'F'
            } else if (toUnit === 'kel') {
                convertValue = (Temperature + 273.15);
                resultUnit = 'K'
            }
            else {
                convertValue = Temperature;
                resultUnit = 'C'
            }
            break;
        //Convert from Fahrenheit to other measurements
        case 'Fahren':
            if (toUnit === 'Cel') {
                convertValue = ((Temperature - 32) / 1.8);
                resultUnit = 'C'
            } else if (toUnit === 'kel') {
                convertValue = ((Temperature - 32) / 1.8) + 273.15;
                resultUnit = 'K'
            }
            else {
                convertValue = Temperature;
                resultUnit = 'F'
            }
            break;
        //Convert from Kelvin to other measurements
        case 'Kel':
            if (toUnit === 'Fahren') {
                convertValue = ((Temperature - 273.15) * 1.8) + 32;
                resultUnit = 'F'
            } else if (toUnit === 'Cel') {
                convertValue = (Temperature - 273.15);
                resultUnit = 'C'
            }
            else {
                convertValue = Temperature;
                resultUnit = 'K'
            }
            break;
    }
    document.getElementById('result').value = convertValue.toFixed(2) + ' ' + resultUnit;
}
//To reset the value 
function reset() {
    document.getElementById('Temperature').value = "";
    document.getElementById('result').value = "";
} 