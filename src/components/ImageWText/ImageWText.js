"use client";

import styles from "./styles.module.css";
import Image from "next/image";

export default function ImageWText({ image, title, description, textColor }) {
  const customStyle = textColor ? { color: textColor } : {};
  return (
    <div className={styles.img}>
      <Image src={image} alt={title} className={styles.vercelLogo} priority />
      <h1 className={styles.title} style={customStyle}>
        {title}
      </h1>
      <h4 className={styles.description} style={customStyle}>
        {description}
      </h4>
    </div>
  );
}
