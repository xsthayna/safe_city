import { Linking, TouchableWithoutFeedback } from "react-native";
import { Card, Cards, Container, ContainerIcon, Title, CardTitle } from './style';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from "../../constants/Colors";

const ExternalLinks = () => {

    function goToLink(link: string) {
        Linking.openURL(link);
    }

    return (
        <Container>
            <Title>
                Escolha uma das opções abaixo:
            </Title>
            <Cards>
                <TouchableWithoutFeedback onPress={() => goToLink("tel:190")}>
                    <Card>
                        <ContainerIcon>
                            <Icon name="phone" size={24} color="white" />
                        </ContainerIcon>
                        <CardTitle>
                            Atendimento de emergência
                        </CardTitle>
                        <Icon name="external-link" color={Colors.darkSecundary} size={22} />
                    </Card>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => goToLink("")}>
                    <Card>
                        <ContainerIcon>
                            <Icon name="globe" size={24} color="white" />
                        </ContainerIcon>
                        <CardTitle>
                            Web Denúncia
                        </CardTitle>
                        <Icon name="external-link" color={Colors.darkSecundary} size={22} />
                    </Card>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => goToLink("https://www.delegaciaeletronica.policiacivil.sp.gov.br/ssp-de-cidadao/home")}>
                    <Card>
                        <ContainerIcon>
                            <Icon name="file-text" size={24} color="white" />
                        </ContainerIcon>
                        <CardTitle>
                            Boletim de ocorrência online
                        </CardTitle>
                        <Icon name="external-link" color={Colors.darkSecundary} size={22} />
                    </Card>
                </TouchableWithoutFeedback>
            </Cards>
        </Container>
    )
}

export default ExternalLinks;