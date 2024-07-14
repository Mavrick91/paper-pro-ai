'use client';

import { Burger, Button, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useState } from 'react';

import classes from './Header.module.css';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/how-it-works', label: 'How it works' },
  { link: '/pricing', label: 'Pricing' },
];

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      className={classes.link}
      data-active={active === link.link || undefined}
      href={link.link}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner} size="md">
        <Group>
          <Burger hiddenFrom="sm" opened={opened} size="sm" onClick={toggle} />
          PaperPro AI
        </Group>

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Group gap={5} visibleFrom="xs">
          <Button variant="default">Log in</Button>
          <Button>Sign up</Button>
        </Group>

        <Burger hiddenFrom="xs" opened={opened} size="sm" onClick={toggle} />
      </Container>
    </header>
  );
};

export default Header;
