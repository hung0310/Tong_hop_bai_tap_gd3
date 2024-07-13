import {
  ADD_STUDENT,
  EDIT_STUDENT,
  DELETE_STUDENT, 
  SET_STUDENTS,
} from "./Action";
import { getStudents, saveStudents } from "./LocalStorage";

const initialState = {
  students: getStudents(),
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    case ADD_STUDENT:
      const newStudents = [...state.students, action.payload];
      saveStudents(newStudents);
      return {
        ...state,
        students: newStudents,
      };
    case EDIT_STUDENT:
      const updatedStudents = state.students.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
      saveStudents(updatedStudents);
      return {
        ...state,
        students: updatedStudents,
      };
    case DELETE_STUDENT:
      const filteredStudents = state.students.filter(
        (student) => student.id !== action.payload
      );
      saveStudents(filteredStudents);
      return {
        ...state,
        students: filteredStudents,
      };
    default:
      return state;
  }
};

export default studentReducer;