import Image from "next/image";
import aboutMeImage from "public/images/MainPage_AboutMe.png";
import SpecialityCard from "@/components/mainPage/SpecialityCard.js"
import { Flex, Button } from '@mantine/core';
import classes from "./Specialities.module.css";
export default function AboutMe() {
  return (
    <section className={classes.section}>
      <Flex
        direction={{ base: 'column' }}
className={classes.section2}
      >

        <h1 className={classes.title}>Especialidades</h1>

      <Flex
      gap="lg"
      justify="space-between"
          direction={{ base: 'column', xs: 'row' }}
      >
        <SpecialityCard title="Crianças" />
        <SpecialityCard title="Adultos" />
        <SpecialityCard title="Co-terapia & Pares Terapêuticos" />
      </Flex>
            </Flex>
    </section>
  );
}
