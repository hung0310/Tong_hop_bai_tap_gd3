import React, { useState, useEffect, useCallback } from "react";
import debounce from 'lodash/debounce';
import { useSelector, useDispatch } from 'react-redux';
import { Image } from "primereact/image";
import { GetData_Course_Category, GetData_Without_Token, GetData_Not_auth_API, GetData_ViewMost, GetData_Blog } from "../../Apis/StudentAPI";
import TieredMenu from "./components/TieredMenu"; 
import DropDown from "./components/DropDown"; 
import Search from "./components/Search"; 
import ContentPost from "./components/ContentPost";
import { useReactPaginate } from '../../hooks/useReactPaginate';
import { setQuery, setID } from './actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from "@fortawesome/free-solid-svg-icons";
import { DataCategories_TieredMenu, DataCategories_DropDown, DataCategories_Content, DataCategories_ViewMost, DataCategories_Search, GroupedData_TiredMenu, GroupedData_DropDown } from "./utils/DataProcessing"; 
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
        console.error("Error fetching view most data:", err);
      }
    };
    fetchData();
  }, []);

  return dataCourse_ViewMost;
};

const useSearch = ({ contentSearch, setNotFound }) => {
  const [dataCourse_Search, setDataCourse_Search] = useState([]);

  const debouncedSearch = useCallback(
    debounce(async () => {
      try {
        const result = await GetData_Blog(contentSearch);
        setDataCourse_Search(result.data || []);
        setNotFound(result.data.length === 0);
      } catch (error) {
        console.error(error);
        setNotFound(true);
      }
    }, 300),
    [contentSearch, setNotFound]
  );

  useEffect(() => {
    debouncedSearch();
  }, [debouncedSearch]);

  return dataCourse_Search;
};

const LayoutCategory = () => {
  const dispatch = useDispatch();
  const [isClose, setIsClose] = useState(true);
  const [totalPage, setTotalPage] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const { currentPage, PaginationComponent } = useReactPaginate(totalPage);
  const [notFound, setNotFound] = useState(false);
  const contentSearch = useSelector((state) => state.search.query);
  const id_blog = useSelector((state) => state.id_blog.id);

  const dataCourse_TiredMenu = useCourse_TieredMenu();
  const dataCourse_DropDown = useCourse_DropDown();
  const dataCourse_Content = useCourse_Content(setTotalPage, setPageSize, currentPage);
  const dataCourse_ViewMost = useCourse_ViewMost();
  const dataCoure_Search = useSearch({ contentSearch, setNotFound });

  const _dataCategories_TieredMenu = DataCategories_TieredMenu(dataCourse_TiredMenu);
  const _groupedData_TieredMenu = GroupedData_TiredMenu(_dataCategories_TieredMenu);
  
  const _dataCategories_DropDown = DataCategories_DropDown(dataCourse_DropDown);
  const _groupedData_DropDown = GroupedData_DropDown(_dataCategories_DropDown);

  const _dataCategories_Content = DataCategories_Content(dataCourse_Content);
  const _dataCategories_ViewMost = DataCategories_ViewMost(dataCourse_ViewMost);
  const _dataCategories_Search = DataCategories_Search(dataCoure_Search);

  // const handleClaps = async (id_blog) => {
  //   try {
  //     await Patch_Increase_Claps(id_blog);
  //     dispatch(setID(''));
  //   } catch (err) {
  //     console.error("Error increasing claps:", err);
  //   }
  // };

  // useEffect(() => {
  //   if (id_blog) {
  //     handleClaps(id_blog);
  //   }
  // }, [id_blog]);

  const CloseResultSearch = () => {
    setIsClose(false);
    dispatch(setQuery(''));
    setIsClose(true);
  };

  return (
    <div className="">
      <div className="d-flex justify-content-center align-items-center mb-3">
        <Image src={logo} alt="logo" preview />
      </div>

      <TieredMenu groupedData={_groupedData_TieredMenu} />
      <DropDown groupedData={_groupedData_DropDown} />

      <div className="grid my-3 mx-5">
        <div className="col-8">
          {contentSearch.trim() === '' ? (
            <div>
              <ContentPost groupedData={_dataCategories_Content} />
              <div className='mt-5'>
                <PaginationComponent />
              </div>
            </div>
          ) : notFound ? (
            <div>
              {isClose ? (
                <div>
                  <div className="w-full d-flex mb-3 pl-5 pr-2" style={{ backgroundColor: '#F2F2F2' }}>
                    <h6 className='fw-normal mt-2'>Search result: </h6>
                    <h6 className='ml-5 mt-2'>{contentSearch}</h6>
                    <button
                      className="px-2 my-1 ml-auto shadow-sm"
                      style={{ border: 'none', backgroundColor: 'white' }}
                      onClick={() => CloseResultSearch()}
                    >
                      <FontAwesomeIcon icon={faX} />
                    </button>
                  </div>
                  <div className='d-flex justify-content-center align-items-center'>
                    <h3 className='mt-5'>Not found anything!</h3>
                  </div>
                </div>
              ) : (
                <div>
                  <ContentPost groupedData={_dataCategories_Search} />
                </div>
              )}
            </div>
          ) : (
            <div>
              {isClose ? (
                <div>
                  <div className="w-full d-flex mb-3 pl-5 pr-2" style={{ backgroundColor: '#F2F2F2' }}>
                    <h6 className='fw-normal mt-2'>Search result: </h6>
                    <h6 className='ml-5 mt-2'>{contentSearch}</h6>
                    <button
                      className="px-2 my-1 ml-auto shadow-sm"
                      style={{ border: 'none', backgroundColor: 'white' }}
                      onClick={() => CloseResultSearch()}
                    >
                      <FontAwesomeIcon icon={faX} />
                    </button>
                  </div>
                  <ContentPost groupedData={_dataCategories_Search} />
                </div>
              ) : (
                <div>
                  <ContentPost groupedData={_dataCategories_Search} />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="col-4">
          <Search />
          <div className="pl-3 mt-2">
            <div>
              <span className="fw-bold" style={{ fontSize: '24px' }}>Đọc nhiều nhất</span>
              <div className="bg-black mb-3" style={{ height: '1px', width: '172px' }}></div>
              <div className='mr-3'>
                <ContentPostViewMost groupedData={_dataCategories_ViewMost} />
              </div>
            </div>

            <div>
              <span className="fw-bold" style={{ fontSize: '24px' }}>Gần đây nhất</span>
              <div className="bg-black" style={{ height: '2px', width: '150px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutCategory;