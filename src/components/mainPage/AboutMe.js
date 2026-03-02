import Image from "next/image";
import aboutMeImage from "public/images/MainPage_AboutMe.png";
import { Flex, Button } from "@mantine/core";
import classes from "./AboutMe.module.css";
export default function AboutMe() {
  return (
    <section className={classes.section}>
      <Flex
        direction={{ base: 'column' }}
      >

        <h1 className={classes.title}>Sobre mim</h1>

        <Flex
          direction={{ base: 'column', xs: 'row' }}
        >
          <div className={classes.img}>
            <Image
              src={aboutMeImage}
              alt="Therapist photo"
              fill
            />
          </div>

          <Flex
            direction={{ base: 'column' }}
            gap="lg"
            className={classes.rightContent}
          >
            <h3 >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </h3>
            <Button variant="outline" size="md" className={classes.btn} >Saber mais</Button>
          </Flex>
        </Flex>

      </Flex>
    </section>
  )
}
