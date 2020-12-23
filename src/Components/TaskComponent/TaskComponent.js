import React from 'react'
import { faMinusSquare } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  './Tasks.css'
const singleTask = (props) =>
{

    
    return (
        <div>
            <span className="span-container">
            <p key={props.index} className="spanClass" >
                 {props.taskName}
                
            </p> 
            <FontAwesomeIcon key={props.index} className="icon-remove"  size="2x" icon={faMinusSquare} onClick={props.clicked}/>
            </span>
           
            
        </div>
    
    );

}


export default singleTask;