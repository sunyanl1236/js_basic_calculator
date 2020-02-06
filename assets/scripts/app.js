const defaultResult = 0;
let currentResult = defaultResult;
let logEntries =[];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operater, resultBeforeCalc, calcNumber) { //improve code reuse
    const calcDescription = `${resultBeforeCalc} ${operater} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calclateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
   
    if(
        calculationType !== 'ADD' && 
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' || !enteredNumber // cannot divided by 0
    ){
      return;      
    }
    if (calculationType === 'ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calclateResult('ADD');
}

function subtract() {
    calclateResult('SUBTRACT');
}

function multiply() {
    calclateResult('MULTIPLY');
}

function divide() {
    calclateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
