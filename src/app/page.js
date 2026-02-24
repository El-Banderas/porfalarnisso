import Image from "next/image";
import styles from "./page.module.css";

import { Button, Tooltip } from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons-react';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Hello
<Button
        variant="light"
        rightSection={
          true ? (
            <IconCheck size={20} stroke={1.5} />
          ) : (
            <IconCopy size={20} stroke={1.5} />
          )
        }
        radius="xl"
        size="md"
        pr={14}
        h={48}
        styles={{ section: { marginLeft: 22 } }}
      >Conteúdo</Button>
      <h1>OLS</h1>
      </main>
    </div>
  );
}
