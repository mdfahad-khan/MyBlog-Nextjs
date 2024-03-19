// pages/posts/[id].js
import React from "react";
import { useRouter } from "next/router";
import PostDetail from "../PostDetail";

const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <PostDetail postId={id} />;
};

export default PostDetailPage;
