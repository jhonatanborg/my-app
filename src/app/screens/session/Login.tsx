import { Space, Box, Grid, Button, Image, Text, Container, PasswordInput, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ArrowNarrowRight } from 'tabler-icons-react';

import LogoInsideImg from '../../../assets/images/logo.png';
import InsideLogin from '../../../assets/images/app/inside-login.jpeg';
import { useState } from 'react';

import { useAuth } from '../../../contexts/auth';

interface FormValues {
    email: string; // regular field, same as inferred type
    password: string; // union, more specific than inferred type (string)
}


export default function Login() {
    const { signed, Login } = useAuth();
    console.log(signed);
    const [Loading, setLoading] = useState(false);
    const form = useForm<FormValues>({
        initialValues: {
            email: '',
            password: '',
        },
        validate: {
            email: (value) => {
                if (!value) {
                    return 'Email is required';
                }
            },
            password: (value) => {
                if (!value) {
                    return 'Password is required';
                }
            }
        },

    });
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        console.log('aqui', form.values);
        const response = Login(form.values)
        console.log(response);
        setLoading(false);
    }

    return (
        <Grid align="flex-start" justify="space-between" py={0}>
            <Grid.Col span={5}>
                <Container py={20}>
                    <Box px={50} mx="auto" my="auto">
                        <Image py={20} width={150} src={LogoInsideImg} />
                        <Text weight={500}> Bem vindo ao Inside </Text>
                        <Text> Faça login para continuar em Inside </Text>
                        <Space h="md" />
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <TextInput
                                label="E-mail"
                                size='md'
                                placeholder="E-mail"
                                {...form.getInputProps('email')}
                            />

                            <PasswordInput
                                mt="sm"
                                size='md'
                                label="Senha"
                                placeholder="Senha"
                                {...form.getInputProps('password')}
                            />

                            <Group position="right" mt="md">
                                <Button loaderPosition="right" loading={Loading} rightIcon={<ArrowNarrowRight size={24} />} size='md' fullWidth type="submit">Iniciar sessão</Button>
                            </Group>
                        </form>
                    </Box>
                </Container>
            </Grid.Col>
            <Grid.Col span={7} px={0} py={0} style={{ backgroundColor: 'red' }} >
                <Box sx={{ height: '100vh' }} style={{ padding: 0 }}>
                    <Image height={'100vh'} src={InsideLogin} />
                </Box>
            </Grid.Col>
        </Grid >
    )
}
