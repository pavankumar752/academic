// src/App.js
import React, { useState } from 'react';
import ExamType from './components/ExamType';
import Subject from './components/Subject';
import Exam from './components/Exam';
import ExamResult from './components/ExamResult';
import ExamInstance from './components/ExamInstance';
import { examTypes, subjects, exams, examResults, examInstances } from './data';
import './App.css';

const App = () => {
    const [selectedExamType, setSelectedExamType] = useState('');

    const handleExamTypeChange = (typeId) => {
        setSelectedExamType(typeId);
    };

    return (
        <div className="app">
            <h1>Exam Reports</h1>
            <ExamType
                examTypes={examTypes}
                selectedType={selectedExamType}
                onExamTypeChange={handleExamTypeChange}
            />
            <Subject subjects={subjects} />
            <Exam selectedType={selectedExamType} exams={exams} />
            <ExamResult selectedType={selectedExamType} examResults={examResults} />
            <ExamInstance selectedType={selectedExamType} examInstances={examInstances} />
        </div>
    );
};

export default App;
