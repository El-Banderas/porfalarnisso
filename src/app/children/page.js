"use client";
import styles from "./childrenPage.module.css";
import firstImg from "public/images/AboutMe/first.png";
import ImageWText from "@/components/ImageWText/ImageWText";
import BtnsToRedirect from "@/components/cases/BtnsToRedirect";
import Case from "@/components/cases/Case";

export default function Home() {
  const sections = [
    {
      name: "Problema 1",
      description: "Description of problem ......",
      anchor: "#problema-1",
    },
    {
      name: "Problem 2",
      description: "Description of problem ......",
      anchor: "#problema-2",
    },
  ];
  return (
    <main className={styles.btnsSection}>
      <ImageWText image={firstImg} title={"Crianças"} />
      <div className={styles.content}>
        <section>
          <h1>Áreas de intervenção </h1>
          <BtnsToRedirect sections={sections} />
        </section>
        <Case
          id="problema-1"
          style={{ padding: "20px" }}
          section={sections[0]}
        />

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
