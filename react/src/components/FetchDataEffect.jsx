import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
    const[ posts, setPosts] = useState([]);

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
    }

    useEffect(() => {
        fetchData();
    },[])

  return (
    <div>
        <h1>Post </h1>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.body}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default FetchDataEffect
