'use client';

import { Button, Container, Group, Text } from '@mantine/core';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import classes from './Header.module.css';

const links = [
  { link: '#features', label: 'Features' },
  { link: '#how-it-works', label: 'How it works' },
  { link: '#pricing', label: 'Pricing' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(window.scrollY > 20);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map((link) => document.querySelector(link.link));
      const sectionPositions = sections.map((section) => section?.getBoundingClientRect().top ?? 0);

      const currentPosition = window.scrollY + window.innerHeight / 2;
      const currentSectionIndex = sectionPositions.findIndex(
        (position) => position >= 0 && currentPosition >= position
      );

      setActive(links[currentSectionIndex]?.link || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    event.preventDefault();
    setActive(link);
    const targetElement = document.querySelector(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = links.map((link) => (
    <Link
      key={link.label}
      className={classes.link}
      data-active={active === link.link || undefined}
      href={link.link}
      onClick={(event) => handleLinkClick(event, link.link)}
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
