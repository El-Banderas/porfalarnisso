"use client";

import {
  IconChevronDown,
  IconSeedlingFilled,
  IconBrandInstagram,
} from "@tabler/icons-react";

import { Burger, Center, Container, Group, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";

const links = [
  { link: "/about", label: "Sobre mim" },
  {
    link: "#1",
    label: "Adultos",
    links: [
      { link: "/s1", label: "Opção 1" },
      { link: "/s2", label: "Opção 2" },
    ],
  },
  {
    link: "#2",
    label: "Crianças",
    links: [
      { link: "/s1", label: "Opção 1" },
      { link: "/s2", label: "Opção 2" },
    ],
  },
  { link: "/co-therapy", label: "Co-Terapia" },
];

export default function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container fluid color="my-orange">
        <div className={classes.inner}>
          <IconSeedlingFilled size={28} />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />

          <IconBrandInstagram size={32} stroke={1.5} />
        </div>
      </Container>
    </header>
  );
}
