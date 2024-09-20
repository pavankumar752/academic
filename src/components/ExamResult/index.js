// src/components/ExamResult.js
import React from 'react';
import './index.css';
import { exams } from '../../data';

const ExamResult = ({ selectedType, examResults }) => {
    const filteredResults = selectedType
        ? examResults.filter((result) => {
            const exam = exams.find(exam => exam.id === result.examId);
            return exam && exam.typeId === parseInt(selectedType);
        })
        : examResults;

    const getExamDate = (examId) => {
        const exam = exams.find((e) => e.id === examId);
        return exam ? exam.date : 'Unknown';
    };

    return (
        <div className="exam-result">
            <h2>Exam Results</h2>
            <ul>
                {filteredResults.map((result) => (
                    <li key={result.id}>
                        {result.student} scored {result.score} in the exam on {getExamDate(result.examId)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExamResult;
