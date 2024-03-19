import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo1.png" alt="logo" width={50} height={50} />
          <h1 className={styles.logoText}>FahadEvan</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          voluptatem! Blanditiis atque enim hic molestiae sed odio at distinctio
          velit.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
          <Image src="/facebook.png" alt="" width={18} height={18} />
        </div>
      </div>
      {/* <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">home</Link>
          <Link href="/">blog</Link>
          <Link href="/">about</Link>
          <Link href="/">contact</Link>
        </div>

        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/">style</Link>
            <Link href="/">fashion</Link>
            <Link href="/">coding</Link>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/">facebook</Link>
            <Link href="/">instagram</Link>
            <Link href="/">coding</Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Footer;
