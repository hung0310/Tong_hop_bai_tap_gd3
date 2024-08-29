import React, { useState, useEffect } from "react";
import { Image } from "primereact/image";
import { GetData_Course_Category, GetData_Without_Token, GetData_Not_auth_API, GetData_ViewMost } from "../../Apis/StudentAPI";
import TieredMenu from "./components/TieredMenu"; 
import DropDown from "./components/DropDown"; 
import Search from "./components/Search"; 
import ContentPost from "./components/ContentPost";
import { useReactPaginate } from '../../hooks/useReactPaginate';

import { 
  DataCategories_TieredMenu, DataCategories_DropDown, DataCategories_Content, DataCategories_ViewMost,
  GroupedData_TiredMenu, GroupedData_DropDown
} from "./utils/DataProcessing"; 

import logo from "../../assets/images/logo.png";
import ContentPostViewMost from "./components/ContentPostViewMost";

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

const useCourse_Content = (setTotalPage, setPageSize, currentPage) => {
  const [dataCourse_Content, setDataCourse_Content] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetData_Not_auth_API(currentPage);
        setDataCourse_Content(result.data || []);
        
        const total = Math.ceil(result.totalRows / result.page_size);
        setPageSize(result.page_size);
        setTotalPage(total);
      } catch (err) {
        console.error("Error fetching content data:", err);
      }
    };
    if (currentPage > 0) {
      fetchData();
    }
  }, [currentPage, setPageSize, setTotalPage]);

  return dataCourse_Content;
};

const useCourse_ViewMost = () => {
  const [dataCourse_ViewMost, setDataCourse_ViewMost] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetData_ViewMost();
        setDataCourse_ViewMost(result.data || []);
      } catch (err) {
        throw Error(err);
      }
    };
    fetchData();
  }, []);

  return dataCourse_ViewMost;
};

const LayoutCategory = () => {
  const [totalPage, setTotalPage] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const { currentPage, PaginationComponent } = useReactPaginate(totalPage);

  const dataCourse_TiredMenu = useCourse_TieredMenu();
  const dataCourse_DropDown = useCourse_DropDown();
  const dataCourse_Content = useCourse_Content(setTotalPage, setPageSize, currentPage);
  const dataCourse_ViewMost = useCourse_ViewMost();

  const _dataCategories_TieredMenu = DataCategories_TieredMenu(dataCourse_TiredMenu);
  const _groupedData_TieredMenu = GroupedData_TiredMenu(_dataCategories_TieredMenu);
  
  const _dataCategories_DropDown = DataCategories_DropDown(dataCourse_DropDown);
  const _groupedData_DropDown = GroupedData_DropDown(_dataCategories_DropDown);

  const _dataCategories_Content = DataCategories_Content(dataCourse_Content);
  const _dataCategories_ViewMost = DataCategories_ViewMost(dataCourse_ViewMost);

  return (
    <div className="">
      <div className="d-flex justify-content-center align-items-center mb-3">
        <Image src={logo} alt="logo" preview />
      </div> 

      <TieredMenu groupedData={_groupedData_TieredMenu} />  
      <DropDown groupedData={_groupedData_DropDown} />

      <div className="grid my-3 mx-5"> 
        <div className="col-8">
          <ContentPost groupedData={_dataCategories_Content} />
          <div className='mt-5' >
            <PaginationComponent/>
          </div>
        </div>

        <div className="col-4">
          <Search />
          <div className="pl-3 mt-2">
            <div>
              <span className="fw-bold" style={{fontSize: '24px'}}>Đọc nhiều nhất</span>
              <div className="bg-black mb-3" style={{height: '1px', width: '172px'}}></div>  
              <div className='mr-3'>
                <ContentPostViewMost groupedData={_dataCategories_ViewMost}/>  
              </div>          
            </div>

            <div>
              <span className="fw-bold" style={{fontSize: '24px'}}>Gần đây nhất</span>
              <div className="bg-black" style={{height: '2px', width: '150px'}}></div>              
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LayoutCategory;