import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
    setValidInput(true);}
    setEnteredValue(event.target.value);
  };
  const [validInput,setValidInput] = useState(true)

  let inputWarning = 
        <p>Please enter something!</p>
      
  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim() ==='') {
      setValidInput(false)
      // inputWarning();
        // alert("please enter something");
        
    } else {
    props.onAddGoal(enteredValue);
    }
    
  };
  

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label >Course Goal</label>
        <input style={{borderColor: validInput? 'black' : 'red'}}type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
      {inputWarning}
    </form>
      
  );
};

export default CourseInput;
