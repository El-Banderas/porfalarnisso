"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import firstImg from "public/images/AboutMe/first.png";
import photo from "public/images/AboutMe/photo.png";
import photoFormation from "public/images/AboutMe/photoFormation.png";
import logo from "public/images/logo_crop.png";
import DatesTable from "@/app/about-me/datesTable";
import DatesTableMobile from "@/app/about-me/datesTableMobile";
import ProfessionalExperience from "@/app/about-me/ProfessionalExperience";
import ImageWText from "@/components/ImageWText/ImageWText";
import Testimonies from "@/components/about-me/testimonies/Testimonies";
import { checkIsMobile } from "@/app/utils/isMobile";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(checkIsMobile(window));
  }, []);

  const experience = [
    [["2022"], "Clínica Terapêutica Pronunciar - Paços de Brandão e Espinho"],
    [
      ["2018"],
      "GASC (Grupos de Autonomia e Socialização em Contexto) da APPDA-norte - Gaia",
    ],
    [["2016"], "Instituto Luso-Cubano de Neurologia - Porto"],
    [
      ["2016"],
      "Prática profissional: Centro de Reabilitação do Norte - Santa Casa da Misericórdia do Porto",
    ],
  ];

  const formation = [
    [
      ["2025"],
      'Oradora nas Jornadas de Neurodesenvolvimento da clínica Pronunciar com a temática "Descomplicar a comunicação na Perturbação no Espetro do Autismo"',
    ],
    [
      ["2023"],
      "Especialização Avançada em Terapia da Fala em Contextos de Saúde ministrada pelo Instituto CRIAP",
    ],
    [
      ["2019"],
      'Pós-Graduação na área do autismo - "Trabalho Multidisciplinar no Autismo", ministrado pelo Instituto CRIAP',
    ],
    [
      ["2016"],
      "Licenciatura em Terapia da Fala pela Escola Superior de Saúde da Universidade de Aveiro",
    ],
  ];

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
            {isMobile ? (
              <DatesTableMobile title="Experiência" points={experience} />
            ) : (
              <DatesTable title="Experiência" points={experience} />
            )}
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
            {isMobile ? (
              <DatesTableMobile title="Formação" points={formation} />
            ) : (
              <DatesTable title="Formação" points={formation} />
            )}
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
