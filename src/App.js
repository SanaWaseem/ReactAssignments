import './App.css';
import React, { Component } from 'react';
import Validation from "./Validation/ValidationComponent";
import Character from "./Character/CharComponent";
import Radium, {StyleRoot} from 'radium'

class App extends Component {

  state = {
    wordCount: 0,
    word: "",
    characters: ""
  };

  

  wordLengthHandler = (event) => {
    if (event !== undefined && event !== null && event.keyCode !== 32) {
      let wordLength = event.target.value;
      this.setState({
        wordCount: wordLength.length,
        word: wordLength
      });
    }
    else {
      event.stopPropagation();
    }
  }

  deleteHandler = (index) =>
  {     
   let characs = this.state.characters.join("");
   let newWord =  characs.substring(0, index) + characs.substring(index + 1, characs.length)
   this.setState({
     
     word:  newWord.replace(" ", ""),
     wordCount: newWord.replace(" ", "").length,
     characters: [...newWord]
   });
   document.getElementById('wordText').value = newWord.replace(" ", "");
  }

  splitWordHandler = (event) => {
    var chars;
    if (event !== undefined && event !== null && event.keyCode !== 32) {
    chars = [...event.target.value];

    this.setState
      ({
        characters: chars
      });
    }
    else {
      event.stopPropagation();
    }
  }

  render() {

    const classWiseStyle ={
      button:{
        color: 'black',
        fontWeight : 'bold',
        fontSize: '28px',
        display: 'inline-block',
        padding: '4%',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
        borderRadius: '50%',
        background: 'yellow',
        ':hover': {
          background: 'blue',
          color: 'white',
        }
      }
    };

    if (this.state.characters !== undefined && this.state.characters != null && this.state.characters.length > 0) {
      var charrs = [...this.state.characters];
      var elements = charrs.map((element,index) => {
        if (element !== ' ')
          return <Character styles={classWiseStyle.button} char={element} key={index * Math.random()} click={()=>this.deleteHandler(index)} />

      });
     
    }

   
    return (
      <StyleRoot>
        <div className="App">
        <input className="input" id="wordText" type="text" onChange={(event) => { this.wordLengthHandler(event) }} onKeyUp={this.splitWordHandler}  />
        <p>Length of the word:</p>
        <p id='lengthOutput'>{this.state.wordCount}</p>
        <Validation wordLength={this.state.wordCount} />
        {
          elements
        }

      </div>
      </StyleRoot>

    );
  }
}

export default Radium(App);
