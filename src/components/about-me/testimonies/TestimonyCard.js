"use client";
import styles from "./testimonies.module.css";
import { Divider } from '@mantine/core';

// Depois ver isto
// Do Mantine: <Marquee gap="lg"></Marquee>
export default function TestimonyCard({text, person}) {
  return (
    <div className={styles.card}>
    <div>
      {text}
    </div>
          <Divider my="md" />
<label>{person}</label>

    </div>
  );
}
