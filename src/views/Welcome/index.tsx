import React from 'react-native';
import { Container , Img, Content, Title, Actions, Description, Link, RecoveryPassword } from './style';
import { Images } from '../../Images';
import { Button } from '../../components';
import { ColorsTypes } from '../../types/ColorsTypes';

const Welcome = ({ navigation }: any) => {

    function goToLoginPage() {
        navigation.push("login");
    }

    function goToSignUpPage() {
        navigation.push("signUp")
    }

    return (
        <Container
            source={Images.background}
            resizeMode={'cover'}
        >
            <Content>
                <Img source={Images.horizontal_logo} />
                <Actions>
                    <Title> Seja bem vindo(a) </Title>
                    <Description>
                        O que você deseja fazer?
                    </Description>
                    <Button  onPress={goToLoginPage} fill category={ColorsTypes.WHITE} title='Realizar login'  />
                    <Button  onPress={goToSignUpPage} category={ColorsTypes.WHITE} title='Criar uma conta' />
                    <RecoveryPassword>
                        <Link> Esqueci minha senha </Link>
                    </RecoveryPassword>
                </Actions>
            </Content>
        </Container>
    );
}

export default Welcome;