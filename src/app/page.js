import Image from "next/image";
import styles from "./page.module.css";

import ImageWText from "@/components/ImageWText/ImageWText";

import mainPage1 from "public/images/MainPage1.png";
import AboutMe from "@/components/mainPage/AboutMe.js";
import Specialisties from "@/components/mainPage/Specialities.js";
// Read this!!!
// https://eastondev.com/blog/en/posts/dev/20251219-nextjs-image-optimization/#three-major-pitfalls-of-regular-img-tags
// It's important
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <ImageWText
          image={mainPage1}
          title="Terapia da Fala"
          textColor="#764932"
        />
        <AboutMe />
        <Specialisties />
      </div>
    </main>
  );
}
