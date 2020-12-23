import React from 'react';
import '../Containers/App.css';


const withClass = (WrappedComponent,classes) =>{  return props =>(
    <div className={classes}>
        <WrappedComponent/>
    </div>
);
}
  

export default withClass;