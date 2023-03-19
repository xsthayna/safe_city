import { Image, View } from "react-native";
import { Container, Title, Header, Img, Content, Form, Link } from "./style";
import { Images } from "../../Images";
import { Input, Button  } from "../../components";
import { ColorsTypes } from "../../types/ColorsTypes";

const Login = () => {
    return (
        <Container
            source={Images.background}
            resizeMode={'cover'}
        >
        <Header>
            <Img source={Images.horizontal_logo} />
        </Header>
            <Content>
                <Form>
                    <View>
                        <Title> Login </Title>
                    </View>
                    <Input
                        placeholder="E-mail"
                        width={350}
                    />
                    <Input                    
                        placeholder="Senha"
                        secureTextEntry={true}
                        width={350}
                    />
                    <Button fill category={ColorsTypes.WHITE} title="Realizar login" />
                    <Link> Esqueci minha senha </Link>
                </Form>
            </Content>
        </Container>
    )
}

export default Login;