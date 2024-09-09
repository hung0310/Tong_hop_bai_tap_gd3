import React, { useState, useEffect } from 'react';

function Child({ getData }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getData('comments')
            .then((res) => res.json())
            .then((res) => {
                const comments = res.data;
                setComments(comments);
            })
    }, [getData])

    return (
        <div>
            <p>Child Component</p>
            <p>{JSON.stringify(comments)}</p>
        </div>
    );
}

export default Child;