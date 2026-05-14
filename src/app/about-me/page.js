import Image from "next/image";
import styles from "./page.module.css";
import firstImg from "public/images/AboutMe/first.png";
import photo from "public/images/AboutMe/photo.png";
import logo from "public/images/logo_crop.png";
import FormationTable from "@/app/about-me/formationTable";
import ProfessionalExperience from "@/app/about-me/ProfessionalExperience";
import ImageWText from "@/components/ImageWText/ImageWText";
import Testimonies from "@/components/about-me/testimonies/Testimonies";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <ImageWText image={firstImg} title={"Sobre mim"} />
        <section className={`${styles.flexVertical} ${styles.section}`}>
          <h1>Sobre mim</h1>
          <div className={styles.horizontalFlex}>
            <div className={styles.selfImg}>
              <Image src={photo} alt="Sara image" className={styles.selfImg} />
            </div>
            <FormationTable />

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
        <ProfessionalExperience />
        <Testimonies />
      </div>
    </main>
  );
}
