import Image from "next/image";
import Link from "next/link";
import styles from "./categoryList.module.css";

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Hobbies</h1>
      <div className={styles.categories}>
        
        <Link href="/blog" className={`${styles.category1} ${styles.travel}`}>
          <Image
            src="/travel.png"
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>
        <Link href="/blog" className={`${styles.category1} ${styles.coding}`}>
          <Image
            src="/coding.png"
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
        <Link href="/blog" className={`${styles.category1} ${styles.culture}`}>
          <Image
            src="/culture.png"
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          Hangout
        </Link>
      </div>
    </div>
  );
};
export default CategoryList;
