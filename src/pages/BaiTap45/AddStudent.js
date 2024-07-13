import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  CContainer,
  CForm,
  CButton,
  CFormInput,
  CAlert,
  CFormLabel,
} from "@coreui/react";
import { addStudent } from "./Action";
import { getNextStudentId, saveNextStudentId } from "./LocalStorage";

function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();

  const clearMessages = () => {
    setTimeout(() => {
      setSuccess("");
    }, 2000);
  };

  const handleSubmit = () => {
    const newID = getNextStudentId();
    const studentData = {
      id: newID,
      name: name,
      age: age,
    };

    dispatch(addStudent(studentData));
    saveNextStudentId(newID);
    setSuccess("Add info Student Successful!");
    clearMessages();
    setName("");
    setAge("");
  };

  return (
    <CContainer>
      <CForm onSubmit={handleSubmit}>
        <h1 className="text-center text-white my-3">Add Student</h1>
        {success && <CAlert color="success">{success}</CAlert>}
        <div className="my-5">
          <div className="mb-3">
            <CFormLabel htmlFor="fname" className="text-white">
              Name
            </CFormLabel>
            <CFormInput
              type="text"
              id="fname"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <CFormLabel htmlFor="fage" className="text-white">
              Age
            </CFormLabel>
            <CFormInput
              type="number"
              id="fage"
              placeholder="Enter your age..."
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-center align-items-center mt-5 mx-2">
            <CButton
              type="submit"
              className="text-white py-2 px-5 fw-bold"
              style={{
                borderRadius: "8px",
                background: "#F4841F",
                outline: "none",
                border: "1px solid orange",
              }}
            >
              Submit
            </CButton>
          </div>
        </div>
      </CForm>
    </CContainer>
  );
}

export default AddStudent;
