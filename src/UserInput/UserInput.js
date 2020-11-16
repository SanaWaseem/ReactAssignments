import React, { useState } from 'react';

 
const userInput = (props) =>
{
    return(
            <div>
                <input id="user-input" className='inputClass' onChange={props.change}/>
            </div>
    );

}

export default userInput;