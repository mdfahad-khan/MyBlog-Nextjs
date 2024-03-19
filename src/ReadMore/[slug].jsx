import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ReadMoreData from "../../../public/Details/details.json";

const ReadMore = () => {
  const router = useRouter();
  const { id } = router.query; // Fetch the id from the router query parameters
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Find the post data from ReadMoreData based on the id
    console.log("ID from router:", id); 
    const foundPost = ReadMoreData.posts.find(post => post.id === parseInt(id));
    console.log(foundPost)
    console.log("fahad")
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-md">
        <h1>{post.description}</h1>
        <div>
          {post.images.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
