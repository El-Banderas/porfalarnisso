"use client";
import styles from "./childrenPage.module.css";
import firstImg from "public/images/AboutMe/first.png";
import ImageWText from "@/components/ImageWText/ImageWText";
import BtnsToRedirect from "@/components/cases/BtnsToRedirect";
import Case from "@/components/cases/Case";
import img from "public/images/AboutMe/card/certificate.jpg";

export default function Home() {
  // Later change the anchor, so it is name dependent
  const genericProblem = {
    name: "Problema 1",
    description: "Description of problem ......",
    anchor: "#problema-1",
    image: img,
  };
  const sections = [
    genericProblem,
    genericProblem,
    genericProblem,
    genericProblem,
    genericProblem,
    genericProblem,
    genericProblem,
    genericProblem,
    genericProblem,
  ];
  return (
    <main className={styles.btnsSection}>
      <ImageWText image={firstImg} title={"Crianças"} />
      <div className={styles.content}>
        <section>
          <h1>Áreas de intervenção </h1>
          <BtnsToRedirect sections={sections} />
        </section>
        {sections.map((item, index) => (
          <Case
            key={index}
            style={{ padding: "20px" }}
            id={index}
            href={`#${index}`}
            section={item}
          />
        ))}
      </div>
    </main>
  );
}
