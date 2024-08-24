import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TieredMenu } from 'primereact/tieredmenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const TieredMenuComponent = ({ groupedData }) => {
    const [hoverMenu, setHoverMenu] = useState(false);

    const menuModel = Object.keys(groupedData).map(category => ({
        label: 
            <span className="fw-bold">
                {category}
            </span>,
        items: groupedData[category].map(course => ({
            label: (
                <span>
                    {course}
                </span>
            )
        }))
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
                <div style={{ width: '300px' }}>
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
            <div>
                {hoverMenu && (
                    <TieredMenu 
                        model={menuModel}
                        style={{ width: '45%', zIndex: "1000" }}
                        onMouseLeave={handleMouseLeave}
                        className="position-absolute"
                    />
                )}   
            </div>      
        </div>

    );
};

export default TieredMenuComponent;