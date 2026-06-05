import Image from "next/image";
import { Flex, Button } from "@mantine/core";
import logo from "public/images/logo.png";
import classes from "./Footer.module.css";
export default function AboutMe() {
  const renderTitleSection = (title, subtitle) => {
    return (
      <Flex direction={{ base: "column" }}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Flex>
    );
  };

  return (
    <section className={classes.section}>
<Flex direction={{ base: "column", xs: "row" }} justify={"space-between"} gap="lg">


      <Flex direction={{ base: "column", xs: "row" }} gap="3vw">
        {renderTitleSection("Gabinete", "Rua de Trás 157 J, Vila Nova de Gaia")}
        {renderTitleSection("Horário", "Segunda das 9h às 11h")}
      </Flex>
        <div className={classes.img}>
          <Image src={logo} alt="Logo" fill />
        </div>

      </Flex>
    </section>
  );
}
