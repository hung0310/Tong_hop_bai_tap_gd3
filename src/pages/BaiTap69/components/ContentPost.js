import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping, faEye } from "@fortawesome/free-solid-svg-icons";

import '../assets/css/styleContent.css';

const ContentPost = ({ groupedData }) => {
  return (
    <>
      {groupedData.map((item, index) => {
        if (index === 0) {
          return (
            <div className='d-flex hover_content_post' style={{ backgroundColor: '#F7F7F7' }} key={index}>
              <Link className='mr-5'>
                <img src={item.imageTitle} alt={item.title} style={{ width: '489px', height: '188px' }} />
              </Link>
              <div className=''>
                <Link className='' style={{ textDecoration: 'none' }}>
                  <span className='fw-bold mr-1' style={{ color: '#FF0000', fontSize: '20px' }}>***</span>
                  <span className='' style={{ color: '#800080', fontSize: '20px' }}>{item.title}</span>
                </Link>

                <p className='mt-2' style={{ fontSize: '20px', lineHeight: '28px', fontWeight: '10' }}>
                  {item.subTitle}
                </p>
              </div>
            </div>
          );
        } else {
          return (
            <div className='py-5 my-3 px-2 shadow-sm hover_content_post' style={{ fontSize: '16px' }} key={index}>
              <Link className='' style={{ textDecoration: 'none' }}>
                <span className='fw-bold' style={{ color: '#800080', fontSize: '18px' }}>{item.title}</span>
              </Link>

              <div style={{ display: 'flex', flexDirection: 'column', height: '127px' }}>
                <div className='d-flex mt-2'>
                  <Link className='mr-5'>
                    <img src={item.imageTitle} alt={item.title} style={{ width: '329px', height: '127px' }} />
                  </Link>
                  <div className='pr-3' style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <p
                      style={{
                        fontSize: '17px',
                        lineHeight: '26px',
                        fontWeight: '10',
                        whiteSpace: 'normal',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                        margin: 0
                      }}
                    >
                      {item.subTitle}
                    </p>
                    <div className='d-flex' style={{ marginTop: 'auto' }}>
                      <Button className='fw-bold' style={{ backgroundColor: '#F6891F', border: 'none' }}>
                        Đọc thêm...
                      </Button>

                      <div className='ml-auto' style={{ marginTop: 'auto' }}>
                        <Link>
                          <FontAwesomeIcon icon={faHandsClapping} style={{ fontSize: '26px', color: '#9299A7' }} />
                        </Link> <span style={{ fontSize: '18px' }}>{item.claps}</span>

                        <Link className='ml-3'>
                          <FontAwesomeIcon icon={faEye} style={{ fontSize: '26px', color: '#9299A7' }} />
                        </Link> <span style={{ fontSize: '18px' }}>{item.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default ContentPost;