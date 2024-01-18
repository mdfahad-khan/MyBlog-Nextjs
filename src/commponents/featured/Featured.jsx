import Image from "next/image";
import styles from "./Featured.module.css";

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, my name is fahad</b> Discover my stories and creative idea.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="picture" fill className={styles} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            eaque quod debitis consequatur officia ab voluptatum! Expedita,
            perspiciatis velit ratione incidunt tempora consequuntur autem modi
            aperiam quo aliquid molestias vero?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};
export default Featured;
