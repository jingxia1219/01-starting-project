import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [inputWarning,setInputWarning] = useState(<p></p>)
  const [validInput,setValidInput] = useState(true)
  
  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
    setValidInput(true);}
    setInputWarning(<p></p>);
    setEnteredValue(event.target.value);
  };
      
  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim() ==='') {
      setInputWarning(<p>Please enter something!</p>);
      setValidInput(false)
      console.log('please put something')
        // alert("please enter something");
        
    } else {
    props.onAddGoal(enteredValue);
    }
    
  };
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!validInput ? 'invalid' : ''}`}>
        <label className="label-class">Course Goal</label>
        <input  type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
      {inputWarning}
    </form>
      
  );
};

export default CourseInput;
