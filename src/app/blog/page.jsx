import React from "react";
import style from "./blogPage.module.css";
import CardList from "@/commponents/cardList/cardList";
import Menu from "@/commponents/Menu/Menu";

const BlogPage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}> Style Blog</h1>
      <div className={style.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};
export default BlogPage;
