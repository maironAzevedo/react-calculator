import { clearDisplay, addOperator, addNumber } from '../hooks/calculatorHooks';

export const calcButtons = [
    {
        "name": "AC",
        "size": "triple",
        "function": clearDisplay()
    },
    {
        "name": "/",
        "size": "simple",
        "function": addOperator('/'),
    },
    {
        "name": "7",
        "size": "simple",
        "function": addNumber('7'),
    },
    {
        "name": "8",
        "size": "simple",
        "function": addNumber('8'),
    },
    {
        "name": "9",
        "size": "simple",
        "function": addNumber('9'),
    },
    {
        "name": "*",
        "size": "simple",
        "function": addOperator('*'),
    },
    {
        "name": "4",
        "size": "simple",
        "function": addNumber('4'),
    },
    {
        "name": "5",
        "size": "simple",
        "function": addNumber('5'),
    },
    {
        "name": "6",
        "size": "simple",
        "function": addNumber('6'),
    },
    {
        "name": "-",
        "size": "simple",
        "function": addOperator('-'),
    },
    {
        "name": "1",
        "size": "simple",
        "function": addNumber('1'),
    },
    {
        "name": "2",
        "size": "simple",
        "function": addNumber('2'),
    },
    {
        "name": "3",
        "size": "simple",
        "function": addNumber('3'),
    },
    {
        "name": "+",
        "size": "simple",
        "function": addOperator('+'),
    },
    {
        "name": "0",
        "size": "double",
        "function": addNumber('0'),
    },
    {
        "name": ".",
        "size": "simple",
        "function": addNumber('.'),
    },
    {
        "name": "=",
        "size": "simple",
        "function": addOperator('='),
    }
];