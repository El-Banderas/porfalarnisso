"use client";
import styles from "./testimonies.module.css";
import TestimonyCard from "./TestimonyCard";

export default function Testimonies() {
  return (
    <section className={styles.section}>
      <h1>Testemunhos</h1>
      <div className={styles.testimonies}>

      <TestimonyCard text="Gosto muito das terapias, fazem muito bem!" person="João Maria"/>
      <TestimonyCard text="Gosto muito das terapias, fazem muito bem!" person="João Maria"/>
      <TestimonyCard text="Gosto muito das terapias, fazem muito bem!" person="João Maria"/>
</div>
    </section>
  );
}
