import React from 'react';

function AnswerChoices(props) {

      return (
       <input type="radio" alt="" name="question" value={props.choice} onChange={props.handleInputChange} checked={props.selected}/>
     )

}

export default AnswerChoices;
