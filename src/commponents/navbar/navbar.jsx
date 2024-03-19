import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
         <Image src="/logo1.png" alt="logo" width={50} height={40} />
       
        <h2 className={styles.blogTitle}>Fahadblog</h2>
      </div>
      
      <div className={styles.links}>
        {/* <ThemeToggle /> */}
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        {/* <AuthLinks /> */}
      </div>
    </div>
  );
};
export default Navbar;
