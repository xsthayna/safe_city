import { Image, View } from "react-native";
import { Container, Title, Header, Img, Content, Form, Link, Description, Row, Items } from "../style";
import { Images } from "../../../Images";
import { Input, Button  } from "../../../components";
import { ColorsTypes } from "../../../types/ColorsTypes";
import Icon from 'react-native-vector-icons/Feather';

interface Props {
    setStep: any
}

const Step01 = ({ setStep }: Props) => {
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
                            Preencha o formulário abaixo para iniciar a criação da sua conta.
                        </Description>
                    </View>
                    <Input
                        placeholder="Nome completo"
                        width={410}
                    />
                    <Row>
                        <Input                    
                            placeholder="CPF"
                            width={160}
                        />
                        <Input                    
                            placeholder="Data de nascimento"
                            width={250}
                        />
                    </Row>
                    <Input
                        placeholder="E-mail"
                        width={410}
                    />
                    <Row>
                        <Input                    
                            placeholder="Estado"
                            width={200}
                        />
                        <Input                    
                            placeholder="CEP"
                            width={210}
                        />
                    </Row>
                    <Row>
                        <Input                    
                            placeholder="Endereço"
                            width={270}
                        />
                        <Input                    
                            placeholder="Número"
                            width={140}
                        />
                    </Row>
                    <Button 
                        fill 
                        category={ColorsTypes.WHITE} 
                        title="Próximo" 
                        onPress={() => setStep(2)}
                    />
                </Form>
            </Content>
        </Container>
    )
}

export default Step01;