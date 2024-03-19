import React from "react";
import Image from "next/image";
import styles from "./travelPicture.module.css";

const TravelPicture = () => {
  return (
    <div>
      <div>
        <h2 className={styles.title}>Travel Picture</h2>
        <div className={styles.first}>
          <div className={styles.one}>
            <div className={styles.imageWrapper}>
              <Image
                src="/shundarban1.jpg"
                alt="picture"
                width={800}
                height={400}
                className={styles.pic}
              />
              <div className={styles.placeName}>SUNNDARBAN</div>
            </div>
          </div>
          <div className={styles.two}>
            <div className={styles.imageWrapper}>
              <Image
                src="/jaflong.jpg"
                alt="picture"
                width={400}
                height={400}
                className={styles.pic}
              />
              <div className={styles.placeName}>JAFLOGN</div>
            </div>
          </div>
        </div>
        <div className={styles.third}>
          <div className={styles.five}>
            <div className={styles.imageWrapper}>
              <Image
                src="/cox's.jpg"
                alt="picture"
                width={600}
                height={400}
                className={styles.pic}
              />
              <div className={styles.placeName}>HIMCHURI</div>
            </div>
          </div>
          <div className={styles.six}>
            <div className={styles.imageWrapper}>
              <Image
                src="/SITAKUNDA.png"
                alt="picture"
                width={600}
                height={400}
                className={styles.pic}
              />
              <div className={styles.placeName}>SITAKUNDA</div>
            </div>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.three}>
            <div className={styles.imageWrapper}>
              <Image
                src="/syhlet2.JPg"
                alt="picture"
                width={400}
                height={400}
                className={styles.pic}
              />
              <div className={styles.placeName}>SYHLET</div>
            </div>
          </div>
          <div className={styles.four}>
            <div className={styles.imageWrapper}>
              <Image
                src="/kuakata2.jpg"
                alt="picture"
                width={800}
                height={400}
                className={styles.pic}
              />
              <div className={styles.placeName}>KUAKATA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPicture;
