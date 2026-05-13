"use client";
import Image from "next/image";
import styles from "./profExperienceCard.module.css";

export default function ImageTextCard({ img, altTextImg, title, subtitle }) {
  return (
    <div className={styles.card}>
      <div className={styles.horizontalFlex}>
        <h3 className={styles.text}>{title}</h3>
        <Image
          src={img}
          alt="house"
          className={styles.image}
        />
      </div>
      <div className={styles.bottomSection}>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
