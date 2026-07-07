"use client";

import {
  IconChevronDown,
  IconSeedlingFilled,
  IconBrandInstagram,
} from "@tabler/icons-react";

import {
  Burger,
  Center,
  Container,
  Group,
  Menu,
  Drawer,
  Stack,
  Accordion,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import classes from "./Navbar.module.css";

const links = [
  { link: "/about-me", label: "Sobre mim" },
  {
    link: "#1",
    label: "Adultos",
    links: [
      { link: "/s1", label: "Opção 1" },
      { link: "/s2", label: "Opção 2" },
    ],
  },
  {
    link: "/children",
    label: "Crianças",
    links: [
      { link: "/children", label: "Opção 1" },
      { link: "/s2", label: "Opção 2" },
    ],
  },
  { link: "/co-therapy", label: "Co-Terapia" },
];

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);

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
            <Link href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  const mobileItems = links.map((link) => {
    if (link.links) {
      return (
        <Accordion key={link.label} chevronPosition="right" variant="separated">
          <Accordion.Item value={link.label} style={{ border: "none" }}>
            <Accordion.Control>{link.label}</Accordion.Control>
            <Accordion.Panel>
              <Stack gap={5}>
                {link.links.map((subLink) => (
                  <a
                    key={subLink.link}
                    href={subLink.link}
                    style={{
                      paddingLeft: "24px",
                      fontSize: "var(--mantine-font-size-md)",
                    }}
                    onClick={close} // Closes drawer on click
                  >
                    {subLink.label}
                  </a>
                ))}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={close}
      >
        {link.label}
      </a>
    );
  });
  return (
    <header className={classes.header}>
      <Container fluid color="my-orange">
        <div className={classes.inner}>
          <a href={"/"}>
            <IconSeedlingFilled size={28} href={"/asd"} />
          </a>

          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            hiddenFrom="sm"
            aria-label="Toggle navigation"
            color="white"
          />
          <Drawer
            opened={opened}
            onClose={close}
            size="100%"
            padding="md"
            title="Menu"
            hiddenFrom="sm"
            zIndex={1000000}
          >
            <Stack gap={10}>{mobileItems}</Stack>
          </Drawer>
          <IconBrandInstagram size={32} stroke={1.5} />
        </div>
      </Container>
    </header>
  );
}
