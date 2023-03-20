import { Image } from "react-native";
import { Button } from "../../components";
import { Images } from "../../Images";
import { Container, Content, Description, Img, Title } from "./style";

const UnderConstruction = () => {
    return (
        <Container>
            <Content>
                <Img source={Images.building} />
                <Title> Oopss... </Title>
                <Description>
                    Essa tela ainda está em construção.
                </Description>
                <Button title="Voltar para a tela inicial" />
            </Content>
        </Container>
    )
}

export default UnderConstruction;