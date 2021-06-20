import React from 'react';

class DisplayResults extends React.Component{

  correctAnswers = [
    'c',
    'b',
    'd',
    'a',
    'c',
    'a',
    'c',
    'b',
    'b',
    'd'
  ]

  restartQuiz = (event) => {
    event.preventDefault();
    //console.log('clicked');
    window.location.reload()
  }

  //Counts the correct answers and returns the result
  getResults = (answers) => {

    let correctAnswers = 0

    //console.log('answers - '+JSON.stringify(answers))


      if(answers.length > 0) {

            let i = 0

            for(i = 0; i < answers.length;i++) {

              if(answers[i] === this.correctAnswers[i]) {
                correctAnswers++
              }

            }

      }

      let row = []

      //console.log('correctAnswers - '+correctAnswers)


      switch(correctAnswers) {
        case 1:
        case 2:
        case 3:
        case 4:
          row.push(<div key="low"><p>You got {correctAnswers}/10 correct.</p><br/><img src="https://media.giphy.com/media/64de3Bfw072AU/source.gif" alt=""/><br/><p>Sorry, looks like you failed this challenge.</p><br/><button className="re-take" onClick={this.restartQuiz}>Re-take Quiz?</button></div>)
          break;
        case 5:
        case 6:
        case 7:
          row.push(<div key="med"><p>You got {correctAnswers}/10 correct.</p><br/><img src="https://media.giphy.com/media/j3z5zUI6a43x9f52b4/source.gif" alt=""/><br/><p>Oh almost there. You almost got this.</p><button className="re-take" onClick={this.restartQuiz}>Re-take Quiz?</button></div>)
          break;
        case 8:
        case 9:
        case 10:
          row.push(<div key="high"><p>You got {correctAnswers}/10 correct.</p><br/><img src="https://media.giphy.com/media/EQc0ydanhZ4Yw/giphy.gif" alt=""/><br/><p>Congrats! You mastered the great art of Musical Trivia. Hoorah!</p><button onClick={this.restartQuiz}>Re-take Quiz?</button></div>)
          break
        default:
      }

      return row

  }

  render() {

    return (

      <div className="results">
          {this.getResults(this.props.answers)}
      </div>

    )

  }

}

export default DisplayResults;
