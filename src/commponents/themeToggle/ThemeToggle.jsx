"use client";
import { ThemeContext } from "@/contex/ThemeContext";
import Image from "next/image";
import { useContext } from "react";
import styles from "./themeToggle.module.css";

export const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="moon" width={14} height={14} />
    </div>
  );
};
export default ThemeToggle;
