import Image from "next/image";
import aboutMeImage from "public/images/MainPage_AboutMe.png";
import SpecialityCard from "@/components/mainPage/SpecialityCard.js";
import { Flex, Button } from "@mantine/core";
import classes from "./Specialities.module.css";
import kidImage from "public/images/kidsSpeciality.png";
import adultImage from "public/images/adultSpeciality.png";
import groupImage from "public/images/CoTherapySpeciality.png";
export default function AboutMe() {
  return (
    <section className={classes.section}>
      <Flex direction={{ base: "column" }} className={classes.section2}>
        <h1 className={classes.title}>Especialidades</h1>

        <Flex
          gap="lg"
          justify="space-between"
          direction={{ base: "column", xs: "row" }}
        >
          <SpecialityCard title="Crianças" image={kidImage}/>
          <SpecialityCard title="Adultos" image={adultImage}/>
          <SpecialityCard title="Co-terapia & Pares Terapêuticos" image={groupImage}/>
        </Flex>
      </Flex>
    </section>
  );
}
