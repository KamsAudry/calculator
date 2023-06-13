let buttons = document.querySelectorAll('button');
let screenDisplay = document.querySelector('.screen');

let calculation = [];
let accumualtiveCalculation;

function calculate(button){
    let value =  button.textContent;
    if(value == 'CLEAR'){
        calculation = [];
        screenDisplay.textContent = '.';
    }
    else if(value === '='){
        screenDisplay.textContent = eval(accumualtiveCalculation);
        console.log(accumualtiveCalculation);
    }
    else{
        calculation.push(value);
        accumualtiveCalculation = calculation.join('');
        screenDisplay.textContent = accumualtiveCalculation;

    }
    
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))

