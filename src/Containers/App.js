import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/fontawesome-free-solid'
import React, {Component} from 'react';
import  Task from '../Components/TaskComponent/TaskComponent'
import withClass from '../HOC/withClass';

class App extends Component
 {

  state =
  {
    taskList : []
  }

  addTaskHandler =() =>
  {
    let newTaskList = this.state.taskList;
    newTaskList.push(document.getElementById("taskArea").value);
    this.setState
    ({
      taskList : newTaskList
    });
    document.getElementById("taskArea").value ="";
  }

  deleteHandler = (index) => {
    let newTaskList = this.state.taskList;
    if (index > -1) {
      newTaskList.splice(index, 1);
    }
    this.setState
    ({
      taskList : newTaskList
    });
  }
  
  render(){

    if (this.state.taskList !== undefined && this.state.taskList != null && this.state.taskList.length > 0) {
      var allTasks  = [...this.state.taskList];
      var tasks = allTasks.map
      ((element,index) => {
          return <Task key= {index} taskName= {element} clicked={()=>this.deleteHandler(index)} />
      }
      );
    }
    return(
   
      <React.Fragment>
         <span className="input-container">
        <textarea id="taskArea" className="input"></textarea>
        <FontAwesomeIcon className="icon" size="2x" icon={faPlusSquare}  onClick={this.addTaskHandler}/>
        
        </span>  
        <span stylename="width:90%">
        {tasks}
        </span>   
      </React.Fragment>
       

        

     
    );
  }

  }



export default withClass(App,"bBox");