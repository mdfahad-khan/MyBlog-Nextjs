import React from "react";
import styles from "./Pagination.module.css";

export const Pagination = () => {
  return <div className={styles.container}>
    <button className={styles.button}>Previous</button>
    <button className={styles.button}>Next</button>
  </div>;
};
export default Pagination;
