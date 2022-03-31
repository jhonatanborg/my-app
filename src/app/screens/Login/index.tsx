import {
  Space,
  Box,
  Grid,
  Button,
  Image,
  Text,
  Container,
  PasswordInput,
  Group,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState, FormEvent } from 'react';
import { ArrowNarrowRight } from 'tabler-icons-react';

import InsideLogin from '../../../assets/images/app/inside-login.jpeg';
import LogoInsideImg from '../../../assets/images/logo.png';
import { useAuth } from '../../../contexts/auth';

interface IFormValues {
  email: string | void; // regular field, same as inferred type
  password: string; // union, more specific than inferred type (string)
}
const Login = () => {
  const { signIn } = useAuth();
  const [Loading, setLoading] = useState(false);

  const form = useForm<IFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await signIn(form.values);
    setLoading(false);
  };

  return (
    <Grid align="flex-start" justify="space-between" px={0} py={0}>
      <Grid.Col px={0} md={6} lg={5}>
        <Container py={20}>
          <Box px={80} py={80} mx="auto" my="auto">
            <Image py={20} width={150} src={LogoInsideImg} />
            <Text weight={500}> Bem vindo ao Inside </Text>
            <Text> Faça login para continuar em Inside </Text>
            <Space h="md" />
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextInput
                label="E-mail"
                size="md"
                placeholder="E-mail"
                {...form.getInputProps('email')}
              />

              <PasswordInput
                mt="sm"
                size="md"
                label="Senha"
                placeholder="Senha"
                {...form.getInputProps('password')}
              />

              <Group position="right" mt="md">
                <Button
                  loaderPosition="right"
                  loading={Loading}
                  rightIcon={<ArrowNarrowRight size={24} />}
                  size="md"
                  fullWidth
                  type="submit"
                >
                  Iniciar sessão
                </Button>
              </Group>
            </form>
          </Box>
        </Container>
      </Grid.Col>
      <Grid.Col md={6} lg={6} px={0} py={0}>
        <Image height={`100vh`} src={InsideLogin} />
      </Grid.Col>
    </Grid>
  );
};
export { Login };
