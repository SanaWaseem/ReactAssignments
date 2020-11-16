
import React, {useState} from 'react'
import './UserOutput.css'
const userOutput = (props) => {

    return(
        <div>
            <p className = 'box'>
              {props.usersName} 
            </p>
            </div>
           
    );

}

export default userOutput; 