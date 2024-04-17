import React from 'react';
import StudentInfo from './studentInfo';  // Assuming the file is in the same directory

// Dummy data array
const students = [
    { id: 1, name: 'Alice Johnson', grade: '4', learningDisability: 'Dyslexia', goalProgress: 75 },
    { id: 2, name: 'Bob Smith', grade: '5', learningDisability: 'ADHD', goalProgress: 60 },
    { id: 3, name: 'Charlie Davis', grade: '3', learningDisability: 'Dyscalculia', goalProgress: 85 },
    { id: 4, name: 'Dana Lee', grade: '3', learningDisability: 'Dysgraphia', goalProgress: 90 },
    { id: 5, name: 'Evan Garcia', grade: '2', learningDisability: 'None', goalProgress: 95 }
];

const StudentList = () => {
    return (
        <div>
            <h1>List of Students</h1>
            {students.map(student => (
                <StudentInfo
                    key={student.id}
                    name={student.name}
                    grade={student.grade}
                    learningDisability={student.learningDisability}
                    goalProgress={student.goalProgress}
                />
            ))}
        </div>
    );
};

export default StudentList;
