import React from 'react';
import Button from '../Button/Button.jsx';
import Display from '../Display/Display.jsx';
import './Calculator.css'

function Calculator() {
    const calcButtons = [['AC', 'triple'], ['/'], ['7'], ['8'], ['9'], ['*'], ['4'], ['5'], ['6'], ['-'], ['1'], ['2'], ['3'], ['+'], ['0', 'double'], ['.'], ['=']];

    const buttonRender = calcButtons.map((label) => {
        if(label.length < 2) return <Button value={label}/>
        else {
            if(label[1] === 'triple') return <Button value={label[0]} className="triple" />
            else return <Button value={label[0]} className="double" />
        }
    })

    return (
        <div className="calculator">
            <Display />
            <div className="buttons-container">
                {buttonRender}
            </div>
        </div>
    )
}

export default Calculator;
