'use client';
import styles from "./profExperience.module.css";
import { Card, CardSection, Image, Text, Badge, Button, Group } from '@mantine/core';
import ballon from 'public/images/AboutMe/card/speakingBallon.png'
import photo from "public/images/AboutMe/photo.png";


export default function ProfissionalExperienceCard() {
  return (
        <div className={styles.card}>
        <Card shadow="sm" padding="lg" withBorder>
      <CardSection>
        <div className={styles.container}>
      <Image
        src={ballon}
        alt="Ballon"
        layout="fill"       
        className="object-cover"
        
      />
      <div className={styles.overlay}>
        <h1>Your Centered Text</h1>
      </div>
    </div>
      </CardSection>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" mt="md">
      Saber mais
      </Button>
    </Card>
</div>
  );
}
