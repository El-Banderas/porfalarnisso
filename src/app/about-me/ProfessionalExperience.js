import styles from "./profExperience.module.css";
import ProfissionalExperienceCard from "@/components/about-me/ProfessionalExperienceCard";
import Image from "next/image";
import ImageTextCard from "@/components/about-me/ImageTextCard";
import house from "public/images/AboutMe/card/house.png";
import girlPlaying from "public/images/AboutMe/card/girlPlaying.png";
import certificate from "public/images/AboutMe/card/certificate.png";
import logo from "public/images/logo.png";

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
            titles={["Clínica", "Escola", "Domícilio"]}
            subtitle={"Pediatria"}
          />
        </div>

        <div className={styles.card}>
          <ImageTextCard
            img={girlPlaying}
            altTextImg={"Girl playing image"}
            titles={["Adultos", "Crianças"]}
            subtitle={"Especialização Avançada"}
          />
        </div>

        <div className={styles.card}>
          <ImageTextCard
            img={certificate}
            altTextImg={"Certificate draw"}
            titles={["Certificado", "CCP"]}
            subtitle={"Formadora certificada"}
          />
        </div>
      </div>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="logo" />
      </div>
    </main>
  );
}
