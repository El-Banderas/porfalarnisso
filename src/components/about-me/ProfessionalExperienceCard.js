'use client';
import Image from "next/image";
import styles from "./profExperienceCard.module.css";
import ballon from 'public/images/AboutMe/card/speakingBallon.png'
import photo from "public/images/AboutMe/photo.png";


export default function ProfissionalExperienceCard() {
  return (
<div className={styles.cardContainer}>
      {/* Top 70% */}
      <div className={styles.topSection}>
        <Image
          src={ballon} // Replace with your image path
          alt="Ballon"
          fill
          className={styles.bgImage}
        />
        <div className={styles.overlayText}>
          <p>+ 10 anos</p>
        </div>
      </div>

      {/* Bottom 30% */}
      <div className={styles.bottomSection}>
        <p>Experiência Profissional</p>
      </div>
    </div>
  );
}
