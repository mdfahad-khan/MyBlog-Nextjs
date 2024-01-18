import Menu from "@/commponents/Menu/Menu";
import Comments from "@/commponents/comments/Comment";
import Image from "next/image";
import styles from "./singlePage.module.css";

const Singlepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infocontainer}>
        <div className={styles.textcontainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userimagecontainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avater} />
            </div>
            <div className={styles.usertextcontainer}>
              <span className={styles.username}>Fahad Khan</span>
              <span className={styles.userdate}>10-13-2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imagecontainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              delectus omnis modi earum ad sit consequatur porro a deserunt
              laborum.
            </p>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              delectus omnis modi earum ad sit consequatur porro a deserunt
              laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              delectus omnis modi earum ad sit consequatur porro a deserunt
              laborum.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default Singlepage;
