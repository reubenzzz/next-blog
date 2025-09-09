import { useEffect, useState } from 'react';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://68bf7e239c70953d96efaba1.mockapi.io/:posts')
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <img src={post.image} alt={post.title} style={{width: '300px'}} />
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
