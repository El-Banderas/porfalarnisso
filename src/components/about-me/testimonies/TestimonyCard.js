"use client";
import styles from "./testimonies.module.css";
import { Divider } from "@mantine/core";
import { IconQuoteFilled } from "@tabler/icons-react";

// Depois ver isto
// Do Mantine: <Marquee gap="lg"></Marquee>
export default function TestimonyCard({ text, person }) {
  return (
    <div className={styles.card}>
      <div className={styles.testimony}>{text}</div>
      <Divider
        my="md"
        color="gray"
        className={styles.line}
        labelPosition="center"
        label={<IconQuoteFilled color="gray" />}
      />
      <label className={styles.author}>{person}</label>
    </div>
  );
}
