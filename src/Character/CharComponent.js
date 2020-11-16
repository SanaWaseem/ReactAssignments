import React from 'react';
import Radium from 'radium';
import './Character.css';

const splitCharacter = (props) =>
{
    console.log(props.styles);
    return(
        
        <p style={props.styles} onDoubleClick={props.click}> {props.char}</p>
    );

}

export default Radium(splitCharacter);