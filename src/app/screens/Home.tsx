import { AppShell, Navbar, Header, Image } from '@mantine/core';
import LogoInsideImg from '../../assets/images/logo.png';

const Home = () => {
    return (
        <AppShell
            navbar={<Navbar width={{ base: 300 }} height={500} p="xs">
                <Image py={20} width={150} src={LogoInsideImg} />
            </Navbar>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            {/* Your application here */}
        </AppShell>
    );
}

export { Home };