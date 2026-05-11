"use client";

import styles from "./styles.module.css";
import Image from "next/image";

export default function ImageWText({ image, title, description }) {
  return (
    <div className={styles.img}>
      <Image
        src={image}
        alt="Rover img"
        className={styles.vercelLogo}
        priority
      />
      <h1 className={styles.title}>{title}</h1>
      <h4 className={styles.description}>{description}</h4>
    </div>
  );
}
