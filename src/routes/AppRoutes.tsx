import { Navbar, Image, AppShell } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import {
  CalendarStats,
  Notes,
  Users,
  ListSearch,
  Package,
  MailForward,
} from 'tabler-icons-react';

import { LinksGroup } from '../app/components/LinksGroup';
import { Dashboard } from '../app/screens/Dashboard';
import { Home } from '../app/screens/Home';
import { Projects } from '../app/screens/Projects';
import { Respondents } from '../app/screens/Respondents';
import { Shots } from '../app/screens/Shots';
import { Surveys } from '../app/screens/Surveys';
import LogoInsideImg from '../assets/images/logo.png';
import { useStyles } from '../styles/navbar';

const AppRoutes = () => {
  const { classes } = useStyles();

  const mockdata = [
    {
      label: 'Dashboard',
      icon: Notes,
      initiallyOpened: true,
      link: '/dashboard',
      color: 'gray-0',
    },
    {
      label: 'Respondentes',
      icon: Users,
      link: '/respondents',
      color: 'gray-0',
    },
    {
      label: 'Pesquisas',
      icon: ListSearch,
      link: '/pesquisas',
      color: 'gray-0',
    },
    {
      label: 'Projetos',
      icon: Package,
      link: '/projetos',
      color: 'gray-0',
    },
    {
      label: 'Disparos',
      icon: MailForward,
      link: '/disparos',
      color: 'gray-0',
    },
  ];

  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));
  return (
    <>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} py={0} px={0}>
            <Navbar.Section grow className={classes.wrapper}>
              <div className={classes.main}>
                <Image
                  height={80}
                  className={classes.logo}
                  src={LogoInsideImg}
                ></Image>
                {links}
              </div>
            </Navbar.Section>
          </Navbar>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />s
          <Route path="/projetos" element={<Projects />} />
          <Route path="/pesquisas" element={<Surveys />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/respondents" element={<Respondents />} />
          <Route path="/disparos" element={<Shots />} />
        </Routes>
      </AppShell>
    </>
  );
};

export default AppRoutes;
