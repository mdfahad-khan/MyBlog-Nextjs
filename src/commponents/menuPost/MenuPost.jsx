import Image from "next/image";
import Link from "next/link";
import styles from "./menuPost.module.css";

const MenuPost = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.posttitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Fahad khan -</span>
            <span className={styles.date}>10.02.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Travel</span>
          <h3 className={styles.posttitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Fahad khan -</span>
            <span className={styles.date}>10.02.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Travel</span>
          <h3 className={styles.posttitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Fahad khan -</span>
            <span className={styles.date}>10.02.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>Travel</span>
          <h3 className={styles.posttitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Fahad khan -</span>
            <span className={styles.date}>10.02.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default MenuPost;
