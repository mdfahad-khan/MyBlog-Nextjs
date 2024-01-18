import Image from "next/image";
import Link from "next/link";
import styles from "./categoryList.module.css";

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Category</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category1} ${styles.style}`}>
          <Image
            src="/style.png"
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
        <Link href="/blog" className={`${styles.category1} ${styles.fashion}`}>
          <Image
            src="/fashion.png"
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
        <Link href="/blog" className={`${styles.category1} ${styles.food}`}>
          <Image
            src="/food.png"
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          Food
        </Link>
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
          Culture
        </Link>
      </div>
    </div>
  );
};
export default CategoryList;
