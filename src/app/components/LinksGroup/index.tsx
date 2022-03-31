import {
  Group,
  ThemeIcon,
  Text,
  UnstyledButton,
  createStyles,
} from '@mantine/core';
import React, { useState } from 'react';
import { To, useNavigate } from 'react-router-dom';
import {
  Icon as TablerIcon,
  ChevronLeft,
  ChevronRight,
} from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  link: {
    boxSizing: 'border-box',
    display: 'block',
    textDecoration: 'none',
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: 44,
    lineHeight: '44px',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
  linkActive: {
    '&, &:hover': {
      borderLeftColor:
        theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
      backgroundColor:
        theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
      color: theme.white,
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));

interface ILinksGroupProps {
  icon: TablerIcon;
  label: string;
  link: string;
  color: string;
}

const LinksGroup = ({ icon: Icon, label, link, color }: ILinksGroupProps) => {
  const navigate = useNavigate();
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('');
  const handleClick = () => {
    navigate(link);
  };
  return (
    <>
      <UnstyledButton
        onClick={() => {
          handleClick();
        }}
        className={active === label ? cx(classes.linkActive) : cx(classes.link)}
        key={label}
      >
        <Group>
          <ThemeIcon color={color} variant="light">
            <Icon size={18} />
          </ThemeIcon>
          <Text color="gray" size="md">
            {label}
          </Text>
        </Group>
      </UnstyledButton>
    </>
  );
};

export { LinksGroup };
