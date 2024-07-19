import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosReact = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://qt.levanlau.net/api/blog/blog_category_level_1_get_all_not_auth_api')
      .then(res => {
        setData(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <ul>
      {data.map((d, index) => <li key={index}>{d.name}</li>)}
    </ul>
  );
}

export default AxiosReact;