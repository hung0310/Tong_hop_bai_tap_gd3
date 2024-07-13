export const getStudents = () => {
    const data = JSON.parse(localStorage.getItem('data'));
    return data ? data : [];
};

export const saveStudents = (students) => {
    localStorage.setItem('data', JSON.stringify(students));
};

export const getNextStudentId = () => {
    const storedId = parseInt(localStorage.getItem('id')) || 0; 
    return storedId + 1;
};

export const saveNextStudentId = (id) => {
    localStorage.setItem('id', id.toString());
};