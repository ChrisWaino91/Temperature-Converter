//Define UI Vars

const tempInput = document.querySelector('#temperature');
const tempType = document.querySelector('#type');
const form = document.querySelector('#convert-form');
let message = document.querySelector('.result');
let result; 
let type;

// Load all event listeners
loadEventListeners();


// Load event listeners
function loadEventListeners(){
    // Get the user's inputted temperature
    form.addEventListener('submit', userTemperature);
    // Get the user's inputted conversion type
    form.addEventListener('change', userConversionType);
    // Calculate the conversion
    form.addEventListener('submit', calculateTemp);
}


// Get Inputted Temperature Function
function userTemperature(e){
    e.preventDefault();
}


// Get Selected Conversion Type
function userConversionType(e){
    e.preventDefault();
}


// Calculate the Temperature Conversion
function calculateTemp(){
    if(tempInput.value === ''){
        errorMessage();
    }
    else if(tempType.value === "1"){
        console.log('Calculating Celcius To Fahrenheit...');
        result = (tempInput.value * 1.8) + 32;
        result = result.toFixed(2);
        type = 'Fahrenheit';
        console.log(`${tempInput.value} is equal to ` + result + ` Degrees ` + type);
        setMessage();
    } else {
        console.log('Calculating Fahrenheit To Celcius...');
        result = (tempInput.value - 32) * 5 / 9;
        result = result.toFixed(2);
        type = 'Celcius';
        console.log(`${tempInput.value} is equal to ` + result + ` Degrees ` + type);
        setMessage();
    }
}


// Set Message - This makes it a bit cleaner rather than putting it all in the same calculateTemp function...
function setMessage(){
    message.textContent = `${tempInput.value} is equal to ` + result + ` Degrees ` + type;
    message.style.color = 'initial';
}

// Error Message - Setting the error message if nothing has been input
function errorMessage(){
    message.textContent = `Please ensure that you have entered a value above!`;
    message.style.color = 'red';
}
