import Image from "next/image";
import aboutMeImage from "public/images/MainPage_AboutMe.png";
import { Flex, Button } from "@mantine/core";
import classes from "./AboutMe.module.css";
export default function AboutMe() {
  return (
    <section className={classes.section}>
      <Flex direction={{ base: "column" }}>
        <h1 className={classes.title}>Sobre mim</h1>

        <Flex direction={{ base: "column", xs: "row" }}>
          <div className={classes.img}>
            <Image src={aboutMeImage} alt="Therapist photo" fill />
          </div>

          <Flex
            direction={{ base: "column" }}
            gap="lg"
            className={classes.rightContent}
          >
            <p>
              Filha única, nasci em Espinho e sempre fui criada na Granja por
              uns pais a quem devo o mundo! Em pequena era extremamente faladora
              e bem-disposta, chamavam-me “papagaio” porque repetia tudo o que
              ouvia! Adorava (e ainda adoro) música! Trauteava tudo e mais
              alguma coisa! Dizia que ia ser veterinária. Depois mudei para
              professora e ainda quis ser Cardiologista, Nutricionista e
              Psicóloga! O que me levou à Terapia da Fala, afinal?
            </p>
            <p>
              Uma prima, que vive no Reino Unido, a dada altura, falou numa
              profissão muito gira onde eu podia reunir duas paixões: a educação
              e a saúde! Fiquei super curiosa e (como não sou de muitas
              indecisões) candidatei-me para faculdades mais próximas! Não
              entrei na faculdade do Porto por uma décima! E na altura fiquei
              triste! Quis o destino que fosse para Aveiro, onde conheci pessoas
              que mantenho sempre por perto!
            </p>
            <p>
              Em 4 anos de curso e 3 estágios, apercebi-me que esta profissão
              tem um sem número de vertentes! Podia ajudar pessoas dos 0 aos 100
              anos! Além disso, terapia da fala estava longe de ser apenas FALA.
              Eu podia ajudar um bebé a alimentar-se em segurança, a comunicar
              melhor, ou uma criança a construir melhor as suas frases, ou um
              menino mais crescido que tivesse dificuldade em ler e escrever!
              Havia tanto a fazer!
            </p>
            <Button variant="outline" size="md" className={classes.btn}>
              Saber mais
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
}
