import styles from "./profExperience.module.css";
import ProfissionalExperienceCard from "@/components/about-me/ProfessionalExperienceCard";
import ImageTextCard from "@/components/about-me/ImageTextCard";
import house from "public/images/AboutMe/card/house.png";

export default function ProfissionalExperience() {
  return (
    <main className={styles.main}>
      <h1>Experiência Profissional</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <ProfissionalExperienceCard />
        </div>
        <div className={styles.card}>
          <ImageTextCard
            img={house}
            altTextImg={"House icon"}
            title={"2 clínicas"}
            subtitle={"Terapia com adultos"}
          />
        </div>
      </div>
      <section></section>
    </main>
  );
}
