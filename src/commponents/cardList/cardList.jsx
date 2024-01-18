import Image from "next/image";
import Pagination from "../Pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../card/Card";

export const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Recent Post</h1>
      <div className={styles.posts}>
        <div className={styles.post}></div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};
export default CardList;
