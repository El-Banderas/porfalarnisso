"use client";
import Image from "next/image";
import styles from "./profExperienceCard.module.css";

export default function ImageTextCard({ img, altTextImg, titles, subtitle }) {
  return (
    <div className={styles.card}>
      <div className={styles.horizontalFlex}>

          <div className={styles.titles}>
          {titles.map((line, index) => (
        <h3 className={styles.text} key={index}>{line}</h3>
          ))
          }
</div>
        <Image src={img} alt={altTextImg} className={styles.image} />
      </div>
      <div className={styles.bottomSection}>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
