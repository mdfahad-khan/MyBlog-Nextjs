import Image from "next/image";
import Link from "next/link";
import styles from "./commnet.module.css";

const Comment = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment" className={styles.input} />
          <button className={styles.button}> Send</button>
        </div>
      ) : (
        <Link href="/login">Login for write commponents</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              height={50}
              width={50}
              className={styles.image}
            />
            <div className={styles.userinformation}>
              <span className={styles.username}>Fahad Khan</span>
              <span className={styles.userdate}>10-23-2023</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            fugiat ducimus adipisci repellat sequi, officiis eligendi recusandae
            velit perspiciatis aliquam.
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              height={50}
              width={50}
              className={styles.image}
            />
            <div className={styles.userinformation}>
              <span className={styles.username}>Fahad Khan</span>
              <span className={styles.userdate}>10-23-2023</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            fugiat ducimus adipisci repellat sequi, officiis eligendi recusandae
            velit perspiciatis aliquam.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              height={50}
              width={50}
              className={styles.image}
            />
            <div className={styles.userinformation}>
              <span className={styles.username}>Fahad Khan</span>
              <span className={styles.userdate}>10-23-2023</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            fugiat ducimus adipisci repellat sequi, officiis eligendi recusandae
            velit perspiciatis aliquam.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              height={50}
              width={50}
              className={styles.image}
            />
            <div className={styles.userinformation}>
              <span className={styles.username}>Fahad Khan</span>
              <span className={styles.userdate}>10-23-2023</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            fugiat ducimus adipisci repellat sequi, officiis eligendi recusandae
            velit perspiciatis aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Comment;
