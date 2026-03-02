import Image from "next/image";
import aboutMeImage from "public/images/MainPage_AboutMe.png";
import { Flex, Button } from '@mantine/core';
import classes from "./Specialities.module.css";
export default function AboutMe() {
  return (
    <section className={classes.section}>
      <Flex
        direction={{ base: 'column' }}
      >

        <h1 className={classes.title}>Especialidades</h1>

            </Flex>
    </section>
  )
}
