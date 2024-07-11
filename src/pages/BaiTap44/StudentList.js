import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import PopupAddStudent from './PopupAddStudent';
import {
  CContainer, CTable, CTableBody,
  CTableDataCell, CTableHead,
  CTableHeaderCell, CTableRow,
  CImage, CButton, CFormInput
} from '@coreui/react';
import logo from "../../assets/images/logo.png";
import PopupEditStudent from './PopupEditStudent';

function StudentList() {
  const [isOpenPopupNew, setisOpenPopupNew] = useState(false);
  const [isOpenPopupEdit, setisOpenPopupEdit] = useState(false);
  const [dataStudent, setDataStudent] = useState([]);
  const [idEdit, setIdEdit] = useState('');
  const [searchData, setSearchData] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      setDataStudent(data);
      setSearchData(data);
    }
  }, []);

  const handleSearch = () => {
    const timer = setTimeout(() => {
        const searchValue = searchRef.current.value.toLowerCase();
        const filtered = dataStudent.filter(student => {
            const words = student.name.toLowerCase().split(' ');
            return words.includes(searchValue);
        });
        setSearchData(filtered);
        if(searchValue === 'all') {
            setSearchData(dataStudent);
        }
      }, 500);
      return () => clearTimeout(timer);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure about that?')) {
      const deleteStudent = dataStudent.filter(data => data.id !== id);
      localStorage.setItem('data', JSON.stringify(deleteStudent));
      setDataStudent(deleteStudent);
      setSearchData(deleteStudent);
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
      <div className='d-flex justify-content-center align-items-center'>
        <div className='row'>
          <div className='d-flex justify-content-center align-items-center'>
            <CImage src={logo} alt="logo" fluid style={{ width: "200px", height: "200px" }} />
          </div>
          <div className='d-flex'>
            <CFormInput
              type='text'
              id='fsearch'
              placeholder='What do you want to search?'
              ref={searchRef}
              required
            />
            <CButton
              type="submit"
              className='text-white py-2 px-5 fw-bold ml-5'
              style={{
                borderRadius: "8px",
                background: "#F4841F",
                outline: "none",
                border: "1px solid orange"
              }}
              onClick={handleSearch}
            >
              Search
            </CButton>
          </div>
        </div>
      </div>
      <CContainer className='p-5'>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope='col'>ID</CTableHeaderCell>
              <CTableHeaderCell scope='col'>Name</CTableHeaderCell>
              <CTableHeaderCell scope='col'>Age</CTableHeaderCell>
              <CTableHeaderCell scope='col'>Options</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {searchData.map((student, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{student.id}</CTableDataCell>
                <CTableDataCell>{student.name}</CTableDataCell>
                <CTableDataCell>{student.age}</CTableDataCell>
                <CTableDataCell>
                  <CButton
                    type="submit"
                    className='text-white py-2 px-5 fw-bold'
                    style={{
                      borderRadius: "8px",
                      background: "#F4841F",
                      outline: "none",
                      border: "1px solid orange"
                    }}
                    onClick={() => openPopupEdit(student.id)}
                  >
                    Edit
                  </CButton>
                  <CButton
                    type="submit"
                    className='text-white py-2 px-5 fw-bold ml-5'
                    style={{
                      borderRadius: "8px",
                      background: "#F4841F",
                      outline: "none",
                      border: "1px solid orange"
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
      <div className='d-flex justify-content-center align-items-center mt-4 mx-2'>
        <CButton
          type="submit"
          className='text-white py-2 px-5 fw-bold'
          style={{
            borderRadius: "8px",
            background: "#F4841F",
            outline: "none",
            border: "1px solid orange"
          }}
          onClick={openPopupNew}
        >
          New
        </CButton>
      </div>
      <PopupAddStudent isOpen={isOpenPopupNew} onClose={closePopupNew} />
      <PopupEditStudent isOpen={isOpenPopupEdit} onClose={closePopupEdit} idStudent={idEdit} />
    </CContainer>
  );
}

export default StudentList;