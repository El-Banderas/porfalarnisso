"use client";
import Image from "next/image";
import { Card, Text, Badge, Button, Group } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { IconArrowBadgeRightFilled } from "@tabler/icons-react";
import classes from "./SpecialitiyCard.module.css";

export default function SpecialityCard({ title, image }) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={classes.card}
    >

      <div className={classes.firstRow}>
        <Text size="xl" fw={500}>
          {title}
        </Text>
        <Image src={image} alt="Kids playing"
        className={classes.cardImage}
        />
      </div>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>
      <Card.Section px="lg" pb="md">
        <Group justify="flex-end">
          <ActionIcon
            variant="transparent"
            color="lime"
            aria-label="Settings"
            size="xl"
          >
            <IconArrowBadgeRightFilled
              style={{ width: "100%", height: "100%" }}
              stroke={2.5}
            />
          </ActionIcon>
        </Group>
      </Card.Section>
    </Card>
  );
}
