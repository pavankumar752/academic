// src/components/ExamType.js
import React from 'react';
import './index.css';

const ExamType = ({ examTypes, selectedType, onExamTypeChange }) => {
    const handleChange = (event) => {
        onExamTypeChange(event.target.value);
    };

    return (
        <div className="exam-type-container">
            <h2>Select Exam Type</h2>
            <select
                value={selectedType}
                onChange={handleChange}
                className="exam-type-dropdown"
            >
                <option value="">Select Exam Type</option>
                {examTypes.map(type => (
                    <option key={type.id} value={type.id}>
                        {type.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ExamType;
