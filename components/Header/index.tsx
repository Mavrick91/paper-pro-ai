'use client';

import { Button, Container, Group, Text } from '@mantine/core';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import classes from './Header.module.css';

const links = [
  { link: '/features', label: 'Features' },
  { link: '/how-it-works', label: 'How it works' },
  { link: '/pricing', label: 'Pricing' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(links[0].link);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`${classes.header} ${scrolled ? classes.headerScrolled : ''}`}>
      <Container className={classes.inner} size="md">
        <Text c="white" fw={700} size="lg">
          PaperPro AI
        </Text>

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Group gap={5} visibleFrom="xs">
          <Button color="gray.1" variant="outline">
            Log in
          </Button>
          <Button color="teal.4">Sign up</Button>
        </Group>
      </Container>
    </header>
  );
};

export default Header;
