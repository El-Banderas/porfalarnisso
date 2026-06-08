"use client";
import { NavLink } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import styles from "./Cases.module.css";

export default function Home({ titles }) {
  const sections = [
    {
      name: "Problema 1",
      description: "Description of problem ......",
      anchor: "#problema-1",
    },
    {
      name: "Problem 2",
      description: "Description of problem ......",
      anchor: "#problema-2",
    },
  ];

  return (
    <div className={styles.btns}>
      {sections.map((item, index) => (
        <NavLink
          key={index}
          className={styles.btn}
          component="a"
          href={item.anchor}
          label={item.name}
          description={item.description}
          rightSection={<IconChevronRight size="1rem" stroke={1.5} />}
          variant="filled"
          styles={{
            root: {
              borderRadius: "8px",
              marginBottom: "4px",
            },
          }}
        />
      ))}
    </div>
  );
}
