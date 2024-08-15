import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "primereact/image";
import logo from "../../assets/images/logo.png";
import { TieredMenu } from 'primereact/tieredmenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { GetData_Course_Category } from "../../Apis/StudentAPI";


const SupportForm = () => {

    const [data, setData] = useState([]);
    const [hoverMenu, setHoverMenu] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const rsp = await GetData_Course_Category();
                setData(rsp.data);
            } catch (error) {
                console.error("Error fetching data:", error);
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
        label: category,
        items: groupedData[category].map(course => ({
            label: course
        }))
    }));

    const handleMouseEnter = () => {
        setHoverMenu(true);
    };

    const handleMouseLeave = () => {
        setHoverMenu(hoverMenu);
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
                    onMouseLeave={handleMouseLeave}
                >
                    <span className="ml-5 fw-bold" style={{fontSize: "20px"}}>KHÓA HỌC MENTER</span>
                    <FontAwesomeIcon icon={faBars} className="mt-2 ml-4"/>
                </Link>
            </div>

            {hoverMenu && (
                <TieredMenu 
                    model={menuModel}
                    className="no-underline"
                    style={{ width: '50%', textDecoration: 'none' }}
                />
            )}
        </div>
    );
};

export default SupportForm;