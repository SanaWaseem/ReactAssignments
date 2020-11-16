import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'
import { useState } from 'react';

function App() {
  const [userName, setUserNameState] = useState({
      persons: [
        { name: "Sana" },
        { name: "Waseem" }],
      showPersons: true
  });

  const switchNameHandler = () => {
    setUserNameState({
      persons: [
        { name: "Anaya" },
        { name: "Khan" }],
      showPersons: userName.showPersons
    },

    );

  }

  const switchInputNameHandler = (event) => {
    setUserNameState({
      persons: [
        { name: event.target.value },
        { name: "Alenior" }],
      showPersons: userName.showPersons
    },

    );

  }

  const toggleStateHandler = () => {
    var doesShow = !userName.showPersons;
    setUserNameState({
      persons: [
        { name: "Anaya" },
        { name: "Khan" }]
      ,
      showPersons: doesShow
    });


  }
  var elements =   userName.persons.map((person) => {
    return <UserOutput usersName={person.name}></UserOutput>}); 
  return (

    <div className="App">
     

      { userName.showPersons ?
        <div>
            {elements}
            <UserInput change={switchInputNameHandler}></UserInput>
          <button className='button' onClick={switchNameHandler}>Switch Name</button>
        </div>
        : null
      }
      <button className='button' onClick={toggleStateHandler}> Toggle State </button>
    </div>
  );
}

export default App;
