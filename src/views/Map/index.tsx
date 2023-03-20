import { Text, View } from "react-native";
import { Container , Img, Content, Title, Actions, Quantity, Card, Counter, Cards, Circle } from './style';
import { Images } from "../../Images";
import { Button } from "../../components";
import { ColorsTypes } from "../../types/ColorsTypes";

const Map = () => {
    return (
        <Container
            source={Images.background}
            resizeMode={'cover'}
        >
            <Content>
                <Title>
                    Essa região teve <Counter> 20 </Counter> ocorrências de crimes:
                </Title>
                <Cards>
                    <Card>
                        <Circle>
                            <Quantity> 60% </Quantity>
                        </Circle>
                        <Quantity> Assaltos </Quantity>
                    </Card>
                    <Card>
                        <Circle>
                            <Quantity> 60% </Quantity>
                        </Circle>
                        <Quantity> Assaltos </Quantity>
                    </Card>
                    <Card>
                        <Circle>
                            <Quantity> 60% </Quantity>
                        </Circle>
                        <Quantity> Assaltos </Quantity>
                    </Card>
                </Cards>
                <Actions>
                    <Button fill title="Adicionar ocorrência" />
                    <Button title="Alterar localização" category={ColorsTypes.NEUTRAL} fill />
                </Actions>
            </Content>
        </Container>
    )
}

export default Map;