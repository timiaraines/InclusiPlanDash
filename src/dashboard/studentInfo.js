import React from 'react';

const StudentInfo = ({ name, grade, learningDisability, goalProgress }) => {
  return (
    <div>
      <h2>Student Information</h2>
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Grade:</strong> {grade}
      </div>
      <div>
        <strong>Learning Disability:</strong> {learningDisability}
      </div>
      <div>
        <strong>Goal Progress:</strong> {goalProgress}%
      </div>
    </div>
  );
};

export default StudentInfo;
