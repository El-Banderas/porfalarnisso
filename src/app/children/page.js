"use client";
import styles from "./childrenPage.module.css";
import firstImg from "public/images/AboutMe/first.png";
import ImageWText from "@/components/ImageWText/ImageWText";
import BtnsToRedirect from "@/components/cases/BtnsToRedirect";

export default function Home() {
  const sections = [
    { name: "Problema 1", description: "Descrição do problema ......" },
  ];
  return (
    <main className={styles.btnsSection}>
      <ImageWText image={firstImg} title={"Crianças"} />
      <div className={styles.content}>
        <section>
          <h1>Áreas de intervenção </h1>
          <BtnsToRedirect list="sections" />
        </section>
        <section
          id="problema-1"
          style={{ marginTop: "100vh", padding: "20px" }}
        >
          <h2>Problema 1</h2>
          <p>Content for the first problem goes here...</p>
        </section>

        <section
          id="problema-2"
          style={{ marginTop: "100vh", padding: "20px" }}
        >
          <h2>Problem 2</h2>
          <p>Content for the second problem goes here...</p>
        </section>
      </div>
    </main>
  );
}
