import Image from "next/image";
import styles from "./page.module.css";
import firstImg from "public/images/AboutMe/first.png";
import photo from "public/images/AboutMe/photo.png";
import photoFormation from "public/images/AboutMe/photoFormation.png";
import logo from "public/images/logo_crop.png";
import DatesTable from "@/app/about-me/datesTable";
import ProfessionalExperience from "@/app/about-me/ProfessionalExperience";
import ImageWText from "@/components/ImageWText/ImageWText";
import Testimonies from "@/components/about-me/testimonies/Testimonies";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <ImageWText image={firstImg} title={"Sobre mim"} />
        <section className={`${styles.aboutMe} ${styles.section}`}>
          <h1>Sobre mim</h1>
          <div className={styles.dates}>
            <div className={styles.selfImg}>
              <Image src={photo} alt="Sara image" className={styles.selfImg} />
            </div>
            <DatesTable
              title="Experiência"
              points={[
                [
                  ["Agosto/2020", "Atualmente"],
                  "Clínica Terapêutica Pronunciar - Paços de Brandão",
                ],
                [
                  ["Setembro/2018", "Março/2023"],
                  "GASC (Grupos de Autonomia e Socialização em Contexto) da APPDA-norte - Gaia",
                ],
                [
                  ["Julho/2016", "Setembro/2016"],
                  "Instituto Luso-Cubano de Neurologia, Porto (part-time)",
                ],
              ]}
            />

            <Image
              src={logo}
              width={800}
              height={550}
              alt="logo"
              className={styles.logo}
              priority
            />
          </div>
        </section>
        <section className={`${styles.aboutMe} ${styles.section}`}>
          <div className={styles.dates}>
            <DatesTable
              title="Formação"
              points={[
                [
                  ["15 de março de 2025"],
                  'Participação nas Jornadas de Neurodesenvolvimento da clínica Pronunciar com a temática "Descomplicar a comunicação na PEA"',
                ],
                [
                  ["Fevereiro/2023", "Novembro/2023"],
                  "Especialização Avançada em Terapia da Fala em Contextos de Saúde ministrada pelo Instituto CRIAP, com nota final de 18 valores",
                ],
                [
                  ["Junho/2019"],
                  'Pós-Graduação na área do autismo - "Trabalho Multidisciplinar no Autismo", ministrado pelo Instituto CRIAP',
                ],
                [
                  ["Setembro/2019", "Julho/2016"],
                  "Licenciatura em Terapia da Fala pela Escola Superior de Saúde da Universidade de Aveiro",
                ],
              ]}
            />

            <div className={styles.selfImg}>
              <Image
                src={photoFormation}
                alt="Sara image"
                className={styles.selfImg}
              />
            </div>
          </div>
        </section>
        <ProfessionalExperience />
        <Testimonies />
      </div>
    </main>
  );
}
