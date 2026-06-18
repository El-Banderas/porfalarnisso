"use client";
import styles from "./Cases.module.css";
import Image from "next/image";

export default function Case({ id, section }) {
  

  return (
    <div className={styles.case} id={id}>
      <h1>{section.name}</h1>
      <h4>{section.description}</h4>

      <Image src={section.image} alt={section.title} className={styles.img} />
  </div>
  );
}
