import Image from "next/image";
import { Flex, Button } from "@mantine/core";
import classes from "./Footer.module.css";
export default function AboutMe() {
  return (
    <section className={classes.section}>
      <Flex direction={{ base: "column" }}>
        <h1 className={classes.title}>Footer</h1>
      </Flex>
    </section>
  );
}
