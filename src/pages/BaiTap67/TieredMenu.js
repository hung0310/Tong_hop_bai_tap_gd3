import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "primereact/image";
import logo from "../../assets/images/logo.png";
import { TieredMenu } from 'primereact/tieredmenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { GetData_Course_Category } from "../../Apis/StudentAPI";


const Navbar = () => {

    const [data, setData] = useState([]);
    const [hoverMenu, setHoverMenu] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const rsp = await GetData_Course_Category();
                setData(rsp.data);
                console.log(data);
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
        <div className="p-4">
            <div className="d-flex justify-content-center align-items-center mb-3">
                <Image src={logo} alt="logo" preview />
            </div>

            <div className="w-vh">
                <Link 
                    className="d-flex text-decoration-none text-black"
                    onMouseEnter={handleMouseEnter}
                >
                    <span className="ml-5 fw-bold" style={{fontSize: "20px"}}>KHÓA HỌC MENTER</span>
                    <FontAwesomeIcon icon={faBars} className="mt-2 ml-4"/>
                </Link>
            </div>

            {hoverMenu && (
                <TieredMenu 
                    model={menuModel}
                    style={{ width: '50%' }}
                    onMouseLeave={handleMouseLeave}
                />
            )}

            {/* {true && (
                <div>
                    {Object.keys(groupedData).map(category => (
                        <div key={category}>
                            <h2>{category}:</h2>
                            <ul>
                                {groupedData[category].map((course, index) => (
                                    <li key={index}>{course}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )} */}
        </div>
    );
};

export default Navbar;