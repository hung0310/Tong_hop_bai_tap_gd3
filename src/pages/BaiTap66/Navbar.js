import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "primereact/image";
import logo from "../../assets/images/logo.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { GetData_Without_Token } from "../../Apis/StudentAPI";
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const rsp = await GetData_Without_Token();
                setData(rsp);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const dataCategories = data.flatMap(item => 
        item.blog_category_level1_w_blog_category_level2.map(subItem => ({
            titleCategory: subItem.blog_category_level1.name,
            contentTitle: subItem.name
        }))
    );

    const groupedData = dataCategories.reduce((acc, item) => {
        if (!acc[item.titleCategory]) {
            acc[item.titleCategory] = [];
        }
        acc[item.titleCategory].push({ label: item.contentTitle, value: item.contentTitle });
        return acc;
    }, {});

    return (
        <div className="p-4">
            <div className="d-flex justify-content-center align-items-center mb-3">
                <Image src={logo} alt="logo" preview />
            </div>

            <div 
                className="d-flex justify-content-center align-items-center p-2"
                style={{backgroundColor: "#E4E4E6"}}
            >
                <FontAwesomeIcon icon={faNewspaper}/>
                <Link to="/" className="mx-2 text-decoration-none text-black">
                    Tất cả
                </Link>
                {Object.keys(groupedData).map(category => (
                    <div className="d-flex justify-content-center align-items-center">
                        /
                        <Dropdown className="mx-2">
                            <Dropdown.Toggle 
                                style={{
                                    backgroundColor: "#9299A7",
                                    border: "none"
                                }}
                            >
                                {category}
                            </Dropdown.Toggle>
                            <Dropdown.Menu
                                className="mx-2"
                            >
                                {groupedData[category].map((course, index) => (
                                    <Dropdown.Item key={index} href="#">
                                        {course.label}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Navbar;