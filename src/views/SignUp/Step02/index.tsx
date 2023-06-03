import { Image, View } from "react-native";
import { Container, Title, Header, Img, Content, Items, Form, Link, Description } from "../style";
import { Images } from "../../../Images";
import { Input, Button  } from "../../../components";
import { ColorsTypes } from "../../../types/ColorsTypes";
import Icon from "react-native-vector-icons/Feather";
import Navigation from '../../../components/Navigation';
import { signUpTypes } from "../index";
import UserRouter from '../../../routes/user';
import AuthRouter from '../../../routes';
import { login as reducerLogin } from '../../../reducer/actions';
import { useDispatch, useSelector } from "react-redux";

interface Props {
    setStep: any;
    navigation: any;
    data: signUpTypes;
    setData: any;
}


const Step02 = ({ setStep, navigation, data, setData }: Props) => {
    
    console.log('-------------------- data', data)
    const dispatch = useDispatch();

    function handleCadastro() {
        console.log('--- login')
        UserRouter.handleCadastro(data)
            .then((res) => {
                console.log('--- tesresrser', res)
                UserRouter.handleLogin(data.email, data.password)
                .then((resLogin) => {
                    console.log('--- resLogin', resLogin)
                    AuthRouter.setHeader(resLogin.token)
                    dispatch(reducerLogin(resLogin))
                })
                .catch((console.log))
            })
            .catch((console.log))
    }

    return (
        <Container
            source={Images.background}
            resizeMode={'cover'}
        >
        <Header>
            <Items>
                <Img source={Images.horizontal_logo} />
            </Items>
        </Header>
            <Content>
                <Form>
                    <View>
                        <Title> Cadastro </Title>
                        <Description>
                            Agora cadastre um nome de usuário, e-mail e senha para finalizar o cadastro.
                        </Description>
                    </View>
                    <Input
                        placeholder="Nome de usuário"
                        onChangeText={(text: string) => setData({ ...data, surname: text })}
                        width={'100%'}
                    />
                    <Input
                        placeholder="E-mail"
                        onChangeText={(text: string) => setData({ ...data, email: text })}
                        width={'100%'}
                    />
                    <Input                    
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={(text: string) => setData({ ...data, password: text })}
                        width={'100%'}
                    />
                    <Button 
                        fill 
                        category={ColorsTypes.WHITE} 
                        title="Finalizar cadastro" 
                        onPress={() => handleCadastro()}
                    />
                </Form>
            </Content>
            <Navigation />
        </Container>
    )
}

export default Step02;