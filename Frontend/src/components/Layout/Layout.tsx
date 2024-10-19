import { AppShell, Burger, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet, useNavigate } from 'react-router-dom';
import { ContainerOutlet } from './styles';

export const Layout = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const navigate = useNavigate();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <span>Test UA</span>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Button variant="gradient" onClick={() => navigate('/')}>
          Home
        </Button>
      </AppShell.Navbar>
      <AppShell.Main style={{ display: 'flex', height: '100%' }}>
        <ContainerOutlet>
          <Outlet />
        </ContainerOutlet>
      </AppShell.Main>
    </AppShell>
  );
};
