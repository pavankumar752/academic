// src/components/ExamInstance.js
import React from 'react';
import './index.css';
import { exams } from '../../data';

const ExamInstance = ({ selectedType, examInstances }) => {
    const filteredInstances = selectedType
        ? examInstances.filter((instance) => {
            const exam = exams.find(exam => exam.id === instance.examId);
            return exam && exam.typeId === parseInt(selectedType);
        })
        : examInstances;

    const getExamDetails = (examId) => {
        const exam = exams.find((e) => e.id === examId);
        return exam ? `${exam.date} (Subject: ${exam.subjectId})` : 'Unknown';
    };

    return (
        <div className="exam-instance">
            <h2>Exam Instances</h2>
            <ul>
                {filteredInstances.map((instance) => (
                    <li key={instance.id}>
                        Instance of Exam on {getExamDetails(instance.examId)} - Date: {instance.instanceDate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExamInstance;
