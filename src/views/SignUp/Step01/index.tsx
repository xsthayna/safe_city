import { Image, View } from "react-native";
import { Container, Title, Header, Img, Content, Form, Link, Description, Row, Items } from "../style";
import { Images } from "../../../Images";
import { Input, Button  } from "../../../components";
import { ColorsTypes } from "../../../types/ColorsTypes";
import Icon from 'react-native-vector-icons/Feather';
import { useState } from "react";
import { signUpTypes } from "../index";

interface Props {
    setStep: any
    data: signUpTypes
    setData: any
}


const Step01 = ({ setStep, data, setData }: Props) => {
    
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
                        onChangeText={(text: string) => setData({ ...data, name: text })}
                        width={'100%'}
                    />
                    <Input                    
                        placeholder="CPF"
                        onChangeText={(text: string) => setData({ ...data, cpf: text })}
                        width={'100%'}
                    />
                    <Input                    
                        placeholder="Data de nascimento"
                        width={'100%'}
                    />
                    <Input                    
                        placeholder="Estado"
                        onChangeText={(text: string) => setData({ ...data, country: text })}
                        width={'100%'}
                    />
                    <Input                    
                        placeholder="CEP"
                        onChangeText={(text: string) => setData({ ...data, cep: text })}
                        width={'100%'}
                    />
                    <Row>
                        <Input                    
                            placeholder="Endereço"
                            width={'60%'}
                        />
                        <Input                    
                            placeholder="Número"
                            width={'40%'}
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