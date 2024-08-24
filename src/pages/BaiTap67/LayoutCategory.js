import React, { useState, useEffect } from "react";
import { Image } from "primereact/image";
import logo from "../../assets/images/logo.png";
import { GetData_Course_Category, GetData_Without_Token } from "../../Apis/StudentAPI";
import { DataCategories_TieredMenu, DataCategories_DropDown, GroupedData_TiredMenu, GroupedData_DropDown } from "./utils/DataProcessing"; 
import TieredMenu from "./components/TieredMenu"; 
import DropDown from "./components/DropDown"; 
import Search from "./components/Search"; 

const useCourse_TieredMenu = () => {
  const [dataCourse_TiredMenu, setDataCourse_TiredMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rsp = await GetData_Course_Category();
        setDataCourse_TiredMenu(rsp.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return dataCourse_TiredMenu;
};

const useCourse_DropDown = () => {
  const [dataCourse_DropDown, setDataCourse_DropDown] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const rsp = await GetData_Without_Token();
            setDataCourse_DropDown(rsp);
        } catch (error) {
            console.error(error);
        }
    };
    fetchData();
  }, []);

  return dataCourse_DropDown;
};

const LayoutCategory = () => {
  const dataCourse_TiredMenu = useCourse_TieredMenu();
  const dataCourse_DropDown = useCourse_DropDown();

  const _dataCategories_TieredMenu = DataCategories_TieredMenu(dataCourse_TiredMenu);
  const _groupedData_TieredMenu = GroupedData_TiredMenu(_dataCategories_TieredMenu);
  
  const _dataCategories_DropDown = DataCategories_DropDown(dataCourse_DropDown);
  const _groupedData_DropDown = GroupedData_DropDown(_dataCategories_DropDown);

  return (
    <div className="">
      <div className="d-flex justify-content-center align-items-center mb-3">
        <Image src={logo} alt="logo" preview />
      </div> 

      <TieredMenu groupedData={_groupedData_TieredMenu} />  
      <DropDown groupedData={_groupedData_DropDown} />

      <div className="grid my-3 mx-5">
        <div className="col-8">

        </div>

        <div className="col-4">
          <Search />
        </div>
      </div>

    </div>
  );
};

export default LayoutCategory;