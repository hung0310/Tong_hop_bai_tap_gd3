import React from 'react';
import { Link } from "react-router-dom";

import '../assets/css/styleContent.css';

const ContentPostViewMost = ({ groupedData }) => {
  return (
    <>
        {groupedData.map((item, index) => {
            if (index === 0) {
                return (
                    <div className='pb-3 mb-2 hover_content_post' style={{ backgroundColor: '#F7F7F7'}} key={index}>
                        <Link className='mb-2'>
                            <img src={item.imageTitle} style={{ width: '100%', height: 'auto' }} />
                        </Link>
                        <Link className='text-black' style={{textDecoration: 'none'}}>
                            <div className='px-3'>
                                <span className='' 
                                    style={{ 
                                        fontSize: '17px', 
                                        lineHeight: '30px', 
                                        fontWeight: '15',
                                        whiteSpace: 'normal',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 3,
                                        margin: 0
                                    }}
                                >
                                    {item.title}
                                </span>                
                            </div>
                        </Link>
                    </div>
                );
            } else {
                return (
                    <div className='pt-5 d-flex px-2 shadow-sm mb-2 hover_content_post' key={index}>
                        <Link className='mr-3'>
                            <img src={item.imageTitle} style={{ width: '168px', height: '64px' }} />
                        </Link> 
                        <Link className='text-black' style={{textDecoration: 'none'}}>
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
                                    WebkitLineClamp: 2,
                                    margin: 0
                                }}
                            >
                                {item.title}
                            </p>
                        </Link>
                    </div>
                );
            }
        })}
    </>
  );
};

export default ContentPostViewMost;