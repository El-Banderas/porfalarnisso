"use client";
import { NavLink, stylesToString } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import styles from "./Cases.module.css";

export default function Case({ section }) {
  

  return (
    <div className={styles.case}>
      <h1>{section.name}</h1>
      <h4>{section.description}</h4>
  </div>
  );
}
