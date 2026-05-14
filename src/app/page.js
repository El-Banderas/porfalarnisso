import Image from "next/image";
import styles from "./page.module.css";


import { Button, Tooltip } from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";

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
        <div className={styles.imgContainer}>
          <Image
            src={mainPage1}
            alt="Office image"
            className={styles.image}
            style={{ objectFit: "cover" }}
          />
        </div>
        <AboutMe />
        <Specialisties />
      </div>
    </main>
  );
}
