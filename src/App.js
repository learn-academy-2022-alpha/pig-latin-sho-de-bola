import React, { Component } from 'react'
import './App.css'
import butcherPig from './assets/pig.png'

class App extends Component{
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are test words hard coded to make the process of testing your code faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ")
    console.log("userInput:", userInput)

    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord)

      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      })
      console.log("vowelsArray:", vowelsArray)

// your code here!

      currentWord = currentWord.toLowerCase()
      // Initialize array of vowels
const vowelsCompare = ["a", "e", "i", "o", "u"];
      // Initialize vowel index to 0
let vowelIndex = 0;


/** Variable of vowels to compare the inputted words against **/
let vowels =("aeiou")

/** Variable of the index of the first Vowel **/
let indexOfFirstVowel = currentWord.indexOf(vowelsArray[0])
console.log(indexOfFirstVowel)

/** Word begins with VOWEL **/
        if(vowels.indexOf(currentWord[0]) !== -1 )  {
            let beginsWithVowel = currentWord + 'way'
             return beginsWithVowel

/** Word begins with ONE CONSONANT **/
      } else if(vowels.indexOf(currentWord[0]) === -1
             && vowels.indexOf(currentWord[1]) !== -1
             && currentWord[0] !== "q"
             && currentWord[1] !== "u")
      {
            let firstLetterAy = currentWord[0]+'ay'
            let beginsWithOneConsonant = currentWord.slice(1) + firstLetterAy
            return beginsWithOneConsonant

/** Word begins with "qu" **/
      } else if(currentWord[0] === "q"
             && currentWord[1] === "u"){
            let beginsWithQu = currentWord.slice(2) + 'quay'
            return beginsWithQu


            /** Word begins with more than one  CONSONANT **/
      }



        // Remember: console.log is your friend :)
      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word
      return currentWord

    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({phraseTranslated: translatedWords})
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({phrase: e.target.value})
  }

  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPig}
          alt="pig with butcher cut names in pig latin"
          className="butcherPig"
        />
        <div className="inputArea">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            className="userInput"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={this.setUpPreventDefault}>Submit</button>
          <button onClick={this.restartGame}>Clear</button>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">CLICK HERE FOR A SURPRISE!!!!</a>
        </div>
        <p>{this.state.phraseTranslated}</p>
        <footer>Coded by ~Marianna & Jacob~</footer>
      </>
    )
  }
}

export default App
