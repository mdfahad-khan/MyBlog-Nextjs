import Image from "next/image";
import styles from "./Featured.module.css";

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h6 className={styles.title}>
        <b className={styles.name}>Hey, my name is fahad</b>Travel whenever you can.Life is too short to think twice.
      </h6>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/haour1.jpg" alt="picture" fill className={styles} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
          Shorty visit at Targor Haor with my friends.{" "}
          </h1>
          <p className={styles.postDesc}>
          Tanguar haor, located in the Dharmapasha and Tahirpur upazilas of Sunamganj District in Bangladesh, is a unique wetland ecosystem of national importance and has come into international focus. The area of Tanguar haor including 46 villages within the haor is about 100 square kilometres of which 2,802.36 ha² is wetland.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};
export default Featured;
