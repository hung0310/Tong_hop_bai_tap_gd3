import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TieredMenu } from 'primereact/tieredmenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import '../assets/css/style.css';

const TieredMenuComponent = ({ groupedData }) => {
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
        <div>
            <div 
                className="p-2 w-auto d-flex"
                style={{
                    backgroundColor: '#F6891F',
                    height: '45px'
                }}
            >
                <div style={{ width: '300px' }} className="mx-5">
                    <Link 
                        className="d-flex text-decoration-none text-black"
                        onMouseEnter={handleMouseEnter}
                    >
                        <span className="ml-5 fw-bold text-white" style={{fontSize: "20px"}}>KHÓA HỌC MENTER</span>
                        <FontAwesomeIcon icon={faBars} className="mt-2 ml-4 text-white"/>
                    </Link>
                </div>

                <div className="d-flex ml-auto mr-5">
                    <Link 
                        className="text-decoration-none font-blod text-white end-0"
                    >
                        <span className="ml-5 fw-bold text-white" style={{fontSize: "20px"}}>BLOG</span>
                    </Link>

                    <Link 
                        className="text-decoration-none font-blod text-white end-0"
                    >
                        <span className="ml-5 fw-bold text-white" style={{fontSize: "20px"}}>HIRE ME</span>
                    </Link>
                </div>
            </div>     
            <div className="div-wrapper">
                {hoverMenu && (
                    <TieredMenu 
                        model={menuModel}
                        style={{ 
                            backgroundColor: "#A00B93",
                            width: '45%',
                            zIndex: "1000"
                        }}
                        className="text-white position-absolute"
                        onMouseLeave={handleMouseLeave}
                    />
                )}                
            </div>    
        </div>

    );
};

export default TieredMenuComponent;