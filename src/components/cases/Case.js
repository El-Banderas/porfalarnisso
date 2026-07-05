"use client";
import styles from "./Cases.module.css";
import Image from "next/image";

export default function Case({ id, section, altStyle }) {
  return (
    <div
      className={`${styles.case} ${altStyle ? styles.altStyle : ""}`}
      id={id}
    >
      <h1>{section.name}</h1>
      <h4>{section.description}</h4>

      <Image src={section.image} alt={section.title} className={styles.img} />
    </div>
  );
}
