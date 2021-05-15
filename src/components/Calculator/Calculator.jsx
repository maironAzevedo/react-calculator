import React, { useState } from 'react';
import { calcButtons } from '../../services/buttons.js'
import Button from '../Button/Button.jsx';
import Display from '../Display/Display.jsx';
import './Calculator.css'


function Calculator() {
    const [displayValue, setDisplayValue] = useState("")

    const buttonRender = calcButtons.map(item => {
        return <Button 
            value={item.name} 
            className={item.size} 
            onClick={item.function}
        />
    })

    return (
        <div className="calculator">
            <Display>{displayValue}</Display>
            <div className="buttons-container">
                {buttonRender}
            </div>
        </div>
    )
}

export default Calculator;
