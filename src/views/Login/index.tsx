import { View } from "react-native";
import { Container, Title, Header, Img, Content, Form, Link } from "./style";
import { Images } from "../../Images";
import { Input, Button  } from "../../components";
import { ColorsTypes } from "../../types/ColorsTypes";
import { login as reducerLogin } from '../../reducer/actions';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import UserRouter from '../../routes/user';
import AuthRouter from '../../routes';
import { Text } from "react-native-elements";


const Login = ({ navigation }:any) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const dispatch = useDispatch();

    const user = useSelector((store: any) => store.user)

    function login() {
        console.log('--- login')
        UserRouter.handleLogin(email, password)
            .then((data) => {
                console.log('--- data', data)
                AuthRouter.setHeader(data.token)
                dispatch(reducerLogin(data))
            })
            .catch((console.log))
    }

    return (
        <Container
            source={Images.background}
            resizeMode={'cover'}
        >
        <Header>
            <Img source={Images.horizontal_logo} />
        </Header>
        <Text>{JSON.stringify(user)}</Text>
            <Content>
                <Form>
                    <View>
                        <Title> Login </Title>
                    </View>
                    <Input
                        onChangeText={(text: string) => setEmail(text)}
                        placeholder="E-mail"
                        width={350}
                    />
                    <Input                    
                        placeholder="Senha"
                        onChangeText={(text: string) => setPassword(text)}
                        secureTextEntry={true}
                        width={350}
                    />
                    <Button fill category={ColorsTypes.WHITE} title="Realizar login"  onPress={login}/>
                    <Link> Esqueci minha senha </Link>
                </Form>
            </Content>
        </Container>
    )
}

export default Login;