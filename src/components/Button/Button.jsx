import React from 'react';

function Button(props) {
    return (
        <button className={props.className} onClick={props.function}>
            {props.value}
        </button>
    )
}

export default Button;
