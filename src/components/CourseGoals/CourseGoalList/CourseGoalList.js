import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text} 
          {/* this is props.children, which is what's betwen the opening and closing tags */}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
