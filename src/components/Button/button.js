import React from 'react';
import "./button.css"

export default function Button(props) {
    return(
        <div className='button-container'>
            <div className='button-text'>{props.name}</div>
        </div>
    )
}