import { Image, View } from "react-native";
import { Container, Title, Header, Img, Content, Items, Form, Link, Description } from "../style";
import { Images } from "../../../Images";
import { Input, Button  } from "../../../components";
import { ColorsTypes } from "../../../types/ColorsTypes";
import Icon from "react-native-vector-icons/Feather";
import BottomTabs from '../../../components/BottomTabs';

interface Props {
    setStep: any;
    navigation: any;
}


const Step02 = ({ setStep, navigation }: Props) => {
    
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
                            Agora escolha um nome de usuário para ser exibido no aplicativo e uma senha para realizar o login.
                        </Description>
                    </View>
                    <Input
                        placeholder="Nome de usuário"
                        width={350}
                    />
                    <Input                    
                        placeholder="Senha"
                        secureTextEntry={true}
                        width={350}
                    />
                    <Button fill category={ColorsTypes.WHITE} title="Finalizar cadastro" />
                </Form>
            </Content>
            <BottomTabs />
        </Container>
    )
}

export default Step02;