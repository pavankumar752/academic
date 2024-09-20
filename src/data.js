export const examTypes = [
    { id: 1, name: 'Midterm' },
    { id: 2, name: 'Final' },
    { id: 3, name: 'Quiz' },
];

export const subjects = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Science' },
    { id: 3, name: 'History' },
];

export const exams = [
    { id: 1, subjectId: 1, typeId: 1, date: '2024-10-01' },
    { id: 2, subjectId: 2, typeId: 2, date: '2024-10-15' },
    { id: 3, subjectId: 3, typeId: 3, date: '2024-11-01' },
];

export const examResults = [
    { id: 1, examId: 1, student: 'Alice', score: 85 },
    { id: 2, examId: 1, student: 'Bob', score: 90 },
    { id: 3, examId: 2, student: 'Alice', score: 78 },
];

export const examInstances = [
    { id: 1, examId: 1, instanceDate: '2024-09-01' },
    { id: 2, examId: 2, instanceDate: '2024-09-15' },
];