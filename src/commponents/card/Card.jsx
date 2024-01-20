import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/kuakata.jpg" alt="p1" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023 -</span>
          <span className={styles.category}>Travel</span>
        </div>
        <Link href="/">
          <h1>Shorty visit at Kuakata</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
          similique. Quibusdam blanditiis saepe id minima nam quis consequuntur
          architecto voluptatibus.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};
export default Card;
