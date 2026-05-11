'use client';
import Image from "next/image";
import styles from "./profExperienceCard.module.css";
import ballon from 'public/images/AboutMe/card/speakingBallon.png'
import photo from "public/images/AboutMe/photo.png";


export default function ProfissionalExperienceCard() {
  return (
        <div className={styles.card}>
      <div className={styles.container}>
      <Image
        src={ballon}
        alt="Ballon"
        width={800}
        height={400}
        className={styles.imageWText}
        sizes="30vw"
      />
      <div className={styles.overlay}>
        <p className={styles.text}>+ 10 anos</p>
      </div>
    </div>
    <div className={styles.subtitle}>

    <p>Experiência Profissional</p>
    </div>
      
</div>
  );
}
