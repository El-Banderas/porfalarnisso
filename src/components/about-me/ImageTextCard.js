"use client";
import Image from "next/image";
import styles from "./profExperienceCard.module.css";

export default function ImageTextCard({ img, altTextImg, title, subtitle }) {
  return (
    <div className={styles.card}>
      <div className={styles.horizontalFlex}>
        <p className={styles.text}>{title}</p>
        <Image
          src={img}
          alt="house"
          width={800}
          height={400}
          className={styles.image}
          sizes="30vw"
        />
      </div>
      <div className={styles.subtitle}>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
