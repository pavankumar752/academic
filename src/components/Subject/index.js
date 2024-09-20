// src/components/Subject.js
import React from 'react';
import './index.css';

const Subject = ({ subjects }) => (
    <div className="subject">
        <h2>Subjects</h2>
        <ul>
            {subjects.map(subject => (
                <li key={subject.id}>{subject.name}</li>
            ))}
        </ul>
    </div>
);

export default Subject;
