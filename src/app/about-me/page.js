import Image from "next/image";
import styles from "./page.module.css";
import firstImg from "public/images/AboutMe/first.png";
import photo from "public/images/AboutMe/photo.png";

export default function Home() {
  return (
    <main className={styles.main} >
      <div>
<div className={styles.imgContainer}>
          <Image
            src={firstImg}
            alt="Office image"
            className={styles.image}
            style={{ objectFit: "cover" }}
          />
        </div>
        <section className={styles.flexVertical}>

     <h1>Sobre mim</h1>
<div className={styles.selfImg}>
          <Image
            src={photo}
            alt="Sara image"
            className={styles.selfImg}
          />
        </div>
 
        </section>
     </div>
    </main>
  );
}
