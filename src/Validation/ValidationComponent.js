import React from 'react'

const validation = (props) =>
{
    var validationText ;
    const wordLength = props.wordLength;

    if(wordLength !== undefined && wordLength !== null && wordLength !==0)
    {
        

        validationText = ( wordLength > 5 )? 
            <p>Text too long</p>
            :
            <p>Text too short</p>
                
    }


    return(
        
        <div>
            
{validationText}

        </div>
        
    );    

}

export default validation;