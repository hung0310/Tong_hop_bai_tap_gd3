import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import PopupAddStudent from "./PopupAddStudent";
import {
  CContainer,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CButton,
  CTableHeaderCell,
  CTableRow,
  CImage,
} from "@coreui/react";

import logo from "../../assets/images/logo.png";
import PopupEditStudent from "./PopupEditStudent";
import { deleteStudent, setStudents } from "./Action";
import { getStudents } from "./LocalStorage";

function StudentList() {
  const [isOpenPopupNew, setisOpenPopupNew] = useState(false);
  const [isOpenPopupEdit, setisOpenPopupEdit] = useState(false);
  const [idEdit, setIdEdit] = useState("");

  const dispatch = useDispatch();
  const dataStudent = useSelector((state) => state.students);

  useEffect(() => {
    const students = getStudents();
    dispatch(setStudents(students));
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure about that :> ?")) {
      dispatch(deleteStudent(id));
    }
  };

  const openPopupEdit = (id) => {
    setIdEdit(id);
    setisOpenPopupEdit(true);
  };

  const closePopupEdit = () => {
    setisOpenPopupEdit(false);
  };

  const openPopupNew = () => {
    setisOpenPopupNew(true);
  };

  const closePopupNew = () => {
    setisOpenPopupNew(false);
  };

  return (
    <CContainer fluid>
      <Helmet>
        <title>Student</title>
      </Helmet>
      <div className="d-flex justify-content-center align-items-center">
        <CImage src={logo} alt="logo" fluid />
      </div>

      <CContainer className="p-5">
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">ID</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Age</CTableHeaderCell>
              <CTableHeaderCell scope="col">Options</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {dataStudent.map((student, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{student.id}</CTableDataCell>
                <CTableDataCell>{student.name}</CTableDataCell>
                <CTableDataCell>{student.age}</CTableDataCell>
                <CTableDataCell>
                  <CButton
                    type="submit"
                    className="text-white py-2 px-5 fw-bold"
                    style={{
                      borderRadius: "8px",
                      background: "#F4841F",
                      outline: "none",
                      border: "1px solid orange",
                    }}
                    onClick={() => openPopupEdit(student.id)}
                  >
                    Edit
                  </CButton>
                  <CButton
                    type="submit"
                    className="text-white py-2 px-5 fw-bold ml-5"
                    style={{
                      borderRadius: "8px",
                      background: "#F4841F",
                      outline: "none",
                      border: "1px solid orange",
                    }}
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CContainer>

      <div className="d-flex justify-content-center align-items-center mt-4 mx-2">
        <CButton
          type="submit"
          className="text-white py-2 px-5 fw-bold"
          style={{
            borderRadius: "8px",
            background: "#F4841F",
            outline: "none",
            border: "1px solid orange",
          }}
          onClick={openPopupNew}
        >
          New
        </CButton>
      </div>
      <PopupAddStudent
        isOpen={isOpenPopupNew}
        onClose={closePopupNew}
      ></PopupAddStudent>
      <PopupEditStudent
        isOpen={isOpenPopupEdit}
        onClose={closePopupEdit}
        idStudent={idEdit}
      ></PopupEditStudent>
    </CContainer>
  );
}

export default StudentList;
