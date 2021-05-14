import React from 'react';
import Button from '../Button/Button.jsx';

function Calculator() {
    const calcButtons = ['AC', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const buttonRender = calcButtons.map((label) => <Button value={label} />)

    return (
        <div className="calculator">
            {buttonRender}
        </div>
    )
}

export default Calculator;
