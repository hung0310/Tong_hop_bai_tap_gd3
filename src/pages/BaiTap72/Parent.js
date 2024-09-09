import React, { useState, useCallback } from 'react';
import Child from './Child';

function Parent() {
    const [users, setUsers] = useState([]);

    // const getData = (type) => {
    //     return fetch(`https://reqres.in/api/${type}`);
    // }
    /*
     * const a =10
    */

    const getData = useCallback((type) => {
        return fetch(`https://reqres.in/api/${type}`);
    }, []);

    const handleClick = () => {
        getData('users')
            .then((res) => res.json())
            .then((res) => {
                const users = res.data;
                setUsers(users);
        });
    }
    return (
        <div>
            <p>Data:</p>
            <button onClick={handleClick}>Get Users Data</button>
            <p>{JSON.stringify(users)}</p>
            <Child getData={getData} />
        </div>
    );
}

export default Parent;