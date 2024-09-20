// src/components/Exam.js
import React from 'react';
import './index.css';
import { subjects } from '../../data';

const Exam = ({ selectedType, exams }) => {
    const filteredExams = selectedType
        ? exams.filter((exam) => exam.typeId === parseInt(selectedType))
        : exams;

    const getSubjectName = (subjectId) => {
        const subject = subjects.find((s) => s.id === subjectId);
        return subject ? subject.name : 'Unknown';
    };

    return (
        <div className="exam">
            <h2>Exams</h2>
            <ul>
                {filteredExams.map((exam) => (
                    <li key={exam.id}>
                        {getSubjectName(exam.subjectId)} on {exam.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Exam;
