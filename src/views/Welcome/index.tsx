import React, { Text, View, ImageBackground, Image } from 'react-native';
import { Container , Img, Content, Title, Actions, Description, Link, RecoveryPassword } from './style';
import { Images } from '../../Images';
import { Button } from '../../components';
import { ColorsTypes } from '../../types/ColorsTypes';

const Welcome = () => {

    return (
        <Container
            source={require('./city-background.png')}
            resizeMode={'cover'}
        >
            <Content>
                <Img source={Images.horizontal_logo} />
                <Actions>
                    <Title> Seja bem vindo(a) </Title>
                    <Description>
                        O que você deseja fazer?
                    </Description>
                    <Button fill category={ColorsTypes.WHITE} title='Realizar login'  />
                    <Button category={ColorsTypes.WHITE} title='Criar uma conta' />
                    <RecoveryPassword>
                        <Link> Esqueci minha senha </Link>
                    </RecoveryPassword>
                </Actions>
            </Content>
        </Container>
    );
}

export default Welcome;