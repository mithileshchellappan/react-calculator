import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e, inputName) => {
    const inputValue = e.target.value;
    if (inputName === 'num1') {
      setNum1(inputValue);
    } else if (inputName === 'num2') {
      setNum2(inputValue);
    }
  };

  const handleOperation = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let operationResult = '';

    switch (operator) {
      case '+':
        operationResult = number1 + number2;
        break;
      case '-':
        operationResult = number1 - number2;
        break;
      case '*':
        operationResult = number1 * number2;
        break;
      case '/':
        operationResult = number1 / number2;
        break;
      default:
        break;
    }

    setResult(operationResult);
  };

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <div className="input-container">
        <input type="number" className="input-field" value={num1} onChange={(e) => handleInputChange(e, 'num1')} />
        <input type="number" className="input-field" value={num2} onChange={(e) => handleInputChange(e, 'num2')} />
      </div>
      <div className="buttons">
        <button className="operation-button" onClick={() => handleOperation('+')}>+</button>
        <button className="operation-button" onClick={() => handleOperation('-')}>-</button>
        <button className="operation-button" onClick={() => handleOperation('*')}>*</button>
        <button className="operation-button" onClick={() => handleOperation('/')}>/</button>
      </div>
      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculator;
