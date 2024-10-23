const input = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

function convertToRoman(value) {
    const romanNumeral = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    };
    let result = '';
    for (let key in romanNumeral) {
        while (value >= romanNumeral[key]) {
            result += key;
            value -= romanNumeral[key];
        }
    }
    return result;
}


convertBtn.addEventListener('click', () => {
    const value = parseInt(input.value);
    if(value === '') {
        output.innerHTML = "Please enter a valid number";
        return;
    }else if(value <= 0){
        output.innerHTML = "Please enter a number than or equal to 1";
        return
    }else if(value > 3999){
        output.innerHTML = "Please enter a number less than or equal to 3999";
        return;
    }
    const romanValue = convertToRoman(value);
    output.innerHTML = "Roman Numeral: " + romanValue;
});

input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
    convertBtn.click();
    }
})