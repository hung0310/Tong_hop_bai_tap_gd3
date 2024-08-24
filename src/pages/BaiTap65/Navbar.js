import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "primereact/image";
import logo from "../../assets/images/logo.png";
import { TieredMenu } from 'primereact/tieredmenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { GetData_Course_Category } from "../../Apis/StudentAPI";
import './style.css';

const Navbar = () => {
    const [data, setData] = useState([]);
    const [hoverMenu, setHoverMenu] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (hoverMenu) {
                const submenus = document.querySelectorAll('.p-submenu-list');
                submenus.forEach((submenu, index) => {
                    submenu.style.setProperty('top', `-${index * 100}%`, 'important');
                });
            }
        }, 0);
        return () => clearInterval(intervalId);
    }, [hoverMenu]);   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const rsp = await GetData_Course_Category();
                setData(rsp.data);
            } catch (error) {
                throw error;
            }
        };
        fetchData();
    }, []);

    const dataCategories = data.flatMap(item => 
        item.course_category_level1_w_course_category_level2.map(subItem => ({
            titleCategory: subItem.course_category_level1.name,
            contentTile: subItem.name
        }))
    );

    const groupedData = dataCategories.reduce((acc, item) => {
        if (!acc[item.titleCategory]) {
            acc[item.titleCategory] = [];
        }
        acc[item.titleCategory].push(item.contentTile);
        return acc;
    }, {});

    const menuModel = Object.keys(groupedData).map(category => ({
        label: (
            <span className="fw-bold text-white">
                {category}
            </span>
        ),
        items: [
            {
                label: (
                    <span className="fw-bold text_category" style={{ fontSize: '20px' }}>
                        {category}
                    </span>
                )
            },
            ...groupedData[category].map(course => ({
                label: (
                    <div className="d-flex py-0">
                        <div 
                            className="rounded-circle mx-2"
                            style={{
                                backgroundColor: '#A00B93',
                                padding: '2px'
                            }}
                        >
                            <FontAwesomeIcon icon={faArrowRight} style={{ color: 'white' }} /> 
                        </div>
                          
                        <span>
                            {course}
                        </span>       
                        <span className="fw-bold mx-3 text_free">*FREE*</span>                  
                    </div>
                )
            }))
        ]
    }));
        
    const handleMouseEnter = () => {
        setHoverMenu(true);
    };

    const handleMouseLeave = () => {
        setHoverMenu(false);
    };

    return (
        <div className="p-4">
            <div className="d-flex justify-content-center align-items-center mb-3">
                <Image src={logo} alt="logo" preview />
            </div>

            <div className="w-vh mx-5">
                <Link 
                    className="d-flex text-decoration-none text-black"
                    onMouseEnter={handleMouseEnter}
                >
                    <span className="ml-5 fw-bold" style={{fontSize: "20px"}}>KHÓA HỌC MENTER</span>
                    <FontAwesomeIcon icon={faBars} className="mt-2 ml-4"/>
                </Link>
            </div>
            <div className="div-wrapper">
                {hoverMenu && (
                    <TieredMenu 
                        model={menuModel}
                        style={{ 
                            width: '50%',
                            backgroundColor: "#A00B93",
                        }}
                        className="text-white"
                        onMouseLeave={handleMouseLeave}
                    />
                )}                
            </div>
        </div>
    );
};

export default Navbar;