import React from 'react';
import DisplayResults from './DisplayResults';
import AnswerChoices from './AnswerChoices';

class Trivia extends React.Component{

  questionsList = [
    'In the musical Chicago, who did Roxie shoot?',
    'Miss Saigon is based on an opera by what name?',
    'The music of Phantom of the Opera was created by:',
    'In the musical Les Miserables, the protagonist Jean Valjean was convicted for what crime?',
    'Into the Woods has characters from various fairy tales. Which of the following is NOT one of those fairy tales?',
    'Who was the author of the biography that Hamilton was based off of?',
    'Rent was inspired by Giacomo Puccini’s opera La Boheme. The opera was about the lives of poor young artists. Tuberculosis, the plague of La Boheme is replaced by what disease in Rent?',
    'Mentioned in the beginning of Rent, what was the name of Roger’s girlfriend who died before Rent even begins?',
    'In the musical Wicked, who is Elphaba’s main love interest?',
    '“The Last Five Years” explores the five year relationship between Jamie Wellerstein, a rising novelist and Cathy Hiatt, a struggling actress. What is unique about the form of storytelling in this musical?'
  ]

  state = {
    'answers': [],
    'questionNumber': 1,
    'finalAnswers': [],
    'currentAnswerChoices': {'a': 'her husband', 'b': 'her rival Velma', 'c': 'a furniture salesman', 'd': 'a Russian immigrant girl'}
  }

 answerChoices = [
    {'a': 'her husband', 'b': 'her rival Velma', 'c': 'a furniture salesman', 'd': 'a Russian immigrant girl'},
    {'a': 'Carmen', 'b': 'Madame Butterfly', 'c': 'Turandot', 'd': 'Phantom of the Opera'},
    {'a': 'Jerry Herman', 'b': 'Claude Michel Schünberg', 'c': 'Sara Bareilles', 'd': 'Andrew Lloyd Webber'},
    {'a': 'Stealing a loaf of bread', 'b': 'Murder', 'c': 'Treason', 'd': 'Stealing apples'},
    {'a': 'Jack and the Beanstalk', 'b': 'Rapunzel', 'c': 'Sleeping Beauty', 'd': 'Cinderella'},
    {'a': 'Ron Chernow', 'b': 'Hugh Francis', 'c': 'Richard Frank', 'd': 'Thomas Jefferson'},
    {'a': 'Herpes', 'b': 'Parkinsons', 'c': 'HIV/AIDS', 'd': 'Hypothermia'},
    {'a': 'Mimi', 'b': 'April', 'c': 'Idina', 'd': 'Maureen'},
    {'a': 'Frex', 'b': 'Fiyero', 'c': 'The Wizard', 'd': 'The Cowardly Lion'},
    {'a': 'Jamie’s side of the story is only revealed towards the end after going through Cathy’s side of the story', 'b': 'Cathy’s side of the story is told by a close friend of Cathy’s to Jamie', 'c': 'Jamie’s side of the story is narrated by various relatives leaving his actual story ambiguous', 'd': 'Cathy’s side of the story is told in reverse chronological order while Jamie’s side is told in chronological order'}
  ]


  options = ['a','b','c','d'];

  handleInputChange = (event) => {
    this.setState({
      'answerChoice': event.target.value
    })
  }

  //Saves answer and navigates to next question
  nextStep = (event) => {

    let radioButtons = document.getElementsByName("question");
    let selected = false;
    event.preventDefault()

    //checking any options were selected
    if(radioButtons.length > 0) {

          for(let n = 0; n < radioButtons.length; n++) {

            //console.log('each btn - '+radioButtons[n].checked)

            if(radioButtons[n].checked) {
              selected = true
              break
            }

          }

    }

    //show alert if no option is selected
    if(!selected) {
      alert('Please select an answer.')
      return
    }

    let answer = this.state.answerChoice

    document.getElementById("trivia-form").reset();

    if(this.state.questionNumber <= 9) {

      this.setState({
          'answers': this.state.answers.concat(answer),
          'questionNumber': this.state.questionNumber+1,
          'finalAnswers': [],
          'currentAnswerChoices':this.answerChoices[this.state.questionNumber]
      })

    }

    if(this.state.questionNumber === 10) {

        document.getElementById('trivia-form').style = "display:none"


        this.setState({
            'answers':  this.state.answers.concat(answer),
            'questionNumber': this.state.questionNumber,
            'finalAnswers':  this.state.answers.concat(answer)
        })

    }

    //resets radio buttons
    this.setState({
      'answerChoice': ''
    })

  }

  //renders question and answer choices
  render() {

    return (
      //<>
      <React.Fragment>
          <form id='trivia-form'>
          <h4>{this.state.questionNumber}. {this.questionsList[this.state.questionNumber-1]}</h4>

          <ul className="answer-choices">
              {
                  this.options.map((option, index) => {
                    return <li key={index}><AnswerChoices choice={option} handleInputChange={this.handleInputChange} selected={this.state.answerChoice === option}/><label>{this.state.currentAnswerChoices[option]}</label></li>
                  })
              }
          </ul>


          <button onClick={this.nextStep} className="next-btn">Next</button>
          </form>

          <DisplayResults answers={this.state.finalAnswers}/>
      </React.Fragment>
      //</>
    )

  }

}

export default Trivia;
