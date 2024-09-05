import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownComponent = ({ groupedData }) => {

    return (
        <div className="px-5">
            <div 
                className="d-flex justify-content-center align-items-center p-2" 
                style={{ whiteSpace: 'nowrap', backgroundColor: "#E4E4E6" }}
            >
                <FontAwesomeIcon icon={faNewspaper} />
                <Link to="/" className="mx-2 text-decoration-none text-black">
                    Tất cả
                </Link>  

                {Object.keys(groupedData).map(category => (
                    <div className="d-flex align-items-center" key={category}>
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
                            <Dropdown.Menu>
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

export default DropdownComponent;